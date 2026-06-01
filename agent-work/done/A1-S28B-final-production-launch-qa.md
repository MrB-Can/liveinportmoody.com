AGENT:
Agent 1

SPRINT:
A1-S28B — Final Production Launch QA

GOAL:
Run final production QA on LiveInPortMoody after the phase-one reorganization. Produce a clear launch decision report. Do not build new features.

SCOPE:
Production QA, smoke/crawl, routes, sitemap, metadata, coming-soon gate, launch blocker audit.

ALLOWED FILES:
- agent-work/reports/A1-S28B-final-production-launch-qa-report.md
- docs/prelaunch-launch-blockers.md only if already exists and a true status update is needed

FORBIDDEN FILES:
- src/components/header.tsx
- src/components/footer.tsx
- src/lib/site.ts
- src/app/**/*.tsx unless fixing a true launch blocker
- public/images/**
- .env*
- Site Ops files

DO NOT:
- remove coming-soon mode
- remove noindex from preview pages
- add features
- add IDX
- add sold data
- add fake reviews, awards, businesses, events, listings, or testimonials
- deploy unless you find and fix a true blocker
- touch screenshots

TASKS:
1. Move this task from backlog to active.
2. Run:
   git status
   git log --oneline -20
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch
3. Check production with preview access:
   - /
   - /get-started
   - /buy
   - /sell
   - /home-evaluation
   - /how-we-do-it
   - /recently-sold
   - /buyer-guide
   - /seller-guide
   - /request-recent-sales
   - /listings
   - /move-to-port-moody
   - /local-life
   - /featured-businesses
   - /local-insights
   - /meet-us
   - /raving-fans
   - /about
   - /contact
   - /privacy
   - /terms
4. Check no-cookie public behavior:
   - / shows coming-soon
   - /coming-soon loads
   - /contact loads
   - /privacy loads
   - /terms loads
5. Check sitemap:
   - expected public/indexable URLs only
   - preview neighbourhood/building/complex pages excluded
   - buyer/seller/home-evaluation/how-we-do-it/recently-sold included if indexable
6. Check metadata:
   - branded OG image is used
   - no og-placeholder in rendered metadata
   - canonical URLs use www
7. Check forms without sending real external leads:
   - contact form visible
   - home evaluation form visible
   - buyer/seller guide request forms visible
   - no secrets printed
   - no raw payload logging found
8. Write final report to:
   agent-work/reports/A1-S28B-final-production-launch-qa-report.md
9. Move this task to done if completed, blocked if blocked.
10. Commit only report/doc updates if any.

VALIDATION:
- npm run lint
- npm run build
- npm run smoke:prelaunch
- npm run crawl:prelaunch

FINAL REPORT FORMAT:
AGENT:
Agent 1

SPRINT:
A1-S28B — Final Production Launch QA

STATUS:
Completed / Blocked

COMMIT:
hash or none

DEPLOYED:
yes/no

VALIDATION:
- lint:
- build:
- smoke:
- crawl:

PRODUCTION ROUTES:
- checked:
- failed:

PUBLIC GATE:
- status:

SITEMAP / NOINDEX:
- status:

FORMS:
- status:

READY TO REMOVE COMING-SOON:
yes/no

TRUE BLOCKERS:
- blocker

CONTENT OWNER ITEMS:
- item

RECOMMENDED NEXT STEP:
- one clear action
