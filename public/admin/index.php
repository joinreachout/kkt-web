<?php
/**
 * KKT Insights admin — a tiny password-protected form to publish blog posts.
 *
 * Posts a Markdown file to src/content/insights/<slug>.md in the GitHub repo
 * (joinreachout/kkt-web) via the GitHub API; the push triggers the normal
 * build & deploy, so the post appears on /insights in ~1–2 minutes.
 *
 * One-time server setup (in /htdocs/.env, same file advisor.php reads — NOT in
 * the repo):
 *   ADMIN_PASSWORD=your-chosen-password
 *   GITHUB_TOKEN=github_pat_xxx   (fine-grained PAT, repo joinreachout/kkt-web,
 *                                  permission: Contents → Read and write)
 *
 * The body field accepts Markdown and raw HTML — paste a LinkedIn "Embed this
 * post" <iframe> directly and it renders on the post page.
 */

declare(strict_types=1);
session_start();

const REPO = 'joinreachout/kkt-web';
const POST_DIR = 'src/content/insights';
const DEFAULT_BRANCH = 'main';

// ── env (reads /htdocs/.env, one dir up from /admin) ────────────────────────
function load_env(string $key): string {
    $envPath = __DIR__ . '/../.env';
    if (!is_readable($envPath)) return '';
    foreach (file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        if (strncmp($line, $key . '=', strlen($key) + 1) === 0) {
            return trim(substr($line, strlen($key) + 1), " \t\"'");
        }
    }
    return '';
}

$ADMIN_PASSWORD = load_env('ADMIN_PASSWORD');
$GITHUB_TOKEN   = load_env('GITHUB_TOKEN');

// ── auth ────────────────────────────────────────────────────────────────────
if (isset($_GET['logout'])) { $_SESSION = []; session_destroy(); header('Location: ./'); exit; }

if (empty($_SESSION['csrf'])) $_SESSION['csrf'] = bin2hex(random_bytes(16));
$csrf = $_SESSION['csrf'];

$loginError = '';
if (($_POST['action'] ?? '') === 'login') {
    if ($ADMIN_PASSWORD === '') {
        $loginError = 'Server not configured: add ADMIN_PASSWORD to /htdocs/.env.';
    } elseif (hash_equals($ADMIN_PASSWORD, (string)($_POST['password'] ?? ''))) {
        $_SESSION['auth'] = true;
        header('Location: ./'); exit;
    } else {
        $loginError = 'Wrong password.';
    }
}
$authed = !empty($_SESSION['auth']);

// ── helpers ─────────────────────────────────────────────────────────────────
function e(string $s): string { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); }

function slugify(string $s): string {
    $s = strtolower(trim($s));
    $s = preg_replace('/[^a-z0-9]+/u', '-', $s) ?? '';
    return trim($s, '-') ?: 'post';
}

function yaml_str(string $s): string {
    return '"' . str_replace(['\\', '"'], ['\\\\', '\\"'], $s) . '"';
}

function gh_request(string $method, string $url, string $token, ?array $body = null): array {
    $ch = curl_init($url);
    $headers = [
        'Authorization: Bearer ' . $token,
        'Accept: application/vnd.github+json',
        'X-GitHub-Api-Version: 2022-11-28',
        'User-Agent: kkt-insights-admin',
    ];
    curl_setopt_array($ch, [
        CURLOPT_CUSTOMREQUEST => $method,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_TIMEOUT => 30,
    ]);
    if ($body !== null) curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($body));
    $resp = curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $err  = curl_error($ch);
    curl_close($ch);
    return ['code' => $code, 'body' => $resp ? json_decode($resp, true) : null, 'err' => $err];
}

// ── publish ─────────────────────────────────────────────────────────────────
$publishOk = '';
$publishErr = '';
if ($authed && ($_POST['action'] ?? '') === 'publish') {
    if (!hash_equals($csrf, (string)($_POST['csrf'] ?? ''))) {
        $publishErr = 'Session expired — reload and try again.';
    } elseif ($GITHUB_TOKEN === '') {
        $publishErr = 'Server not configured: add GITHUB_TOKEN to /htdocs/.env.';
    } else {
        $title  = trim((string)($_POST['title'] ?? ''));
        $author = trim((string)($_POST['author'] ?? ''));
        $date   = trim((string)($_POST['publishedAt'] ?? ''));
        $summary= trim((string)($_POST['summary'] ?? ''));
        $cover  = trim((string)($_POST['cover'] ?? ''));
        $bodyMd = (string)($_POST['body'] ?? '');
        $draft  = isset($_POST['draft']) ? 'true' : 'false';

        if ($title === '' || $author === '' || !preg_match('/^\d{4}-\d{2}-\d{2}$/', $date)) {
            $publishErr = 'Title, author and a valid date (YYYY-MM-DD) are required.';
        } else {
            $ym = substr($date, 0, 7);
            $slug = $ym . '-' . slugify($title);
            $path = POST_DIR . '/' . $slug . '.md';

            $front = "---\n"
                . 'title: ' . yaml_str($title) . "\n"
                . ($summary !== '' ? 'summary: ' . yaml_str($summary) . "\n" : '')
                . ($cover !== '' ? 'cover: ' . yaml_str($cover) . "\n" : '')
                . 'author: ' . yaml_str($author) . "\n"
                . 'publishedAt: ' . yaml_str($date) . "\n"
                . 'draft: ' . $draft . "\n"
                . "---\n\n";
            $content = $front . rtrim($bodyMd) . "\n";

            // Does the file already exist? (need its sha to update)
            $url = 'https://api.github.com/repos/' . REPO . '/contents/' . rawurlencode($path);
            $url = str_replace('%2F', '/', $url);
            $existing = gh_request('GET', $url . '?ref=' . DEFAULT_BRANCH, $GITHUB_TOKEN);
            $sha = ($existing['code'] === 200 && isset($existing['body']['sha'])) ? $existing['body']['sha'] : null;

            $payload = [
                'message' => 'post(insights): ' . $title,
                'content' => base64_encode($content),
                'branch'  => DEFAULT_BRANCH,
            ];
            if ($sha) $payload['sha'] = $sha;

            $res = gh_request('PUT', $url, $GITHUB_TOKEN, $payload);
            if ($res['code'] === 200 || $res['code'] === 201) {
                $publishOk = ($sha ? 'Updated' : 'Published') . ' "' . $title . '". Live on /insights in ~1–2 min.';
                $_SESSION['csrf'] = bin2hex(random_bytes(16));
                $csrf = $_SESSION['csrf'];
            } else {
                $msg = $res['body']['message'] ?? $res['err'] ?? 'unknown error';
                $publishErr = 'GitHub error (' . $res['code'] . '): ' . $msg;
            }
        }
    }
}

$today = date('Y-m-d');
?><!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Insights admin — KKT</title>
<style>
  :root { --orange:#FF6A00; --ink:#1D1D1F; --muted:#6E6E73; --border:#E3E3E6; --bg:#F5F5F7; }
  * { box-sizing:border-box; }
  body { margin:0; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; color:var(--ink); background:var(--bg); }
  .wrap { max-width:760px; margin:0 auto; padding:40px 20px 80px; }
  h1 { font-size:24px; margin:0 0 4px; }
  .sub { color:var(--muted); font-size:14px; margin:0 0 28px; }
  form { background:#fff; border:1px solid var(--border); border-radius:12px; padding:24px; }
  label { display:block; font-size:13px; font-weight:600; margin:16px 0 6px; }
  label:first-child { margin-top:0; }
  input[type=text], input[type=date], input[type=password], textarea, input:not([type]) {
    width:100%; padding:10px 12px; font-size:14px; font-family:inherit;
    border:1px solid var(--border); border-radius:8px; background:#fff; color:var(--ink);
  }
  textarea { min-height:240px; resize:vertical; font-family:ui-monospace,Menlo,monospace; font-size:13px; line-height:1.5; }
  .hint { font-size:12px; color:var(--muted); margin:5px 0 0; }
  .row { display:flex; gap:14px; } .row > div { flex:1; }
  .check { display:flex; align-items:center; gap:8px; margin-top:18px; font-size:14px; }
  .check input { width:auto; }
  button { margin-top:22px; background:var(--orange); color:#fff; border:0; border-radius:999px;
    padding:12px 26px; font-size:14px; font-weight:600; cursor:pointer; }
  button:hover { opacity:.92; }
  .msg { padding:12px 14px; border-radius:8px; font-size:14px; margin-bottom:18px; }
  .ok { background:#E8F7EE; color:#176B3A; border:1px solid #B7E4C7; }
  .err { background:#FDECEA; color:#A4291B; border:1px solid #F5C6C0; }
  .top { display:flex; justify-content:space-between; align-items:baseline; }
  .top a { font-size:13px; color:var(--muted); text-decoration:none; }
  code { background:var(--bg); padding:1px 5px; border-radius:4px; font-size:12px; }
</style>
</head>
<body>
<div class="wrap">
<?php if (!$authed): ?>
  <h1>Insights admin</h1>
  <p class="sub">Sign in to publish a post.</p>
  <?php if ($loginError): ?><div class="msg err"><?= e($loginError) ?></div><?php endif; ?>
  <form method="post">
    <input type="hidden" name="action" value="login">
    <label>Password</label>
    <input type="password" name="password" autofocus required>
    <button type="submit">Sign in</button>
  </form>
<?php else: ?>
  <div class="top"><h1>New post</h1><a href="?logout=1">Sign out</a></div>
  <p class="sub">Publishes to <code>kittykat.tech/insights</code> via GitHub. Live in ~1–2 min after publishing.</p>
  <?php if ($publishOk): ?><div class="msg ok"><?= e($publishOk) ?></div><?php endif; ?>
  <?php if ($publishErr): ?><div class="msg err"><?= e($publishErr) ?></div><?php endif; ?>
  <form method="post">
    <input type="hidden" name="action" value="publish">
    <input type="hidden" name="csrf" value="<?= e($csrf) ?>">
    <label>Title</label>
    <input type="text" name="title" required value="<?= e($_POST['title'] ?? '') ?>">
    <div class="row">
      <div>
        <label>Author</label>
        <input type="text" name="author" required placeholder="e.g. George Shevardnadze" value="<?= e($_POST['author'] ?? '') ?>">
      </div>
      <div>
        <label>Published date</label>
        <input type="date" name="publishedAt" required value="<?= e($_POST['publishedAt'] ?? $today) ?>">
      </div>
    </div>
    <label>Summary</label>
    <input type="text" name="summary" placeholder="One or two sentences (list + meta description)" value="<?= e($_POST['summary'] ?? '') ?>">
    <label>Cover image URL <span style="font-weight:400;color:var(--muted)">(optional — shown on the blog list &amp; social preview)</span></label>
    <input type="text" name="cover" placeholder="https://… or /cases/your-image.jpg" value="<?= e($_POST['cover'] ?? '') ?>">
    <label>Body</label>
    <textarea name="body" placeholder="Markdown or raw HTML. Paste a LinkedIn 'Embed this post' &lt;iframe&gt; here to embed a post."><?= e($_POST['body'] ?? '') ?></textarea>
    <p class="hint">Markdown + raw HTML. For a LinkedIn post: open the post on LinkedIn → ··· → Embed this post → copy the <code>&lt;iframe&gt;</code> → paste it here.</p>
    <label class="check"><input type="checkbox" name="draft"> Save as draft (hidden from the live site)</label>
    <button type="submit">Publish</button>
  </form>
<?php endif; ?>
</div>
</body>
</html>
