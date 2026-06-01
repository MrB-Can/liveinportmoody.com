AGENT:
<!-- e.g. Agent 5 — Gemini CLI -->

SPRINT:
<!-- e.g. LIPM-A5-S28A-VISUAL-REVIEW-001 -->

GOAL:
<!-- What is being reviewed visually. Screenshots already exist in visual-review-screenshots/. -->

SCREENSHOT FOLDER:
<!-- Path to the folder containing screenshots for this review -->
visual-review-screenshots/YYYY-MM-DD_HH-MM-SS-{label}/

SCOPE:
<!-- desktop / mobile / public-gate / all -->

REVIEW CRITERIA:
- Nav present and correct on all pages
- No broken layouts (content clipped, overlapping, zero-height sections)
- Mobile hamburger visible and accessible
- CTA buttons render correctly
- No lorem ipsum or placeholder text visible
- No "coming soon" shown on preview-unlocked pages
- Research hubs (neighbourhoods, buildings, complexes) show map placeholder or map
- Trust strip / hero sections look complete

ALLOWED FILES:
- agent-work/reports/ (report only)

FORBIDDEN FILES:
- All source files
- .env*
- Screenshots (read-only input)

DO NOT:
- edit any source files
- deploy
- remove coming-soon mode
- commit screenshots

PHASES:
1. Read screenshot folder
2. Review desktop screenshots — note any layout issues
3. Review mobile screenshots — note any layout issues
4. Review public gate screenshots — confirm gate is showing
5. Write findings to agent-work/reports/

VALIDATION:
- Report must list each page reviewed
- Report must flag any broken layout, missing nav, or unexpected gate

COMMIT RULES:
- Do not commit unless task explicitly authorizes a fix

DEPLOYMENT:
not allowed

FINAL REPORT FORMAT:
See agent-work/templates/agent-report.md

Include in report:
- Pages reviewed (desktop and mobile)
- Layout issues found (file, description, severity)
- Mobile layout verdict
- Gate capture verdict
- Recommended fixes (if any)
