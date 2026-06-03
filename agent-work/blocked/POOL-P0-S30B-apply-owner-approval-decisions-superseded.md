TASK:
POOL-P0-S30B — Apply Owner Approval Decisions Before Launch

TASK_TYPE:
code

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Apply owner launch decisions about accolades, visible incomplete content, social links, MLS fallback, and Leilani/team photo before coming-soon removal.

OWNER DECISIONS CONFIRMED:
- Privacy/terms approved: GO
- GHL test passed: GO
- Remove standalone Accolades page from visible nav/footer: GO
- Keep /accolades route live but not promoted: NO-GO
- Use text-only verified accolade/trust blocks across pages: GO
- Do not show public “badge coming soon” or “logo placeholder” labels: GO
- Launch without Leilani/team photo if missing: NO-GO

OWNER DECISIONS STILL REQUIRED:
- Non-public code/data placeholders for future badge/logo assets: GO/NO-GO
- Launch without real social links if still missing/hidden: GO/NO-GO
- Launch with MLS listings fallback if reciprocity URL is not ready: GO/NO-GO
- Remove coming-soon after final scan passes: GO/NO-GO

DO NOT:
- deploy
- remove coming-soon
- invent awards
- invent testimonials
- invent badges/logos
- show public placeholder text
- add fake social URLs
- add fake MLS URL
- launch without Leilani/team photo

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
- docs/final-owner-launch-approval.md
- docs/placeholder-public-text-scan.md
- agent-work/reports/POOL-P0-S30B-apply-owner-approval-decisions-report.md

TASKS:
1. Move this task to active.
2. Check whether a real Leilani/team photo exists in public/images/team/.
3. If no real photo exists, BLOCK this task with:
   BLOCKED_REASON: Owner gave NO-GO for launch without Leilani/team photo.
4. Remove /accolades from visible nav/footer and prominent CTAs.
5. Because owner said NO-GO to keeping /accolades live but unpromoted, either:
   - redirect /accolades to /meet-us or /about, or
   - replace /accolades with a minimal page that directs to Meet Us without being a proof destination.
   Choose the safest implementation consistent with project routing.
6. Scatter verified text-only trust/accolade blocks across key pages only where the claim is already approved and safe.
7. Add badge/logo rendering support only if owner approved non-public placeholders:
   - optional asset path fields are allowed
   - render only real verified assets
   - never show public placeholders
8. Scan public text for:
   placeholder, coming soon, pending, TBD, draft, sample, lorem, under construction, not yet, will be added, badge coming, logo coming, social links coming soon.
9. Fix public-facing incomplete language.
10. Do not remove honest compliance language.
11. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch
12. Write report.
13. Move task to done or blocked.
14. Commit only scoped files.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
PHOTO CHECK:
- real Leilani/team photo present: yes/no
ACCOLADES:
- removed from nav/footer: yes/no
- /accolades route behavior:
- scattered trust blocks:
BADGE/LOGO STRUCTURE:
- public placeholders shown: yes/no
PLACEHOLDER TEXT SCAN:
- issues found:
- fixes made:
VALIDATION:
- lint:
- build:
- smoke:
- crawl:
COMMIT:
RECOMMENDED NEXT STEP:
