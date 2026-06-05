TASK:
POOL-P0-S41D — Controlled Final Visual Recapture

TASK_TYPE:
screenshot

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

WAIT CONDITION:
Do not start until S41C is done.

GOAL:
Capture a clean final visual package from production only after queue reconciliation and targeted fixes. The capture must fail if pages are blank, unstyled, or captured from the wrong base URL.

AUTONOMOUS AGENT OPERATING RULES:
1. Do not do any task work unless this task file is physically in agent-work/active.
2. Move exactly one task from backlog to active before doing work.
3. Run npm run agent:conflicts immediately after claiming.
4. Do not edit src/**.
5. Do not deploy.
6. Capture from production only.
7. Do not call a broken capture successful.
8. Commit and push only report/task movement unless screenshots are tracked by project convention.

BASE URL:
https://www.liveinportmoody.com

OUTPUT FOLDER:
visual-review-screenshots/s41-final-visual-recapture/
OUTPUT ZIP:
visual-review-screenshots/S41-final-visual-recapture.zip

ROUTES:
Desktop 1440x1200:
- /
- /buy
- /sell
- /listings
- /presales
- /neighbourhoods
- /buildings
- /complexes
- /complexes/treetops-101-parkside-drive
- /resources
- /contact
- /meet-us
- /about
- /raving-fans
- /featured-businesses
- /events
- /local-life
- /local-insights

Mobile 390x844:
- /
- /buy
- /sell
- /listings
- /presales
- /neighbourhoods
- /buildings
- /complexes
- /complexes/treetops-101-parkside-drive
- /resources
- /contact
- /meet-us
- /raving-fans
- /featured-businesses
- /events

PRE-CAPTURE GATE:
Before capturing, verify:
1. Production route status is HTTP 200 for key pages.
2. CSS assets are present and HTTP 200.
3. /buildings is styled, not default browser typography.
4. /complexes/treetops-101-parkside-drive is not blank.
5. Mobile screenshots do not show obvious native unstyled nav controls.
6. Capture base URL is production, not localhost.
7. No public internal/workboard language is visible on sampled pages.

TASKS:
1. Move this task to active.

2. Run:
   npm run agent:status
   npm run agent:conflicts
   git status --short

3. Run pre-capture gate checks.
   If any gate fails, move task to blocked and write report. Do not capture.

4. Capture all listed routes from production only.

5. Create manifest:
   visual-review-screenshots/s41-final-visual-recapture/MANIFEST.md

6. Create zip:
   visual-review-screenshots/S41-final-visual-recapture.zip

7. Write report:
   agent-work/reports/POOL-P0-S41D-controlled-final-visual-recapture-report.md

8. Move task to done or blocked.

9. Commit and push report/task movement only unless screenshots are tracked.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
BASE URL:

PRE-CAPTURE GATE:
- route status:
- css assets:
- buildings styled:
- Treetops nonblank:
- mobile nav styled:
- production base confirmed:
- sampled public copy clean:

SCREENSHOT FOLDER:
ZIP:
ROUTES CAPTURED:
FAILED ROUTES:

VISUAL VERDICT:
- strongest pages:
- weakest pages:
- pages still text-heavy:
- icons/graphics useful yes/no:
- mobile issues:
- public copy issues:

GIT STATUS:
- clean yes/no

COMMIT:
PUSH:
