# Antigravity Development Guidelines: Sandeep Kumar Portfolio

This document outlines the development principles, architecture, design tokens, and session continuity guidelines for AI agents working in this repository.

---

## 1. Project Overview & Architecture

- **Owner**: Sandeep Kumar (Aspiring AI Solutions Professional)
- **Tagline**: "Turning Ideas into AI Solutions."
- **Primary Website Entry Point**: `index.html` (single-file architecture located at the project root).
- **Core Principle**: All HTML, CSS, and client-side JavaScript for the website are consolidated into `index.html`. Zero build steps, bundlers, or external CSS/JS framework dependencies. Google Fonts CDN (`DM Sans`) is the only permitted external resource.

---

## 2. Design Tokens & Visual Hierarchy

Always adhere to the approved design system defined in `.agents/skills/portfolio-ui-ux-design/SKILL.md`:
- **Background**: `#0a0a0a` (Obsidian dark)
- **Surface / Card Background**: `#141414`
- **Accent Color**: `#e8622a` (Warm orange)
- **Primary Text**: `#f5f5f5`
- **Secondary / Muted Text**: `#a3a3a3`
- **Subtle Borders**: `rgba(255, 255, 255, 0.08)`
- **Accent Glow**: `rgba(232, 98, 42, 0.15)`
- **Typography**: `DM Sans` (`weights: 300, 400, 500, 700`) via Google Fonts CDN
- **Max Width**: `1100px` for content containers

---

## 3. Approved Page Structure & Components

The website (`index.html`) consists of the following sections and persistent elements:
1. **Hero**: Commanding headline ("Sandeep" & "Kumar."), custom high-definition SK monogram logo (`assets/logo.svg`, `assets/logo.png`), interactive typewriter terminal (`• sandeep@ai:~$ [typewriter] ▌`), life-sized interactive 3D Spline robot agent with ambient backlight, and strict single-row CTA buttons (`View Projects →` & `Get in Touch`).
2. **Profile / About**:
   - **Main Narrative Card**: Bio narrative on AI automation & workflow productivity with "My Approach" callout box and subtle interactive top-right arrow button (`#btnOpenAboutProfile`) opening the dedicated **About Profile Modal** (`#aboutProfileModalOverlay`).
   - **Dedicated About Profile Modal (`#aboutProfileModalOverlay`)**: Built to the approved Version 2 reference design featuring Burnt Orange (`#DF5E29`) accent, dark charcoal (`#0d0e12`) surface, white headings, clean header with `ABOUT ME` badge (uncluttered, no "PROFILE" label), enlarged 380x250 3D isometric AI design stage (glowing chip, ascending metric bars, dual orbit rings, floating glassmorphic AI badges), 3-card "What I'm Interested In" grid, 3-row "What I Bring" container with thin dividers, 5-category interactive accordion "My Skills & Tools" with official brand-colored logos for `Claude`, `ChatGPT`, `Gemini`, `n8n`, `Antigravity`, `Notion`, and `Copilot`, editorial "A Bit More About Me" block, and clickable "Let's Connect" cards.
   - **3 Interactive Profile Cards & Dedicated SaaS Modals**:
     - **Card 01 (Location)**: "New Delhi, India" with interactive arrow indicator and modal featuring 16:9 authentic India Gate cityscape photography (`assets/new-delhi-cityscape.jpg`), primary location, region, professional interest pills, and "View on Google Maps ↗" CTA.
     - **Card 02 (AI Focus)**: "Generative AI & AI Solutions" with interactive arrow indicator and modal featuring an atmospheric 300x160 3D isometric AI chip hero visual banner, 12 official AI product logos (Claude highlighted with warm orange glow), 7 AI capabilities, and 5 technical integration badges.
     - **Card 03 (Academic Profile)**: "M.Com | B.Com (Hons.)" with interactive arrow indicator and modal featuring an atmospheric 300x160 graduation books & mortarboard cap hero visual banner, 2 academic qualification cards (Postgraduate & Undergraduate), and 3 professional learning credential cards with green "Course Completed" badges.
3. **Toolkit / Skills & Tools**: Curated 2x2 grid (`AI Tools`, `Automation`, `RAG & Knowledge`, `AI Capabilities`) with concise focus descriptions and monospace pills featuring glowing orange dots (`.pill-dot`).
4. **Selected Work / Featured Projects**: 6 authentic AI solutions (LedgerAdvance, Customer Complaint n8n, Custom MCP Server, Custom RAG System, Excitel Chatbot, AI Interview Scheduling Agent) with live/progress status tags, monospace tech stack rows, and rich architectural details modals with native 1376x768 widescreen visuals and high-contrast Project Workflow boxes (crisp primary text step labels with warm orange `→` arrow connectors).
   - **LedgerAdvance — Finance Dashboard Showcase**: Enhanced with dual-action CTAs on the card (`VIEW DETAILS →` and `<a href="https://github.com/Sandeep600-ai/LedgerAdvance">` `GitHub ↗` with click propagation interception), interactive 3-tab dashboard screenshot gallery (`Market Overview`, `Multi-Ticker Compare`, `Wealth & Budget`) with stage viewer and captions, authentic demonstration video streamed via native HTML5 video player and `/api/video` HTTP 206 byte-range proxy from Google Drive (`1cXsM57ttDDol5G-2JTeoG3p-PxxJBmZS`) plus Theatre View modal fallback, quick "Watch Demo Video ↓" jump anchor, verified Notion metadata (Completion Date: September 28, 2026, status Completed), authentic tools/integrations stack, and dedicated footer GitHub link.
   - **Customer Complaint Management Automation (n8n)**: Upgraded with dual-action CTAs (`VIEW DETAILS →` and `GitHub ↗` linking to `https://github.com/Sandeep600-ai/customer-complaint-management-automation`), interactive 3-tab screenshot gallery (`n8n Automation Workflow & Routing Logic`), authentic demonstration video streamed via native HTML5 video player and `/api/video` HTTP 206 byte-range proxy from Google Drive (`1OVPzJu11Aun8vBW1RhK7EI1ozU2rKmd2`), verified Notion metadata (Completion Date: October 22, 2026, Status: Completed), and Theatre View modal fallback.
   - **Custom MCP Server**: Upgraded with dual-action CTAs (`VIEW DETAILS →` and `GitHub ↗` linking to `https://github.com/Sandeep600-ai/custom-mcp-server`), interactive 3-tab screenshot gallery (`MCP Architecture & Claude Connectors`), authentic demonstration video streamed via native HTML5 video player and `/api/video` HTTP 206 byte-range proxy from Google Drive (`1zBkSCTV4gK3Us3KNn4icbuaAhfyj5grP`), verified Notion metadata (Completion Date: July 8, 2026, Status: Completed), and Theatre View modal fallback.
   - **Custom RAG System**: Upgraded with unified `VIEW DETAILS →` CTA, interactive 3-tab screenshot gallery (`RAG-Pinecone Workflow Canvas (Overview)`, `Loaded The Data onto a 3rd party RAG Store`, `Query our RAG (AI Agent & Supabase Vector Store)`) using Sandeep's authentic n8n RAG canvas, authentic demonstration video streamed via native HTML5 video player and `/api/video` byte-range proxy from Google Drive (`Rag With Pinecone.mp4`, Google Drive file ID `1JRrSoI9ohZ8jOmaNdzJBKHnl2pU2FMSe`), verified Notion metadata (Completion Date: September 26, 2026, Category: AI-Powered Information Retrieval, Tools: OpenAI, n8n, Pinecone, Supabase, Gemini), and Theatre View modal fallback.
   - **Excitel Customer Support Chatbot**: Upgraded with unified `VIEW DETAILS →` CTA (without GitHub per specification), authentic 2-tab screenshot gallery (`Excitel Customer Support — Botpress Cloud Overview`, `Botpress Studio Node Flow & Chat Simulation`) matching the Notion page, authentic demonstration video streamed via native HTML5 video player and `/api/video` proxy (`Excitel Customer Support.mp4`, Google Drive file ID `1flTYJVm_bokHvQ1xq2xDL3m7dowh6__v`), verified Notion metadata (Completion Date: June 17, 2026, Category: AI Chatbot, Tools: Botpress Studio, Claude, ChatGPT, Custom MCP), and Theatre View modal fallback.
   - **AI Interview Scheduling Agent**: Upgraded with symmetrical dual-action CTAs (`VIEW DETAILS →` and `<a href="https://github.com/Sandeep600-ai/ai-interview-scheduling-agent">` `GitHub ↗`), authentic 2-tab screenshot gallery (`Interview Schedule — Vapi Voice Assistant Configuration`, `Appointment_Booking_Tool & Google Calendar Settings`) matching the Notion page, authentic demonstration video streamed via native HTML5 video player and `/api/video` proxy (`interview Appointment Booking.mp4`, Google Drive file ID `1Ch9fRSOgrNY6139OiYbg8pJCqK3W0aLI`), verified Notion metadata (Completion Date: July 17, 2026, Category: Voice AI Agent, Tools: VAPI, ElevenLabs, OpenAI, Google Calendar, Gmail), and Theatre View modal fallback.
   - **Consistent Lightweight Native Video Playback Architecture**: Videos play directly within `.project-video-card` via a native HTML5 `<video controls playsinline>` player powered by an on-the-fly byte-range HTTP 206 streaming proxy (`/api/video?id=...` in `server.js` and `api/video.js`). All video files remain 100% hosted on Google Drive with zero local video files in the repository. Eliminates all Google Drive mobile login prompts, third-party cookie blocks, and branding. Includes "Theatre View ↗" button in the section header for cinema popup playback. Immediate audio pause on modal dismissal. Consistent 16:9 aspect ratio and spacing across all projects.
   - **Dedicated Native Video Popup Modal (`#projectVideoPopupModal`)**: Custom responsive video dialog styled in obsidian dark (`#0a0a0a` / `#141414`) and warm orange (`#e8622a`) design tokens. Plays high-definition Google Drive demo walkthroughs seamlessly within the website without external redirects or downloading video files into the local repository. Automatically unloads `iframe.src` on close to stop audio cleanly. Supports backdrop dismissal, close button, and Escape key navigation.
5. **Job Market (Phase 2)**: Teaser card (`.private-jobs-card`) enhanced with subtle bottom contour wave, faint top-right lock watermark, and warm orange hover border/glow, with smooth PIN `9999` gate on the main site leading to the standalone `/jobs` Command Center featuring 45 verified AI roles across LinkedIn, Indeed, and Naukri via Apify scrapers, match scoring, and custom domain crawler notice.
6. **AI Pulse (Phase 3)**: Real-time 24h AI news radar powered by Tavily MCP, featuring 5 category filter pills, dynamic feed rotation on refresh, clean obsidian/white cards with subtle 3px orange left accent and hover outline glow, and compact outline-to-fill `Read Full Article ↗` CTA buttons.
7. **Contact**: Heading `"Let's work"`, simple accessible form (Name, Email, Message) inside `.contact-form-card` with warm orange outline glow on hover/`:focus-within` and subtle input hover borders, direct email (`sndp5432@gmail.com`), copy email button, and social links.
8. **Navigation & Theming**:
   - Sticky top glassmorphic navigation with custom SK monogram logo, compact rounded-rectangular 'Let's Talk' button (`#d4531f`), and Sun/Moon theme toggle.
   - Floating 7-dot left vertical navigation with tooltips and scroll-spy sync.
   - Floating vertical social sidebar on the right edge (auto-collapses on mobile).
   - Global Dark (`#0a0a0a`) and Light (`#f8fafc` / `#ffffff`) theme engine synchronized with persistent `localStorage`.

---

## 4. Session Continuity Protocol

To maintain project context and documentation integrity across development sessions:
1. **At Session Start**:
   - Read `AGENTS.md` (this file) for constraints and rules.
   - Read `MEMORY.md` for background context and past architectural decisions.
   - Read `PROGRESS.md` to identify the current phase and active tasks.
2. **During Development**:
   - Consult `.agents/skills/portfolio-ui-ux-design/SKILL.md` for UI/UX guidelines before implementing or modifying interfaces.
   - Verify changes across desktop, tablet, and mobile breakpoints (860px, 768px, and 480px).
3. **At Task Completion**:
   - Update `PROGRESS.md` with completed items and current project state.
   - Record any new architectural decisions, user preferences, or lessons learned in `MEMORY.md`.

---

## 5. Strict Constraints & Boundaries

- **Preserve Phase 2 & Phase 3 Completions**: The Job Market (`/jobs`) and AI Pulse sections are complete and fully functional. Do not remove or regress them.
- **No Heavy Frameworks on Main Site**: Do NOT add React, Vue, Tailwind CLI, Bootstrap, or npm bundlers to the main landing page. Keep `index.html` lightweight, zero-build, and vanilla.
- **No Unauthorized Theme Changes**: The `#0a0a0a` background and `#e8622a` accent are fixed brand tokens.
- **Large Media & Video Streaming**: Large local video files (`*.mp4`, `*.webm`) must be ignored in `.gitignore` to prevent GitHub repository bloat. Serve local videos via `server.js` with `HTTP 206 Partial Content` (byte-range streaming). For cloud demo videos (Customer Complaint Automation, Custom MCP Server, Custom RAG System, Excitel Customer Support Chatbot, AI Interview Scheduling Agent), stream on-the-fly via `/api/video?id=...` HTTP 206 proxy from Google Drive directly into native HTML5 `<video controls playsinline>` players (and `#projectVideoPopupModal` for Theatre View) without downloading or storing video files locally in the repository.
- **Information Integrity**: Do not fabricate personal information, credentials, or project URLs. Refer to `MEMORY.md` for verified details.

