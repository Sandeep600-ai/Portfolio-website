const https = require('https');

module.exports = (req, res) => {
  const { id } = req.query;
  if (!id || !/^[a-zA-Z0-9_-]{20,60}$/.test(id)) {
    return res.status(400).json({ error: 'Invalid or missing video file ID' });
  }

  const driveUrl = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t&authuser=0`;
  const driveHeaders = {};
  if (req.headers.range) driveHeaders['Range'] = req.headers.range;
  if (req.headers['user-agent']) driveHeaders['User-Agent'] = req.headers['user-agent'];

  const driveReq = https.request(driveUrl, { method: req.method, headers: driveHeaders }, (driveRes) => {
    const headers = {
      'Content-Type': driveRes.headers['content-type'] || 'video/mp4',
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*'
    };
    if (driveRes.headers['content-range']) headers['Content-Range'] = driveRes.headers['content-range'];
    if (driveRes.headers['content-length']) headers['Content-Length'] = driveRes.headers['content-length'];

    res.writeHead(driveRes.statusCode, headers);
    driveRes.pipe(res);
  });

  driveReq.on('error', (err) => {
    console.error('[Vercel Video Proxy Error]:', err.message);
    if (!res.headersSent) res.status(502).json({ error: 'Failed to stream video' });
  });

  req.on('close', () => driveReq.destroy());
  driveReq.end();
};
