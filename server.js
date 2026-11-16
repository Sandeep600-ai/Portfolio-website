const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = 3000;
const PUBLIC_DIR = path.resolve(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  const host = req.headers.host || `localhost:${PORT}`;
  const parsedUrl = new URL(req.url, `http://${host}`);
  const pathname = parsedUrl.pathname;

  // CORS headers for all responses
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // 1. API: /api/jobs
  if (pathname === '/api/jobs') {
    const jobsFile = path.resolve(PUBLIC_DIR, 'data', 'jobs.json');
    if (!fs.existsSync(jobsFile)) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Jobs data not found' }));
      return;
    }

    try {
      const data = JSON.parse(fs.readFileSync(jobsFile, 'utf8'));
      const platform = parsedUrl.searchParams.get('platform');
      const q = (parsedUrl.searchParams.get('q') || '').toLowerCase().trim();
      const location = parsedUrl.searchParams.get('location');
      const type = parsedUrl.searchParams.get('type');

      let filtered = data.jobs || [];

      if (platform && platform !== 'all') {
        filtered = filtered.filter(j => (j.platform || '').toLowerCase() === platform.toLowerCase());
      }

      if (q) {
        filtered = filtered.filter(j =>
          (j.title || '').toLowerCase().includes(q) ||
          (j.company || '').toLowerCase().includes(q) ||
          (Array.isArray(j.skills) && j.skills.some(s => s.toLowerCase().includes(q))) ||
          (j.description || '').toLowerCase().includes(q)
        );
      }

      if (location && location !== 'All') {
        if (location.toLowerCase() === 'remote') {
          filtered = filtered.filter(j =>
            (j.location || '').toLowerCase().includes('remote') ||
            (j.type || '').toLowerCase().includes('remote')
          );
        } else {
          filtered = filtered.filter(j =>
            (j.location || '').toLowerCase().includes(location.toLowerCase())
          );
        }
      }

      if (type && type.toLowerCase() !== 'all') {
        if (type.toLowerCase() === 'remote') {
          filtered = filtered.filter(j =>
            (j.location || '').toLowerCase().includes('remote') ||
            (j.type || '').toLowerCase().includes('remote')
          );
        } else {
          filtered = filtered.filter(j =>
            (j.type || '').toLowerCase() === type.toLowerCase()
          );
        }
      }

      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      });
      res.end(JSON.stringify({
        lastUpdated: data.lastUpdated,
        total: filtered.length,
        totalInCatalog: (data.jobs || []).length,
        platformCounts: data.platforms,
        jobs: filtered
      }));
      return;
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to read jobs data', details: e.message }));
      return;
    }
  }

  // 2. API: /api/status
  if (pathname === '/api/status') {
    const jobsFile = path.resolve(PUBLIC_DIR, 'data', 'jobs.json');
    let info = { status: 'online', apifyEngine: 'connected', totalJobs: 0 };
    if (fs.existsSync(jobsFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(jobsFile, 'utf8'));
        info.lastUpdated = data.lastUpdated;
        info.totalJobs = (data.jobs || []).length;
        info.platforms = data.platforms;
      } catch (e) { }
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(info));
    return;
  }

  // 3. API: /api/news
  if (pathname === '/api/news') {
    const newsFile = path.resolve(PUBLIC_DIR, 'data', 'news.json');
    if (!fs.existsSync(newsFile)) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'News data not found' }));
      return;
    }

    try {
      const data = JSON.parse(fs.readFileSync(newsFile, 'utf8'));
      const category = (parsedUrl.searchParams.get('category') || 'all').toLowerCase();
      const articles = data.categories[category] || data.categories['all'] || [];

      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      });
      res.end(JSON.stringify({
        lastUpdated: data.lastUpdated,
        category: category,
        total: articles.length,
        articles: articles.slice(0, 8)
      }));
      return;
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to read news data', details: e.message }));
      return;
    }
  }

  // 4. Static File Serving
  let safePath = decodeURI(pathname).replace(/^\/+/, '');

  if (safePath === '' || safePath === '/') {
    safePath = 'index.html';
  } else if (safePath === 'jobs' || safePath === 'jobs/') {
    safePath = 'jobs/index.html';
  }

  let filePath = path.resolve(PUBLIC_DIR, safePath);

  // Security check: prevent directory traversal
  if (!filePath.toLowerCase().startsWith(PUBLIC_DIR.toLowerCase())) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      if (fs.existsSync(path.join(filePath, 'index.html'))) {
        filePath = path.join(filePath, 'index.html');
      } else if (fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html';
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }
    } else if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, {
        'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
        'Cache-Control': 'no-cache'
      });
      res.end(content);
    });
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Portfolio server running at http://localhost:${PORT}/`);
  console.log(`Job Market Command Center at http://localhost:${PORT}/jobs`);
  console.log(`API Jobs Endpoint at http://localhost:${PORT}/api/jobs`);
});
