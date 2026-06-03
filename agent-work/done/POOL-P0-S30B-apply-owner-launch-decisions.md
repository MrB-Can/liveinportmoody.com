TASK:
POOL-P0-S30B — Apply Owner Launch Decisions

TASK_TYPE:
code

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Apply final owner launch decisions before coming-soon removal.

OWNER DECISIONS:
- Privacy/terms approved: GO
- GHL test passed: GO
- Remove standalone Accolades page from visible nav/footer: GO
- Keep /accolades route live but not promoted: NO-GO
- Use text-only verified accolade/trust blocks across pages: GO
- Use non-public code/data placeholders for future badge/logo assets: GO
- Do not show public badge/logo placeholder labels: GO
- Launch without Leilani/team photo if missing: NO-GO
- Launch without real social links if missing/hidden: NO-GO
- Launch with MLS listings fallback if reciprocity URL is not ready: GO
- Remove coming-soon after final scan passes: GO

OWNER-PROVIDED SOCIAL LINKS:
- Facebook: https://www.facebook.com/liveinportmoody
- Instagram: https://www.instagram.com/liveinportmoody/
- YouTube: omit for now, will be added later
- LinkedIn: omit unless owner provides URL

LAUNCH INTERPRETATION:
- Facebook and Instagram are the real social links for launch.
- Do not show YouTube until a real URL is provided.
- Do not show fake, disabled, placeholder, or “coming soon” social links.

DO NOT:
- deploy
- remove coming-soon
- invent awards
- invent testimonials
- invent social URLs
- invent MLS URLs
- invent badge/logo assets
- show public placeholder text
- add fake review counts
- add fake sold data

ALLOWED FILES:
- src/lib/site.ts
- src/app/page.tsx
- src/app/about/page.tsx
- src/app/meet-us/page.tsx
- src/app/sell/page.tsx
- src/app/buy/page.tsx
- src/app/contact/page.tsx
- src/app/accolades/page.tsx
- src/components/**/*.tsx
- src/data/**/*.ts
- public/images/team/**
- docs/final-owner-launch-approval.md
- docs/current-launch-blockers.md
- docs/placeholder-public-text-scan.md
- agent-work/reports/POOL-P0-S30B-apply-owner-launch-decisions-report.md

TASKS:
1. Move this task to active.

2. Check for required owner-content assets:
   - real Leilani/team photo in public/images/team/
   - Facebook and Instagram URLs in site/social config

3. If photo is missing, block with:
   BLOCKED_REASON: Owner gave NO-GO for launch without Leilani/team photo.

4. Add real social links:
   - Facebook: https://www.facebook.com/liveinportmoody
   - Instagram: https://www.instagram.com/liveinportmoody/
   Hide or omit YouTube until a real URL is provided.
   Hide or omit LinkedIn unless a real URL is provided.

5. Remove /accolades from all visible nav/footer/prominent CTA paths.

6. Because owner gave NO-GO to keeping /accolades live but unpromoted:
   - redirect /accolades to /meet-us or /about, OR
   - make /accolades a minimal route that immediately routes users to Meet Us.
   Choose the safest Next.js implementation.
   Do not leave it as a public proof destination.

7. Add or verify reusable text-only trust/accolade blocks on key conversion pages:
   - homepage
   - buy
   - sell
   - about / meet-us
   - contact
   Only use claims already present and approved in the site content. Do not invent proof.

8. Add non-public badge/logo support only as optional data fields:
   - badgeAssetPath?: string
   - logoAssetPath?: string
   - sourceUrl?: string
   - verified?: boolean
   Public rendering must only show a badge/logo if a real asset exists and is verified.
   Never render public placeholder boxes or “coming soon” labels.

9. Confirm MLS fallback remains honest and launch-safe.
   Do not add fake MLS URL.
   Do not make /listings look like live MLS search if the reciprocity URL is missing.

10. Scan public-facing code for incomplete text:
   - placeholder
   - coming soon
   - soon
   - pending
   - TODO
   - TBD
   - draft
   - sample
   - example
   - lorem
   - dummy
   - under construction
   - not yet
   - will be added
   - badge coming
   - logo coming
   - social links coming soon
   - no photo
   - image placeholder

11. Fix launch-visible incomplete language.
    Keep honest compliance language where needed.

12. Update docs:
   - docs/final-owner-launch-approval.md
   - docs/current-launch-blockers.md
   - docs/placeholder-public-text-scan.md

13. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch

14. Write report.
15. Move task to done or blocked.
16. Commit only scoped files.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:

OWNER CONTENT CHECK:
- real Leilani/team photo present:
- real social links present:
- MLS fallback approved:

ACCOLADES:
- removed from nav/footer:
- /accolades route behavior:
- scattered trust blocks:

BADGE/LOGO STRUCTURE:
- optional data fields added:
- public placeholders shown:

PLACEHOLDER TEXT SCAN:
- issues found:
- fixes made:
- acceptable honest fallback language left:

VALIDATION:
- lint:
- build:
- smoke:
- crawl:

COMMIT:
RECOMMENDED NEXT STEP:
- if blocked: exact owner input required
- if done: run final owner approval task, then S29R
