TASK:
POOL-P1-S29E - Fix Mobile Buildings Page Layout

TASK_TYPE:
code

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Fix the broken mobile /buildings page layout found in final screenshot review.

PROBLEM:
The final mobile /buildings screenshot is effectively broken:
- Header renders.
- Then there is a huge blank vertical area.
- Content/map chunks appear much farther down.
- Screenshot height is extremely large compared with other pages.
- Desktop /buildings is acceptable.
- Mobile /complexes and /neighbourhoods are acceptable.
This likely means a buildings-specific map, table, section, or responsive layout is creating excessive vertical height on mobile.

REFERENCE SCREENSHOTS:
- visual-review-screenshots/mobile/buildings.png
- visual-review-screenshots/desktop/buildings.png
- visual-review-screenshots/mobile/complexes.png
- visual-review-screenshots/mobile/neighbourhoods.png

ALLOWED FILES:
- src/app/buildings/page.tsx
- src/components/buildings/**/*.tsx
- shared map/table/layout components only if /buildings depends on them
- agent-work/reports/POOL-P1-S29E-fix-mobile-buildings-layout-report.md

FORBIDDEN FILES:
- middleware*
- .env*
- public/images/**
- visual-review-screenshots/**
- src/app/complexes/** unless a shared component fix requires verification
- src/app/neighbourhoods/** unless a shared component fix requires verification
- unrelated routes

DO NOT:
- deploy
- invent building facts
- add fake building data
- add IDX
- add sold data
- remove coming-soon
- remove preview noindex
- remove maps entirely unless the current map is confirmed as the cause and a safe compact fallback is required
- edit unrelated pages

TASKS:
1. Move this task to active.
2. Reproduce /buildings at 390px mobile width locally.
3. Identify why the page creates extreme vertical whitespace or massive height.
4. Fix the layout.
5. Confirm these views:
   - /buildings mobile at 390px
   - /buildings desktop at 1440px
   - /complexes mobile if shared component touched
   - /neighbourhoods mobile if shared component touched
6. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
7. Write the final report.
8. Move this task to done or blocked.
9. Commit only scoped files.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
CAUSE FOUND:
FILES CHANGED:
VALIDATION:
- lint:
- build:
- smoke:
SCREENSHOT CHECK:
- /buildings mobile:
- /buildings desktop:
- /complexes mobile if checked:
- /neighbourhoods mobile if checked:
COMMIT:
RECOMMENDED NEXT STEP:
