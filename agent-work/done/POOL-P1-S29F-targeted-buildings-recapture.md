TASK:
POOL-P1-S29F — Targeted Buildings Recapture After Mobile Layout Fix

TASK_TYPE:
screenshot

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Verify that the mobile /buildings layout fix from S29E is visually correct and did not regress related research pages.

CONTEXT:
S29E completed the mobile /buildings layout fix in commit 6c4a964. The previous final screenshot showed mobile /buildings as extremely tall/broken. The fix changed:
- src/app/buildings/page.tsx
- src/components/buildings/CondoDecisionGuide.tsx

The S29E report says mobile /buildings DOM height dropped to 11,789px and is now below /complexes and /neighbourhoods reference heights. This task must confirm the actual screenshot output.

DO NOT:
- edit code
- deploy
- remove coming-soon
- remove preview noindex
- commit screenshots
- run full-site recapture
- change env vars
- invent content

ALLOWED FILES:
- visual-review-screenshots/**
- agent-work/reports/POOL-P1-S29F-targeted-buildings-recapture-report.md

FORBIDDEN FILES:
- src/**
- public/**
- middleware*
- .env*
- package.json unless the existing screenshot command is broken and a tiny script alias repair is required

PRECHECK:
1. Run:
   git status --short
   git log --oneline -8
   npm run agent:status
   npm run agent:conflicts

2. Confirm commit 6c4a964 or a later commit containing S29E is present.

3. Proceed only if:
   - no uncommitted src/** changes exist
   - no active code task is editing buildings, complexes, neighbourhoods, or shared research components

CAPTURE TARGET:
Use local production build, not live production.

Terminal/server command:
- npm run build
- PORT=3057 npx next start -p 3057

Capture base:
- http://127.0.0.1:3057

Preview key:
- lgis2026

ROUTES TO CAPTURE:

Desktop 1440x1200:
- /buildings

Mobile 390x844:
- /buildings
- /complexes
- /neighbourhoods

OUTPUT LOCATION:
Create a timestamped folder:

visual-review-screenshots/YYYY-MM-DD_HH-MM-SS-targeted-buildings-fix/

Also create a stable copy or symlink-style duplicate zip at:

visual-review-screenshots/S29F-targeted-buildings-fix-latest.zip

This exact zip path must exist when the task is done so the owner can find and upload it.

TASKS:
1. Move this task from backlog to active.
2. Start local production server.
3. Unlock preview cookie.
4. Capture only the four target screenshots:
   - desktop/buildings.png
   - mobile/buildings.png
   - mobile/complexes.png
   - mobile/neighbourhoods.png
5. Inspect the captured mobile /buildings screenshot enough to confirm:
   - no huge blank vertical area after the header
   - no runaway/repeated map tile layout
   - screenshot height is broadly comparable to complexes/neighbourhoods
6. Zip the timestamped folder.
7. Copy the zip to:
   visual-review-screenshots/S29F-targeted-buildings-fix-latest.zip
8. Write report:
   agent-work/reports/POOL-P1-S29F-targeted-buildings-recapture-report.md
9. Move task to done or blocked.
10. Do not commit screenshots unless explicitly approved.
11. Commit only the report/task movement if appropriate.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
PRECHECK:
- git status:
- S29E commit present:
- active conflicts:

SCREENSHOT FOLDER:
- path

ZIP:
- visual-review-screenshots/S29F-targeted-buildings-fix-latest.zip

COUNTS:
- desktop:
- mobile:
- failed:

VISUAL CHECK:
- mobile /buildings fixed: yes/no
- mobile /complexes regression: yes/no
- mobile /neighbourhoods regression: yes/no

FINDINGS:
- brief notes

COMMIT:
- report/task commit hash or none

RECOMMENDED NEXT STEP:
Upload visual-review-screenshots/S29F-targeted-buildings-fix-latest.zip to ChatGPT for final approval.
