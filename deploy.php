<?php
/**
 * Self-deploy script for kittykat.tech main site.
 *
 * Pull-from-GitHub on demand. Mirrors the retail.kittykat.tech pattern.
 *
 * Modes:
 *   ?key=<DEPLOY_KEY>&mode=soft   — git stash + pull (preserves any local changes)
 *   ?key=<DEPLOY_KEY>&mode=hard   — git fetch + reset --hard + pull (default)
 *   ?key=<DEPLOY_KEY>&mode=status — git status, no changes
 *
 * Setup on a fresh server:
 *   1. Clone the `production` branch of joinreachout/kkt-web into htdocs/.
 *   2. Create a .env file at the repo root with: DEPLOY_KEY=<long random string>
 *   3. .env is blocked by .htaccess from web access.
 *   4. Visit https://kittykat.tech/update.html to push updates.
 */

// ── Auth ─────────────────────────────────────────────────────────────────────
$DEPLOY_KEY = getenv('DEPLOY_KEY') ?: (file_exists(__DIR__ . '/.env') ? trim(array_reduce(
    file(__DIR__ . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES),
    fn($carry, $line) => str_starts_with($line, 'DEPLOY_KEY=') ? substr($line, 11) : $carry,
    ''
)) : '');

if (empty($DEPLOY_KEY)) {
    header('HTTP/1.1 500 Internal Server Error');
    die('DEPLOY_KEY not configured');
}

if (!isset($_GET['key']) || !hash_equals($DEPLOY_KEY, $_GET['key'])) {
    header('HTTP/1.1 403 Forbidden');
    die('Access denied');
}

header('Content-Type: text/plain');

// ── Mode ─────────────────────────────────────────────────────────────────────
$mode = $_GET['mode'] ?? 'hard';
if (!in_array($mode, ['soft', 'hard', 'status'], true)) {
    die("Unknown mode: $mode. Use soft, hard, or status.");
}

$projectDir = __DIR__;
chdir($projectDir);

// Branch-aware deploy. The folder is its own git checkout — production is the
// default for this site.
$currentBranch = trim((string)shell_exec('git rev-parse --abbrev-ref HEAD 2>/dev/null'));
if ($currentBranch === '' || $currentBranch === 'HEAD') {
    $currentBranch = 'production';
}

$labels = [
    'soft'   => 'SOFT DEPLOY (stash + pull)',
    'hard'   => 'HARD DEPLOY (reset + pull)',
    'status' => 'STATUS CHECK',
];
echo "=== {$labels[$mode]} ===\n";
echo "Directory: $projectDir\n";
echo "Branch:    $currentBranch\n\n";

// ── Execute ──────────────────────────────────────────────────────────────────
if ($mode === 'status') {
    echo shell_exec('git status 2>&1') . "\n";
    echo shell_exec('git log --oneline -5 2>&1') . "\n";

} elseif ($mode === 'soft') {
    echo "Stashing local changes...\n";
    echo shell_exec('git stash 2>&1') . "\n";

    echo "Pulling latest code from origin/$currentBranch...\n";
    echo shell_exec("git pull origin " . escapeshellarg($currentBranch) . " 2>&1") . "\n";

} elseif ($mode === 'hard') {
    echo "Fetching origin...\n";
    echo shell_exec('git fetch origin 2>&1') . "\n";

    echo "Hard reset to origin/$currentBranch...\n";
    echo shell_exec("git reset --hard origin/" . escapeshellarg($currentBranch) . " 2>&1") . "\n";

    echo "Pulling latest code...\n";
    echo shell_exec("git pull origin " . escapeshellarg($currentBranch) . " 2>&1") . "\n";
}

// ── Post-deploy checks ──────────────────────────────────────────────────────
if ($mode !== 'status') {
    echo "\n--- Post-deploy ---\n";

    // Smoke check the load-bearing files. Astro emits index.html at root and
    // hashed assets under /assets/. If index.html disappears, the build is
    // broken — surface that.
    foreach (['index.html', 'not-for-you/index.html'] as $f) {
        echo file_exists("{$projectDir}/{$f}") ? "{$f}: OK\n" : "{$f}: MISSING\n";
    }

    // Write version.json so the site can show what's deployed. The frontend
    // VersionBadge fetches this on load and shows commit short-hash + tooltip.
    $commit     = trim((string)shell_exec('git rev-parse HEAD 2>/dev/null'));
    $short      = trim((string)shell_exec('git rev-parse --short HEAD 2>/dev/null'));
    $message    = trim((string)shell_exec('git log -1 --pretty=%s 2>/dev/null'));
    $authoredAt = trim((string)shell_exec('git log -1 --pretty=%cI 2>/dev/null'));
    $payload = [
        'commit'     => $commit,
        'short'      => $short,
        'branch'     => $currentBranch,
        'message'    => $message,
        'authoredAt' => $authoredAt,
        'deployedAt' => date('c'),
    ];
    if (file_put_contents(
        $projectDir . '/version.json',
        json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)
    ) !== false) {
        echo "version.json: written ({$short})\n";
    } else {
        echo "version.json: WRITE FAILED\n";
    }

    if (function_exists('opcache_reset')) {
        opcache_reset();
        echo "Opcache: cleared\n";
    }
}

echo "\nDone at " . date('Y-m-d H:i:s') . "\n";
