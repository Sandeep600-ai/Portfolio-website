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
1. **Hero**: Large bold name headline ("Sandeep Kumar"), animated typewriter effect for tagline ("Turning Ideas into AI Solutions."), location badge ("📍 New Delhi, India"), and direct CTA buttons.
2. **About**: Narrative on AI automation, Generative AI, and workflow productivity, with key focus highlights.
3. **Skills**: Curated pills/tag badges with hover glow effects (Generative AI, n8n Automation, Claude Code, Voice Agents, etc.).
4. **Featured Projects**: 3 structured project cards with status tags (pulsing green "Live" badge or orange "In Progress" badge), concise descriptions, tech tags, and "View" buttons.
5. **Contact**: Simple accessible form (Name, Email, Message) with `#e8622a` focus indicators, accompanied by direct email (`sndp5432@gmail.com`) and social links.
6. **Floating Vertical Sidebar**: Fixed on the right edge on desktop, featuring vertical social icons and vertical text labels (`writing-mode: vertical-rl`). Automatically collapses into the top navigation on mobile screens (`<= 768px`).
7. **Sticky Top Navigation**: Fixed glassmorphic navigation bar (`backdrop-filter: blur(16px)`) that fades in smoothly after scrolling past the hero.

---

## 4. Session Continuity Protocol

To maintain project context and documentation integrity across development sessions:
1. **At Session Start**:
   - Read `AGENTS.md` (this file) for constraints and rules.
   - Read `MEMORY.md` for background context and past architectural decisions.
   - Read `PROGRESS.md` to identify the current phase and active tasks.
2. **During Development**:
   - Consult `.agents/skills/portfolio-ui-ux-design/SKILL.md` for UI/UX guidelines before implementing or modifying interfaces.
   - Verify changes across desktop, tablet, and mobile breakpoints (768px and 480px).
3. **At Task Completion**:
   - Update `PROGRESS.md` with completed items and current project state.
   - Record any new architectural decisions, user preferences, or lessons learned in `MEMORY.md`.

---

## 5. Strict Constraints & Boundaries

- **No Job Search or News Feed Yet**: Do NOT create a job search section or news feed until Phase 2 and Phase 3 are formally started.
- **No Heavy Frameworks**: Do NOT add React, Vue, Tailwind CLI, Bootstrap, or npm bundlers. Keep `index.html` lightweight and vanilla.
- **No Unauthorized Theme Changes**: The `#0a0a0a` background and `#e8622a` accent are fixed.
- **Information Integrity**: Do not fabricate personal information, credentials, or project URLs. Refer to `MEMORY.md` for verified details.

