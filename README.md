# Sandeep Kumar — AI Solutions Professional Portfolio

A fast, modern, and production-grade personal portfolio website for **Sandeep Kumar**, an aspiring AI Solutions Professional specializing in Generative AI, prompt engineering, agentic workflows, Model Context Protocol (MCP), and enterprise workflow automation.

Designed with an obsidian dark aesthetic (`#0a0a0a`), warm orange accents (`#e8622a` / `#d4531f`), fluid glassmorphism, responsive typography via **DM Sans**, and an interactive 3D Spline robot stage.

---

## Key Highlights & Features

- **Brand Identity & SK Monogram**: Custom high-resolution vector and raster monogram logo (`assets/logo.svg`, `assets/logo.png`) featuring a crisp white 'S' and warm orange chevron chevron `<` for 'K' beside the brand headline.
- **Interactive 3D Robot Hero**: Cinematic Spline 3D robot scene anchored at natural eye-level beside the headline, life-sized proportions with smooth `0.6s cubic-bezier` scaling transitions, ambient chest/shoulder backlight aura, interactive typewriter terminal box (`• sandeep@ai:~$ [typewriter] ▌`), and seamless obsidian floor alpha blending.
- **Responsive Dual Hero CTA Buttons**: Side-by-side **"View Projects &rarr;"** (warm orange glow) and **"Get in Touch"** (dark glass border) buttons with strict single-row horizontal fidelity across both desktop and compact mobile viewports.
- **Universal Dual Theme System**: Comprehensive **Dark Mode** (`#0a0a0a` / `#141414`) and **Light Mode** (`#f8fafc` / `#ffffff`) with instant anti-flicker `<head>` loader, persistent `localStorage` synchronization, and a header Sun/Moon toggle.
- **Skills & Toolkit Matrix**: Curated 2x2 category grid (AI Tools, Automation, Content, Business) with developer tech tags, glowing status dots, and a responsive symmetrical 2-column layout on mobile screens.
- **6 Featured Real-World AI Projects**:
  1. **LedgerAdvance — Finance Dashboard**: Centralized market analytics workstation integrating Alpha Vantage, Twelve Data, and Tavily with Netlify Functions, personal budget surplus planning, 5-tab screenshot gallery, and local 222MB demonstration video streaming with HTTP 206 byte-range seeking.
  2. **Customer Complaint Management Automation (n8n)**: Omnichannel support automation leveraging AI extraction, IF/Switch department routing, Google Sheets logging, automated customer confirmations, 3-tab screenshot gallery, and Google Drive walkthrough demo video streaming via native video popup player. Official GitHub: [`Sandeep600-ai/customer-complaint-management-automation`](https://github.com/Sandeep600-ai/customer-complaint-management-automation).
  3. **Custom MCP Server**: Production Model Context Protocol server built with n8n bridging Claude to Gmail, Google Calendar, Tavily, and external HTTP APIs, 3-tab screenshot gallery, and Google Drive walkthrough demo video streaming via native video popup player. Official GitHub: [`Sandeep600-ai/custom-mcp-server`](https://github.com/Sandeep600-ai/custom-mcp-server).
  4. **Custom RAG System**: Retrieval-Augmented Generation pipeline using n8n, OpenAI Embeddings, and Pinecone vector database for secure, hallucination-free document QA.
  5. **Excitel Customer Support Chatbot**: Botpress Studio conversational broadband assistant for plan inquiries, billing, and connectivity troubleshooting.
  6. **AI Interview Scheduling Agent**: Real-time voice agent powered by Vapi, OpenAI GPT-4.1, and ElevenLabs (Emma) with bidirectional Google Calendar booking.
- **Interactive Project Details Modal & Multi-Tab Galleries**: Deep-dive modal presenting verified business problems, solution overviews, 6-stage workflow pipelines, multi-tab high-resolution interface galleries (LedgerAdvance 5 tabs, Complaint Automation 3 tabs, Custom MCP Server 3 tabs), business & industry use cases, key benefits, and implementation contributions.
- **Native Video Popup Player (`#projectVideoPopupModal`)**: Custom responsive video dialog styled in obsidian dark (`#0a0a0a` / `#141414`) and warm orange (`#e8622a`) design tokens. Streams high-definition Google Drive demo walkthroughs seamlessly inside the website without external redirects or downloading video files into the local repository. Includes interactive video stage with glowing play button, auto-unloading on close, and backdrop dismissal.
- **Ultra-Crisp Visual Assets**: Dedicated 16:9 widescreen high-definition visual assets (`assets/projects/`) optimized for high-DPI, Retina, and 4K displays.
- **Job Market Command Center (`/jobs`)**: Standalone private AI job search dashboard protected behind authentication (private tool for owner; not accessible by the public), featuring 45 verified roles across LinkedIn, Indeed, and Naukri with AI profile match scoring.
- **AI Pulse Live News Radar**: Real-time AI news feed with strict 50/50 symmetrical card grid, content sanitizer (strips raw markdown tables and login fragments), medium-level perimeter edge glow, natural brand accent action buttons, 5 category filter pills (All, AI Tools, Automation, LLMs, Business Tech), dynamic feed pool cycling on manual refresh, 30-minute client caching, and live Tavily Search API integration.
- **Navigation & Accessibility**: Sticky glassmorphic header with compact **"Let's Talk &rarr;"** CTA, 860px adaptive responsive breakpoint, floating 7-dot left section indicator, and persistent vertical social sidebar.
- **Vercel Serverless Architecture**: Production serverless endpoints (`/api/news.js`, `/api/jobs.js`, `/api/status.js`) reading environment variables (`TAVILY_API_KEY`, `APIFY_TOKEN`) with zero hardcoded credentials and automatic cache fallback.

---

## Project Structure

```
Portfolio-website/
├── api/                                # Vercel Serverless Functions
│   ├── jobs.js                         # Job catalog filtering & platform query endpoint
│   ├── news.js                         # Tavily live AI news radar with cache fallback
│   ├── status.js                       # Service telemetry & environment status
│   └── video.js                        # Google Drive HTTP 206 byte-range video streaming proxy
├── assets/                             # Static visual assets
│   ├── logo.png                        # High-resolution transparent SK monogram logo
│   ├── logo.svg                        # Vector SVG SK monogram logo
│   └── projects/                       # High-definition 16:9 project preview graphics & galleries
│       ├── complaint-automation/       # Customer Complaint Automation gallery assets
│       ├── custom-rag/                 # Custom RAG System workflow & vector store assets
│       ├── excitel-chatbot/            # Excitel Botpress Cloud & Studio simulation assets
│       ├── interview-agent/            # Vapi Voice Assistant & Google Calendar tool assets
│       ├── ledger-advance/             # LedgerAdvance dashboard gallery & video demo
│       ├── mcp-server/                 # Custom MCP Server workflow & connector assets
│       ├── complaint-automation.png
│       ├── custom-rag.png
│       ├── excitel-chatbot.png
│       ├── interview-agent.png
│       ├── ledger-advance.png
│       └── mcp-server.png
├── data/                               # Static catalogs & verified fallback datasets
│   ├── jobs.json                       # 45 verified AI jobs (LinkedIn, Indeed, Naukri)
│   └── news.json                       # Cached categorized 24h AI pulse news
├── jobs/                               # Job Market Command Center
│   └── index.html                      # Standalone dashboard application (/jobs)
├── .agents/                            # Workspace agent skills & guidelines
│   └── skills/
│       └── portfolio-ui-ux-design/
│           └── SKILL.md                # UI/UX design tokens & layout guidelines
├── .env.example                        # Public environment variable template
├── .gitignore                          # Protects secrets (.env), Vercel caches, scripts
├── AGENTS.md                           # Antigravity development guidelines & boundaries
├── index.html                          # Primary single-file portfolio application
├── MEMORY.md                           # Long-term engineering log & architectural decisions
├── package.json                        # Development configuration & dependencies
├── PROGRESS.md                         # Live project progress ledger & activity history
├── README.md                           # Comprehensive documentation (this file)
├── server.js                           # Local Node.js development server
├── tsconfig.json                       # TypeScript configuration
└── vercel.json                         # Vercel deployment rewrites & caching rules
```

---

## Quick Start & Local Development

The portfolio runs on standard web technologies with zero build steps required for the main interface:

### 1. Clone & Setup
```bash
git clone https://github.com/Sandeep600-ai/portfolio.git
cd portfolio
```

### 2. Environment Variables (Optional for local testing)
Copy the template to create your local `.env`:
```bash
copy .env.example .env
```
*(Optional: Add `TAVILY_API_KEY="tvly-..."` in `.env` to enable real-time live web intelligence in AI Pulse. If omitted, the system seamlessly serves the verified local Tavily dataset).*

### 3. Launch Local Server
Run the built-in Node.js development server:
```bash
node server.js
```
Open your browser and navigate to:
* **Main Portfolio**: [http://localhost:3000/](http://localhost:3000/)
* **Job Market Dashboard**: [http://localhost:3000/jobs](http://localhost:3000/jobs) (Protected private dashboard — not accessible by the public)
* **API Endpoints**: `http://localhost:3000/api/news` and `http://localhost:3000/api/jobs`

---

## Vercel Deployment

The repository is pre-configured for one-click deployment on **Vercel**:

1. Push this repository to your **GitHub** account.
2. Go to **Vercel Dashboard** &rarr; **Add New Project** &rarr; Import your repository.
3. In **Project Settings** &rarr; **Environment Variables**, add:
   * `TAVILY_API_KEY` — Your Tavily Search API key
   * `APIFY_TOKEN` — Your Apify API token
4. Click **Deploy**. Vercel will automatically serve:
   * Static assets and HTML via Global CDN.
   * `/jobs` via clean rewrites in `vercel.json`.
   * `/api/news` and `/api/jobs` via Serverless Functions.

---

## Security & Secrets Management

- **Zero Hardcoded Secrets**: No API keys, credentials, or personal tokens are committed to source control.
- **Strict Git Ignore**: `.env`, `.env.*`, `.vercel/`, local helper scripts, and system metadata are strictly ignored via `.gitignore`.
- **Graceful Fallback**: The serverless API functions automatically fallback to cached datasets (`data/news.json`, `data/jobs.json`) if API keys are unset or rate-limited.

---

## Contact & Connect

* **Portfolio Owner**: Sandeep Kumar
* **Location**: New Delhi, India
* **Email**: [sndp5432@gmail.com](mailto:sndp5432@gmail.com)
* **GitHub**: [github.com/Sandeep600-ai](https://github.com/Sandeep600-ai)
* **LinkedIn**: [linkedin.com/in/sandeep601](https://www.linkedin.com/in/sandeep601)
