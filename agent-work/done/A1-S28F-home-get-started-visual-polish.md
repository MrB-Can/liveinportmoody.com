AGENT:
Agent 1

SPRINT:
A1-S28F — Homepage and Get Started Visual Polish

GOAL:
Make actual visual polish fixes to the homepage and Get Started page based on the latest screenshots. This is not a report-only task.

SCOPE:
Homepage and Get Started only.

ALLOWED FILES:
- src/app/page.tsx
- src/app/get-started/page.tsx
- src/components/**/*.tsx only if required for these pages
- agent-work/reports/A1-S28F-home-get-started-visual-polish-report.md

FORBIDDEN FILES:
- middleware*
- .env*
- public/images/team/**
- visual-review-screenshots/**
- src/app/sell/**
- src/app/home-evaluation/**
- src/app/neighbourhoods/**
- src/app/buildings/**
- src/app/complexes/**

DO NOT:
- deploy
- remove coming-soon
- remove noindex
- add fake content
- rewrite the full site
- create docs instead of fixing visual issues

TASKS:
1. Move task to active.
2. Review latest screenshot folder.
3. Improve actual visual issues on:
   - /
   - /get-started
4. Look for:
   - weak above-the-fold hierarchy
   - awkward spacing
   - cards too sparse or uneven
   - CTA hierarchy
   - mobile spacing
   - section rhythm
5. Make safe visual fixes only.
6. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
7. Write report, move task, commit scoped files.

FINAL REPORT:
AGENT:
Agent 1
SPRINT:
A1-S28F — Homepage and Get Started Visual Polish
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
