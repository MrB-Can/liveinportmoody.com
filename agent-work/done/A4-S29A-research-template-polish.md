AGENT:
Agent 4

SPRINT:
A4-S29A — Building Complex Neighbourhood Template Polish

GOAL:
Improve the visual quality of building, complex, and neighbourhood research pages without inventing facts.

THIS IS A CODE FIX TASK, NOT A REPORT TASK.

ALLOWED FILES:
- src/app/buildings/page.tsx
- src/app/complexes/page.tsx
- src/app/neighbourhoods/page.tsx
- src/components/buildings/**/*.tsx
- src/components/complexes/**/*.tsx
- src/components/neighbourhoods/**/*.tsx
- agent-work/reports/A4-S29A-research-template-polish-report.md

FORBIDDEN FILES:
- middleware*
- .env*
- public/images/**
- visual-review-screenshots/**
- src/app/page.tsx
- src/app/sell/**
- src/app/buy/**

DO NOT:
- deploy
- remove maps entirely unless broken
- add fake building/neighbourhood/complex facts
- add IDX
- add sold data
- remove coming-soon
- remove noindex
- write docs instead of fixing UI

TASKS:
1. Move this task to active.
2. Fix research index pages:
   - /buildings
   - /complexes
   - /neighbourhoods
3. Fix shared detail templates if present:
   - building detail pages
   - complex detail pages
   - neighbourhood detail pages
4. Specific visual fixes:
   - Wrap comparison tables in overflow-x containers.
   - Improve mobile handling for wide tables.
   - Reduce excessive map whitespace.
   - Tighten detail-page vertical spacing.
   - Reduce repeated box/card feeling where simple lists would look better.
   - Make first safety/disclaimer note clear, but make repeated notes less visually dominant.
5. Keep all safety/compliance language.
6. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
7. Write final report.
8. Move task to done or blocked.
9. Commit only scoped files.

FINAL REPORT:
AGENT:
Agent 4
SPRINT:
A4-S29A — Building Complex Neighbourhood Template Polish
STATUS:
Completed / Blocked
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
