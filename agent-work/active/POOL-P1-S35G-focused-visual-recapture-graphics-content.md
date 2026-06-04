TASK:
POOL-P1-S35G — Focused Visual Recapture for Graphics and Content Additions

TASK_TYPE:
screenshot

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

WAIT CONDITION:
Do not start until S35C, S35D, and S35E are done.

GOAL:
Capture pages changed by the new agent-safe graphics and educational content.

DO NOT:
- edit src/**
- deploy
- submit forms
- recapture the full site

OUTPUT FOLDER:
visual-review-screenshots/s35-graphics-content/
OUTPUT ZIP:
visual-review-screenshots/S35-graphics-content.zip

ROUTES:
Desktop 1440x1200 full page:
- /buy
- /sell
- /listings
- /presales
- /neighbourhoods
- /resources

Mobile 390x844 full page:
- /buy
- /sell
- /listings
- /presales
- /neighbourhoods
- /resources

TASKS:
1. Move task to active.
2. Capture production if graphics were deployed; otherwise capture local preview and clearly state base URL.
3. Create manifest.
4. Zip output folder.
5. Write report:
   agent-work/reports/POOL-P1-S35G-focused-visual-recapture-graphics-content-report.md
6. Move task to done.
7. Commit report/task movement only unless screenshots are intentionally tracked.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
BASE URL:
SCREENSHOT FOLDER:
ZIP:
ROUTES CAPTURED:
FAILED ROUTES:
VISUAL NOTES:
- /buy:
- /sell:
- /listings:
- /presales:
- /neighbourhoods:
- /resources:
COMMIT:
