AGENT:
<!-- e.g. Agent 1 -->

SPRINT:
<!-- e.g. LIPM-A1-S28A-SCREENSHOTS-001 -->

GOAL:
<!-- What set of pages is being captured and why. -->

PRODUCTION URL:
https://www.liveinportmoody.com

PREVIEW UNLOCK:
https://www.liveinportmoody.com/preview?key=lgis2026

OUTPUT FOLDER:
visual-review-screenshots/YYYY-MM-DD_HH-MM-SS-{label}/

VIEWPORT — DESKTOP:
1440 × 1200, full-page PNG

VIEWPORT — MOBILE:
390 × 844, full-page PNG, deviceScaleFactor 3

ROUTES — DESKTOP:
<!-- List routes to capture at desktop -->

ROUTES — MOBILE:
<!-- List routes to capture at mobile -->

ROUTES — PUBLIC GATE (no cookie):
<!-- List routes to capture without preview cookie -->

ALLOWED FILES:
- visual-review-screenshots/ (output only — not committed)
- scripts/capture-*.mjs (temporary capture script — delete after run)

FORBIDDEN FILES:
- All product source files
- .env*
- agent-work/ (no self-editing)

DO NOT:
- commit screenshots
- deploy
- edit product pages
- change env vars
- remove coming-soon

PHASES:
1. Write a targeted capture script in scripts/
2. Unlock preview cookie via /preview?key=lgis2026
3. Capture desktop routes (full-page, 1440px)
4. Capture mobile routes (full-page, 390px, 3× scale)
5. Capture public gate routes (no cookie)
6. Zip the timestamp folder
7. Delete the capture script
8. Write report to agent-work/reports/

VALIDATION:
- All screenshots must be > 100KB (non-blank)
- Zero unexpected coming-soon captures (with cookie)
- Zip must be created successfully

COMMIT RULES:
- Do not commit screenshots
- Do not commit the capture script

DEPLOYMENT:
not allowed

FINAL REPORT FORMAT:
See agent-work/templates/agent-report.md

Include in report:
- Folder path
- Zip path
- Desktop count
- Mobile count
- Public gate count
- Failed routes
- Any unexpected coming-soon captures
- Mobile layout notes
