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

  const category = (req.query.category || 'all').toLowerCase();
  const apiKey = process.env.TAVILY_API_KEY;

  // 1. If Tavily API Key is configured in Vercel Environment Variables, fetch live news
  if (apiKey) {
    try {
      const topicMap = {
        'all': 'latest artificial intelligence frontier models autonomous agents breakthroughs 2026',
        'ai-tools': 'artificial intelligence new AI tools announcements software releases 2026',
        'tools': 'artificial intelligence new AI tools announcements software releases 2026',
        'automation': 'AI workflow automation n8n agentic autonomous pipelines',
        'llms': 'frontier large language models benchmarks open source LLM updates',
        'business-tech': 'enterprise AI adoption business ROI technology deployment',
        'business': 'enterprise AI adoption business ROI technology deployment'
      };

      const queryStr = topicMap[category] || topicMap.all;

      const tavilyRes = await fetch('https://api.tavily.com/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          api_key: apiKey,
          query: queryStr,
          search_depth: 'basic',
          include_answer: false,
          max_results: 8,
          days: 14
        })
      });

      if (tavilyRes.ok) {
        const tavilyData = await tavilyRes.json();
        const articles = (tavilyData.results || []).map((r, i) => ({
          id: `${category}-${i + 1}`,
          title: r.title || 'AI Development Update',
          summary: r.content || '',
          url: r.url || '#',
          source: (r.url ? new URL(r.url).hostname.replace(/^www\./, '') : 'AI Radar'),
          published: 'Updated moments ago',
          timeAgo: 'Recently',
          category: category
        }));

        if (articles.length > 0) {
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');
          res.status(200).json({
            source: 'live-tavily',
            lastUpdated: new Date().toISOString(),
            category: category,
            total: articles.length,
            articles: articles
          });
          return;
        }
      }
    } catch (err) {
      console.warn('Live Tavily fetch failed, falling back to cache:', err.message);
    }
  }

  // 2. Fallback to cached verified news data if API key not set or fetch fails
  try {
    const dataPath = path.resolve(process.cwd(), 'data', 'news.json');
    if (fs.existsSync(dataPath)) {
      const cache = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
      const articles = cache.categories[category] || cache.categories['all'] || [];

      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600');
      res.status(200).json({
        source: 'cached',
        lastUpdated: cache.lastUpdated,
        category: category,
        total: articles.length,
        articles: articles.slice(0, 8)
      });
      return;
    }
  } catch (err) {
    console.error('Failed reading fallback news:', err.message);
  }

  res.status(500).json({ error: 'Failed to retrieve news data' });
};
