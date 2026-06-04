TASK:
POOL-P0-S36C — Final Visual Recapture for Public Hardening

TASK_TYPE:
screenshot

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

WAIT CONDITION:
Do not start until S36A is deployed.

GOAL:
Capture high-risk pages after S36A so owner can visually verify that public internal/workboard language is gone.

DO NOT:
- edit src/**
- deploy
- submit forms
- recapture the full site unless required

OUTPUT FOLDER:
visual-review-screenshots/s36-final-public-hardening/
OUTPUT ZIP:
visual-review-screenshots/S36-final-public-hardening.zip

ROUTES:
Desktop 1440x1200 full page:
- /complexes/treetops-101-parkside-drive
- /complexes
- /buildings
- /neighbourhoods
- /neighbourhoods/heritage-mountain
- /listings
- /presales
- /about
- /raving-fans
- /featured-businesses
- /events
- /resources

Mobile 390x844 full page:
- /complexes/treetops-101-parkside-drive
- /complexes
- /neighbourhoods
- /listings
- /presales
- /about

TASKS:
1. Move task to active.
2. Capture screenshots from production only.
3. Create manifest.
4. Zip output folder.
5. Write report:
   agent-work/reports/POOL-P0-S36C-final-visual-recapture-public-hardening-report.md
6. Move task to done.
7. Commit report/task movement only unless screenshot tracking is required.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
BASE URL:
SCREENSHOT FOLDER:
ZIP:
ROUTES CAPTURED:
FAILED ROUTES:
VISUAL VERDICT:
- Treetops:
- complexes:
- buildings:
- neighbourhoods:
- listings:
- presales:
- trust/local pages:
COMMIT:
RECOMMENDED NEXT STEP:
Upload S36-final-public-hardening.zip to ChatGPT for final owner review.
