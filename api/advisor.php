<?php
/**
 * kittykat.tech — Main-site Advisor backend (self-contained, streaming).
 *
 * Lifted from retail/api/advisor.php (the working pattern) and adapted:
 *   - Origin allowlist for kittykat.tech (and www.kittykat.tech)
 *   - Knowledge directory: ./knowledge (sibling to this file)
 *   - Drop-doc audit: accepts multipart upload of .txt/.md/.pdf,
 *     extracts text and includes in the user message
 *   - Different fallback prompt
 *
 * SSE format (one event per line, terminated by \n\n):
 *   data: {"type":"start","model":"claude-sonnet-4-5"}
 *   data: {"type":"text","text":"Optimus pulls live..."}
 *   ...
 *   data: {"type":"done","fullText":"Optimus pulls live...\n<<<META>>>\n{...}"}
 *
 * The model is asked (in 00-base.md) to produce:
 *   <plain answer>
 *   <<<META>>>
 *   {"cited_pages":["/solutions/optimus"], "reasoning_summary":"..."}
 *
 * Frontend streams the answer above <<<META>>>, then on `done` parses the
 * meta block to populate cited-pages chips and reasoning summary.
 */

declare(strict_types=1);

// ─── Config ──────────────────────────────────────────────────────────────────
const KKT_ADVISOR_DEFAULT_MODEL      = 'claude-sonnet-4-5';
const KKT_ADVISOR_MAX_TOKENS         = 1500;
const KKT_ADVISOR_TIMEOUT_SECONDS    = 60;
const KKT_ADVISOR_MAX_MESSAGE_LENGTH = 4000;
const KKT_ADVISOR_MAX_DOC_BYTES      = 1500000;     // 1.5 MB
const KKT_ADVISOR_RATE_LIMIT         = 12;
const KKT_ADVISOR_RATE_WINDOW        = 60;
const KKT_ADVISOR_API_URL            = 'https://api.anthropic.com/v1/messages';

const KKT_ADVISOR_FALLBACK_PROMPT = <<<'PROMPT'
You are the KKT advisor on kittykat.tech. Answer questions about Kitty Kat
Technologies (the firm) and the retail playbook at retail.kittykat.tech.

Voice: warm senior partner. Direct, anti-hype, business-first, but human.
Plain prose. No markdown.

Output format:
[plain-text answer]
<<<META>>>
{"cited_pages": [], "reasoning_summary": ""}
PROMPT;


// ─── CORS / OPTIONS / method gate ─────────────────────────────────────────────
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigins = [
    'https://kittykat.tech',
    'https://www.kittykat.tech',
];
$originAllowed = in_array($origin, $allowedOrigins, true)
    || (preg_match('#^http://(localhost|127\.0\.0\.1)(:\d+)?$#', $origin) === 1);

if ($originAllowed) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 600');
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Content-Type: application/json');
    respond_error_json(405, 'method_not_allowed', 'Only POST is allowed.');
}

// ─── Rate limit (per-IP, file-based sliding window) ──────────────────────────
rate_limit_check();

// ─── Parse + validate request body (JSON or multipart) ───────────────────────
$message    = '';
$docText    = '';
$docName    = '';

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

if (str_starts_with($contentType, 'multipart/form-data')) {
    $message = isset($_POST['message']) && is_string($_POST['message']) ? trim($_POST['message']) : '';
    if (isset($_FILES['doc']) && is_array($_FILES['doc'])) {
        $f = $_FILES['doc'];
        if (($f['error'] ?? UPLOAD_ERR_NO_FILE) === UPLOAD_ERR_OK
            && is_uploaded_file($f['tmp_name'])
            && $f['size'] <= KKT_ADVISOR_MAX_DOC_BYTES) {
            $docName = is_string($f['name']) ? basename($f['name']) : '';
            $docText = extract_doc_text($f['tmp_name'], $docName);
        }
    }
} else {
    $rawBody = file_get_contents('php://input');
    $body    = json_decode((string)$rawBody, true);
    if (!is_array($body)) {
        header('Content-Type: application/json');
        respond_error_json(400, 'invalid_json', 'Request body must be valid JSON.');
    }
    $message = isset($body['message']) && is_string($body['message']) ? trim($body['message']) : '';
}

if ($message === '' && $docText === '') {
    header('Content-Type: application/json');
    respond_error_json(400, 'empty_message', 'A question or attached document is required.');
}
if (mb_strlen($message) > KKT_ADVISOR_MAX_MESSAGE_LENGTH) {
    header('Content-Type: application/json');
    respond_error_json(400, 'message_too_long',
        'Message must be ' . KKT_ADVISOR_MAX_MESSAGE_LENGTH . ' characters or fewer.');
}

// ─── Switch into SSE streaming mode ──────────────────────────────────────────
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache, no-store, must-revalidate');
header('X-Accel-Buffering: no');
@ini_set('output_buffering',     'off');
@ini_set('zlib.output_compression', 'off');
@ini_set('implicit_flush',       '1');
while (ob_get_level() > 0) @ob_end_flush();
ob_implicit_flush(true);
@set_time_limit(0);
@ignore_user_abort(false);

sse_emit('start', ['model' => load_model()]);

$apiKey = load_env('ANTHROPIC_API_KEY');
if (!$apiKey) {
    sse_emit('text', ['text' => "The advisor backend is set up but the API key isn't configured yet on the server. Add ANTHROPIC_API_KEY to /htdocs/.env and I'll be live."]);
    sse_emit('done', ['fullText' => '']);
    exit;
}

try {
    $systemPrompt = load_system_prompt();
    $userMsg      = build_user_message($message, $docText, $docName);

    $accumulated = '';
    stream_claude($apiKey, $systemPrompt, $userMsg, function(string $delta) use (&$accumulated) {
        $accumulated .= $delta;
        $metaPos = strpos($accumulated, '<<<META>>>');
        if ($metaPos === false) {
            sse_emit('text', ['text' => $delta]);
        } else {
            $deltaLen   = strlen($delta);
            $beforeMeta = strlen($accumulated) - $metaPos;
            if ($beforeMeta < $deltaLen) {
                $tail = substr($delta, 0, $deltaLen - $beforeMeta);
                if ($tail !== '') sse_emit('text', ['text' => $tail]);
            }
        }
    });

    sse_emit('done', ['fullText' => $accumulated]);

} catch (\Throwable $e) {
    error_log('kkt-advisor stream error: ' . $e->getMessage());
    sse_emit('text', ['text' => "\n\n" . friendly_error($e->getMessage())]);
    sse_emit('done', ['fullText' => '']);
}


// ═══════════════════════════════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════════════════════════════

function sse_emit(string $type, array $payload): void
{
    $payload['type'] = $type;
    echo 'data: ' . json_encode($payload, JSON_UNESCAPED_UNICODE) . "\n\n";
    @flush();
}

function stream_claude(string $apiKey, string $system, string $user, callable $onText): void
{
    $payload = json_encode([
        'model'      => load_model(),
        'max_tokens' => KKT_ADVISOR_MAX_TOKENS,
        'stream'     => true,
        'system'     => [
            ['type' => 'text', 'text' => $system, 'cache_control' => ['type' => 'ephemeral']],
        ],
        'messages'   => [
            ['role' => 'user', 'content' => $user],
        ],
    ], JSON_UNESCAPED_UNICODE);

    $sseBuffer = '';
    $apiError  = null;
    $apiHttp   = 0;

    $ch = curl_init(KKT_ADVISOR_API_URL);
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $payload,
        CURLOPT_RETURNTRANSFER => false,
        CURLOPT_TIMEOUT        => KKT_ADVISOR_TIMEOUT_SECONDS,
        CURLOPT_HTTPHEADER     => [
            'Content-Type: application/json',
            'x-api-key: ' . $apiKey,
            'anthropic-version: 2023-06-01',
            'anthropic-zdr: true',
            'Accept: text/event-stream',
        ],
        CURLOPT_WRITEFUNCTION  => function($ch, string $chunk) use (&$sseBuffer, &$apiError, &$apiHttp, $onText) {
            if ($apiHttp === 0) {
                $apiHttp = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
            }
            if ($apiHttp >= 400) {
                $apiError = ($apiError ?? '') . $chunk;
                return strlen($chunk);
            }

            $sseBuffer .= $chunk;
            while (($pos = strpos($sseBuffer, "\n\n")) !== false) {
                $event = substr($sseBuffer, 0, $pos);
                $sseBuffer = substr($sseBuffer, $pos + 2);

                $dataLine = null;
                foreach (preg_split('/\r?\n/', $event) as $line) {
                    if (strncmp($line, 'data:', 5) === 0) {
                        $dataLine = ltrim(substr($line, 5));
                        break;
                    }
                }
                if ($dataLine === null) continue;

                $parsed = json_decode($dataLine, true);
                if (!is_array($parsed)) continue;

                if (($parsed['type'] ?? '') === 'content_block_delta'
                    && (($parsed['delta']['type'] ?? '') === 'text_delta')
                    && isset($parsed['delta']['text']) && is_string($parsed['delta']['text'])) {
                    $onText($parsed['delta']['text']);
                }
            }

            return strlen($chunk);
        },
    ]);

    $ok      = curl_exec($ch);
    $curlErr = curl_error($ch);
    curl_close($ch);

    if ($apiError !== null) {
        $msg = "HTTP {$apiHttp}: " . substr(trim($apiError), 0, 500);
        throw new \RuntimeException("Claude API {$msg}");
    }
    if ($ok === false || $curlErr !== '') {
        throw new \RuntimeException('Claude API curl error: ' . $curlErr);
    }
}

function load_model(): string
{
    $override = load_env('CLAUDE_MODEL');
    return $override !== '' ? $override : KKT_ADVISOR_DEFAULT_MODEL;
}

function load_env(string $key): string
{
    // .env lives one directory up from /api (i.e. in htdocs root)
    $envPath = __DIR__ . '/../.env';
    if (!is_readable($envPath)) {
        return '';
    }
    $needle = $key . '=';
    $lines = @file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [];
    foreach ($lines as $line) {
        if (str_starts_with(trim($line), '#')) continue;
        if (str_starts_with($line, $needle)) {
            return trim(substr($line, strlen($needle)));
        }
    }
    return '';
}

function load_system_prompt(): string
{
    $dir = __DIR__ . '/knowledge';
    if (!is_dir($dir)) {
        return KKT_ADVISOR_FALLBACK_PROMPT;
    }
    $files = glob($dir . '/*.md') ?: [];
    sort($files);
    $parts = [];
    foreach ($files as $f) {
        $content = @file_get_contents($f);
        if ($content !== false && trim($content) !== '') {
            $parts[] = trim($content);
        }
    }
    if (!$parts) {
        return KKT_ADVISOR_FALLBACK_PROMPT;
    }
    return implode("\n\n---\n\n", $parts);
}

function build_user_message(string $message, string $docText, string $docName): string
{
    $parts = [];
    if ($docText !== '') {
        $label = $docName !== '' ? $docName : 'attached document';
        $parts[] = "The user attached a document for audit ({$label}). Full extracted text follows.\n\n--- BEGIN DOCUMENT ---\n{$docText}\n--- END DOCUMENT ---\n";
    }
    if ($message !== '') {
        $parts[] = 'Question: ' . $message;
    } elseif ($docText !== '') {
        $parts[] = 'Question: Audit the attached document. What is its main pitch, what is weak or unsupported, and where would KKT push back?';
    }
    return implode("\n\n", $parts);
}

/**
 * Extract plain text from an uploaded file. Supports .txt/.md (read raw)
 * and .pdf (via pdftotext binary if present). .docx and other types
 * return empty (caller surfaces the file name to the model anyway).
 */
function extract_doc_text(string $tmpPath, string $name): string
{
    $lower = strtolower($name);
    if (str_ends_with($lower, '.txt') || str_ends_with($lower, '.md')) {
        $raw = @file_get_contents($tmpPath);
        return $raw === false ? '' : substr($raw, 0, 80000);
    }
    if (str_ends_with($lower, '.pdf')) {
        // Try pdftotext (poppler-utils). On zone.eu shared hosting it's
        // typically available; if not, the user gets a graceful empty doc
        // and the model can ask them to paste the text.
        $bin = '/usr/bin/pdftotext';
        if (!is_executable($bin)) $bin = 'pdftotext';
        $cmd = escapeshellcmd($bin) . ' -layout -enc UTF-8 ' . escapeshellarg($tmpPath) . ' -';
        $output = @shell_exec($cmd . ' 2>/dev/null');
        if (is_string($output) && trim($output) !== '') {
            return substr($output, 0, 80000);
        }
    }
    return '';
}

function rate_limit_check(): void
{
    $ip   = client_ip();
    $now  = time();
    $key  = sha1($ip);
    $path = sys_get_temp_dir() . '/kkt_ratelimit_main-advisor.json';

    $fp = @fopen($path, 'c+');
    if (!$fp) {
        error_log('kkt-advisor: rate limiter cannot open file — failing open');
        return;
    }

    try {
        if (!flock($fp, LOCK_EX)) return;

        $raw  = stream_get_contents($fp);
        $data = ($raw === '' || $raw === false) ? [] : (json_decode($raw, true) ?: []);

        $cutoff = $now - KKT_ADVISOR_RATE_WINDOW;
        foreach ($data as $k => $stamps) {
            $kept = array_values(array_filter($stamps, fn($t) => $t >= $cutoff));
            if ($kept) { $data[$k] = $kept; } else { unset($data[$k]); }
        }

        $stamps = $data[$key] ?? [];
        if (count($stamps) >= KKT_ADVISOR_RATE_LIMIT) {
            $oldest     = $stamps[0] ?? $now;
            $retryAfter = max(1, ($oldest + KKT_ADVISOR_RATE_WINDOW) - $now);

            ftruncate($fp, 0); rewind($fp);
            fwrite($fp, json_encode($data));
            fflush($fp);
            flock($fp, LOCK_UN);
            fclose($fp);

            http_response_code(429);
            header('Content-Type: application/json');
            header("Retry-After: {$retryAfter}");
            echo json_encode([
                'error'       => 'rate_limited',
                'message'     => "Too many requests. Limit: " . KKT_ADVISOR_RATE_LIMIT
                                 . " per " . KKT_ADVISOR_RATE_WINDOW . "s.",
                'retry_after' => $retryAfter,
            ]);
            exit;
        }

        $stamps[]   = $now;
        $data[$key] = $stamps;

        ftruncate($fp, 0); rewind($fp);
        fwrite($fp, json_encode($data));
        fflush($fp);

    } finally {
        if (is_resource($fp)) {
            flock($fp, LOCK_UN);
            fclose($fp);
        }
    }
}

function client_ip(): string
{
    $xff = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '';
    if ($xff) {
        $first = trim(explode(',', $xff)[0]);
        if ($first) return $first;
    }
    return $_SERVER['HTTP_X_REAL_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
}

function friendly_error(string $rawMessage): string
{
    $lower = mb_strtolower($rawMessage);
    if (str_contains($lower, 'credit balance') || str_contains($lower, 'insufficient')) {
        return "Advisor is temporarily unavailable. Try again later or write hello@kittykat.tech.";
    }
    if (str_contains($lower, 'http 401') || str_contains($lower, 'unauthorized') || str_contains($lower, 'invalid api key')) {
        return "Advisor backend is misconfigured (auth). Maintainer's been pinged — try again later.";
    }
    if (str_contains($lower, 'http 429') || str_contains($lower, 'rate limit')) {
        return "Lot of traffic right now — wait a few seconds and try again.";
    }
    if (preg_match('/http 5\d\d/', $lower) || str_contains($lower, 'overloaded')) {
        return "Claude is overloaded right now — try again shortly.";
    }
    if (str_contains($lower, 'curl error') || str_contains($lower, 'connection') || str_contains($lower, 'timeout')) {
        return "Connection issue reaching the advisor. Try again.";
    }
    return "Something went wrong on my end — give it another go.";
}

function respond_error_json(int $statusCode, string $errorCode, string $message): void
{
    http_response_code($statusCode);
    echo json_encode([
        'error'   => $errorCode,
        'message' => $message,
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
