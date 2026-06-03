AGENT:
Agent 2

SPRINT:
A2-S28B — Final Phase-One Screenshot Capture

GOAL:
Capture final targeted screenshots after the phase-one reorganization. Do not edit code.

SCOPE:
Screenshot capture only.

ALLOWED FILES:
- visual-review-screenshots/**
- agent-work/reports/A2-S28B-final-screenshot-capture-report.md

FORBIDDEN FILES:
- src/**
- public/**
- package.json
- package-lock.json
- .env*
- Site Ops files

DO NOT:
- edit code
- deploy
- commit screenshots
- change env vars
- remove coming-soon
- remove noindex
- change content

TASKS:
1. Move this task from backlog to active.
2. Use production:
   https://www.liveinportmoody.com
3. Unlock preview:
   https://www.liveinportmoody.com/preview\?key\=lgis2026
4. Create folder:
   visual-review-screenshots/YYYY-MM-DD_HH-MM-SS-phase-one-final/
5. Capture full-page desktop screenshots at 1440x1200:
   - /
   - /get-started
   - /buy
   - /sell
   - /home-evaluation
   - /how-we-do-it
   - /recently-sold
   - /buyer-guide
   - /seller-guide
   - /local-life
   - /featured-businesses
   - /local-insights
   - /meet-us
   - /raving-fans
   - /about
   - /contact
   - /listings
   - /neighbourhoods
   - /buildings
   - /complexes
6. Capture mobile screenshots at 390x844:
   - /
   - /get-started
   - /sell
   - /home-evaluation
   - /recently-sold
   - /local-life
   - /featured-businesses
   - /neighbourhoods
   - /buildings
   - /complexes
   - /contact
7. Capture public gate with no preview cookie:
   - /
   - /coming-soon
   - /contact
8. Zip the timestamp folder.
9. Do not commit screenshots.
10. Write report to:
   agent-work/reports/A2-S28B-final-screenshot-capture-report.md
11. Move task to done or blocked.

VALIDATION:
- report screenshot count
- report failed routes
- report whether pages unexpectedly showed coming-soon after preview unlock
- report whether public gate behaved correctly

FINAL REPORT FORMAT:
AGENT:
Agent 2

SPRINT:
A2-S28B — Final Phase-One Screenshot Capture

STATUS:
Completed / Blocked

SCREENSHOT FOLDER:
path

ZIP:
path

COUNTS:
- desktop:
- mobile:
- public-gate:
- failed:

FINDINGS:
- new nav visible:
- coming-soon unexpected:
- mobile research hubs:
- footer layout:

COMMIT:
none unless report only

RECOMMENDED NEXT STEP:
- one clear action
