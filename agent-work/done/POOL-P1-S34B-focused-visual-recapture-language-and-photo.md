TASK:
POOL-P1-S34B — Focused Visual Recapture for Language and Team Photo Fixes

TASK_TYPE:
screenshot

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

WAIT CONDITION:
Do not start until POOL-P0-S34A is done and deployed.

GOAL:
Capture the affected pages after S34A deployment so the owner can verify the fixes.

DO NOT:
- edit src/**
- deploy
- submit forms
- recapture the full site

OUTPUT FOLDER:
visual-review-screenshots/s34-language-photo-fixes/

OUTPUT ZIP:
visual-review-screenshots/S34-language-photo-fixes.zip

ROUTES:
Desktop 1440x1200 full page:
- /
- /meet-us
- /neighbourhoods
- /listings
- /presales

Desktop 1920x1200 top and relevant sections:
- /
- /meet-us
- /neighbourhoods
- /listings
- /presales

Mobile 390x844 full page:
- /neighbourhoods
- /listings
- /presales
- /meet-us

SPECIAL CHECKS:
- Capture homepage team photo section if possible.
- Capture /meet-us top and team photo section.
- Capture /neighbourhoods area-snapshot labels.
- Capture /listings search section.
- Capture /presales project update section.
- Do not submit forms.

TASKS:
1. Move task to active.
2. Create output folder.
3. Capture screenshots from production: https://www.liveinportmoody.com
4. Create manifest:
   visual-review-screenshots/s34-language-photo-fixes/MANIFEST.md
5. Zip the folder to:
   visual-review-screenshots/S34-language-photo-fixes.zip
6. Write report:
   agent-work/reports/POOL-P1-S34B-focused-visual-recapture-language-and-photo-report.md
7. Move task to done.
8. Commit report/task movement only unless screenshots are intentionally tracked.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
SCREENSHOT FOLDER:
ZIP:
ROUTES CAPTURED:
FAILED ROUTES:
VISUAL NOTES:
- homepage team photo:
- meet-us typo:
- neighbourhood labels:
- listings wording:
- presales wording:
COMMIT:
RECOMMENDED NEXT STEP:
Upload visual-review-screenshots/S34-language-photo-fixes.zip to ChatGPT.
