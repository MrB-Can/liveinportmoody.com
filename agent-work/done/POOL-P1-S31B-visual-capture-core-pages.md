TASK:
POOL-P1-S31B — Visual Capture Batch 1 Core Pages

TASK_TYPE:
screenshot

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Capture post-launch screenshots for core public pages.

DO NOT:
- edit src/**
- deploy
- change env vars
- commit screenshots unless explicitly instructed

OUTPUT ROOT:
visual-review-screenshots/post-launch-final-review/

BATCH FOLDER:
visual-review-screenshots/post-launch-final-review/batch-01-core/

ROUTES:
Desktop 1440x1200:
- /
- /explore
- /resources
- /market
- /move-to-port-moody

Mobile 390x844:
- /
- /explore
- /move-to-port-moody

TASKS:
1. Move this task to active.
2. Create batch folder.
3. Capture full-page screenshots from https://www.liveinportmoody.com.
4. Save with clear filenames:
   - desktop-home.png
   - mobile-home.png
   etc.
5. Create batch manifest:
   visual-review-screenshots/post-launch-final-review/batch-01-core/manifest.md
6. Move task to done.
7. Write report:
   agent-work/reports/POOL-P1-S31B-visual-capture-core-pages-report.md

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
SCREENSHOT FOLDER:
ROUTES CAPTURED:
FAILED ROUTES:
COMMIT:
none unless report/task movement only
