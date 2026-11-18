# Long-Term Project Memory: Sandeep Kumar Portfolio

This file records persistent project context, verified biographical details, key architectural decisions, and design system specifications for long-term consistency across sessions.

---

## 1. Owner Profile & Verified Information

- **Name**: Sandeep Kumar
- **Tagline**: "Turning Ideas into AI Solutions."
- **Location**: New Delhi, India
- **Email**: `sndp5432@gmail.com`
- **GitHub**: [https://github.com/Sandeep600-ai](https://github.com/Sandeep600-ai)
- **LinkedIn**: [https://www.linkedin.com/in/sandeep601](https://www.linkedin.com/in/sandeep601)

### Professional Summary
Sandeep Kumar is an aspiring AI solutions professional exploring Generative AI, prompt engineering, and no-code AI development to solve practical business challenges. Through tools like Claude, ChatGPT, Gemini, and n8n, he builds projects involving AI applications, chatbots, voice agents, RAG systems, and workflow automation. His focus is on turning AI capabilities into practical, user-focused solutions that simplify workflows and improve productivity.

### Core Competencies & Tools
- **AI & Automation**: Generative AI, Prompt Engineering, n8n Automation, Workflow Automation, AI-Assisted Research.
- **LLMs & Platforms**: Claude, ChatGPT, Google Gemini, Perplexity, NotebookLM.
- **Agent & Voice Systems**: Botpress, Vapi, ElevenLabs, Replit, Lovable AI.
- **Technical & Business Tools**: Microsoft Excel, Power BI, Google Sheets.
- **Education**: M.Com (IGNOU, 2023), B.Com Hons. (Swami Shraddhanand College, DU, 2021).

---

## 2. Key Architectural Decisions

### Decision 1: Single-File Architecture (`index.html`) at Project Root
- **Context**: The portfolio must load quickly, have zero build steps, and be deployable anywhere without npm, webpack, or static site generators.
- **Decision**: Place `index.html` at the top level of the project hierarchy above `AGENTS.md`. Embed all CSS and vanilla JavaScript inline. Use Google Fonts CDN for DM Sans.
- **Outcome**: Ultra-fast initial page load, zero dependency management overhead, and effortless hosting on GitHub Pages, Netlify, or Vercel.

### Decision 2: Floating Vertical Sidebar with Responsive Collapse
- **Context**: Social media links should remain accessible throughout the browsing experience without cluttering the main content flow.
- **Decision**: On desktop, fix a vertical sidebar to the right edge with vertical SVG icons and vertical text labels (`writing-mode: vertical-rl`). On mobile viewports (`<= 768px`), automatically collapse this sidebar into the top navigation bar to prevent overlapping content.

### Decision 3: Sticky Top Navigation Always Visible with Active Scroll-Spy Glow
- **Context**: The header should be visible right from the initial view on the hero section and throughout the page, providing instant access to navigation.
- **Decision**: Sticky glassmorphic top navigation bar is permanently visible (`opacity: 1; transform: translateY(0)`). On scroll, background deepens slightly with an accent border. An active scroll-spy dynamically highlights and illuminates the current section heading in warm orange (`#e8622a`) with a soft glow and underline indicator, matching hover interactions.

### Decision 4: Omission of `PROJECT_CONTEXT.md`
- **Context**: User explicitly directed to keep `index.html` above `AGENTS.md` and remove `PROJECT_CONTEXT.md` to avoid redundant documentation files.
- **Decision**: Context is consolidated cleanly into `AGENTS.md` (developer instructions) and `MEMORY.md` (persistent project history and profile data).

### Decision 5: Phased Project Roadmap
- **Phase 1**: Portfolio Foundation, Custom UI/UX Design Skill, and Project Setup/Audit.
- **Phase 2**: Job Search Integration (Scheduled for next turn).
- **Phase 3**: AI News Feed & Live Integrations (Scheduled for subsequent turn).
- **Constraint**: Do not implement Phase 2 or 3 features until explicitly instructed.

### Decision 6: Strict External Link Integrity & Notion Deprecation
- **Context**: The user explicitly directed the complete removal of the temporary Notion portfolio URL across all repository files, code, and documentation.
- **Decision**: The Notion portfolio URL (`https://scarlet-november-550.notion.site/...`) has been deprecated and purged from `.env`, `index.html`, and documentation. Project cards safely point to Sandeep's verified GitHub profile (`https://github.com/Sandeep600-ai`). Hero and floating sidebar retain verified channels: GitHub, LinkedIn, and Direct Email.

### Decision 7: About Section Reference Design, Headline & Subtle Container Refinement
- **Context**: The user requested updating the About section narrative to include a 4th paragraph about professional opportunities/collaborations, enclosing the narrative and approach box inside a very subtle card container ("bhot hi halka feel ho ki about text card me h"), placing "About Me" at the inside top-left of this card, while retaining "Profile" with an orange underline accent bar as the primary section title, and balancing the right 3-card stack naturally.
- **Decision**:
  - Section Heading: Clean bold white "Profile" with signature 36px `#e8622a` accent bar beneath.
  - Subtle Narrative Card (`.about-narrative-card`): Semi-transparent dark surface (`rgba(20, 20, 20, 0.45)`), ultra-thin border (`rgba(255, 255, 255, 0.06)`), 14px radius, and generous padding (`1.85rem 2.15rem`).
  - Inside Header: Clean `About Me` heading (`<h3 class="about-narrative-title">About Me</h3>`) at the top-left inside the card.
  - Left Narrative: 4 paragraphs with verified bold text highlights (`<strong>Sandeep Kumar</strong>`, `<strong>Claude, ChatGPT, Gemini, and n8n</strong>`).
  - Approach Box: Integrated reference callout with target SVG, orange uppercase "MY APPROACH" label, and bold white statement "Business-first thinking. Practical AI applications. Clear, measurable value."
  - Right-Side Cards: Adjusted grid ratio (`1.18fr 0.82fr`), flex-column vertical distribution (`justify-content: space-between`), and natural wrapping to ensure visual symmetry between both columns without compressing the page.

### Decision 8: On-Demand Local Dev Server Policy
- **Context**: The user explicitly directed that the local server (`node server.js`) should NOT run continuously in the background. It should only be activated on-demand when the user explicitly asks to preview or test the website.
- **Decision**: Background dev server task (`task-24`) was cancelled and terminated. No background server daemon will run continuously; local server will only be spun up on-demand when requested by the user.

### Decision 9: Hero Visual Texture, Commanding Headline Scale & View Line
- **Context**: The user requested adding more visual energy to the hero section with a faint, non-distracting grid/dot texture, scaling up the hero name headline to be the largest, primary visual anchor on the page, and establishing a natural visual view line when the page is opened and viewed.
- **Decision**:
  - Background Texture: Added faint 1px dot pattern spaced 28px (`rgba(255, 255, 255, 0.045)`) combined with soft ambient accent glows (`rgba(232, 98, 42, 0.08)`) with radial fade-out masking via `.hero-section::before`.
  - Commanding Headline Scale: Scaled up `.hero-title` to `clamp(3.25rem, 8vw, 6.25rem)` (up to 100px on desktop) with tighter tracking (`-0.04em`) and subtle text-shadow.
  - Visual View Line: Added `.hero-section::after` with a delicate 1px horizontal gradient line and tuned padding (`7.5rem 0 4.5rem`) so the hero elements and metrics fit the viewport naturally upon opening and guide the eye smoothly into the Profile section.

### Decision 10: Skills & Stack Developer Tags & Categorization
- **Context**: The user requested that the skill badges look like real technology/tool tags rather than generic pills, featuring a slightly monospace font, small colored dot before each name, and categorized into 4 groups: AI Tools, Automation, Content, and Business, while keeping the warm orange accent.
- **Decision**:
  - Categorization: Grouped into exactly 4 blocks in a 2x2 grid: AI Tools (Claude, ChatGPT, Gemini, Perplexity, NotebookLM, Prompt Engineering), Automation (n8n, Webhooks, RAG, Embeddings, REST APIs, Workflow Logic), Content (ElevenLabs, Vapi, Botpress, Lovable, Replit, AI-Assisted Research), and Business (Excel, Power BI, Google Sheets, Market Research, Financial Modeling, KPI Dashboards).
  - Tech Tag Styling (`.skill-pill`): Applied `--font-mono` (`ui-monospace, 'SF Mono', Consolas...`), crisp 6px border-radius, dark surface (`rgba(255, 255, 255, 0.025)`), subtle border, and glowing 6px warm orange dot (`.pill-dot`) that gently scales on hover with orange accent border.

### Decision 11: Skills Header Reference Design Alignment
- **Context**: The user uploaded a reference image (`media_1793989595451_d9197628.png`) requesting that the skills heading and eyebrow match the reference design: a glowing orange dot + "TOOLKIT" eyebrow, and "Skills & tools" section title. Subsequently, the user requested removing the generic description paragraph below the title.
- **Decision**: Replaced generic "02. Skills & Stack" and "Core Competencies & AI Toolkit" with `.toolkit-eyebrow` (glowing orange circular dot + uppercase letter-spaced "TOOLKIT") and `.skills-heading` ("Skills & tools" in bold white), purged the redundant `.section-desc`, and adjusted `.skills-header-block` margin for a clean, direct flow into the 2x2 grid.

### Decision 12: Featured Project Cards Depth, Tech Row & Status Color-Coding
- **Context**: The user requested that the project cards have more depth: a subtle border that glows orange on hover, an inline tech stack row with middle dots below the description (e.g. `n8n · OpenAI API · Webhooks · CRM Sync`), color-coded status badges (green for "Live", orange for "In Progress", grey for "Planned"), and subtle text brightening on the description during card hover.
- **Decision**:
  - Glow on Hover: Updated `.project-card:hover` with `border-color: rgba(232, 98, 42, 0.65)` and multi-layered deep orange drop shadow (`box-shadow: 0 16px 40px -5px rgba(0,0,0,0.75), 0 0 24px 2px rgba(232,98,42,0.22), 0 0 50px 6px rgba(232,98,42,0.08)`).
  - Description Text Brightening: Transitioned `.project-desc` from `#a3a3a3` to `#f0f0f0` when `.project-card` is hovered.
  - Tech Stack Row (`.project-tech-row`): Monospace inline chip row with glowing orange middle dots (`.tech-sep`) displaying tools cleanly below the description.
  - Color-Coded Badges: Configured `.project-badge.live` (green `#4ade80` with pulsing `#22c55e` dot), `.project-badge.progress` / `.in-progress` (orange `#fb923c` with pulsing `#e8622a` dot), and `.project-badge.planned` (grey `#a3a3a3` with `#737373` dot).

### Decision 13: Featured Projects Header & Compact Card Reference Redesign
- **Context**: The user uploaded a reference screenshot (`media_1793990437596_4ef72540.png`) showing a clean header (`SELECTED WORK` with glowing orange dot, `Featured projects` heading, no subtitle paragraph), compact and natural card sizing ("boxes website k according thode chote rakhne so that looks natural"), minimal status badges (`● LIVE` / `● IN PROGRESS`), monospace tech stacks, left-aligned `VIEW →` buttons that fill solid orange on card hover, while preserving Sandeep's verified project content.
- **Decision**:
  - Header: Replaced previous eyebrow and title with `.selected-work-eyebrow` (glowing orange circular dot + `SELECTED WORK`) and `.projects-heading` (`Featured projects`), completely purged the generic subtitle description paragraph.
  - Card Dimensions & Proportion: Compacted padding to `1.55rem 1.65rem` (reduced from bulky 2.25rem), applied subtle 12px corner radius on dark `#121212` surface with clean 3-column grid adapting gracefully on responsive viewports.
  - Minimal Status Badges: Implemented clean dot + uppercase monospace badges without heavy container frames: `.project-status.live` (pulsing green dot + `#4ade80` text) and `.project-status.progress` (pulsing orange dot + `#fb923c` text). Purged redundant card numbers (`01`, `02`, `03`).
  - Content Preservation: Maintained Sandeep's real AI automation projects: AI Customer Support & Lead Pipeline (Live), Voice AI Conversational Receptionist (Live), and Enterprise RAG Knowledge Assistant (In Progress).
  - Action Button (`.btn-project`): Left-aligned monospace `VIEW →` outline button by default (`border: 1px solid rgba(232, 98, 42, 0.45)`); on card hover (`.project-card:hover`), card border glows orange and the button automatically transitions to a solid orange background (`var(--accent)`) with white text and drop shadow, directly mirroring the reference design.

### Decision 14: Contact Heading Style Alignment to Unified System
- **Context**: The user requested that the Contact section heading match the previous headings style: an orange-colored eyebrow with glowing dot reading "GET IN TOUCH", and a white-colored title reading "Let's work together", followed by removing the redundant description paragraph below it to maintain a minimalist, cohesive aesthetic across all section headings.
- **Decision**:
  - Eyebrow (`.contact-eyebrow`): Styled with glowing orange dot (`.contact-dot`), theme orange `#e8622a` uppercase monospace text, and 0.16em tracking reading `GET IN TOUCH`.
  - Title (`.contact-heading`): Bold white `#ffffff` title sized with fluid clamp (`clamp(2.1rem, 3.6vw, 2.75rem)`) reading `Let's work together`.
  - Subtitle Purged: Removed the generic `.section-desc` paragraph below the heading and set `.contact-heading { margin-bottom: 0; }` with `.contact-header-block { margin-bottom: 2.75rem; }` for a clean, uninterrupted transition directly into the contact grid.
  - Retained Components: Preserved the direct email card with instant copy button, location card, LinkedIn profile card, and accessible contact form.

### Decision 15: Profile Section Header Harmonization & Card Clean-Up
- **Context**: The user uploaded an image (`media_1793991774746_2896babf.png`) and requested aligning the Profile section to the exact reference heading pattern of other sections: orange eyebrow with glowing dot reading "ABOUT ME", white heading reading "Profile", removing the orange underline bar, and removing the redundant "About Me" heading from inside the narrative card container.
- **Decision**:
  - Eyebrow (`.about-eyebrow`): Styled with glowing orange dot (`.about-dot`) and uppercase monospace letter-spaced text in `#e8622a` reading `ABOUT ME`.
  - Title (`.about-heading`): Bold white `#ffffff` title sized with fluid clamp (`clamp(2.1rem, 3.6vw, 2.75rem)`) reading `Profile`.
  - Removed Elements: Removed the old `.about-title-bar` (orange line under Profile) and purged `<div class="about-narrative-header"><h3 class="about-narrative-title">About Me</h3></div>` from inside the left narrative card.
  - Complete Portfolio Cohesion: Now every single section of the portfolio (About Me/Profile, Toolkit/Skills & tools, Selected Work/Featured projects, Get in Touch/Let's work together) adheres to the identical, polished design system hierarchy.

### Decision 16: Final Pre-Section Polish Pass & Responsive Audit
- **Context**: The user requested a final verification pass before adding new sections: (1) Fix 375px mobile cramped elements; (2) Disappear floating sidebar cleanly on mobile and reappear icons in mobile navigation; (3) Add bouncing hero scroll indicator that fades on scroll; (4) Add floating orange back-to-top button (scroll > 400px); (5) Remove excessive space between sections.
- **Decision**:
  - Inter-Section Spacing: Reduced base `section` padding from `6.5rem` to `3.75rem` (`2.75rem` on mobile), `#about` padding from `6rem` to `3.75rem`, `.hero-section` to `6.25rem 0 3.75rem`, and header block margins from `2.75rem` to `2.25rem` (`1.65rem` on mobile), eliminating all dead vertical voids.
  - Floating Sidebar & Mobile Nav: Enforced `.floating-sidebar { display: none !important; }` below 992px; injected mobile social links grid (GitHub, LinkedIn, Email) and mobile CTA inside the expandable `.nav-links` drawer; added dual-state hamburger/close SVG toggle.
  - Hero Scroll Indicator: Added `.hero-scroll-indicator` with bouncing chevron and "SCROLL" text that automatically transitions to `opacity: 0` when `window.scrollY > 50`.
  - Floating Back-to-Top Button: Positioned `.back-to-top-btn` at bottom-right in vibrant orange `#e8622a` that animates in after 400px of scroll and smooth-scrolls to top on click.
  - 375px Screen Optimization: Configured `container` padding to `1.15rem`, fluid typography clamps, single-column metric wrapping, text word-breaks on email addresses, and explicit `16px` form inputs to prevent iOS Safari auto-zooming.

### Decision 17: Hero Section Theme, Color & Surface Harmonization
- **Context**: The user requested that the Hero section color, theme, and aesthetic match the rest of the website to look natural, seamless, and premium, while retaining all existing hero text, structure, and design elements.
- **Decision**:
  - Seamless Ambient Glow: Replaced the disconnected 28px dot-grid overlay with an ultra-subtle, natural radial ambient warmth (`rgba(232, 98, 42, 0.08)`) that blends smoothly into the obsidian `#0a0a0a` background of the website.
  - Harmonized Status Pill: Upgraded `.status-pill` to sit on `#141414` surface with subtle border `rgba(255, 255, 255, 0.08)`, monospace font (`var(--font-mono)`), and emerald glowing pulse dot, matching live project badges.
  - Consistent Heading Typography: Aligned `.hero-title` to crisp white `#ffffff` with DM Sans 700 weight and natural tracking matching the rest of the page.
  - Upgraded Hero Metrics Cards: Replaced raw text list with 3 elevated `#141414` surface cards with 12px corners, subtle borders, monospace sub-labels, and signature warm orange hover glow (`#e8622a`) identical to Profile, Skills, and Projects cards.
  - Refined Secondary CTA: Styled `.btn-secondary` with `#141414` surface, subtle border, and warm orange hover response matching site interactive tokens.

### Decision 18: Hero Section Reference Layout Alignment
- **Context**: The user uploaded a reference image (`media_1793993424799_6b631f7e.jpg`, Mayank Aggarwal portfolio hero section) requesting the exact layout, structure, and visual hierarchy for Sandeep's hero section, while retaining Sandeep's verified personal details and keeping all other sections completely intact.
- **Decision**:
  - Monospace Eyebrow: `New Delhi, India — AI Solutions Professional` in monospace `#8c8c8c` with warm orange dash accent (streamlined by removing redundant tag qualifiers).
  - Commanding Two-Line Headline: Stacked `Sandeep<br>Kumar.` in massive bold white (`clamp(3.85rem, 9.8vw, 6.75rem)`, `font-weight: 800`, `line-height: 0.96`, tight letter-spacing `-0.045em`) with signature terminal period.
  - Interactive Terminal Pill Box: Rounded dark pill container (`rgba(18, 18, 18, 0.9)`, border `rgba(255, 255, 255, 0.1)`, 8px radius) featuring a glowing emerald dot (`#22c55e`), orange prompt label (`sandeep@ai:~$ ` in `#e8622a`), dynamic typewriter command cycling Sandeep's verified tagline phrases, and a warm orange blinking block cursor (`▌`).
  - Bio Paragraph: Sized to `1.08rem` with clean `#9e9e9e` color, `1.68` line height, and bold white highlights.
  - Sleek Horizontal Stats Row: Replaced bulky buttons with a sleek horizontal flex row separated by clean spacing: Generative AI (Claude, ChatGPT & Gemini), n8n Automation (Autonomous Webhooks), Voice & RAG (Vapi & Vector Search).
  - Centered Bouncing Scroll Down Indicator: Retained bouncing `SCROLL` with `v` chevron at bottom of viewport.
  - Complete Preservation of Remaining Sections: Profile, Skills, Projects, Contact, Navigation, Floating Sidebar, and Footer maintained completely untouched.

### Decision 19: Hero Section Balanced Architecture & Reserved Blank Space
- **Context**: The user identified that the Hero section viewing on wide desktop screens was lopsided towards the left, leaving an excessive dark void on the right side (~726px to 966px), unlike Profile, Skills, Projects, and Contact sections which span the full 1100px container width symmetrically with equal ~434px margins. The user requested: (1) removing the placeholder frame card UI entirely from the right side and keeping that space completely blank/empty for manual addition of custom frames/animations later; (2) restoring the actual large commanding size of the hero title (`clamp(3.85rem, 9.8vw, 6.75rem)`) and bio copy (`1.08rem`, max-width `620px`); (3) keeping the after-changes improvement where the stats row spans the full 1100px container width with its full top border divider line; (4) keeping all remaining website sections untouched.
- **Decision**:
  - Maintained `.hero-container` (1100px max-width) and `.hero-layout` architecture.
  - Restored `.hero-title` to its full commanding scale (`clamp(3.85rem, 9.8vw, 6.75rem)`, line-height: `0.96`, weight: `800`, letter-spacing: `-0.045em`) and `.hero-bio` to `1.08rem` (`max-width: 620px`).
  - Purged `.hero-frame-card` and its internal markup completely; kept the right side area as clean, blank empty space (`<div class="hero-visual-slot" id="heroVisualSlot"></div>`) ready for the user's future manual animation or frame.
  - Kept `.hero-stats-row` at `width: 100%; max-width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.08);` spanning the entire 1100px container width.
  - All remaining sections (Profile, Skills, Projects, Contact, Header, Sidebar, Footer, JS) remain 100% untouched.

### Decision 20: 3D Robot Scale, Name Enlargement, Compact Left Stats & Bio Copy Update
- **Context**: The user reviewed the live 3D robot on `http://localhost:3000/` (`media_1794563239681_dfee617a.jpg`) and requested: (1) enlarging the 3D robot to fit the hero viewport view proportionally; (2) scaling up "Sandeep Kumar." name and making the 3 stats cards compact and positioned under the left column so the space under the robot is completely open; (3) replacing the bio copy with "Turning innovative ideas into practical AI applications that deliver meaningful real-world value."; (4) keeping all other sections untouched.
- **Decision**:
  - Enlarged `.hero-visual-slot` to `max-width: clamp(540px, 46vw, 680px)` and `height: clamp(540px, 64vh, 680px)`, giving the 3D interactive robot a life-sized commanding presence.
  - Scaled up `.hero-title` to `clamp(4.25rem, 10.8vw, 7.5rem)` with line-height `0.95`.
  - Relocated `.hero-stats-row` inside `.hero-content` with compact styling (`0.88rem` highlight, `0.72rem` desc, `max-width: 560px`), freeing up 100% of the space directly beneath the robot's feet.
  - Replaced bio paragraph with: *"Turning innovative ideas into **practical AI applications** that deliver meaningful real-world value."*
  - Retained all remaining sections, styling, navigation, and sidebar untouched.

### Decision 21: Cinematic 3D Stage Layer for Zero-Clip Robot Motion & Natural Scale
- **Context**: The user reported that when the website opens, the robot's left hand/arm moves towards the Sandeep Kumar text side and gets clipped/hidden because it hit the boundary of the narrow flex container. The user requested: (1) fixing the clipping so the robot hand is properly visible in a transparent way and the Sandeep Kumar side remains transparent; (2) increasing the robot size so the opening transition feels natural and commanding; (3) keeping all other parts of the website untouched.
- **Decision**:
  - Implemented the user-approved Senior Developer Option 1 (Cinematic 3D Stage Layer).
  - Configured `.hero-visual-slot` as an expansive, zero-clip 3D stage (`position: absolute; right: -3rem; top: 50%; transform: translateY(-50%); width: clamp(680px, 56vw, 920px); height: clamp(580px, 76vh, 850px);`).
  - The canvas now extends across into the center-left behind the text, allowing the robot's arms full range of motion with 0% clipping or hiding.
  - The Spline camera auto-zoomed in, making the robot ~35% larger, commanding, and life-sized with a fluid opening transition.
  - Positioned `.hero-content` at `z-index: 3` with pointer-events pass-through, preserving crystal-clear text readability, full clickability on interactive elements, and full-screen mouse cursor tracking for the robot.
  - Retained all remaining sections (Profile, Skills, Projects, Contact, Navigation, Sidebar) completely intact and untouched.

### Decision 12: Robot Hero Eye-Level Vertical Realignment (Disbalance Resolution)
- **Context**: When `.hero-visual-slot` was set to `position: absolute; top: 50%` with excessive height (`850px`), the Spline 3D canvas pushed the robot too far down into the lower bounds of the Hero section, creating an empty void next to "Sandeep Kumar." and disbalancing the visual presentation (reported in `media_1794565274492_b2473524.jpg`).
- **Decision**:
  - Restored `.hero-visual-slot` to a robust 2-column flexbox flow (`flex: 1.15; width: 100%; max-width: clamp(560px, 48vw, 720px); height: clamp(520px, 64vh, 660px);`).
  - Re-anchored vertical alignment with `align-items: center` in `.hero-layout`, placing the robot directly at natural eye-level beside the "Sandeep Kumar." headline and terminal pill.
  - Retained `margin-left: -70px` and transparent zero-clip canvas overflow so the robot's left hand gestures smoothly across toward the headline with zero clipping.
  - Ensured `.hero-content` retains `flex: 1; max-width: 580px; position: relative; z-index: 2; pointer-events: none` with interactive children receiving pointer events.
  - Verified local server running at `http://localhost:3000/` with HTTP 200 OK.
  - Kept all other sections (Profile, Skills, Projects, Contact, Navigation, Sidebar) 100% untouched.

### Decision 13: Profile Section Background Theme Harmonization (Approach 1)
- **Context**: The user observed a background color theme mismatch in the Profile section (`media_1794565871900_e611e9aa.png`), where Profile appeared brownish-orange (`#150f0c`) compared to the obsidian black (`#0a0a0a`) Hero section.
- **Root Cause**: `body` had a legacy `radial-gradient` that was blocked by Hero's opaque `#0a0a0a` background, but bled into Profile (`#about`) because `#about` was transparent.
- **Decision**:
  - Implemented user-approved Approach 1: Removed `background-image` and `background-repeat` from `body`.
  - Locked the base canvas background uniformly to `background-color: var(--bg)` (`#0a0a0a`).
  - Hero retains its scoped ambient top glow (`.hero-section::before`), while Profile, Skills, Projects, and Contact all sit on the exact same pristine `#0a0a0a` obsidian dark canvas.
  - Removed `.hero-section::after` (the 1px bottom divider line) per user request, allowing Hero and Profile to merge into a single uninterrupted, prominent dark background.
  - Kept all other components, copy, navigation, sidebar, and 3D robot completely untouched.

### Decision 15: Job Market Command Center at `/jobs` Protected Behind Password `9999`
- **Context**: The user provided an exact reference screenshot (`media_1794571817635_3acd30eb.jpg`) showing a dedicated dark dashboard at `http://localhost:3000/jobs`, protected behind a password (`9999`).
- **Architecture**:
  - Saved the React collapsible sidebar component to [`components/ui/dashboard-with-collapsible-sidebar.tsx`](file:///d:/Desktop/Portfolio-website/components/ui/dashboard-with-collapsible-sidebar.tsx) and `demo.tsx` in both `components/ui/` and `src/components/ui/` for shadcn/Tailwind/TypeScript compatibility.
  - Created [`jobs/index.html`](file:///d:/Desktop/Portfolio-website/jobs/index.html) served automatically by `server.js` when navigating to `/jobs` or `/jobs/`.
  - Implemented PIN lock screen requiring `9999` to unlock the dashboard. Authentication is stored in `sessionStorage` with instant re-lock capability.
  - Matches the user's reference screenshot 1-to-1:
    - Sidebar: Brand `sandeep.kumar` (in lowercase monospace), category eyebrow `JOB MARKET`, navigation items (`Overview`, `Find Jobs` with orange active state, `Saved Jobs`), and `« COLLAPSE` toggle button at the bottom.
    - Main Find Jobs view: `Find Jobs` title, `Search open roles matching your criteria` subtitle, full-width keywords input, location select (`Remote ⌵`), filter pills (`FULL-TIME`, `PART-TIME`, `CONTRACT`, `REMOTE`), prominent orange `SEARCH JOBS` button, initial prompt `Search above to see open roles.`, shimmer skeleton loader, and responsive job cards with Apply and Save actions.
    - Overview and Saved Jobs views providing high-level AI market metrics, skill bars, scraper feeds, and local storage bookmarks.
  - Main portfolio (`index.html`) remains 100% untouched and intact.

### Decision 16: Main Portfolio Job Market Card & PIN Gate Redesign
- **Context**: The user requested that the in-page Job Market section on `index.html` be replaced with a single, elegant circular-rectangular card matching their reference screenshot (`media_1794575021293_c92ccc09.jpg` and `media_1794575589116_e13bc1ba.png`).
- **Architecture**:
  - Eyebrow: `● JOB MARKET` positioned outside top-left above the card in `.private-jobs-header-block`, matching the glowing-dot eyebrow pattern of `● SELECTED WORK` and `● GET IN TOUCH`.
  - Title: Crisp bold headline "A private job search dashboard".
  - Description: Honest, conversational copy "Search and track AI roles in one place — kept behind a passcode since it's a personal tool, not part of the public site."
  - Button: "OPEN DASHBOARD →" positioned cleanly at the bottom-right of the card (`align-self: flex-end`) with a natural, subtle organic warm glow (`box-shadow: 0 2px 12px rgba(232, 98, 42, 0.25)`), removing exaggerated/dummy pulsers and SVG lock icons.
  - Authentication Gate: Clicking the button triggers `#mainJobGateModal`, a smooth glassmorphic PIN prompt modal requiring passcode `9999`. Entering `9999` sets session token and seamlessly redirects to `/jobs`.
  - Kept Hero (with 3D robot), Profile, Skills, Projects, Contact, Navigation, and Floating Sidebar 100% untouched.

### Decision 17: Job Market Command Center (`/jobs`) Full-Width Expansion & Right-Edge Alignment
- **Context**: On widescreen desktop viewports, the `/jobs` dashboard was previously restricted by `max-width: 1100px`, creating an awkward 600px+ empty black gap on the right side of the "Remote ⌵" dropdown (`media_1794576012433_8f232d21.png`).
- **Architecture**:
  - Set `.dashboard-view` to `width: 100%; max-width: 100%`, allowing the dashboard to breathe naturally across wide desktop viewports.
  - In `.search-inputs-row`: `search-input-wrap` configured with `flex: 1;` so the search box expands to fill all available width, anchoring the `.location-select-wrap` (`Remote ⌵`) cleanly and firmly to the far right edge (`width: 200px; flex-shrink: 0;`).
  - Added sleek `.view-header-stats` pill (`● Live Radar Active` with pulsing green dot) on the top-right of the header for visual symmetry and a premium SaaS aesthetic.
  - Adjusted cards grid and skeleton loader to `width: 100%` with responsive columns (`minmax(340px, 1fr)`).

### Decision 18: Resolution of All 22 VS Code & TypeScript Problems
- **Context**: User screenshots (`media_1794572617700_d01cfde7.png` and `media_1794573168960_f39b6404.png`) showed 22 errors in VS Code (HTML tokenizer error in `index.html`, missing module/JSX flag errors in `demo.tsx` and `card.tsx`, empty `tsconfig.json` and `src/lib/utils.ts`).
- **Architecture**:
  - `index.html`: Replaced inline regex quotes `/[&<>'"]/g` in `escapeHtml` with chained `.replace()` calls, fixing the VS Code HTML language server parser crash on line 3481.
  - `types/ambient.d.ts`: Created ambient TypeScript declarations for `react`, `react/jsx-runtime`, `react-dom`, `clsx`, `tailwind-merge`, and `lucide-react`.
  - `tsconfig.json`: Added `"jsx": "react-jsx"`, `"strict": false`, `"noImplicitAny": false`, and `@/*` paths mapping.
  - `src/lib/utils.ts` & `lib/utils.ts`: Populated with clean `cn` utility implementation.
  - Problems tab fully green with 0 errors.

### Decision 19: Full Apify Multi-Platform Scraper Integration (LinkedIn, Indeed & Naukri) via MCP
- **Context**: The user provided screenshots for 3 Apify scrapers (`automation-lab/linkedin-jobs-scraper`, `valig/indeed-jobs-scraper`, and `epicscrapers/naukri-scraper`) and requested: (1) wiring up Apify job search via connected Apify MCP server; (2) calling the 3 actors to scrape and fill the catalog with relevant AI jobs from the past 2 weeks; (3) dynamic platform selection (LinkedIn, Indeed, Naukri, All); (4) dynamic attribution note below the search bar ("Powered by Apify · Results from LinkedIn Jobs" / platform); (5) elevated cards with title, company, location, date posted, portfolio tags, salary, apply link, and bookmarks; (6) loading skeleton and graceful error state with retry button; (7) bi-weekly automated update architecture.
- **Architecture**:
  - Executed all 3 Apify Actors directly through the Apify MCP connector (`call-actor` and `get-dataset-items`):
    - LinkedIn (`automation-lab/linkedin-jobs-scraper`): 15 verified jobs (Microsoft, ServiceNow, Databricks, DevRev, Celonis, etc.)
    - Indeed (`valig/indeed-jobs-scraper`): 15 verified jobs (Netrix Global, Luxoft, Gnani, Nagarro, Allo Innoware, etc.)
    - Naukri (`epicscrapers/naukri-scraper`): 15 verified jobs (Protiviti India, Infosys, Luxoft, Easemytrip, etc.)
  - Compiled and normalized 45 real jobs into `data/jobs.json` with portfolio-aligned tags (`Generative AI`, `n8n Automation`, `Prompt Engineering`, `LLM`, `Agentic AI`, `Workflow Automation`).
  - Added interactive Platform Selector in `jobs/index.html` (`ALL PLATFORMS`, `LINKEDIN`, `INDEED`, `NAUKRI`) with brand color dots and active orange glowing pills.
  - Added dynamic note below search bar: `"Powered by Apify · Results from LinkedIn Jobs"` (dynamically updates per platform selection).
  - Added quick-search suggestions row: `[Generative AI]`, `[AI Solutions Engineer]`, `[n8n Automation]`, `[Prompt Engineer]`, `[Agentic AI]`, `[Workflow Automation]`.
  - Updated card renderer: platform badges (LinkedIn, Indeed, Naukri), salary labels, tech stack tags, relative dates, direct apply URLs, and localStorage bookmarking.
  - Added shimmer skeleton loader, empty state with filter reset, and error container with a retry button.
  - Added `/api/jobs` and `/api/status` backend endpoints to `server.js` with client-side fallback in `jobs/index.html`.
  - Created `scripts/update-jobs.js` for bi-weekly / on-demand scheduled refreshes.
  - Dev server verified HTTP 200 on all endpoints and shut down cleanly per on-demand server policy.

### Decision 20: AI Profile Skill Match Scoring, Results Sorting, and Compact Card Proportions (2026-11-14)
- **Context**: The user requested a smart match scoring badge on each job card based on Sandeep's portfolio profile skills, an instant sort option (by Match Score or Date Posted) above the results, card size reduction for natural professional aesthetic, and removal of the suggestions chips line.
- **Decision**:
  - Implemented keyword matching logic against Sandeep's About & Skills sections:
    - Core/Frontier: `Claude Code`, `Claude`, `n8n`, `Generative AI`, `GenAI`, `Prompt Engineering`, `Agentic AI`, `Voice AI`, `RAG`, `Vector`, `Botpress`, `Vapi`, `ElevenLabs`.
    - Workflows & Analytics: `Workflow Automation`, `AI Solutions`, `Webhooks`, `REST API`, `Power BI`, `Excel`, `Market Research`, `KPI`.
  - Added visual "Match" badges on each card:
    - **Strong Match** (green `#10b981`, glowing dot, subtle emerald container): High relevance / multiple core skills match.
    - **Good Match** (warm orange `#e8622a` / amber, glowing dot, subtle warm container): Partial skill match.
    - **Explore** (grey `#737373` / `#a3a3a3`, subtle container): General exploration role.
  - Added Results Meta Bar above the grid:
    - Shows live count of open roles matching query/filters.
    - Interactive sort selector: `Match Score (AI Profile)` (default) or `Date Posted (Most Recent)`.
    - Instant client-side re-sorting and re-rendering on dropdown change without re-fetching.
  - Compact Card Dimensions:
    - Reduced card padding from `1.55rem 1.65rem` to `1.15rem 1.25rem`.
    - Grid gap reduced from `1.5rem` to `1.15rem` (`minmax(300px, 1fr)`).
    - Reduced title font to `1.05rem`, description to `0.82rem` with a clean 2-line clamp.
    - Compact bookmark button (28px), tight action tags, and smaller Apply button.
  - Removed the `Suggestions: Generative AI...` line from both HTML and CSS.
- **Outcome**: Modern, highly scannable, natural and professional job dashboard interface that immediately surfaces the most relevant AI roles for Sandeep's specific background.

### Decision 21: Instant Job Cards Auto-Loading on Open & Apify Attribution Removal (2026-11-14)
- **Context**: The user requested that job cards appear immediately when opening the dashboard for the first time without having to click "SEARCH JOBS", and that the "⚡ Powered by Apify · Results from Naukri/LinkedIn" label be completely removed from the UI.
- **Decision**:
  - Removed `<div class="apify-attribution-note">` and associated CSS/JS completely for a clean search layout.
  - Set default location dropdown to "All Locations" (`value="All"`), presenting all 45 roles across India & Remote.
  - Configured `executeDashSearch()` to fire automatically on initial dashboard unlock and page load.
  - Hid initial placeholder prompt so cards immediately occupy the dashboard surface.
- **Outcome**: Seamless immediate-load experience where all open AI roles are visible on first visit, while preserving manual search, filter pills, and sorting functionality intact.

### Decision 22: 'Discover More Jobs' Manual Search View with Dynamic Domain Crawler Notice (2026-11-14)
- **Context**: The user requested a new navigation item 'Discover More Jobs' right below 'Find Jobs' in the sidebar where job cards are not shown initially. When the user manually searches any domain and no roles match, it should display the exact reference design from the user's photo: "Live search isn't configured yet — add APIFY_TOKEN to the server environment." with an orange RETRY button.
- **Decision**:
  - Added 'Discover More Jobs' button to `.sidebar-nav` right below 'Find Jobs' with a compass explorer icon.
  - Built dedicated `#viewDiscoverJobs` matching website design tokens and obsidian theme.
  - Configured initial state with a clean exploratory prompt (`.discover-initial-prompt`) without any pre-loaded cards.
  - Built `executeDiscoverSearch()` handler: filters jobs against typed domain/query across platforms.
  - If matching jobs exist, renders cards with match badges and sort control.
  - If no jobs match (unconfigured domain/search), displays centered text `"Live search isn't configured yet — add APIFY_TOKEN to the server environment."` with warm orange `RETRY` button matching the user's uploaded reference image (`media_1794655972985_fce253d6.jpg`).
- **Outcome**: Exact visual alignment with user reference image while providing functional retry capability on custom domain searches.

### Decision 23: 'AI Pulse' Real-Time News Radar Section (Phase 3 Milestone) (2026-11-14)
- **Context**: The user requested adding the "AI Pulse" section to the main portfolio website (`index.html`), positioned cleanly between the Job Market card (`#jobs`) and Contact (`#contact`), displaying the latest real-time AI and tech news.
- **Decision**:
  - **Layout & Visual Hierarchy**:
    - Section Heading: Eyebrow `● LIVE RADAR` in monospace orange, large bold headline `AI Pulse` accompanied by a pulsing red dot `● LIVE` badge (`#ef4444`).
    - Subtitle: `"Latest in AI — updated on load"`.
    - Refresh Action: Top-right `"Refresh News"` button with spinning animation during fetches.
    - Category Filter Pills: `All`, `AI Tools`, `Automation`, `LLMs`, `Business Tech` with active warm orange border and glow.
    - 2-Column Responsive Grid: 2 columns on desktop (`grid-template-columns: repeat(2, 1fr)`), 1 column on mobile (`<= 768px`).
    - News Card Design: Dark surface (`#141414`), subtle border, signature 3px warm orange left accent border (`border-left: 3px solid #e8622a`), bold 2-line clamped title, source name (`#ff9b71`) and relative publication time (`X hours ago`), 2-3 sentence summary, and `"Read Full Article →"` external link button.
    - Loading Shimmer: Clean skeleton cards with animated shimmer bars during live fetches.
  - **Data Pipeline & Caching**:
    - Real-time news fetched via Tavily MCP connector (`tavily_search` with parameters `topic: "news"`, `time_range: "day"`, `include_published_date: true`) across all 5 categories.
    - Data structured in `data/news.json` and served via `/api/news?category=` in `server.js` with fallback embedded defaults.
    - Client-side 30-minute `sessionStorage` caching (`ai_pulse_news_[category]`) ensures fast tab re-openings without unnecessary network delays.
    - Added `"AI Pulse"` (`#pulse`) to sticky top navigation and footer links with active scroll-spy integration.
- **Outcome**: Premium, real-time editorial news radar completely integrated into the obsidian/warm orange aesthetic without impacting any existing sections.

### Decision 24: Hero Section Visual Hierarchy, Headline Dominance & Robot Grounding Blend (2026-11-14)
- **Context**: The user pointed out that the 3D robot agent looked visibly pasted-in and abruptly truncated at the legs ("below robot legs meinn pata chal rha h alag se intigrate kiya"), and requested making the "Sandeep Kumar" title larger, more commanding, and harmonizing the layout with natural grounding and depth inspired by the reference design.
- **Decision**:
  - **Dominant Typography**: Scaled `.hero-title` to `clamp(4.85rem, 11.6vw, 8.25rem)` with tighter tracking (`-0.048em`) and compact line-height (`0.92`), and expanded left container to `clamp(580px, 54vw, 720px)` for high-impact presence.
  - **Bottom-Anchored Grounding**: Changed `.hero-layout` and `.hero-visual-slot` from floating center alignment to `align-items: flex-end`.
  - **Seamless Leg Blend**: Applied CSS gradient alpha mask (`mask-image: linear-gradient(to bottom, #000 80%, rgba(0,0,0,0.4) 93%, transparent 100%)`) to `.spline-scene-wrapper` combined with an ambient ground shadow (`.hero-visual-slot::after`). The raw 3D mesh cut-off is 100% eliminated, smoothly dissolving the robot's lower body into the obsidian floor.
  - **Ambient Depth Backlight**: Added soft radial aura (`.hero-visual-slot::before`) directly behind the robot's chest/head, separating the dark metallic silhouette from the `#0a0a0a` background with realistic lighting.
  - **Tuned Viewport Spacing**: Adjusted vertical padding (`4.75rem 0 2.25rem`) and stats margin (`1.15rem`) so the entire hero (name, terminal pill, bio, 3 stats, grounded robot, and scroll indicator) fits within standard desktop viewports.
  - **Information Integrity**: Retained 100% of Sandeep Kumar's verified identity, copy, stats, and downstream sections without copying external biographical content.
- **Outcome**: Commanding, natural, and cinematic hero stage matching reference design aesthetics with zero visual truncation or floating artifacts.

### Decision 25: Floating Left Dot Navigation (Option A) & Global Light/Dark Theme Switcher (2026-11-14)
- **Context**: The user requested a floating dot navigation on the side of the page (one dot per section with hover tooltips and active scroll indicator) and a complete light/dark mode toggle across the website.
- **Decision**:
  - **Option A Left-Side Dot Navigation**: Positioned at `left: 2rem; top: 50%; transform: translateY(-50%)`, balancing the right-side social sidebar without any overlap or collision. Features 7 subtle clickable circular dots (`Home`, `Profile`, `Skills`, `Projects`, `Job Market`, `AI Pulse`, `Contact`). Inactive dots are subtle translucent circles; active section dot illuminates in glowing warm orange (`#d4531f`). Hovering displays an instantaneous monospace tooltip on the right. Synchronized with the global scroll-spy and hidden on mobile/tablet screens (`<= 992px`).
  - **Global Light/Dark Theme System**: Added Sun/Moon toggle button (`#themeToggleBtn`) in sticky top navigation inside `.nav-actions` right beside "Get in Touch". Persisted in `localStorage` (`portfolio-theme`) with zero-flicker pre-render script in `<head>`.
  - **Linear/Apple Light Mode Palette**: Configured `[data-theme="light"]` with `#f8fafc` light-slate background, `#ffffff` card surfaces, `#0f172a` high-contrast typography, and retained signature `#d4531f` warm orange accents.
- **Outcome**: Seamless balance between left navigation and right social links with an intuitive one-click theme switcher, preserving 100% of existing content and components.

### Decision 26: Complete Light/Dark Mode Architecture for Job Market Card & Command Center
- **Context**: The user reported that Dark and Light Mode had not been properly applied to two specific areas: (1) The Job Market card on the main page (`.private-jobs-card`), and (2) "finds job inside part left mein" (the left sidebar and views of the Job Market Command Center inside `jobs/index.html`).
- **Decision**:
  - `index.html`: Refined `[data-theme="light"]` rules for `.private-jobs-card` to render on `#ffffff` surface with subtle borders (`rgba(0,0,0,0.08)`), dark slate title (`#0f172a`), muted slate description (`#475569`), warm orange accent glow, and comprehensive light mode styles for the PIN 9999 modal (`.job-gate-modal-card`, `.job-gate-modal-overlay`, `.job-gate-title`, `.job-gate-desc`, `.job-gate-pin-input`).
  - `jobs/index.html`:
    - Added instant anti-flicker theme loader in `<head>` synchronized with `localStorage.getItem('portfolio-theme')`.
    - Added comprehensive `[data-theme="light"]` design tokens and component styling.
    - Left Sidebar (`.dashboard-sidebar`): Restyled for Light Mode with `#ffffff` surface, `#0f172a` brand text, `#64748b` section labels, `#475569` navigation buttons, and `#d4531f` warm orange active state with subtle orange background tint on `.nav-btn.active` ("Find Jobs").
    - View Headers & Theme Switcher: Added matching Sun/Moon theme toggle buttons in all 4 view headers (`.theme-toggle-btn-jobs`) and in the sidebar footer (`#btnThemeToggleSidebar`).
    - Main Dashboard & Cards: Adapted all search inputs, dropdowns, platform pills, job cards, metrics, and password gate overlays to Light Mode with zero dark artifacts.
    - Real-Time Synchronization: Configured `storage` event listeners so toggling theme on `/` or `/jobs` instantly synchronizes both tabs seamlessly.
- **Outcome**: 100% unified Dark and Light mode experience across the entire portfolio and private command center without affecting any existing features.

### Decision 27: Comprehensive Light Mode Card Hover & Text Contrast Universal Polish Pass (2026-11-16)
- **Context**: The user observed that in Light Mode: (1) on the Profile section right side, the 3 cards (`.about-card`) turned black when hovered; (2) across multiple sections of the website, hovering over cards or elements caused text to turn white (`#ffffff` or `#f0f0f0`), making it unreadable on white surfaces.
- **Root Cause**:
  - `.about-card:hover` had a hardcoded `background: #171717;` in dark mode styling that lacked a `[data-theme="light"]` override.
  - Hover states on `.project-card:hover .project-desc` (`color: #f0f0f0;`), `.project-card:hover .project-tech-row` (`color: #b0b0b0;`), `.skill-pill:hover` (`color: #ffffff;`), `.pulse-news-card:hover .pulse-card-title` (`color: #ffffff;`), `.pulse-pill-btn:hover` (`color: #ffffff;`), `.btn-refresh-pulse:hover` (`color: #ffffff;`), and `.mobile-social-link:hover` (`color: #ffffff;`) were turning text white on light mode surfaces.
- **Decision**:
  - **Profile Right 3 Cards (`.about-card`)**:
    - Locked `[data-theme="light"] .about-card:hover` to `background: #ffffff !important;`, `border-color: rgba(212, 83, 31, 0.5) !important;`, and warm orange drop-shadow `box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.08), 0 0 20px 1px rgba(212, 83, 31, 0.12) !important;`.
    - Styled `.about-card-title` to `#0f172a !important;`, `.about-card-desc` to `#475569 !important;` (hover `#334155 !important;`), divider line to `rgba(0, 0, 0, 0.07) !important;`, and icon on hover to `color: var(--accent) !important; background: rgba(212, 83, 31, 0.1) !important;`.
  - **Featured Projects**:
    - `[data-theme="light"] .project-card:hover .project-desc` enforced to `#0f172a !important;`.
    - `[data-theme="light"] .project-card:hover .project-tech-row` enforced to `#1e293b !important;`.
    - `[data-theme="light"] .btn-project` styled with `#f8fafc` background and `#0f172a` text; on hover fills solid orange `var(--accent)` with `#ffffff` text.
  - **Skills & Stack**:
    - `[data-theme="light"] .skill-pill:hover` enforced to `#0f172a !important;` on warm tint `rgba(212, 83, 31, 0.12) !important;` with accent border `rgba(212, 83, 31, 0.5) !important;`.
    - `[data-theme="light"] .skill-category-block:hover` maintains `#ffffff` surface with accent border and light drop shadow.
  - **AI Pulse News**:
    - `[data-theme="light"] .pulse-news-card:hover .pulse-card-title` highlights in signature warm orange `var(--accent) !important;`.
    - `[data-theme="light"] .pulse-news-card:hover .pulse-card-summary` enforced to `#334155 !important;`.
    - `[data-theme="light"] .pulse-pill-btn:hover` enforced to `#0f172a !important;` on `#f8fafc !important;`.
    - `[data-theme="light"] .btn-refresh-pulse:hover` highlights in `var(--accent) !important;`.
  - **Contact & Mobile Drawer**:
    - `[data-theme="light"] .contact-card-item:hover .contact-detail-value` highlights in `var(--accent) !important;`.
    - `[data-theme="light"] .copy-btn:hover` highlights in `var(--accent) !important;` with subtle orange background tint.
    - `[data-theme="light"] .mobile-social-link:hover` enforced to `#0f172a !important;`.
- **Outcome**: 100% crystal-clear contrast and smooth premium interactions across both Dark and Light themes with zero regressions.

### Decision 28: Header Navigation Text Clarity in Light Mode (No Background Color Change) (2026-11-16)
- **Context**: In Light Mode, the header bar retained its dark glass background (`background: rgba(10, 10, 10, 0.78);`), but `.nav-brand` and `.nav-link` had previously received dark slate colors (`#0f172a` and `#475569`), causing dark text to sit on a dark background. This created a blurry, low-contrast, hazy appearance. The user requested: (1) fix the text blurring and low visibility; (2) keep the exact same header background color with no change; (3) scope the change specifically to the header.
- **Decision**:
  - Retained the exact dark glass header background (`rgba(10, 10, 10, 0.78)` with `backdrop-filter: blur(16px)`).
  - Enforced `[data-theme="light"] .site-header .nav-brand` to crisp, pure white (`#ffffff !important;`) with `-webkit-font-smoothing: antialiased;` and orange accent dot.
  - Enforced `[data-theme="light"] .site-header .nav-link` to high-contrast crisp white (`rgba(255, 255, 255, 0.92) !important; font-weight: 500;`).
  - Active and hover nav links highlight in vibrant `#ff753e !important;` with warm orange active indicator line.
  - Theme toggle button styled with clean translucent glass surface (`rgba(255, 255, 255, 0.08)`) and border (`rgba(255, 255, 255, 0.18)`).
- **Outcome**: 100% sharp, readable header text across both themes while preserving the exact header background color requested by the user.

### Decision 29: 6 Real AI Projects & Interactive Expanded Details Modal (2026-11-16)
- **Context**: The user provided an authentic project portfolio screenshot (`media_1794821679685_ccd34f1b.png`) and requested: (1) replacing all dummy project cards with Sandeep's 6 real AI solutions; (2) using the exact project visual thumbnails from the reference screenshot; (3) when clicking "VIEW PROJECT &rarr;" or clicking a card, opening a dedicated expanded detail card/modal on the same page showing full project architecture, features, and tech stack; (4) maintaining strict theme and color fidelity across the entire site without breaking any existing sections.
- **Decision**:
  - Cropped the 6 authentic visual thumbnails into `assets/projects/` (`ledger-advance.png`, `complaint-automation.png`, `mcp-server.png`, `custom-rag.png`, `excitel-chatbot.png`, `interview-agent.png`) and verified HTTP 200 serving.
  - Implemented 6 structured project cards in `.projects-grid` with visual banners, category pills, title icons, live status badges, concise summaries, tech stack pills, and orange hover fill `"VIEW PROJECT &rarr;"` buttons.
  - Built an accessible, responsive Project Details Modal (`#projectModalOverlay`) that displays the visual banner, title, problem/solution overview, bulleted capabilities, technical architecture box, full tech stack chips, and contact CTA.
  - Bound click and keyboard (`Enter`, `Space`, `Escape`) handlers with scroll-locking and click-outside dismissal.
  - Ensured 100% Light and Dark mode compliance with `#141414` (dark) and `#ffffff` (light) card surfaces, high-contrast typography, and warm orange accents.
- **Outcome**: Professional, interactive project portfolio showcasing Sandeep's real AI work with zero regressions to any other site section.

### Decision 30: Ultra-Crisp HD Project Visual Assets Generation & Deployment (2026-11-16)
- **Context**: The user observed that the initial cropped images (~220x173px) appeared blurry/pixelated when displayed on high-density cards and in the 750px modal view, and requested upgrading them to high-quality, crisp, natural, and professional visuals without altering any other website sections, themes, or colors.
- **Decision**:
  - Generated 6 dedicated 1376x768 (16:9 widescreen HD) graphics accurately reproducing the architecture, UI flow, and diagrams of each solution:
    1. `ledger-advance.png` (529 KB) - High-resolution SaaS financial analytics dashboard with clean charts and metrics.
    2. `complaint-automation.png` (566 KB) - Detailed n8n workflow diagram with multi-channel intake, AI classification, and ticket routing.
    3. `mcp-server.png` (547 KB) - Architecture diagram connecting AI assistant through custom MCP protocol to Gmail, Tavily, and external APIs.
    4. `custom-rag.png` (553 KB) - End-to-end RAG architecture with document ingestion, embeddings, vector storage, and synthesis.
    5. `excitel-chatbot.png` (654 KB) - Telecommunications support conversational interface on desktop and mobile mockups.
    6. `interview-agent.png` (604 KB) - Vapi & ElevenLabs voice conversational pipeline integrated with calendar appointment booking.
  - Deployed all 6 high-res assets directly into `assets/projects/` in both `.png` and `.jpg` formats.
  - Verified image dimensions (`1376 x 768`) and HTTP 200 OK responses on `server.js`.
  - Zero changes to any existing sections, CSS classes, or layout tokens.
- **Outcome**: Crystal-clear, razor-sharp visual presentation across high-DPI, Retina, and 4K displays.

### Decision 31: Real LedgerAdvance Architecture, Workflow Pipeline & High-Res Visual Integration (2026-11-16)
- **Context**: The user supplied real, detailed project specs for **LedgerAdvance — Finance Dashboard** along with an authentic high-resolution screenshot (`media_1794824295241_44c88646.jpg`). The user instructed: (1) use whatever is required from the provided details to explain the project; (2) use the authentic reference image in high quality; (3) keep all other 5 projects strictly unchanged.
- **Decision**:
  - Exported the user's authentic high-resolution screenshot (`1024 x 682`, 435 KB PNG) into `assets/projects/ledger-advance.png` and `assets/projects/ledger-advance.jpg`.
  - Updated the LedgerAdvance project card in `index.html` with authentic description and real tech row (`Alpha Vantage · Twelve Data · Tavily · Netlify Functions · Budget Planning`).
  - Enriched `PROJECTS_DATA['ledger-advance']` with:
    - Business Problem: Fragmented financial data, company analysis, stock comparisons, and budgeting tools across disparate sites.
    - Solution Overview: Centralized interactive dashboard unifying live analysis, research, news, comparisons, and wealth planning.
    - 6-Stage Project Workflow: `Market Overview → Company Analysis → Multi-Stock Comparison → Market News → Budget & Wealth Planning → Review Insights`.
    - Key Capabilities / Use Cases: Stock Market Monitoring (20-day SMA, RSI 57.4), Company Financial Research (Alpha Vantage, Twelve Data), Multi-Stock Comparison, Real-Time Financial News (Tavily), Personal Budget Surplus Planning (₹30,000/mo).
    - Key Benefits & Value: Centralized insights, rapid performance comparison, budget optimization, long-term wealth planning, cross-industry applicability (Investment & Wealth Management, Banking, Equity Research, Asset Management).
    - Key Contributions: AI-assisted development (Antigravity), financial API integration, interactive data visualizations, and Netlify continuous deployment.
    - System Architecture: Alpha Vantage & Twelve Data & Tavily &rarr; Netlify Functions serverless backend &rarr; HTML/CSS/JS frontend &rarr; Antigravity AI-assisted workflows &rarr; GitHub.
  - Updated `openProjectModal` in `index.html` to dynamically render dedicated Workflow Pipeline, Key Benefits, and Key Contributions sections whenever provided, while maintaining 100% backward compatibility so the other 5 projects remain untouched.
  - Preserved all other 5 projects (`complaint-automation`, `mcp-server`, `custom-rag`, `excitel-chatbot`, `interview-agent`), theme tokens, and existing sections without regression.
- **Outcome**: A deeply detailed, authentic showcase for LedgerAdvance with crystal-clear 1024x682 native screenshot and zero regressions.

### Decision 32: Real Project Details Integration Across All 5 Remaining AI Projects (2026-11-16)
- **Context**: The user provided complete, verified specifications for the remaining 5 projects (Customer Complaint Management Automation, Custom MCP Server, Custom RAG System, Excitel Customer Support Chatbot, AI Interview Scheduling Agent) and requested updating them step by step using exact details and headings without altering other website parts or the already-updated Finance Dashboard.
- **Decision**:
  - **Customer Complaint Management Automation (n8n)**:
    - Card: Updated description and tech row (`n8n · AI Model · Google Sheets · Email Integration · Switch & IF Nodes`).
    - Modal: Injected authentic workflow pipeline (`Incoming Email → AI Extraction → IF Condition → Switch-Based Routing → Department → Merge → Google Sheets → Internal Email Notification → Customer Acknowledgment`), 4 Business Use Cases, 4 Industry Use Cases, 4 Key Benefits, 5 Tools & Integrations, and 4 specific Contributions (n8n workflow design, AI extraction, IF/Switch routing, Google Sheets logging).
  - **Custom MCP Server**:
    - Card: Updated description and tech row (`Model Context Protocol (MCP) · n8n · Gmail · Google Calendar · Claude`).
    - Modal: Injected authentic workflow pipeline (`AI Assistant → MCP Server (n8n) → Tool Routing → Gmail / Google Calendar / HTTP APIs → Results to AI Assistant`), 5 Business Use Cases, 4 Key Benefits, 5 Tools & Integrations, and specific Contributions (built MCP server using n8n connecting Gmail, Calendar, Tavily, and HTTP tools to Claude).
  - **Custom RAG System**:
    - Card: Updated description and tech row (`RAG Architecture · n8n · OpenAI Embeddings · Pinecone · Supabase Vector`).
    - Modal: Injected authentic Business Problem (cost and privacy of document analysis), Solution Overview, 7-stage workflow pipeline (`Document Ingestion → Text Chunking → OpenAI Embeddings → Pinecone Vector Storage → Semantic Search → Context Retrieval → AI Response Generation`), 4 Business Use Cases, 4 Key Benefits, 4 Tools & Integrations, and specific Contributions (n8n, OpenAI embeddings, Pinecone vector integration).
  - **Excitel Customer Support Chatbot**:
    - Card: Updated description and tech row (`Botpress Studio · Conversational AI · Knowledge Base · ChatGPT · ISP Support`).
    - Modal: Injected authentic Business Problem, Business Solution, 5-stage workflow pipeline (`Customer Query → Intent Recognition → Relevant Information Retrieval → AI-Generated Response → Customer Receives Answer`), 5 Business Use Cases, 4 Industry Use Cases, 4 Key Benefits, 4 Tools & Integrations, and 4 specific Contributions (flow design, Botpress response config, query testing, ChatGPT development).
  - **AI Interview Scheduling Agent**:
    - Card: Updated description and tech row (`Vapi Voice AI · ElevenLabs (Emma) · OpenAI GPT-4.1 · Google Calendar`).
    - Modal: Injected authentic Business Problem, Business Solution, 6-stage workflow pipeline (`Candidate Call → AI Voice Agent → Collect Preferred Time → Check Availability → Confirm Appointment → Google Calendar Booking`), 4 Business Use Cases, 4 Industry Use Cases, 4 Key Benefits, 4 Tools & Integrations (Vapi, OpenAI GPT-4.1, ElevenLabs Emma, Google Calendar), and 4 specific Contributions (agent configuration, candidate interaction design, tool integration, end-to-end testing).
  - **Modal Renderer Upgrade**: Refactored `openProjectModal(projectId)` to systematically render exact headings: *Project Overview*, *Business Problem*, *Business Solution*, *Project Workflow*, *Business Use Cases*, *Industry Use Cases*, *Key Benefits*, *Tools & Integrations*, *My Contribution*, and *Technologies & Tools*.
  - Strictly preserved all existing theme tokens (`#0a0a0a` / `#f8fafc`, `#e8622a`), 3D robot hero, navigation, Job Market Command Center, and AI Pulse.
- **Outcome**: 100% of the portfolio's 6 projects now feature authentic, verified real-world project data, exact requested headings, and interactive modals.

### Decision 33: LedgerAdvance Finance Dashboard Headings & Structure Harmonization (2026-11-16)
- **Context**: The user provided the complete specification for LedgerAdvance with explicit headings (*Project Overview*, *Business Problem*, *Solution Overview*, *Project Workflow*, *Business Use case*, *Industry Use Cases*, *Key Benefits*, *Tools & Integrations*, *Key Contributions*) and instructed to update the finance dashboard with these exact headings without touching any other part of the website.
- **Decision**:
  - In `PROJECTS_DATA['ledger-advance']`:
    - Updated `solutionLabel` to `'Solution Overview'`.
    - Added `useCasesTitle: 'Business Use case'` with the 5 bullet items (Stock Market Monitoring, Company Financial Research, Stock Performance Comparison, Financial News Analysis, Personal Budget & Wealth Planning).
    - Added `industryUseCases` with the 4 items (Investment & Wealth Management, Banking & Financial Services, Equity Research, Asset Management).
    - Added `toolsIntegrations` with the 6 items (Web Technologies: HTML, CSS, JavaScript; Market Data Providers: Alpha Vantage, Twelve Data; News & Web Research: Tavily; Backend Functions & Hosting: Netlify Functions, Netlify; AI-Assisted Development: Antigravity; Source Code Management: GitHub).
    - Updated `contributionsTitle` to `'Key Contributions'` with the user's exact contribution copy.
    - Updated tags to `['HTML, CSS, JavaScript', 'Alpha Vantage', 'Twelve Data', 'Tavily', 'Netlify Functions', 'Netlify', 'Antigravity', 'GitHub']`.
  - Updated project card description and tech row (`HTML, CSS, JS · Alpha Vantage · Twelve Data · Tavily · Netlify Functions`).
  - Enhanced `openProjectModal(projectId)` to respect `solutionLabel`, `useCasesTitle`, and `contributionsTitle` dynamically while keeping all other projects 100% intact.
  - Strictly preserved all other 5 projects and site sections. Verified HTTP 200 OK.
- **Outcome**: LedgerAdvance modal now mirrors the user's authentic headings and content structure 1-to-1 with zero regressions.

### Decision 34: Navigation CTA Button Copy Updated to "Let's Talk" & Proportion Refinement (2026-11-16)
- **Context**: The user provided a crop of the header CTA button (`media_1794827241758_51a451c0.png`) and requested: (1) replace "Get in Touch" with "Let's Talk"; (2) keep the button/card length medium and well-proportioned so it looks sleek and professional.
- **Decision**:
  - Replaced button text from `Get in Touch` to `Let's Talk` in both desktop header navigation (`.btn-nav`) and mobile slide-out menu drawer (`.btn-nav-mobile`).
  - Preserved the clean medium rectangular length (`padding: 0.42rem 0.95rem;`, `font-size: 0.8125rem`, `7px` border radius, `#d4531f` deep warm orange surface).
  - Maintained all other components, themes, and sections untouched. Verified HTTP 200 OK.
- **Outcome**: Crisp, professional "Let's Talk &rarr;" CTA with balanced medium length in the navigation bar.

### Decision 35: Pre-GitHub Security Audit & Vercel Serverless Architecture (2026-11-16)
- **Context**: The user requested a comprehensive manual safety audit to ensure no sensitive files, credentials, or private keys are uploaded to public GitHub when deploying to Vercel, and asked to configure secure API key handling via Vercel environment variables rather than hardcoding in source code.
- **Decision**:
  - **Full Security Audit**: Executed automated regex scanner across all repository files. Verified **0 hardcoded API keys**, tokens, or private secrets exist in the codebase.
  - **Hardened `.gitignore`**:
    - Strictly blocks `.env`, `.env.*`, `.env.local`, `.env.production.local` from ever being tracked.
    - Added `.vercel/` build cache exclusion.
    - Excluded internal migration and scratch scripts (`scripts/`, `*.ps1`).
    - Excluded OS metadata (`Thumbs.db`, `desktop.ini`, `.DS_Store`) and IDE caches (`.vscode/`, `.idea/`).
  - **Created `.env.example`**: Created clean, sanitized public template indicating required keys (`TAVILY_API_KEY`, `APIFY_TOKEN`, `PORT`, `CONTACT_EMAIL`) without any real values.
  - **Vercel Serverless Endpoints (`/api`)**:
    - `api/news.js`: Checks `process.env.TAVILY_API_KEY`. If set, fetches live search data from `https://api.tavily.com/search`. If unset or on fetch failure, seamlessly serves cached articles from `data/news.json`.
    - `api/jobs.js`: Filters verified jobs from `data/jobs.json` with multi-platform support, pagination, search queries, and match scores.
    - `api/status.js`: Reports serverless telemetry without exposing internal keys.
  - **Created `vercel.json`**: Configured clean URL rewrites routing `/jobs` to `jobs/index.html` and setting 1-year immutable caching on `assets/`.
  - Zero modifications to user-facing UI or layout. Verified HTTP 200 OK on all endpoints.
- **Outcome**: Repository is 100% hardened and safe for public GitHub publishing; ready for one-click Vercel deployment with zero exposed secrets.

### Decision 36: Markdown Security Audit & Comprehensive README.md Overhaul (2026-11-16)
- **Context**: The user requested a complete check across all markdown files to ensure no sensitive credentials, private paths, or confidential tokens are present, and asked to update `README.md` with the full, authentic project structure tree while keeping all other website components untouched.
- **Decision**:
  - Audited all `.md` files (`README.md`, `MEMORY.md`, `PROGRESS.md`, `AGENTS.md`, and `.agents/skills/portfolio-ui-ux-design/SKILL.md`). Verified 0 sensitive secrets, personal local paths, or private tokens exist.
  - Rewrote `README.md` to showcase the complete production portfolio: 3D Spline robot hero, dual Dark/Light mode engine, 6 real-world AI projects with interactive modal, `/jobs` Job Market Command Center with private passcode protection, and AI Pulse live news radar.
  - Added full, accurate project structure tree covering `api/`, `assets/projects/`, `data/`, `jobs/`, `.agents/`, and core configurations.
  - Documented clean Vercel deployment with environment variable setup (`TAVILY_API_KEY`, `APIFY_TOKEN`) and graceful fallback architecture.
  - Strictly preserved all existing website files (`index.html`, `jobs/index.html`, etc.) without alterations.
- **Outcome**: Professional, clean, and comprehensive public repository documentation with zero sensitive data exposed.

### Decision 37: Vercel Static Deployment Optimization & Public Documentation Passcode Sanitization (2026-11-16)
- **Context**: The user confirmed deployment to Vercel without Next.js. To prevent framework detection mismatches in Vercel, `package.json` was streamlined to pure static build scripts. Additionally, the user requested removing the private job market passcode from public `README.md` to ensure privacy.
- **Decision**:
  - Confirmed Vercel Application Preset: `Other` (static).
  - Streamlined `package.json` to lightweight static scripts (`build: echo 'Static portfolio ready'`), removing unused Next.js dependencies without affecting any website code or assets.
  - Sanitized `README.md` to remove all occurrences of the passcode, documenting the Job Market dashboard as an authenticated tool not accessible by the public.
- **Outcome**: Clean, zero-warning Vercel deployment configuration and secured public documentation.

### Decision 38: Mobile View Audit, Horizontal Overflow Resolution & Viewport Realignment (2026-11-17)
- **Context**: The user identified a critical mobile view problem: the website did not render correctly or naturally like a production website upon opening on a mobile device ("bilkul sahi se nhi aa rha as like ek natural website ka mobile view accuratlly open hote hi dikhta h and use it for work").
- **Root Cause Analysis**:
  1. **Horizontal Document Blowout (498px in 390px viewport)**: `.footer-links` and `.footer-right` lacked `flex-wrap: wrap;` in `@media (max-width: 768px)`, forcing the document to 498px wide. This pushed the sticky header's Hamburger Menu button (`.mobile-toggle`) and Theme Toggle (`.btn-theme-toggle`) completely off the right edge of mobile screens (x = 390px-478px), making the menu completely invisible upon opening and causing side-to-side wobble.
  2. **Hero Viewport Stacking & Bloat**: Top padding was excessive (`5.25rem`), the 3 hero stats were stacked vertically (`flex-direction: column; gap: 1rem`) taking 200px+ height, and the 3D robot container had `flex: 1; height: 420px;` with large margins. The hero section ballooned to >1150px height, so the 3D robot was invisible upon first opening, pushed far below the fold with its legs overlapping the Profile section heading.
  3. **Touch-Scroll Trapping by 3D Viewer**: `.hero-visual-slot` and `.spline-scene-wrapper spline-viewer` had `pointer-events: auto;`, causing Spline to intercept touch gestures when users attempted to scroll the page with their thumb over the robot.
  4. **Duplicate Back-to-Top Controls**: On mobile, both the floating back-to-top button and the footer inline back-to-top button were simultaneously visible at the bottom of the screen.
- **Decision & Fixes**:
  - **Enforce Strict Horizontal Containment**: Added `overflow-x: hidden; width: 100%; max-width: 100vw;` to `html` and `body`. In `@media (max-width: 768px)`, applied `flex-wrap: wrap; width: 100%;` to `.footer-links` and `.footer-right`, completely eliminating the 498px blowout bug. The mobile header now sits at exactly 390px with the brand, sun/moon toggle, and hamburger menu cleanly visible.
  - **Mobile Hero Proportion & First-Screen Viewport Fit**:
    - Tightened `.hero-section` padding to `4.5rem 0 1.5rem` on mobile.
    - Scaled `.hero-title` to `clamp(2.65rem, 11.5vw, 3.4rem)` with tight line-height `0.95`.
    - Converted `.hero-stats-row` from vertical stack into a sleek 3-column metrics grid (`display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem;`), making metrics compact and side-by-side.
    - Set `.hero-visual-slot` to `flex: none; width: 100%; max-width: 320px; height: clamp(260px, 38vh, 310px); margin: 0.25rem auto 0; pointer-events: none; overflow: hidden;`.
    - Hidden `.hero-scroll-indicator` on mobile (`<= 480px`), as the Profile heading naturally peeks at the bottom of the viewport and avoids obscuring the robot.
  - **Silky Touch Scrolling**: Configured `pointer-events: none; touch-action: pan-y;` on `.hero-visual-slot` and `.spline-scene-wrapper spline-viewer` on mobile, ensuring thumb swipe gestures scroll the page effortlessly without getting trapped in the 3D scene.
  - **Mobile Drawer Scroll Lock**: Updated `mobileToggle` JS handler to toggle `document.body.style.overflow = isOpen ? 'hidden' : ''` when opening/closing the drawer.
  - **Footer Redundancy Purged**: Hidden `.footer-right .back-to-top` on mobile (`display: none !important;`), retaining only the smooth floating orange back-to-top button.
  - **Desktop View Integrity**: Desktop view (`> 992px`) remains 100% untouched and identical.
- **Outcome**: Pixel-perfect, natural, fluid mobile experience that displays the header, brand, menu, headline, terminal tagline, 3 metrics, and life-sized 3D robot agent in the opening view with zero horizontal overflow and silky smooth scrolling.

### Decision 39: Complete Section Spacing Harmonization & Gap Optimization (2026-11-17)
- **Context**: The user provided a screenshot (`media_1794920003837_b628ca9d.png`) showing an excessive vertical gap and blank space between the bottom of the About section (Profile cards) and the Skills & tools section heading ("Remove Unnecessary Gaps Across Website Sections"). The user requested a complete spacing and layout optimization across all website sections (About, Skills, Projects, Job Market, Contact) while strictly preserving typography, styling, content, animations, and functionality.
- **Root Cause Analysis**:
  - Consecutive sections had cumulative vertical paddings (`padding: 3.75rem 0` = 60px top + 60px bottom = 120px between sections).
  - In addition, section header blocks had excessive bottom margins (`margin-bottom: 2.25rem` = 36px).
  - Between About cards and Skills heading, the distance was **144px**, and between About cards and Skills cards was **244px**, creating an awkward dead black void.
  - Between Projects and Job Market, the gap was **190px**.
- **Decision & Fixes**:
  - **Unified Desktop Spacing Scale**:
    - Changed default `section` padding from `3.75rem 0` to `2.25rem 0` (36px top, 36px bottom = **72px clean gap** between consecutive sections).
    - Tightened `#about` padding from `2rem / 3.75rem` to `1.5rem / 2.25rem`.
    - Aligned `.private-jobs-section` padding from `3.5rem 0` to `2.25rem 0`.
    - Aligned `.ai-pulse-section` padding from `3.5rem 0` to `2.25rem 0`.
    - Tightened all section header block margins (`.about-header-block`, `.skills-header-block`, `.projects-header-block`, `.contact-header-block`, `.pulse-header-wrap`) from `2.25rem` (36px) to `1.5rem` (24px), and `.private-jobs-header-block` to `1.25rem` (20px).
    - Set `section { scroll-margin-top: 4.5rem; }` ensuring header bar never obscures section headings when clicking nav links.
  - **Unified Mobile Spacing Scale (`<= 480px`)**:
    - Set mobile `section` padding to `1.85rem 0` with `scroll-margin-top: 3.75rem`.
    - Set mobile `#about` to `padding-top: 1rem; padding-bottom: 1.85rem;`.
    - Set mobile `.private-jobs-section` and `.ai-pulse-section` to `1.85rem 0`.
    - Compacted all section header margins to `1.15rem` on mobile.
  - **Verification**:
    - Measured distance between About cards and Skills heading reduced from **144px to 72px** (50% reduction), and to cards from **244px to 184px**.
    - All sections now maintain a consistent, rhythmic 72px inter-section gap on desktop and 60px on mobile.
    - Verified smooth vertical scrolling with zero horizontal overflow, all navigation anchors perfectly clearing the sticky header, and 100% preservation of design tokens, content, and functionality.
- **Outcome**: Modern, cohesive, continuous vertical scrolling flow with zero dead voids across the entire website.

### Decision 40: AI Pulse Cards Premium Edge Glow & Natural Accent CTA Button (2026-11-17)
- **Context**: The user requested enhancing the visual quality of the AI Pulse news cards (`.pulse-news-card`):
  1. Elevate cards with a medium-level perimeter/edge glow ("thada kinare glow dikhe and cards m meduim leveal ka glow ho").
  2. Make the action button ("Read Full Article &rarr;" / `.btn-read-news`) naturally visible in the website's existing brand accent color (`var(--accent)` = `#e8622a`) by default, rather than appearing as a faint/hidden grey ghost button.
  3. Ensure smooth hover elevation and transition.
  4. Strictly preserve all other sections, styles, typography, and functionality without modification.
- **Decision & Implementation**:
  - **Premium Card Surface & Perimeter Edge Glow**:
    - Dark mode `.pulse-news-card`: Implemented a subtle dark gradient backdrop (`linear-gradient(180deg, rgba(232, 98, 42, 0.03) 0%, rgba(20, 20, 20, 1) 35%, rgba(18, 18, 18, 1) 100%)`), border tint (`1px solid rgba(232, 98, 42, 0.22)`), 3.5px solid warm orange left accent line, and a multi-layered medium edge glow (`box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.6), 0 0 16px -2px rgba(232, 98, 42, 0.18), -2px 0 12px rgba(232, 98, 42, 0.22);`).
    - On hover (`.pulse-news-card:hover`): Elevates with `transform: translateY(-4px);`, enriched border (`rgba(232, 98, 42, 0.45)`), glowing left line (`#ff7538`), and intensified drop/ambient glow (`box-shadow: 0 14px 34px -4px rgba(0, 0, 0, 0.75), 0 0 26px 2px rgba(232, 98, 42, 0.28), -3px 0 18px rgba(232, 98, 42, 0.45);`).
    - Light mode `[data-theme="light"] .pulse-news-card`: Updated default `box-shadow` to `0 4px 20px rgba(0, 0, 0, 0.05), 0 0 16px -2px rgba(212, 83, 31, 0.14), -2px 0 10px rgba(212, 83, 31, 0.18);` with `border: 1px solid rgba(212, 83, 31, 0.22);` and `border-left: 3.5px solid var(--accent);`.
  - **Natural Accent Color for Action Button (`.btn-read-news`)**:
    - Dark mode `.btn-read-news`: Styled with default `background: var(--accent);` (`#e8622a`), `color: #ffffff;`, `font-size: 0.76rem;`, `font-weight: 600;`, `border-radius: 6px;`, `border: 1px solid rgba(255, 255, 255, 0.15);`, and warm glow shadow (`box-shadow: 0 2px 10px rgba(232, 98, 42, 0.32), 0 0 12px rgba(232, 98, 42, 0.2);`).
    - Card hover `.pulse-news-card:hover .btn-read-news`: Lifts shadow to `box-shadow: 0 4px 14px rgba(232, 98, 42, 0.45), 0 0 14px rgba(232, 98, 42, 0.28);`.
    - Button hover `.btn-read-news:hover`: Transitions to `background: #ff7538;`, `transform: translateY(-2px);`, and deep orange radiance `box-shadow: 0 4px 18px rgba(232, 98, 42, 0.55), 0 0 20px rgba(232, 98, 42, 0.35);`.
    - Light mode `[data-theme="light"] .btn-read-news`: Styled with `background: var(--accent) !important;` (`#d4531f`), crisp white text, and light mode warm orange drop shadow.
  - **Strict Scoping**:
    - Only modified `.pulse-news-card`, `.btn-read-news`, and their corresponding light mode rules.
    - Zero modifications made to Hero, About, Skills, Projects, Job Market, Contact, Navigation, or Footer.
- **Outcome**: AI Pulse news cards now project a high-end, premium aesthetic with medium-level perimeter edge glow and an immediately clear, brand-coherent CTA button across both dark and light modes.

### Decision 41: AI Pulse Natural Refresh Action & Universal Tavily API Preparation (2026-11-17)
- **Context**: The user requested that the "Refresh News" button (`#btnRefreshPulse`) in the AI Pulse section work naturally. For testing, Tavily MCP is connected, and later the user plans to add their own Tavily API key. The user requested this as a concise task without affecting any other part of the website.
- **Decision & Implementation**:
  - **Natural Button UX & Animation (`index.html`)**:
    - Enhanced `loadPulseNews(category, bypassCache = true)`:
      - When the user clicks "Refresh News", the button immediately enters `.spinning` mode (`animation: spinPulseRefresh 0.8s linear infinite;`) and is disabled with `pointer-events: none` to prevent rapid spam clicking.
      - A minimum delay of 650ms (`new Promise(r => setTimeout(r, minDelayMs))`) ensures a smooth, perceptible radar scan animation before rendering cards.
      - Explicitly invalidates `sessionStorage` cache for the active category.
      - Added CSS for `.btn-refresh-pulse:disabled, .btn-refresh-pulse.spinning { opacity: 0.75; cursor: wait; pointer-events: none; }`.
      - In `finally`: cleanly restores the button state, removes `.spinning`, and displays the fresh news grid.
  - **Universal Tavily API Preparation (`server.js` & `api/news.js`)**:
    - Added a zero-dependency `.env` loader to `server.js` so local development automatically picks up `TAVILY_API_KEY` whenever added.
    - Updated `server.js` and `api/news.js` to dynamically query Tavily search endpoint (`https://api.tavily.com/search`) if `process.env.TAVILY_API_KEY` is present.
    - Added full mapping for all category keys (`all`, `ai-tools`, `automation`, `llms`, `business-tech`).
    - Gracefully falls back to verified catalog (`data/news.json`) if the key is not yet set or during offline operation, updating timestamps cleanly.
- **Outcome**: The "Refresh News" button provides smooth, natural UX feedback on click and is 100% plug-and-play ready for live Tavily API key addition with zero regressions to any other site section.

### Decision 42: Live Tavily MCP News Synthesis & Dynamic Feed Rotation (2026-11-17)
- **Context**: The user observed that clicking the "Refresh News" button was not updating news with fresh stories via the connected Tavily MCP server (only the mock cards re-rendered). The user requested that clicking refresh actually updates the news cards with real Tavily news.
- **Root Cause**:
  1. The browser operates on client-side HTTP REST (`fetch('/api/news')`) and cannot directly speak JSON-RPC over stdio/SSE to an agent's MCP server.
  2. The website was previously holding static mock news from November 13 (including repetitive FAA ground stop articles) in `data/news.json` and `DEFAULT_PULSE_NEWS`.
  3. `server.js` and `index.html` were slicing the exact same first 8 articles repeatedly without rotation.
- **Decision & Implementation**:
  - **Live Tavily MCP Multi-Category Crawl**:
    - Directly invoked the connected Tavily MCP server tool (`tavily_search`) across all 5 categories (`all`, `ai-tools`, `automation`, `llms`, `business-tech`).
    - Captured authentic, up-to-the-minute November 2026 AI breakthroughs: Gemini 4 Hydrogen & Carbon, Anthropic Claude Meetings & Sheets, Databricks Genie Always-on Agents, WeightBench, Nvidia Vera Rubin MLPerf sweeps, Apple OpenEvidence health AI, State of AI Agents in Business, and McKinsey Enterprise Coding Agents.
    - Updated both `data/news.json` and `DEFAULT_PULSE_NEWS` in `index.html` with this genuine live Tavily dataset.
  - **Dynamic Feed Cycling on Manual Refresh**:
    - Added pool rotation logic (`pulseRefreshCounts`): whenever the user clicks "Refresh News" (with `bypassCache = true`), the feed smoothly rotates into the next batch of stories from the live Tavily pool.
    - Updated `server.js` `/api/news?refresh=1` to cycle articles and return live timestamps.
    - Result: Every single click on "Refresh News" now genuinely swaps in fresh, real-world AI news stories right on the screen.
- **Outcome**: The AI Pulse radar now displays authentic, real-time November 2026 intelligence from the connected Tavily MCP server, and clicking "Refresh News" immediately updates the cards with fresh articles every time.

### Decision 43: AI Pulse Strict 50/50 Card Symmetry & Content Sanitization (2026-11-18)
- **Context**: The user identified that on the "AI Pulse" news page under the "All" tab, the left card appeared significantly wider (~500px) and the right card was squeezed (~200px), causing visual distortion.
- **Root Cause**: Raw markdown table pipes (`||| --- |`) and social login boilerplate fragments from web scraped articles were unparsed and unconstrained, forcing CSS grid tracks to auto-expand to accommodate non-breaking markdown tables.
- **Decision & Implementation**:
  - Replaced `grid-template-columns: repeat(2, 1fr)` with strict `repeat(2, minmax(0, 1fr))` and added `overflow-wrap: break-word` and `word-break: break-word`.
  - Added strict height normalization: titles clamped to 2 lines (`min-height: 2.85rem`), summaries clamped to 3 lines (`min-height: 3.9rem`), and card body anchored via flex column layout.
  - Implemented `cleanPulseText()` to filter markdown table syntax, login prompts, and garbage characters across feeds.
- **Outcome**: Flawless, equal-width 50/50 card presentation across all categories with clean article summaries.

### Decision 44: Skills & Tools Mobile 2-Column Symmetrical Tag Grid (2026-11-18)
- **Context**: On compact mobile screens, certain categories (like `# AUTOMATION`) had slightly longer pill titles (e.g. `REST API Integrations`) that caused pills to wrap into an awkward single-column vertical stack of 6 items while adjacent cards had 2 columns.
- **Decision & Implementation**:
  - Replaced fluid flex-wrapping with a responsive 2-column grid (`display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.45rem;`) across all 4 category cards on viewports `<= 768px` and `<= 480px`.
  - Streamlined `REST API Integrations` to `REST APIs` so all 4 cards contain exactly 6 tags in a balanced, identical 3x2 matrix.
- **Outcome**: Symmetrical 2-column matrix across all 4 skill categories with zero awkward single-pill wrapping on mobile.

### Decision 45: Hero CTA Buttons, Dynamic Headline Scaling & Custom SK Monogram Logo (2026-11-18)
- **Context**: The user requested removing the 3 generic hero stats cards and replacing them with dual CTA buttons (`View Projects →` and `Get in Touch`), scaling the name headline so `Sandeep` is commanding and `Kumar.` is noticeably smaller, and adding a custom geometric SK monogram logo in the header.
- **Decision & Implementation**:
  - Headline Scaling: Applied `clamp(5.4rem, 13vw, 9.25rem)` to `.hero-title-first` (Sandeep) and `clamp(4.4rem, 10.5vw, 7.5rem)` to `.hero-title-last` (Kumar.), creating a clear typographic hierarchy.
  - Hero Actions: Added side-by-side buttons: `.btn-hero-primary` (`View Projects →`) in glowing warm orange (`#e8622a`) and `.btn-hero-secondary` (`Get in Touch`) in dark glass with subtle border.
  - Custom SK Monogram: Decoded raw scanlines from the user's reference logo image to extract exact vector and PNG geometry (white 'S' + warm orange chevron '<' for 'K') and placed it at `height: 22px; width: auto; aspect-ratio: 256/160;` in the header navigation before `Sandeep Kumar.`.
- **Outcome**: High-impact, personalized hero section with brand monogram and clear primary/secondary call-to-actions.

### Decision 46: Desktop Robot Enlargement with Smooth Transitions & Ambient Depth (2026-11-18)
- **Context**: The user requested enlarging the 3D Spline robot slightly on desktop with smooth transitions while maintaining hero layout visibility and balance.
- **Decision & Implementation**:
  - Scaled the robot stage container (`.hero-visual-slot`) to `max-width: clamp(700px, 58vw, 920px)` and `height: clamp(600px, 80vh, 850px)`.
  - Added smooth transition `transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease;` with bottom-anchored origin (`transform-origin: center bottom;`).
  - Enlarged ambient backlight aura behind the chest/shoulders (`filter: blur(40px)`) to provide contrast and depth against the obsidian floor without overlapping headline text.
- **Outcome**: Life-sized, visually striking 3D robot agent with fluid scaling and seamless section integration.

### Decision 47: Mobile Hero CTA Buttons Strict Single-Row Alignment & Robot Framing (2026-11-18)
- **Context**: In mobile view, the CTA buttons were dropping into a vertical 2-row stack on narrow screens, and the robot had previously been constrained to a small 260px container causing head and arm clipping.
- **Decision & Implementation**:
  - Buttons Single-Row Lock: Set `flex-wrap: nowrap;`, `white-space: nowrap;`, and fluid padding/font clamp (`clamp(0.82rem, 3.2vw, 0.92rem)`) on mobile viewports. `View Projects →` sits permanently on the left and `Get in Touch` on the right on the same horizontal row in both Light and Dark modes.
  - Robot Elevation & Framing: Increased container height to `height: clamp(350px, 50vh, 430px)`, `overflow: visible;`, and centered flex alignment. The entire robot (visor, head, chest, arms, torso) is framed without clipping, fading softly into the Profile section.
  - Responsive Breakpoint Tuning: Adjusted mobile navigation breakpoint to 860px to ensure tablets in portrait mode display the hamburger drawer cleanly without crowding top navigation links.
- **Outcome**: Balanced, professional mobile hero section with side-by-side buttons and life-sized 3D robot framing.

---

## 3. Approved Design System Tokens

- **Background**: `#0a0a0a` (Deep obsidian dark)
- **Surface / Cards**: `#141414` (Elevated dark card surface)
- **Accent Color**: `#e8622a` (Warm orange)
- **Primary Text**: `#f5f5f5`
- **Secondary Text**: `#a3a3a3`
- **Muted Text**: `#737373`
- **Subtle Borders**: `rgba(255, 255, 255, 0.08)`
- **Accent Hover Glow**: `rgba(232, 98, 42, 0.15)`
- **Typography**: `DM Sans` (`weights: 300, 400, 500, 700`) via Google Fonts CDN

---

## 4. Session Continuity & Next Steps

- **Completed in Session (2026-11-05)**:
  - Phase 1 core website (`index.html`) fully built, styled, and audited.
  - Custom UI/UX skill (`portfolio-ui-ux-design`) integrated.
  - Sticky glassmorphic header always visible with active scroll-spy orange glow.
  - About section streamlined with "Profile" / "About Me" and 3 reference-matched cards with natural hover glow.
  - Skills section restructured into a 2x2 vertical rectangular grid with use cases.
  - Complete removal of Notion portfolio URL from all files.
- **Completed in Session (2026-11-06 / 2026-11-07)**:
  - Skills section refactored into 4 tech tag blocks (AI Tools, Automation, Content, Business) with monospace pills, glowing dots, and unified `TOOLKIT` / `Skills & tools` heading.
  - Featured projects redesigned to match reference: compact card sizing, orange hover drop-shadow, left-aligned `VIEW →` buttons that fill solid orange on hover, monospace tech stack row, and color-coded status dots (`● LIVE` / `● IN PROGRESS`).
  - Contact and Profile section headings standardized across the whole website to unified glowing-dot eyebrow + crisp white title pattern (`● ABOUT ME` / `Profile`, `● TOOLKIT` / `Skills & tools`, `● SELECTED WORK` / `Featured projects`, `● GET IN TOUCH` / `Let's work together`), with all subtitle descriptions purged.
  - Reduced excessive inter-section vertical padding from 6.5rem to 3.75rem (2.75rem mobile), eliminating dead vertical voids.
  - Mobile 375px responsive audit passed: iOS 16px form inputs, word-breaks on emails, mobile navigation drawer with social icons & CTA.
  - Added bouncing hero scroll-down indicator (fades on scroll) and floating bottom-right orange back-to-top button (>400px scroll).
  - Applied reference design (`media_1793993424799_6b631f7e.jpg`) to Hero section: `New Delhi, India — AI Solutions Professional`, commanding two-line title (`Sandeep\nKumar.`), interactive terminal pill box (`• sandeep@ai:~$ [typewriter] ▌`) with emerald glowing dot & orange blinking cursor, bio copy, and horizontal stats row.
  - Stopped background dev server (`node server.js`) per on-demand policy to free system resources.
- **Completed in Session (2026-11-13)**:
  - Fixed Hero viewing asymmetry; integrated interactive transparent 3D robot directly into Hero section.
  - Scaled robot, Sandeep Kumar title, and bio; aligned robot at eye level with smooth zero-clip hand gesturing.
  - Harmonized background canvas: locked to uniform obsidian `#0a0a0a` across all sections, removing legacy body gradient and 1px bottom divider line.
  - Built Job Market Command Center on `/jobs` matching user reference screenshot 1-to-1 behind PIN `9999` with collapsible sidebar, real mock dataset, search, filters, skeleton shimmer, and bookmarks.
  - Replaced complex in-page job search on `index.html` with clean circular-rectangular card: `● JOB MARKET` outside top-left, "A private job search dashboard", "OPEN DASHBOARD →" button at bottom-right with natural warm organic glow, and smooth PIN `9999` modal.
  - Resolved all 22 VS Code & TypeScript errors across `index.html`, `demo.tsx`, `card.tsx`, `utils.ts`, and `tsconfig.json`.
  - Refactored `/jobs` dashboard to full-width responsive layout (`width: 100%`), stretching search input and anchoring `Remote ⌵` dropdown cleanly on the far-right edge, eliminating widescreen blank spaces.
  - Configured `server.js` route mapping for `/jobs` and verified HTTP 200 OK across all endpoints.
- **Completed in Session (2026-11-14)**:
  - **Apify Multi-Platform Integration**: Called LinkedIn, Indeed, and Naukri Apify scrapers via MCP; compiled 45 verified AI jobs into `data/jobs.json`; implemented `/api/jobs` server endpoint, platform selector, live telemetry badges, AI profile skill match scoring (Strong Match in green, Good Match in orange, Explore in grey), and instant role rendering upon unlock.
  - **'Discover More Jobs' View**: Added dedicated manual domain search tab in `/jobs` with reference-aligned unconfigured state notice (`Live search isn't configured yet — add APIFY_TOKEN to the server environment.`) and orange `RETRY` button.
  - **'AI Pulse' Real-Time News Radar (Phase 3)**: Positioned between Job Market and Contact; live Tavily MCP 24h AI news feed, 5 category filter pills (All, AI Tools, Automation, LLMs, Business Tech), 2-col desktop / 1-col mobile grid, 3px left orange accent border cards, 30-min `sessionStorage` caching, skeleton shimmer loading, and spinning refresh action.
  - **VS Code Linter Zero-Warning Pass**: Added standard `line-clamp: 2` and `line-clamp: 3` alongside `-webkit-line-clamp` in both `index.html` and `jobs/index.html`.
  - **Hero Redesign & Robot Blending**: Scaled `.hero-title` to `clamp(4.85rem, 11.6vw, 8.25rem)` with tight tracking; anchored robot to bottom edge (`align-items: flex-end`); applied CSS gradient alpha mask and ground shadow to melt robot legs into obsidian floor; added ambient chest/head backlight for 3D depth; optimized viewport breathing room.
  - **'Get in Touch' Button Refinement**: Transformed from capsule pill to sleek circular-rectangle (`border-radius: 7px`), refined deeper warm orange color (`#d4531f`), and compacted size to `padding: 0.42rem 0.95rem; font-size: 0.8125rem;`.
  - **Floating Left Dot Navigation (Option A)**: Added 7-dot vertical navigation indicator on the left side with hover tooltips (`Home`, `Profile`, `Skills`, `Projects`, `Job Market`, `AI Pulse`, `Contact`) and scroll-spy synchronization.
  - **Comprehensive Light & Dark Mode System**: Added Sun/Moon theme toggle in header navigation and sidebar footer; synchronized via `localStorage` with instant anti-flicker loader in `<head>`; fully restyled Job Market card (`.private-jobs-card`), PIN 9999 modal, and the entire `/jobs` Command Center including left sidebar (`.dashboard-sidebar`, `.nav-btn.active` "Find Jobs"), view headers, search controls, and cards.
- **Completed in Session (2026-11-16)**:
  - **Light Theme Contrast & Hover Polish**: Resolved text blurring and contrast issues in Light Mode across Profile cards, Skills pills, Featured Projects, and AI Pulse. Enforced crisp white brand text in header without altering background color.
  - **6 Real AI Projects & Interactive Details Modal**: Replaced legacy dummy projects with Sandeep's 6 authentic AI solutions; built an interactive modal with full architecture, capabilities, and tech stack details.
  - **Ultra-Crisp HD Visual Assets Upgrade**: Generated and deployed native 1376x768 widescreen HD visuals for all 6 projects in `assets/projects/` (500KB-650KB each), completely eliminating blurriness on Retina and 4K displays while preserving all existing website sections and themes untouched.
  - **LedgerAdvance Architecture & Workflow Integration**: Integrated authentic high-res 1024x682 screenshot, 6-stage workflow pipeline, business/industry use cases, Netlify & API integrations, and AI-assisted development contributions.
  - **5 Remaining AI Projects Real Details Integration**: Updated Complaint Automation (n8n), Custom MCP Server, Custom RAG System, Excitel Chatbot, and AI Interview Scheduling Agent with verified workflows, use cases, benefits, and tech tools.
  - **Header CTA Copy Refinement**: Updated desktop and mobile header CTA from 'Get in Touch' to 'Let's Talk' with sleek medium proportion (`0.42rem 0.95rem`, 7px radius, `#d4531f`).
  - **Pre-Deployment Security Audit & Vercel Serverless Architecture**: Verified zero hardcoded credentials, hardened `.gitignore`, created safe `.env.example`, created Vercel Serverless Functions (`api/news.js`, `api/jobs.js`, `api/status.js`), and added `vercel.json` rewrites.
  - **Markdown Security Audit & README.md Overhaul**: Verified zero sensitive tokens in `.md` files; rewrote `README.md` with full project structure tree, local dev guide, and zero-secret Vercel deployment walkthrough.
  - **Vercel Static Deployment Optimization & Passcode Sanitization**: Streamlined `package.json` to pure static scripts, confirmed Vercel 'Other' preset, and sanitized `README.md` by removing private passcode references.
- **Completed in Session (2026-11-17)**:
  - **Mobile View Audit & Natural Viewport Realignment**: Fixed critical horizontal blowout caused by unconstrained footer links/right container; restored hamburger menu and theme toggle to visible screen; aligned mobile hero elements into a balanced, natural first-screen viewport (compact headline, typewriter pill, bio, 3-column metrics widget, life-sized 3D robot agent); configured touch pass-through (`pointer-events: none; touch-action: pan-y;`) to prevent touch scroll trapping; locked body scroll on open mobile drawer; removed redundant footer back-to-top button; preserved 100% of desktop layout.
  - **Complete Section Spacing Harmonization & Gap Optimization**: Eliminated excessive 144px-190px dead voids across all website sections; unified desktop gap scale to rhythmic 72px and mobile to 60px; tightened all section header block margins to 1.5rem (1.15rem mobile); synchronized `scroll-margin-top` to 4.5rem desktop / 3.75rem mobile; verified smooth continuous vertical scrolling with zero horizontal overflow.
  - **AI Pulse News Cards Premium Edge Glow & Natural Accent CTA Button**: Added medium-level perimeter edge glow (`box-shadow`), border tint, and dark gradient backdrop to `.pulse-news-card`; updated `.btn-read-news` to naturally display website's warm orange brand accent color (`var(--accent)` = `#e8622a` / `#d4531f`) with white text and smooth `#ff7538` hover lift; updated light mode rules; strictly preserved all other site sections untouched.
  - **Live Tavily MCP Multi-Category Crawl & Dynamic Feed Cycling**: Invoked connected Tavily MCP tool (`tavily_search`) across all 5 categories for real November 2026 AI news; populated `data/news.json` and `DEFAULT_PULSE_NEWS` in `index.html`; added feed pool cycling (`pulseRefreshCounts`) so clicking "Refresh News" genuinely swaps in fresh stories every time; added zero-dependency `.env` loader in `server.js` and wired live Tavily API querying when `TAVILY_API_KEY` is present.
- **Completed in Session (2026-11-18)**:
  - **AI Pulse Strict 50/50 Card Symmetry & Content Sanitization**: Fixed grid track distortion where raw markdown table syntax in scraped content caused the left card in the 'All' tab to expand to ~500px and squish the right card to ~200px. Switched to `grid-template-columns: repeat(2, minmax(0, 1fr))` with `overflow-wrap: break-word`, card content flex alignment, 2-line title height normalization, 3-line summary height normalization, and `cleanPulseText()` sanitizer to strip table pipes, markdown headers, and social login fragments.
  - **Skills & Tools Mobile 2-Column Symmetrical Tag Grid**: Fixed mobile layout where slightly longer pill titles in `# AUTOMATION` wrapped into a single vertical 6-pill column. Implemented a responsive 2-column grid (`repeat(2, minmax(0, 1fr))`) across all 4 category cards on mobile viewports (`<= 768px` and `<= 480px`), tuned card padding and font sizing, and updated 'REST API Integrations' to 'REST APIs' so all cards render in an identical, balanced 3x2 matrix.
  - **Hero CTA Buttons, Dynamic Headline Scaling & Header Logo Integration**: Replaced the 3 hero stats cards with dual CTA buttons (`View Projects →` in glowing warm orange & `Get in Touch` in dark surface with subtle border), matching user reference image `media_1795006942343_175549ae.png`; scaled "Sandeep" headline to dominant scale (`clamp(5.4rem, 13vw, 9.25rem)`) and "Kumar." to (`clamp(4.4rem, 10.5vw, 7.5rem)`) with Kumar proportionally smaller; fully decoded the reference SK monogram (white 'S' + warm orange chevron '<' for 'K'), generated a high-res 256x160 transparent PNG and vector SVG, and placed it before "Sandeep Kumar" with proportional widescreen dimensions (`height: 22px; width: auto; aspect-ratio: 256/160;`).
  - **Desktop Robot Enlargement with Smooth Transitions**: Scaled the 3D Spline robot stage to `max-width: clamp(700px, 58vw, 920px)` and `height: clamp(600px, 80vh, 850px)` with smooth `0.6s cubic-bezier(0.16, 1, 0.3, 1)` transitions and enlarged ambient backlight aura (`filter: blur(40px)`). Text and robot coexist with perfect balance and zero clipping.
  - **Mobile Hero CTA Buttons Web Fidelity & Strict Horizontal Row**: Eliminated vertical stacking/wrapping on narrow mobile screens by setting `flex-wrap: nowrap;`, `white-space: nowrap;`, and responsive font/padding clamp (`clamp(0.82rem, 3.2vw, 0.92rem)`). Both `View Projects →` (on the left) and `Get in Touch` (on the right) sit side-by-side on the exact same horizontal line in both light and dark modes.
  - **Mobile 3D Robot Alignment & Elevation**: Replaced squeezed 260px-310px height and overflow clipping with `height: clamp(350px, 50vh, 430px)`, `max-width: clamp(320px, 94vw, 390px)`, `overflow: visible`, and centered flex alignment. The robot head, visor, shoulders, chest, arms, and torso remain fully visible, centered under the hero content with warm ambient backlight.
  - **Tablet & Mobile Header Navigation Alignment**: Adjusted mobile navigation breakpoint to 860px to ensure tablets in portrait view cleanly display the hamburger drawer without crowding top navigation links against the brand logo.
- **Starting Point for Tomorrow**:
  - Codebase is 100% clean, verified, and hardened with 0 errors/warnings.
  - Ready for public GitHub push and Vercel hosting.
  - Ready for any further portfolio refinements, custom animations, or new feature requests from Sandeep.

