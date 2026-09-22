const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';
const PUBLIC_DIR = path.resolve(__dirname, 'hostinger_dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.pdf': 'application/pdf'
};

function safePathFromUrl(urlPath) {
  let decoded;
  try {
    decoded = decodeURIComponent(urlPath.split('?')[0]);
  } catch {
    return null;
  }

  const normalized = path.posix.normalize(decoded).replace(/^\/+/, '');
  if (normalized.startsWith('..')) return null;
  return normalized;
}

function resolveRequestPath(urlPath) {
  const safePath = safePathFromUrl(urlPath);
  if (safePath === null) return null;

  const directPath = path.join(PUBLIC_DIR, safePath);
  const candidates = [];

  if (!safePath || safePath.endsWith('/')) {
    candidates.push(path.join(directPath, 'index.html'));
  } else {
    candidates.push(directPath);
    candidates.push(`${directPath}.html`);
    candidates.push(path.join(directPath, 'index.html'));
  }

  for (const candidate of candidates) {
    const resolved = path.resolve(candidate);
    if (!resolved.startsWith(PUBLIC_DIR + path.sep) && resolved !== PUBLIC_DIR) continue;
    try {
      if (fs.statSync(resolved).isFile()) return resolved;
    } catch {
      // Try next candidate.
    }
  }

  return null;
}

function sendFile(res, filePath, statusCode = 200) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const isImmutableNextAsset = filePath.includes(`${path.sep}_next${path.sep}`);

  res.writeHead(statusCode, {
    'Content-Type': contentType,
    'Cache-Control': isImmutableNextAsset
      ? 'public, max-age=31536000, immutable'
      : 'public, max-age=0, must-revalidate',
    'X-Content-Type-Options': 'nosniff'
  });

  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  if (!fs.existsSync(PUBLIC_DIR)) {
    res.writeHead(503, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Nirman.World build output is missing. Run npm run build before starting the server.');
    return;
  }

  const filePath = resolveRequestPath(req.url || '/');
  if (filePath) {
    sendFile(res, filePath);
    return;
  }

  const custom404 = path.join(PUBLIC_DIR, '404.html');
  if (fs.existsSync(custom404)) {
    sendFile(res, custom404, 404);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404 — Page not found');
});

server.listen(PORT, HOST, () => {
  console.log(`Nirman.World is serving ${PUBLIC_DIR}`);
  console.log(`Listening on http://${HOST}:${PORT}`);
});
