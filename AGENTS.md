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
3. **Toolkit / Skills & Tools**: Curated 2x2 grid (AI Tools, Automation, Content, Business) featuring monospace pills with glowing orange dots (`.pill-dot`).
4. **Selected Work / Featured Projects**: 6 authentic AI solutions (LedgerAdvance, Customer Complaint n8n, Custom MCP Server, Custom RAG System, Excitel Chatbot, AI Interview Scheduling Agent) with live/progress status tags, monospace tech stack rows, and rich architectural details modals with native 1376x768 widescreen visuals.
   - **LedgerAdvance — Finance Dashboard Showcase**: Enhanced with dual-action CTAs on the card (`VIEW DETAILS →` and `<a href="https://github.com/Sandeep600-ai/LedgerAdvance">` `GitHub ↗` with click propagation interception), interactive 5-tab dashboard screenshot gallery (`Market Overview`, `Company Analysis`, `Stock Comparison`, `Budget Planner`, `Allocation & Growth`) with stage viewer and captions, authentic demonstration video (`assets/projects/ledger-advance/ledger-advance-demo.mp4`) with HTTP 206 byte-range streaming, quick "Watch Demo Video ↓" jump anchor, verified Notion metadata (Completion Date: September 28, 2026, status Completed), authentic tools/integrations stack, and dedicated footer GitHub link.
5. **Job Market (Phase 2)**: Teaser card (`.private-jobs-card`) with smooth PIN `9999` gate on the main site leading to the standalone `/jobs` Command Center featuring 45 verified AI roles across LinkedIn, Indeed, and Naukri via Apify scrapers, match scoring, and custom domain crawler notice.
6. **AI Pulse (Phase 3)**: Real-time 24h AI news radar powered by Tavily MCP, featuring 5 category filter pills, dynamic feed rotation on refresh, medium perimeter edge-glow cards, and natural warm orange CTAs.
7. **Contact**: Simple accessible form (Name, Email, Message) with `#e8622a` focus indicators, direct email (`sndp5432@gmail.com`), copy email button, and social links.
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
- **Large Media & Video Streaming**: Large local video files (`*.mp4`, `*.webm`) must be ignored in `.gitignore` to prevent GitHub repository bloat. Serve them via `server.js` with `HTTP 206 Partial Content` (byte-range streaming) for responsive seeking.
- **Information Integrity**: Do not fabricate personal information, credentials, or project URLs. Refer to `MEMORY.md` for verified details.

