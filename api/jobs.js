const fs = require('fs');
const path = require('path');

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const platform = req.query.platform;
  const q = (req.query.q || '').toLowerCase().trim();
  const location = req.query.location;
  const type = req.query.type;

  try {
    const dataPath = path.resolve(process.cwd(), 'data', 'jobs.json');
    if (!fs.existsSync(dataPath)) {
      res.status(404).json({ error: 'Jobs data not found' });
      return;
    }

    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
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

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1800');
    res.status(200).json({
      lastUpdated: data.lastUpdated,
      total: filtered.length,
      totalInCatalog: (data.jobs || []).length,
      platformCounts: data.platforms,
      jobs: filtered
    });
  } catch (err) {
    console.error('Jobs handler error:', err.message);
    res.status(500).json({ error: 'Internal server error processing jobs' });
  }
};
