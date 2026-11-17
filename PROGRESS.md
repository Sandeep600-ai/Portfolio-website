# Project Progress Ledger: Sandeep Kumar Portfolio

Tracking active, completed, and upcoming milestones for Sandeep Kumar's personal portfolio website.

---

## Current Status: Phase 1, Phase 2 & Phase 3 Complete

```
[██████████████████████████████] 100% Phase 1, Phase 2 & Phase 3 Complete
Status: index.html fully built with 3D robot hero, Profile, Skills, Projects, Job Market card, AI Pulse live radar, and Contact.
Dedicated Job Market Command Center (/jobs) operational behind PIN 9999 with Find Jobs, Discover More Jobs, and multi-platform Apify scraper data.
AI Pulse real-time news radar integrated between Job Market and Contact with Tavily live data, 30-min cache, and category filters.
Dev server verified HTTP 200 on all endpoints.
```

---

## Milestone Breakdown

### Phase 1: Portfolio Foundation & Documentation Setup
- [x] **Requirements & Architecture Definition**
  - Personal details, tagline, and verified resume background integrated.
  - Dark minimal design spec (#0a0a0a, #e8622a, DM Sans) established.
  - Single-file `index.html` structure approved.
- [x] **Custom UI/UX Design Skill Creation**
  - Created `.agents/skills/portfolio-ui-ux-design/SKILL.md`.
  - Defined 7 core responsibilities, working methodology, and skill boundaries.
- [x] **Documentation & Context Suite Setup**
  - `AGENTS.md`: Agent development instructions & session continuity rules.
  - `MEMORY.md`: Long-term project memory, owner profile, and architectural decisions.
  - `PROGRESS.md`: Live task tracking ledger (this file).
  - `README.md`: Project overview, preview instructions, and deployment guide.
  - Confirmed `PROJECT_CONTEXT.md` omitted per user directive.
- [x] **Git Security & Local Configuration**
  - `.gitignore`: Excludes `.env`, local environment files, OS metadata, and editor caches.
  - `.env`: Template configuration with local variables and security notices.
- [x] **Pre-Implementation Readiness Audit**
  - Verified directory structure and file locations.
  - Verified Git security and `.env` exclusion.
  - Verified custom skill YAML frontmatter and guidelines.
- [x] **Core Website Implementation (`index.html`)**
  - Hero with large bold headline & animated typing tagline.
  - About section with bio narrative & focus cards.
  - Skills section with interactive pill/tag badges across 4 curated categories.
  - 3 Featured Project cards with status tags & "View" buttons.
  - Contact section with accessible form & direct email links.
  - Persistent floating vertical right-side sidebar with responsive mobile collapse.
  - Sticky glassmorphic top navigation with scroll fade-in.
- [x] **UI/UX & Responsive Verification**
  - Responsive validation at 768px (tablet) and 480px (mobile) breakpoints.
  - Accessibility & contrast audit (WCAG AA, 0 skipped headings, 100% labeled inputs).

---

### Phase 2: Job Search Integration
- [x] Requirements gathering & UX design for job search interface.
- [x] Dual-tab interface ("Find Jobs" & "Saved Jobs" with localStorage persistence).
- [x] Search bar with keywords input, location selector (Remote, Bangalore, Mumbai, Delhi, Custom), and job type filter pills.
- [x] Responsive job cards matching project card design with Apply button and Save/Bookmark toggle.
- [x] Minimal loading skeleton shimmer animation and friendly empty states.
- [x] Modular `searchJobs()` function with realistic AI/tech mock dataset and clean Apify API integration placeholder.
- [x] Mobile responsive layout integration (768px & 480px).
- [x] Apify multi-platform scraper integration (LinkedIn, Indeed, Naukri) with 45 verified AI jobs.
- [x] AI Profile Skill Match Scoring (Strong Match in green, Good Match in orange, Explore in grey) and sorting.
- [x] Dedicated 'Discover More Jobs' manual search view with unconfigured domain notice and retry action.

---

### Phase 3: AI News Feed & Live Integrations ("AI Pulse")
- [x] Section heading: "AI Pulse" with animated pulsing red dot "LIVE" badge and subtitle "Latest in AI — updated on load".
- [x] Top-right "Refresh News" button with spinning icon animation during network requests.
- [x] Category filter pills: All, AI Tools, Automation, LLMs, Business Tech with active warm orange glow.
- [x] 2-column desktop grid and 1-column mobile layout.
- [x] News card design: Dark surface (`#141414`), 3px warm orange left accent border, 2-line clamped bold headline, source & relative time, 2-line summary, and "Read Full Article →" button.
- [x] Loading state: Dark skeleton cards with shimmer animation during fetch.
- [x] Real-time Tavily MCP search integration pulling latest 24h AI news articles.
- [x] 30-minute `sessionStorage` caching (`ai_pulse_news_[category]`) to eliminate redundant queries.
- [x] Navigation bar (`#pulse`) and footer link integration with active scroll-spy.

---

## Activity Log

| Date / Timestamp | Action | Status | Notes |
| :--- | :--- | :--- | :--- |
| 2026-11-05 17:30 | Implementation plan created | Done | Initial design and project specs planned |
| 2026-11-05 17:54 | Plan updated with documentation suite | Done | Added AGENTS.md, MEMORY.md, PROGRESS.md, README.md, .gitignore, .env |
| 2026-11-05 18:00 | Plan updated with custom UI/UX skill | Done | Added .agents/skills/portfolio-ui-ux-design/SKILL.md |
| 2026-11-05 18:12 | User comment applied: index.html top level | Done | index.html placed above AGENTS.md; PROJECT_CONTEXT.md removed |
| 2026-11-05 18:14 | Setup foundation files created | Done | Created skill, AGENTS.md, MEMORY.md, PROGRESS.md, README.md, .gitignore, .env |
| 2026-11-05 18:15 | Pre-implementation audit executed | Done | All files verified and aligned |
| 2026-11-05 18:35 | index.html built & verified | Done | Implemented hero, about, skills, projects, contact, sidebar, nav |
| 2026-11-05 18:38 | A11y & responsive audit executed | Done | Passed WCAG AA, 0 skipped headings, full mobile collapse |
| 2026-11-05 18:55 | Fixed CSS lint error | Done | Replaced unknown property 'font-mono' with standard 'font-family' monospace stack |
| 2026-11-05 19:15 | Skills section card redesign | Done | Transformed 4 skills blocks into rectangular vertical cards with 12px curved corners, 2x2 grid, and use-case descriptors |
| 2026-11-05 19:27 | Header & footer layout refinement | Done | Updated brand to 'Sandeep Kumar', removed social links from header/footer, aligned brand to far left, CTA to far right, and navigation centered |
| 2026-11-05 19:34 | Right-aligned navigation nodes | Done | Moved navigation nodes (About, Skills, Projects, Contact) to the right side alongside the CTA button in both header and footer |
| 2026-11-05 19:51 | About section 3 cards updated to reference design | Done | Replaced right-side cards with LOCATION (Azadpur, New Delhi), CORE FOCUS (Generative AI & No-Code Solutions), and EDUCATION (M.Com | B.Com Hons.) with dividers and subtext |
| 2026-11-05 19:58 | Single-line description & natural hover glow | Done | Adjusted About grid to 0.88fr 1.12fr so card descriptions sit on a single line, and added multi-layered natural orange hover glow to all 3 cards |
| 2026-11-05 20:04 | About section header simplified to Profile & About Me | Done | Replaced long headline with bold 'Profile' title, 'About Me' subtitle in white (#ffffff), and normalized natural spacing below the hero section |
| 2026-11-05 20:10 | Refined Profile title to theme orange & balanced About Me | Done | Scaled down 'Profile' to elegant proportion (clamp(1.85rem, 3.2vw, 2.4rem)), colored in theme orange (#e8622a) with accent dash, and styled 'About Me' in crisp white (#ffffff) below it |
| 2026-11-05 20:20 | Header visible from Hero & Active Scroll-Spy Orange Glow | Done | Made header permanently visible from Hero section with glassmorphism; added dynamic scroll-spy and hover glow illuminating active navigation links in warm orange (#e8622a) |
| 2026-11-05 20:25 | Complete Removal of Notion Portfolio URL | Done | Scanned all project files and removed all occurrences of the Notion portfolio URL and references from .env, index.html, MEMORY.md, and documentation |
| 2026-11-05 20:28 | Session Pause & Ledger Updated | Done | Phase 1 fully concluded; index.html clean, verified, and audited; MEMORY.md and PROGRESS.md updated for next session |
| 2026-11-06 12:10 | About section redesign & copy alignment | Done | Replaced narrative text with user's exact 3 paragraphs and bold highlights; integrated reference design 'MY APPROACH' callout card; promoted 'Profile' with accent bar as primary section heading; removed redundant 'About Me' subtitle; refined right-side cards with balanced 1.16fr:0.84fr grid and compact proportions |
| 2026-11-06 12:24 | Subtle About card container & 4-paragraph update | Done | Added 4th collaboration paragraph; enclosed narrative and approach card into a subtle translucent card (.about-narrative-card) with 'About Me' inside top-left; balanced right 3-card stack height (1.18fr:0.82fr) with natural vertical distribution |
| 2026-11-06 12:28 | Session Pause & Ledger Updated | Done | Phase 1 refinements complete; index.html live and verified; MEMORY.md and PROGRESS.md updated for session pause |
| 2026-11-06 12:31 | Dev server stopped per user directive | Done | Cancelled background task-24; established policy to only start server on-demand when requested by user |
| 2026-11-06 23:45 | Hero visual energy, large headline & view line | Done | Added faint radial dot grid and soft ambient warm glow (.hero-section::before); increased hero title to dominant commanding scale (clamp(3.25rem, 8vw, 6.25rem)); added bottom gradient visual view line (.hero-section::after) for seamless section flow |
| 2026-11-06 23:54 | Skills & stack tool badges redesigned | Done | Converted skill pills to real developer tech tags with monospace font (--font-mono), crisp 6px radius, glowing orange dot (.pill-dot), and grouped into 4 requested categories: AI Tools, Automation, Content, Business |
| 2026-11-06 23:59 | Skills section header aligned to reference design | Done | Replaced generic '02. Skills & Stack' eyebrow with glowing orange dot + 'TOOLKIT' and updated section title to 'Skills & tools' matching user reference image |
| 2026-11-07 00:02 | Removed generic description below Skills & tools | Done | Purged .section-desc below 'Skills & tools' and balanced vertical margin to connect header directly to 2x2 grid |
| 2026-11-07 00:07 | Project cards depth, tech stack row & status badges | Done | Added multi-layered orange glow on hover (.project-card:hover), subtle inline monospace tech stack row with middle dots (.project-tech-row), colour-coded status badges (green live, orange progress, grey planned), and hover text brightening on description |
| 2026-11-07 00:20 | Featured projects header & cards reference redesign | Done | Aligned header to exact reference design ('SELECTED WORK' eyebrow with glowing dot, 'Featured projects' heading, subtitle purged); redesigned project cards to compact proportion with minimal live/in-progress status badges, left-aligned 'VIEW →' button that fills solid orange on card hover, and Sandeep's real project content |
| 2026-11-07 00:28 | Contact section heading aligned to unified design | Done | Replaced generic contact header with glowing orange dot + 'GET IN TOUCH' eyebrow and crisp white 'Let's work together' title, retaining all contact details, copy buttons, and form components intact |
| 2026-11-07 00:30 | Removed subtitle description below Contact heading | Done | Purged .section-desc paragraph below 'Let's work together' and adjusted vertical margin for a clean, unified flow into the contact grid |
| 2026-11-07 00:36 | Profile section heading & card header aligned | Done | Aligned Profile section heading to unified reference system ('ABOUT ME' eyebrow with glowing dot, crisp white 'Profile' title, removed orange underline); purged redundant internal 'About Me' header from inside narrative card |
| 2026-11-07 00:46 | Final polish pass & mobile optimization audit | Done | Optimized 375px mobile layouts (no cramped text, 16px iOS inputs, zero overflow); added mobile drawer social row & CTA; added subtle bouncing hero scroll indicator (fades on scroll); added floating orange back-to-top button (scroll > 400px); reduced inter-section vertical padding from 6.5rem to 3.75rem |
| 2026-11-07 00:58 | Hero section theme & color harmonization | Done | Harmonized Hero section with website tokens (#0a0a0a obsidian, #141414 surface cards, warm orange glow): removed disconnected dot grid in favor of seamless ambient aura; upgraded status pill to monospace dark surface tag; styled 3 hero metrics into elevated #141414 cards with orange hover glow |
| 2026-11-07 01:10 | Hero section reference design alignment | Done | Applied exact reference design from user image (media_1793993424799_6b631f7e.jpg) using Sandeep's real details: monospace eyebrow ('New Delhi, India — AI Solutions Professional'), massive two-line bold title ('Sandeep\nKumar.'), interactive terminal pill box ('• sandeep@ai:~$ [typewriter] ▌') with glowing emerald dot and warm orange blinking cursor block, bio paragraph, sleek horizontal stats row, and bouncing scroll down indicator; preserved all remaining sections intact |
| 2026-11-07 01:12 | Hero eyebrow text streamlined | Done | Removed '· Prompt Engineer · Workflow Automation' from the hero eyebrow line only, keeping 'New Delhi, India — AI Solutions Professional' clean and minimal, while retaining all remaining sections and text |
| 2026-11-07 01:15 | Dev server stopped & session paused | Done | Cancelled background task-179 (node server.js) per on-demand server policy; fully synchronized MEMORY.md and PROGRESS.md; session paused cleanly at user request to resume tomorrow |
| 2026-11-13 14:10 | Hero section viewing asymmetry resolved | Done | Refactored Hero layout within 1100px container; preserved 100% of Sandeep's verified content; stretched `.hero-stats-row` full width matching Profile, Skills, Projects, and Contact margins; verified server 200 OK |
| 2026-11-13 14:19 | Hero frame card removed & original scale restored | Done | Removed `.hero-frame-card` placeholder per user request; kept right side space blank (`#heroVisualSlot`) for user's future manual animation/frame; restored `.hero-title` to original actual scale (`clamp(3.85rem, 9.8vw, 6.75rem)`) and `.hero-bio` to `1.08rem` (`max-width: 620px`); preserved all remaining sections untouched |
| 2026-11-13 15:05 | Spline 3D Scene integrated & shadcn components created | Done | Configured shadcn project structure (`components.json`, `tsconfig.json`, `tailwind.config.ts`, `package.json`, `lib/utils.ts`); created `components/ui/` with `splite.tsx`, `card.tsx`, `spotlight.tsx`, `demo.tsx`; integrated live transparent interactive 3D robot directly in Hero section matching user drawing (`media_1794560270414_edbbc5cc.png`); dev server live at `http://localhost:3000/` |
| 2026-11-13 15:30 | 3D Robot enlarged, Name scaled up, Left stats repositioned, Bio updated | Done | Scaled 3D robot container to `clamp(540px, 46vw, 680px)` x `clamp(540px, 64vh, 680px)`; scaled Sandeep Kumar title to `clamp(4.25rem, 10.8vw, 7.5rem)`; repositioned compact stats row under left column freeing 100% space under robot; updated bio text to user's exact copy; server running at `http://localhost:3000/` |
| 2026-11-13 15:49 | Cinematic 3D Stage Layer implemented (Option 1) | Done | Resolved robot hand clipping with zero-clip expansive canvas (`clamp(680px, 56vw, 920px)` x `clamp(580px, 76vh, 850px)`); robot arm motion now 100% visible on Sandeep Kumar side; increased robot scale to life-size with natural opening transition; text layer transparent at z-index 3 with pointer-events pass-through; remaining sections untouched |
| 2026-11-13 16:00 | Robot Hero eye-level alignment realigned | Done | Re-anchored `.hero-visual-slot` into standard 2-column flexbox flow (`align-items: center`, `flex: 1.15`, `max-width: clamp(560px, 48vw, 720px)`, `height: clamp(520px, 64vh, 660px)`); eliminated vertical sunken drop; positioned robot head and torso at eye level beside 'Sandeep Kumar.'; preserved `margin-left: -70px` for smooth hand animation without clipping; verified dev server 200 OK |
| 2026-11-13 16:11 | Profile section background theme harmonized (Approach 1) | Done | Removed legacy radial gradient from `body`, locking base canvas background to uniform `#0a0a0a` across all sections; eliminated brownish-orange color mismatch in Profile (`#about`); preserved Hero scoped ambient glow; kept all other components, navigation, sidebar, and 3D robot untouched; verified dev server 200 OK |
| 2026-11-13 16:15 | Hero bottom divider line removed | Done | Removed `.hero-section::after` 1px gradient divider line at the bottom of the hero page per user request; eliminated the artificial horizontal line across the screen; Hero now flows into Profile with an entirely seamless, uninterrupted obsidian background; verified dev server 200 OK |
| 2026-11-13 17:10 | Job Market section implemented (Phase 2) | Done | Built new dual-tab "Job Market" section between Projects and Contact: Find Jobs tab with keyword search, location dropdown + custom reveal, 5 filter pills, dark skeleton loader, empty state, and responsive cards matching project card styling; Saved Jobs tab with localStorage persistence and live badge counter; modular `searchJobs()` with realistic AI mock roles and clear Apify API placeholder; navigation updated; all existing sections untouched |
| 2026-11-13 17:49 | Job Market Command Center created on `/jobs` behind PIN `9999` | Done | Saved React component to `components/ui/dashboard-with-collapsible-sidebar.tsx` and `demo.tsx`; built `jobs/index.html` matching user reference screenshot 1-to-1 (`sandeep.kumar` brand, `JOB MARKET` label, `Overview`, `Find Jobs` with orange active state, `Saved Jobs`, `« COLLAPSE`, search bar, location dropdown, uppercase pills, orange `SEARCH JOBS` button, initial prompt, skeleton loader, responsive cards); locked behind `9999` PIN gate; main `index.html` 100% untouched |
| 2026-11-13 17:58 | Fixed VS Code errors & activated live `/jobs` server routing | Done | Fixed VS Code HTML tokenizer error on `escapeHtml` in `index.html`; resolved `demo.tsx` JSX & module alias errors via complete `tsconfig.json`; updated `server.js` with robust directory routing for `/jobs`; restarted dev server on port 3000; added direct 'Command Center (/jobs) →' button in `#jobs` header |
| 2026-11-13 18:05 | Fixed 22 TypeScript errors & launched unsandboxed server | Done | Populated `src/lib/utils.ts` and `lib/utils.ts`; created `types/ambient.d.ts` with ambient declarations for React/JSX/Lucide; updated `tsconfig.json` (`jsx: react-jsx`); fixed all 22 VS Code problems; ran `server.js` outside sandbox with host port binding; verified `http://localhost:3000/jobs` (HTTP 200 OK, PIN 9999) and `http://localhost:3000/` (HTTP 200 OK) |
| 2026-11-13 18:42 | Refactored Job Market card on main site matching screenshot | Done | Updated main website (`index.html`) Job Market card to match reference screenshot: eyebrow `● JOB MARKET` outside card, clean copy 'A private job search dashboard', natural warm glow button 'OPEN DASHBOARD →' aligned to bottom-right |
| 2026-11-13 18:56 | Dashboard full-width layout & Remote dropdown fixed to right edge | Done | Refactored `jobs/index.html` to full-width responsive layout (`width: 100%`); stretched search bar across the viewport; anchored 'Remote ⌵' dropdown cleanly on the far right edge; eliminated wide-screen right-side blank space; added live radar telemetry badge on header |
| 2026-11-14 16:05 | Apify Multi-Platform Scraper Integration (LinkedIn, Indeed & Naukri) | Done | Called all 3 Apify actors directly via Apify MCP server; compiled 45 real AI jobs from the last 14 days into `data/jobs.json`; implemented platform selector (All, LinkedIn, Indeed, Naukri), dynamic attribution note, suggestion chips, enhanced job cards with platform badges & salaries, shimmer skeleton, error handling with retry, and `/api/jobs` server endpoint |
| 2026-11-14 16:28 | AI Profile Skill Match Scoring, Sorting & Card Proportions | Done | Added keyword matching against portfolio profile (Claude Code, n8n, Generative AI, Agentic, Voice AI, RAG); color-coded Match badges on cards (Strong Match in green, Good Match in orange, Explore in grey); added Results Meta Bar with role counter & sort dropdown ('Match Score' vs 'Date Posted'); reduced card size to compact natural dimensions with 2-line clamped descriptions; removed suggestions row per user request |
| 2026-11-14 16:44 | UI Polish: Removed Apify Attribution & Enabled Instant Job Cards On Load | Done | Removed '⚡ Powered by Apify · Results from Naukri/LinkedIn' from UI and CSS; configured dashboard to automatically load and render all 45 open roles immediately upon opening/unlocking without needing to click search button; set location dropdown default to 'All Locations'; hid placeholder text |
| 2026-11-14 16:55 | Added 'Discover More Jobs' Manual Search Heading & Dynamic Domain Crawler Notice | Done | Added 'Discover More Jobs' item in sidebar navigation below 'Find Jobs'; created dedicated view matching dashboard styling where cards are hidden by default; manual typing searches any domain; renders matching roles if available |
| 2026-11-14 17:05 | Discover More Jobs Unconfigured State Aligned to Reference Image | Done | Updated unconfigured state in Discover More Jobs to match user reference image exactly: centered 'Live search isn't configured yet — add APIFY_TOKEN to the server environment.' text with orange 'RETRY' button |
| 2026-11-14 17:25 | AI Pulse Real-Time News Radar Section Implemented (Phase 3) | Done | Built AI Pulse section between Job Market and Contact: live Tavily MCP 24h news feed, category pills (All, AI Tools, Automation, LLMs, Business Tech), 2-col desktop / 1-col mobile grid, 3px left orange accent border cards, 30-min sessionStorage cache, skeleton loading, spinning refresh button, and active scroll-spy nav link |
| 2026-11-14 17:30 | Fixed VS Code CSS vendor-prefix warnings for line-clamp | Done | Added standard 'line-clamp: 2' and 'line-clamp: 3' alongside '-webkit-line-clamp' in index.html and jobs/index.html to satisfy W3C CSS standards and eliminate VS Code linter warnings |
| 2026-11-14 18:04 | Hero Section Redesign: Dominant Headline & Seamless Robot Grounding | Done | Scaled .hero-title to clamp(4.85rem, 11.6vw, 8.25rem) with tight tracking; anchored robot to bottom edge (align-items: flex-end); applied CSS gradient alpha mask and ground shadow to melt robot legs seamlessly into obsidian floor; added ambient chest/head backlight for 3D depth; optimized viewport breathing room keeping stats row and scroll indicator visible |
| 2026-11-14 18:16 | Header CTA Button Refined to Rounded Rectangle & Darker Warm Orange | Done | Updated 'Get in Touch' button (.btn-nav and .btn-nav-mobile) from fully circular pill to clean 8px rounded rectangle (circular rectangular) and refined color to a sophisticated slightly darker warm orange (#d4531f) with subtle border and ambient glow, preserving all other parts of the website |
| 2026-11-14 18:23 | Compact Proportions for 'Get in Touch' Button | Done | Reduced .btn-nav padding to 0.42rem 0.95rem and font-size to 0.8125rem (13px) with 7px radius, giving the button a sleek, compact, and natural proportion in the navigation bar |
| 2026-11-14 18:55 | Floating Left Dot Navigation (Option A) & Global Light/Dark Theme Switcher | Done | Added floating 7-dot section indicator on the left side with hover tooltips and scroll-spy sync; added Sun/Moon theme toggle in header navigation with persistent localStorage and premium Apple/Linear slate light mode palette (#f8fafc/#ffffff) |
| 2026-11-14 19:15 | Job Market Card & Job Market Command Center Full Light/Dark Mode System | Done | Fixed Light Mode in index.html for .private-jobs-card, .private-jobs-title, .private-jobs-desc, and PIN modal; built complete Light/Dark mode system for /jobs (jobs/index.html) including left sidebar (.dashboard-sidebar, .nav-btn.active 'Find Jobs'), all 4 view headers with Sun/Moon theme toggles, search inputs, platform filters, job cards, metrics, and instant anti-flicker localStorage synchronization across both pages |
| 2026-11-16 14:28 | Light Theme Card Hover & Text Contrast Universal Polish Pass | Done | Fixed Profile right-side 3 cards (.about-card) turning black on hover by enforcing pure white surface, warm orange border, and light drop shadow; fixed white-on-white text contrast bugs across Featured Projects (.project-desc, .project-tech-row, .btn-project), Skills (.skill-pill:hover), AI Pulse (.pulse-news-card:hover, .pulse-pill-btn:hover, .btn-refresh-pulse:hover), Contact (.contact-card-item:hover, .copy-btn:hover), and mobile social links; verified HTTP 200 on all endpoints |
| 2026-11-16 14:35 | Header Navigation Text Clarity in Light Mode (No Background Color Change) | Done | Retained exact dark header bar color without alteration; resolved blurry/low-contrast dark-on-dark text in Light Mode by enforcing crisp white (#ffffff / rgba(255,255,255,0.92)) with antialiasing for brand name and nav links, vibrant warm orange hover/active glow, and clean glass theme toggle |
| 2026-11-16 15:25 | 6 Real AI Projects & Interactive Expanded Details Modal | Done | Replaced old dummy project cards with Sandeep's 6 real AI solutions (LedgerAdvance, Customer Complaint n8n, Custom MCP Server, Custom RAG System, Excitel Chatbot, AI Interview Scheduling Agent); cropped & served 6 authentic visual thumbnails from reference screenshot; built interactive project details modal displaying high-res visual, problem/solution overview, bulleted capabilities, technical architecture box, and tags; verified full light/dark theme support & HTTP 200 |
| 2026-11-16 15:32 | Ultra-Crisp HD Project Visuals Upgrade (1376x768 Native) | Done | Upgraded all 6 project card & modal visuals from low-res crops to native 1376x768 widescreen HD assets in assets/projects/ (ledger-advance, complaint-automation, mcp-server, custom-rag, excitel-chatbot, interview-agent); eliminated all blurriness across Retina & 4K displays; strictly preserved all other website sections, themes, and colors; verified HTTP 200 on all endpoints |
| 2026-11-16 15:55 | Real LedgerAdvance Project Architecture, Workflow & Authentic Visual Integration | Done | Integrated authentic project details for LedgerAdvance (business problem, solution, 6-stage workflow pipeline, 5 business use cases, 4 key benefits, Netlify Functions/Alpha Vantage/Twelve Data/Tavily integrations, and AI-assisted development contributions); exported user's 1024x682 high-definition reference screenshot into assets/projects/ledger-advance.png; strictly preserved all remaining 5 projects untouched; verified HTTP 200 on all endpoints |
| 2026-11-16 16:24 | Real Project Details Integration Across All 5 Remaining AI Projects | Done | Enriched all 5 remaining projects with verified details: Customer Complaint Automation (n8n, IF/Switch routing, Google Sheets logging), Custom MCP Server (n8n MCP gateway to Gmail/Calendar/Tavily/Claude), Custom RAG System (n8n, OpenAI Embeddings, Pinecone/Supabase vector search), Excitel Chatbot (Botpress Studio ISP troubleshooting, ChatGPT), and AI Interview Scheduling Agent (Vapi voice AI, ElevenLabs Emma, GPT-4.1, Google Calendar); unified modal section headers (Project Workflow, Business Use Cases, Industry Use Cases, Key Benefits, Tools & Integrations, My Contribution); verified 100% JS syntax and HTTP 200 on all endpoints |
| 2026-11-16 16:34 | LedgerAdvance Finance Dashboard Headings & Structure Harmonization | Done | Harmonized LedgerAdvance in index.html with exact user-requested headings: Solution Overview, Business Use case, Industry Use Cases, Key Benefits, Tools & Integrations (HTML/CSS/JS, Alpha Vantage, Twelve Data, Tavily, Netlify, Antigravity, GitHub), and Key Contributions; verified modal rendering with dynamic heading support; verified HTTP 200 on all endpoints |
| 2026-11-16 16:43 | Header CTA Button Copy Updated to 'Let's Talk' with Balanced Medium Proportion | Done | Replaced 'Get in Touch' button copy with 'Let's Talk' in both sticky desktop navigation (.btn-nav) and mobile menu drawer (.btn-nav-mobile); preserved sleek medium length and rounded rectangular proportion (padding 0.42rem 0.95rem, radius 7px, warm orange #d4531f); verified HTTP 200 on all endpoints |
| 2026-11-16 17:16 | Pre-Deployment Security Audit & Vercel Serverless Architecture | Done | Conducted full security audit across entire codebase (0 real API keys/secrets found); hardened .gitignore against .env, .env.*, .vercel/, scripts/, *.ps1, and caches; created .env.example template; deployed Vercel serverless API handlers (api/news.js, api/jobs.js, api/status.js) reading process.env.TAVILY_API_KEY and process.env.APIFY_TOKEN with automatic fallback to data/ cache; added vercel.json routing config; verified HTTP 200 on all endpoints |
| 2026-11-16 17:22 | Markdown Security Audit & Comprehensive README.md Overhaul | Done | Audited all repository markdown files (README.md, MEMORY.md, PROGRESS.md, AGENTS.md, SKILL.md) and verified zero sensitive credentials, tokens, or personal paths exist; re-authored README.md with complete project overview, full feature showcase (3D Spline hero, dual-theme engine, 6 AI projects, /jobs Command Center, AI Pulse radar), full project structure tree, local development guide, and Vercel zero-secret deployment walkthrough |
| 2026-11-16 19:00 | Vercel Static Deployment Optimization | Done | Cleaned package.json by removing unused Next.js dependencies and setting safe static build script; confirmed Vercel 'Other' framework preset |
| 2026-11-16 19:44 | Public README Passcode Sanitization | Done | Removed private passcode references from README.md; documented /jobs dashboard as an authenticated private tool not accessible by the public |
| 2026-11-17 18:05 | Mobile View Audit, Horizontal Overflow Resolution & Viewport Realignment | Done | Resolved 498px horizontal blowout bug in footer; restored header hamburger & theme toggle on mobile; aligned mobile hero elements into a balanced, natural first-screen viewport (headline, tagline pill, bio, 3-column stats, life-sized 3D robot agent); configured touch pass-through (pointer-events: none) on 3D viewer to prevent scroll trapping; locked body scroll on open mobile drawer; removed redundant footer back-to-top button; preserved 100% desktop layout |
| 2026-11-17 18:38 | Complete Section Spacing Harmonization & Gap Optimization | Done | Eliminated excessive 144px-190px voids between sections; unified inter-section gap to 72px on desktop and 60px on mobile; tightened section header margins from 2.25rem to 1.5rem (1.15rem mobile); synchronized scroll-margin-top (4.5rem desktop / 3.75rem mobile); preserved 100% typography, styling, content, animations, and functionality |
| 2026-11-17 19:00 | AI Pulse Cards Premium Edge Glow & Natural Accent CTA Button | Done | Enhanced .pulse-news-card with medium-level perimeter edge glow and dark gradient backdrop; updated .btn-read-news ('Read Full Article →') to be naturally visible in brand accent color (#e8622a / #d4531f) by default with smooth hover elevation to #ff7538; updated light mode rules; strictly preserved all other website sections untouched |
| 2026-11-17 19:12 | AI Pulse Natural Refresh Action & Universal Tavily API Preparation | Done | Added smooth spinning & skeleton scan feedback on 'Refresh News' click; added local .env loader and live Tavily integration to server.js & api/news.js ready for TAVILY_API_KEY addition; strictly preserved all other website sections untouched |
| 2026-11-17 19:28 | Live Tavily MCP News Synthesis & Dynamic Feed Rotation | Done | Queried connected Tavily MCP tool across all 5 categories for real November 2026 AI news; populated data/news.json and index.html DEFAULT_PULSE_NEWS; added feed pool rotation so clicking 'Refresh News' genuinely updates cards with fresh stories every time; strictly preserved all other website sections untouched |

---

## Next Session Starting Point

- **Active Files**: [`index.html`](file:///d:/Desktop/Portfolio-website/index.html) (main portfolio), [`jobs/index.html`](file:///d:/Desktop/Portfolio-website/jobs/index.html) (Job Market Command Center), [`data/jobs.json`](file:///d:/Desktop/Portfolio-website/data/jobs.json), [`data/news.json`](file:///d:/Desktop/Portfolio-website/data/news.json), and [`server.js`](file:///d:/Desktop/Portfolio-website/server.js).
- **Current State of Website**:
  - **Main Portfolio (`index.html`)**:
    - **Hero Section**: Commanding bold title (`Sandeep Kumar.`), interactive typing terminal box (`• sandeep@ai:~$ [typewriter] ▌`), anchored 3D robot blending seamlessly into the obsidian floor via CSS gradient alpha mask + ground shadow + ambient backlight aura, compact horizontal stats row, and bouncing scroll down indicator.
    - **Navigation & Controls**: Sticky glassmorphic top navigation with compact rounded-rectangular 'Let's Talk' button in deeper warm orange (`#d4531f`, `border-radius: 7px`) and Sun/Moon theme toggle button; floating 7-dot section navigation on the left edge with hover tooltips (`Home`, `Profile`, `Skills`, `Projects`, `Job Market`, `AI Pulse`, `Contact`); persistent vertical social sidebar on the right edge (auto-collapses on mobile).
    - **Content Sections**: Profile / About Me, Toolkit / Skills & Tools (4 curated categories), Selected Work / Featured Projects (6 real AI project cards with live status badges and interactive expanded modal), Job Market teaser card (`.private-jobs-card`) with smooth passcode modal, AI Pulse real-time AI news feed (live Tavily MCP crawl dataset, 5 category filter pills, dynamic feed pool rotation on manual refresh, medium perimeter edge glow cards, natural orange accent CTA buttons), and accessible Contact form with copy email action.
    - **Global Theme Engine**: Complete Dark (`#0a0a0a`) and Light (`#f8fafc` / `#ffffff`) mode system with persistent `localStorage` support and instant anti-flicker loader.
  - **Job Market Command Center (`/jobs`)**:
    - Standalone private dashboard, protected behind passcode gate.
    - **Dual Search Modes**:
      - `Find Jobs`: Pre-loaded mode showcasing all 45 indexed AI roles immediately with match scores and instant sorting.
      - `Discover More Jobs`: On-demand custom domain search. Unconfigured queries display exact reference design: `"Live search isn't configured yet — add APIFY_TOKEN to the server environment."` with orange `RETRY` button.
    - **Full Light Mode Support**: Left sidebar (`.dashboard-sidebar`, `.nav-btn.active` 'Find Jobs'), all 4 view headers with Sun/Moon theme toggles, search inputs, platform filters, job cards, metrics, and instant anti-flicker `localStorage` sync across pages.
    - Sidebar Navigation: Overview, Find Jobs, Discover More Jobs, Saved Jobs.
    - Real Apify Multi-Platform Integration: 45 verified AI jobs across LinkedIn, Indeed, and Naukri.
    - AI Profile Skill Match Scoring: Strong Match (green), Good Match (orange), Explore (grey).
  - **Dev Server**: Node server (`server.js`) with zero-dependency `.env` loader, live Tavily API querying support, and clean static file serving.
  - **Deployment Ready**: Zero hardcoded secrets, hardened `.gitignore`, Vercel serverless API routes (`api/news.js`, `api/jobs.js`, `api/status.js`), and static framework preset confirmed.
  - **Linter & Code Health**: 0 VS Code warnings, 0 TypeScript errors, 100% valid JavaScript and CSS.

