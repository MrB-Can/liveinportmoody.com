TASK:
POOL-P0-S36H — Recapture Treetops After Gallery Fix

TASK_TYPE:
screenshot

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

WAIT CONDITION:
Do not start until S36G is deployed.

GOAL:
Capture the live Treetops page after the gallery/layout fix and confirm the visual result.

DO NOT:
- edit src/**
- deploy
- submit forms
- use localhost

OUTPUT FOLDER:
visual-review-screenshots/s36-treetops-after-gallery-fix/
OUTPUT ZIP:
visual-review-screenshots/S36-treetops-after-gallery-fix.zip

ROUTE:
https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive

CAPTURES:
Desktop 1440x1200:
- full page
- hero/top
- gallery
- form/CTA section

Mobile 390x844:
- full page
- hero/top
- gallery
- form/CTA section
- footer

TASKS:
1. Move task to active.
2. Capture screenshots from production only.
3. Confirm gallery capture scrolls to id="gallery" or equivalent and does not stay at y=0.
4. Confirm:
   - Treetops-related images count > 0
   - no public placeholder/internal wording
   - no horizontal overflow on mobile
5. Create manifest.
6. Zip output.
7. Write report:
   agent-work/reports/POOL-P0-S36H-recapture-treetops-after-gallery-fix-report.md
8. Move task to done.
9. Commit report/task movement only unless screenshots are intentionally tracked.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
BASE URL:
SCREENSHOT FOLDER:
ZIP:
SCREENSHOTS CAPTURED:
FAILED CAPTURES:

AUDIT:
- Treetops images found:
- public-copy blockers:
- mobile horizontal overflow:
- gallery scroll target works:

VISUAL VERDICT:
- hero:
- gallery:
- mobile:
- CTA/forms:

COMMIT:
