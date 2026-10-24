// Node.js server for Plesk (Phusion Passenger). Serves the Vite build in dist/
// and falls back to index.html so React Router routes work on refresh.
const http = require('http');
const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
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
};

function send(res, file, cache) {
  res.writeHead(200, {
    'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': cache,
  });
  fs.createReadStream(file).pipe(res);
}

http
  .createServer((req, res) => {
    let urlPath;
    try {
      urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    } catch {
      res.writeHead(400).end('Bad request');
      return;
    }

    const file = path.join(DIST, path.normalize(urlPath));
    if (!file.startsWith(DIST)) {
      res.writeHead(403).end('Forbidden');
      return;
    }

    fs.stat(file, (err, stat) => {
      if (!err && stat.isFile()) {
        // Vite fingerprints files in /assets, so they can be cached forever
        const cache = urlPath.startsWith('/assets/')
          ? 'public, max-age=31536000, immutable'
          : 'public, max-age=86400';
        send(res, file, cache);
      } else {
        send(res, path.join(DIST, 'index.html'), 'no-cache');
      }
    });
  })
  .listen(PORT, () => console.log(`Portfolio running on port ${PORT}`));
