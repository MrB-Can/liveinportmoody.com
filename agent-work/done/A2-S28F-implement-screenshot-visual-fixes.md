AGENT:
Agent 2

SPRINT:
A2-S28F — Implement Screenshot-Based Visual Fixes

GOAL:
Use the latest screenshot review and screenshot folder to make actual visual fixes. This is not a report-only task.

SCOPE:
Small-to-medium layout, spacing, visual hierarchy, mobile, and footer/header/page polish fixes based on screenshots.

ALLOWED FILES:
- src/app/**/*.tsx
- src/components/**/*.tsx
- src/lib/site.ts only if footer/nav labels need a visual-only cleanup
- docs/visual-review-final-issues.md
- agent-work/reports/A2-S28F-implement-screenshot-visual-fixes-report.md

FORBIDDEN FILES:
- middleware*
- .env*
- public/images/team/**
- visual-review-screenshots/**
- package.json unless absolutely required
- package-lock.json unless absolutely required

DO NOT:
- deploy
- remove coming-soon
- remove preview noindex
- add IDX
- add sold data
- add fake testimonials
- add fake accolades
- add fake businesses/events
- rewrite the site
- create more planning docs instead of fixing visible issues

TASKS:
1. Move task to active.
2. Find the newest screenshot folder under visual-review-screenshots/.
3. Review screenshots directly, especially:
   - desktop/home
   - desktop/get-started
   - desktop/sell
   - desktop/home-evaluation
   - desktop/how-we-do-it
   - desktop/recently-sold
   - desktop/local-life
   - desktop/featured-businesses
   - desktop/meet-us
   - desktop/raving-fans
   - desktop/contact
   - desktop/neighbourhoods
   - desktop/buildings
   - desktop/complexes
   - mobile/home
   - mobile/get-started
   - mobile/sell
   - mobile/home-evaluation
   - mobile/neighbourhoods
   - mobile/buildings
   - mobile/complexes
4. Also read:
   - docs/visual-review-final-issues.md if present
   - latest A2/A5 visual reports in agent-work/reports
5. Make actual visual fixes for clear issues:
   - broken or awkward spacing
   - too much blank space
   - cards that look uneven
   - footer wrapping
   - mobile overflow
   - maps/tables too large on mobile
   - forms with awkward companion cards
   - weak CTA hierarchy
   - pages that look visibly unfinished
   - typography inconsistency
6. Keep fixes practical and launch-safe. Do not invent content.
7. After fixes, run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
8. Capture a small before/after verification set if easy:
   - /home-evaluation desktop and mobile
   - /recently-sold desktop
   - /local-life desktop
   - /buildings mobile
   - /complexes mobile
9. Write report to:
   agent-work/reports/A2-S28F-implement-screenshot-visual-fixes-report.md
10. Move task to done or blocked.
11. Commit only scoped files.

FINAL REPORT:
AGENT:
Agent 2

SPRINT:
A2-S28F — Implement Screenshot-Based Visual Fixes

STATUS:
Completed / Blocked / No-op

SCREENSHOT FOLDER REVIEWED:
- path

FILES CHANGED:
- file

VISUAL FIXES MADE:
1.
2.
3.

PAGES IMPROVED:
- page

VALIDATION:
- lint:
- build:
- smoke:

REMAINING VISUAL ISSUES:
- issue

COMMIT:
hash or none

RECOMMENDED NEXT STEP:
- recapture these pages:
