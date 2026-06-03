AGENT:
Agent 3

SPRINT:
A3-S28F — Seller Funnel Visual Polish

GOAL:
Make actual visual polish fixes to the seller funnel pages.

SCOPE:
Seller funnel pages only.

ALLOWED FILES:
- src/app/sell/page.tsx
- src/app/home-evaluation/page.tsx
- src/app/how-we-do-it/page.tsx
- src/app/recently-sold/page.tsx
- src/components/home-evaluation-form.tsx
- agent-work/reports/A3-S28F-seller-funnel-visual-polish-report.md

FORBIDDEN FILES:
- middleware*
- .env*
- public/images/**
- visual-review-screenshots/**
- src/app/page.tsx
- src/app/neighbourhoods/**
- src/app/buildings/**
- src/app/complexes/**

DO NOT:
- deploy
- add sold data
- add fake results
- add fake testimonials
- remove coming-soon
- rewrite forms unnecessarily
- create docs instead of visual fixes

TASKS:
1. Move task to active.
2. Review screenshots for:
   - /sell
   - /home-evaluation
   - /how-we-do-it
   - /recently-sold
3. Fix visible issues:
   - awkward form layout
   - weak CTA hierarchy
   - too much blank space
   - uneven cards
   - mobile form spacing
   - compliance copy that visually overwhelms the page
4. Keep sold pages compliance-safe.
5. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
6. Write report, move task, commit scoped files.

FINAL REPORT:
AGENT:
Agent 3
SPRINT:
A3-S28F — Seller Funnel Visual Polish
STATUS:
Completed / Blocked / No-op
FILES CHANGED:
- file
VISUAL FIXES:
- fix
VALIDATION:
- lint:
- build:
- smoke:
COMMIT:
hash or none
