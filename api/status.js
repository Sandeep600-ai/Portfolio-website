const fs = require('fs');
const path = require('path');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const jobsPath = path.resolve(process.cwd(), 'data', 'jobs.json');
  let info = {
    status: 'online',
    engine: 'vercel-serverless',
    hasTavilyKey: !!process.env.TAVILY_API_KEY,
    hasApifyToken: !!process.env.APIFY_TOKEN,
    totalJobs: 0
  };

  try {
    if (fs.existsSync(jobsPath)) {
      const data = JSON.parse(fs.readFileSync(jobsPath, 'utf8'));
      info.lastUpdated = data.lastUpdated;
      info.totalJobs = (data.jobs || []).length;
      info.platforms = data.platforms;
    }
  } catch (e) { }

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(info);
};
