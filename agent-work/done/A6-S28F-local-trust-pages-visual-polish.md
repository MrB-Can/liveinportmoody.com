AGENT:
Agent 6

SPRINT:
A6-S28F — Local and Trust Pages Visual Polish

GOAL:
Make actual visual polish fixes to local/trust pages.

SCOPE:
Local Life, Featured Businesses, Local Insights, Meet Us, Raving Fans, About.

ALLOWED FILES:
- src/app/local-life/page.tsx
- src/app/featured-businesses/page.tsx
- src/app/local-insights/page.tsx
- src/app/meet-us/page.tsx
- src/app/raving-fans/page.tsx
- src/app/about/page.tsx
- src/app/testimonials/page.tsx
- src/app/local-businesses/page.tsx
- agent-work/reports/A6-S28F-local-trust-pages-visual-polish-report.md

FORBIDDEN FILES:
- middleware*
- .env*
- public/images/**
- visual-review-screenshots/**
- src/app/page.tsx
- src/app/sell/**
- src/app/home-evaluation/**
- src/app/neighbourhoods/**
- src/app/buildings/**
- src/app/complexes/**

DO NOT:
- deploy
- add fake businesses
- add fake events
- add fake reviews
- add fake accolades
- remove coming-soon
- create docs instead of visual fixes

TASKS:
1. Move task to active.
2. Review screenshots and routes:
   - /local-life
   - /featured-businesses
   - /local-insights
   - /meet-us
   - /raving-fans
   - /about
3. Fix visual issues:
   - sparse pages
   - awkward cards
   - weak CTAs
   - placeholder-heavy sections
   - poor mobile spacing
   - inconsistent section rhythm
4. Do not invent proof or content.
5. Run:
   npm run lint
   npm run build
6. Write report, move task, commit scoped files.

FINAL REPORT:
AGENT:
Agent 6
SPRINT:
A6-S28F — Local and Trust Pages Visual Polish
STATUS:
Completed / Blocked / No-op
FILES CHANGED:
- file
VISUAL FIXES:
- fix
VALIDATION:
- lint:
- build:
COMMIT:
hash or none
