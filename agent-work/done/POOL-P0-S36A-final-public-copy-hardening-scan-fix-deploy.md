TASK:
POOL-P0-S36A — Final Public Copy Hardening Scan, Fix, and Deploy

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes

GOAL:
Find and remove every public-facing instance of internal workboard language, placeholder language, future-state language, staging language, and unfinished-site language across all public pages and detail pages. Deploy after validation.

THIS IS THE FINAL PUBLIC COPY HARDENING PASS.

TRIGGER:
Owner found public Treetops detail-page language:
- "TREETOPS PHOTOS NEEDED"
- "Future photo set"
- "Treetops entrance sign"
- "Internal lane and exterior townhomes"
- "Forested walking path and mature landscaping"
- "Amenity building and recreation area"
- "Uses owner-approved photography only. No listing or competitor images are used."

This must never be public. It belongs in internal docs only.

CORE RULE:
If a section depends on future photos, future verification, missing content, or internal owner action, do not render it publicly.

PUBLIC PAGE RULES:
Allowed:
- Area snapshot
- Nearby area
- Request current details
- Ask about this property
- Verify details for the specific property
- General real estate/legal/strata wording such as "planned work" only when it clearly means actual property/strata maintenance or development context

Not allowed:
- photos needed
- future photo set
- future photo
- photo set
- coming soon
- pending
- placeholder
- TODO
- TBD
- draft
- planned, unless clearly real-estate/strata context
- will be added
- to be added
- source needed
- owner-approved photography
- competitor images
- listing images
- internal
- shot list
- no photos yet
- video planned
- being connected
- collecting approved sources
- verification needed
- research in progress
- map coming soon
- photos coming soon
- future badge
- logo placeholder
- badge placeholder

DO NOT:
- invent photos
- add stock images
- add AI images
- add fake galleries
- add fake reviews
- add fake businesses
- add fake events
- add fake awards
- add placeholder replacements
- submit sitemap
- change form/CRM/consent behavior
- hide useful public content unless the section is clearly internal/staging

ALLOWED FILES:
- src/app/**/*.tsx
- src/components/**/*.tsx
- src/data/**/*.ts
- src/lib/**/*.ts
- scripts/public-copy-denylist-scan.mjs
- docs/public-copy-hardening-notes.md
- docs/local-photo-shot-list-and-placement-plan.md
- docs/public-copy-denylist-scan-results.md
- agent-work/reports/POOL-P0-S36A-final-public-copy-hardening-scan-fix-deploy-report.md

TASKS:
1. Move this task to active.

2. Create or update a reusable script:
   scripts/public-copy-denylist-scan.mjs

   Script requirements:
   - Read sitemap routes from https://www.liveinportmoody.com/sitemap.xml if scanning production.
   - Also include manually known public routes and dynamic/detail routes:
     /
     /about
     /buy
     /sell
     /contact
     /meet-us
     /raving-fans
     /featured-businesses
     /events
     /local-life
     /local-insights
     /resources
     /market
     /move-to-port-moody
     /buyer-guide
     /seller-guide
     /first-time-home-buyers
     /generational-wealth-real-estate
     /home-evaluation
     /how-we-do-it
     /recently-sold
     /request-recent-sales
     /buildings
     /complexes
     /complexes/treetops-101-parkside-drive
     /neighbourhoods
     /neighbourhoods/heritage-mountain
     /listings
     /presales
     /privacy
     /terms
     /faq
   - Fetch rendered HTML or page text.
   - Strip scripts/styles where practical.
   - Search denylist case-insensitively.
   - Output route, phrase, surrounding snippet, and likely classification.

3. Source-code scan before editing:
   grep -RniE "photos needed|future photo|future photo set|photo set|coming soon|pending|placeholder|TODO|TBD|draft|planned|will be added|to be added|source needed|owner-approved photography|competitor images|listing images|internal|shot list|no photos yet|video planned|being connected|collecting approved sources|verification needed|research in progress|map coming soon|photos coming soon|badge placeholder|logo placeholder" src data public || true

4. Inspect all complex/building/neighbourhood detail data and components.
   Specifically search for fields and copy such as:
   - photoNotes
   - futurePhotos
   - futurePhotoSet
   - photoPlan
   - imagePlan
   - galleryPlan
   - verificationStatus
   - internalNotes
   - ownerNotes
   - shotList
   - placeholderGallery
   - comingSoon
   - pending
   - plannedAssets

5. Fix public rendering:
   - If real approved photos exist, render them.
   - If real approved photos do not exist, render no photo/gallery section.
   - Do not render a future-photo card.
   - Do not render owner photo policy text.
   - Do not render "photos needed", "future photo set", or any shot list.
   - Preserve useful internal notes only in docs/local-photo-shot-list-and-placement-plan.md or docs/public-copy-hardening-notes.md.

6. Check all public route groups:
   - home
   - buyer/seller funnel
   - local/trust pages
   - listings/presales
   - buildings
   - complexes
   - individual complex pages
   - neighbourhoods
   - individual neighbourhood pages
   - resources/legal/FAQ

7. Run local rendered scan:
   - Start local server if needed.
   - Run the new denylist scanner against local pages.
   - Classify matches.
   - Fix every true public blocker.
   - Record acceptable false positives, such as "planned work" in strata context.

8. Run validation:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch
   node scripts/public-copy-denylist-scan.mjs --base http://localhost:3000

9. Commit scoped files only.

10. Deploy:
   vercel --prod --force

11. Run production checks:
   curl -I https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive
   curl -I https://www.liveinportmoody.com/complexes
   curl -I https://www.liveinportmoody.com/buildings
   curl -I https://www.liveinportmoody.com/neighbourhoods
   curl -I https://www.liveinportmoody.com/listings
   curl -I https://www.liveinportmoody.com/presales
   curl -I https://www.liveinportmoody.com/resources

12. Run production denylist scan:
   node scripts/public-copy-denylist-scan.mjs --base https://www.liveinportmoody.com

13. Run direct production grep for Treetops:
   curl -s https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive | grep -iE "photos needed|future photo|photo set|owner-approved photography|competitor images|shot list|placeholder|coming soon|verification needed|research in progress|TODO|TBD" || true

14. Check error logs:
   vercel logs --level error --since 1h

15. Write report.
16. Move task to done or blocked.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:

PUBLIC BLOCKERS FOUND:
- route / phrase / snippet / fix

FILES CHANGED:
- file / change

TREETOPS:
- offending photo block removed:
- gallery/photo section behavior:
- live grep clean:

SOURCE DENYLIST SCAN:
- before:
- after:
- false positives allowed:

LOCAL RENDERED DENYLIST SCAN:
- routes scanned:
- blockers:
- false positives:

VALIDATION:
- lint:
- build:
- smoke:
- crawl:
- local public-copy scan:

DEPLOYMENT:
- commit:
- production URL:
- vercel --prod --force used:

PRODUCTION CHECKS:
- route status checks:
- production public-copy scan:
- Treetops grep:
- error logs:

RECOMMENDED NEXT STEP:
Run S36B independent recapture and S36C final owner review package.
