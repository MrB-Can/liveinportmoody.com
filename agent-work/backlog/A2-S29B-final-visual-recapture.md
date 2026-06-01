AGENT:
Agent 2

SPRINT:
A2-S29B — Final Visual Recapture

GOAL:
Capture final screenshots after all visual/code work is complete to verify launch readiness.

THIS IS A WAIT-AND-EXECUTE TASK:
Do NOT run until A3/A4/A5/A6 active work is complete.

SCOPE:
Run screenshot capture script against production-like environment with all visual fixes in place.

ALLOWED FILES:
- scripts/capture-visual-review.mjs (view only, no edits)
- agent-work/reports/A2-S29B-final-visual-recapture-report.md

FORBIDDEN:
- src/** edits
- middleware changes
- .env changes
- package.json unless absolutely required
- No deployment

INSTRUCTIONS:

1. WAIT:
   Wait until all active tasks for A3, A4, A5, A6 are complete.
   Check agent-work/active/ to confirm.

2. VERIFY:
   Run: npm run agent:status
   Confirm all visual/code agents done before proceeding.

3. CAPTURE:
   Run: nvm use 20 && node scripts/capture-visual-review.mjs
   This will capture the following routes:

   DESKTOP (1440×1200) — 26 routes:
   - /
   - /buy
   - /sell
   - /buyer-guide
   - /seller-guide
   - /first-time-home-buyers
   - /generational-wealth-real-estate
   - /request-recent-sales
   - /listings
   - /resources
   - /explore
   - /buildings
   - /complexes
   - /neighbourhoods
   - /local-businesses
   - /testimonials
   - /accolades
   - /events
   - /faq
   - /contact
   - /local-life
   - /featured-businesses
   - /local-insights
   - /meet-us
   - /raving-fans
   - /move-to-port-moody

   MOBILE (390×844) — 11 routes:
   - /
   - /buy
   - /sell
   - /buyer-guide
   - /seller-guide
   - /buildings
   - /complexes
   - /neighbourhoods
   - /contact
   - /local-life
   - /raving-fans

4. STORE:
   Script outputs to: visual-review-screenshots/YYYY-MM-DD_HH-MM-SS-final-after-visual-fixes/
   Script creates zip: visual-review-screenshots.zip

5. REPORT:
   Write agent-work/reports/A2-S29B-final-visual-recapture-report.md with:
   - Total screenshots captured
   - Desktop count
   - Mobile count
   - Failed captures (count)
   - Script execution notes
   - Recommended next step

6. DO NOT COMMIT SCREENSHOTS:
   Only commit the report file.
   Do not add visual-review-screenshots/ folder or zip to git.

7. NEXT STEP:
   After report is written, move this task to done.
   Assign screenshot review to A3 (owner/visual).
