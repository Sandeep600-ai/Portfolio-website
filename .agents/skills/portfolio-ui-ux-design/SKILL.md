---
name: portfolio-ui-ux-design
description: Provides expert front-end UI/UX design guidance for premium personal portfolios and modern web interfaces. Handles visual hierarchy, layout composition, typography, spacing, color systems, responsive design, interaction patterns, animations, accessibility and visual quality assurance.
---

# Portfolio UI/UX Design Skill

This skill provides expert front-end UI/UX design guidance for Sandeep Kumar's personal portfolio website and modern web interfaces.

---

## Core Responsibilities

### 1. Visual Design
- Create premium, modern, minimal, and visually consistent interfaces.
- Maintain a strong visual hierarchy where headings, body copy, and secondary elements have clear distinction.
- Use intentional whitespace and balanced composition across all viewport sizes.
- Avoid generic templates, cluttered card borders, and unnecessary decorative elements.

### 2. Layout & Composition
- Design hero sections, navigation bars, content sections, project cards, and contact layouts.
- Maintain consistent alignment, spacing, and container widths (standard `max-width: 1100px`).
- Ensure sections use the available viewport effectively without excessive dead space or cramped elements.
- Prevent awkward gaps, horizontal scrolling, and inconsistent element positioning.

### 3. Typography & Design System
- Follow the approved **DM Sans** typography loaded via Google Fonts.
- Maintain consistent font sizes, weights (300, 400, 500, 700), and proportional line heights.
- Use the approved color palette design tokens:
  - **Background**: `#0a0a0a`
  - **Surface**: `#141414`
  - **Accent**: `#e8622a` (warm orange)
  - **Primary text**: `#f5f5f5`
  - **Secondary text**: `#a3a3a3`
  - **Subtle borders**: `rgba(255, 255, 255, 0.08)`
  - **Accent hover glow**: `rgba(232, 98, 42, 0.15)`
- Maintain consistent border radii (8px for cards, 9999px for pill badges) and uniform padding/margin scales.

### 4. Interaction & Motion Design
- Design polished hover and focus states with swift, smooth transitions (`150ms-250ms ease`).
- Use subtle transitions and meaningful micro-interactions (e.g., pill badge hover lift, button glow).
- Maintain the approved animated typewriter effect for the hero tagline.
- Design smooth navigation and scroll-reveal experiences using standard web APIs (`IntersectionObserver`).
- Strictly respect `prefers-reduced-motion` settings.

### 5. Responsive UX
- Optimize layouts seamlessly for desktop, tablet, and mobile screens.
- Follow the approved breakpoints:
  - **Tablet / Small Desktop**: `768px`
  - **Mobile**: `480px`
- Adapt the floating vertical sidebar into a streamlined mobile top navigation or header bar on screens `<= 768px`.
- Prevent horizontal scrolling and content clipping across all devices.
- Maintain touch target sizes of at least 44x44px on mobile devices.

### 6. Accessibility & Design Quality
- Adhere to WCAG AA contrast guidelines for all text and interactive UI elements against `#0a0a0a` and `#141414`.
- Support complete keyboard navigation with clear, visible `:focus-visible` outlines using `#e8622a`.
- Use semantic HTML (`<header>`, `<main>`, `<section>`, `<nav>`, `<aside>`, `<footer>`, `<form>`).
- Ensure interactive elements feature accessible labels (`aria-label`, descriptive button text).
- Avoid animation or interaction patterns that compromise readability or usability.

### 7. Design Quality Assurance
Before considering any UI task complete:
- Inspect visual hierarchy, font rendering, and typographic rhythm.
- Check spacing consistency (margins, paddings, gap alignments).
- Verify responsive behavior across desktop, tablet, and mobile breakpoints.
- Inspect hover, active, and focus interaction states.
- Use Chrome DevTools when visual or responsive inspection is required.
- Fix root visual inconsistencies rather than applying fragile CSS `!important` overrides.

---

## Working Methodology

1. **Understand Context**: Understand the user's requested design and existing project context.
2. **Review Documentation**: Review `AGENTS.md` and `MEMORY.md` for guidelines, design tokens, and past decisions.
3. **Identify Requirements**: Identify relevant UI/UX requirements and constraints.
4. **Establish Visual Plan**: Establish the layout and visual approach before writing code.
5. **Implement**: Implement the design cleanly while preserving existing functionality.
6. **Inspect**: Inspect the result across desktop, tablet, and mobile screen sizes.
7. **Correct**: Correct any visual inconsistencies, spacing discrepancies, or overflow bugs.
8. **Report & Log**: Report completed work and update `PROGRESS.md`.

---

## Collaboration With Existing Skills

Work alongside the existing system skills with clear separation of responsibilities:
- **UI/UX Design (`portfolio-ui-ux-design`)**: Visual experience, interface aesthetics, typography, color harmony, and design quality.
- **Modern Web Development (`modern-web-guidance`)**: Standards-compliant HTML5/CSS/JS patterns and web API best practices.
- **Troubleshooting (`troubleshooting`)**: Diagnosing and resolving technical errors or unexpected behavior.
- **Chrome DevTools (`chrome-devtools`)**: Live browser inspection, DOM auditing, and device emulation.

---

## Important Constraints

- **Do NOT** change the approved website theme or color palette (`#0a0a0a`, `#e8622a`, `#141414`) without explicit permission.
- **Do NOT** introduce unnecessary frameworks, heavy component libraries, or bundlers.
- **Do NOT** redesign approved sections without a valid reason.
- **Do NOT** sacrifice usability or accessibility for visual appearance.
- **Do NOT** invent personal information, project details, or portfolio content.
- Prioritize professional quality, consistency, performance, and usability at all times.

