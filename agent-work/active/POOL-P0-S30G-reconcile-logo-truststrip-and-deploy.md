TASK:
POOL-P0-S30G — Reconcile Dirty TrustStrip Work, Add Logo Assets, and Deploy

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes

GOAL:
Finish the current dirty local work, add owner-approved logo assets from ~/Downloads/lipm_logo_assets.zip, validate, deploy, and confirm the live site is clean.

CURRENT CONTEXT:
- Site is already public.
- S30F report says team photo, Facebook/Instagram, /accolades redirect, placeholder cleanup, and forced production deploy are complete.
- Current local status shows dirty files:
  - agent-work/reports/POOL-P0-S30B-apply-owner-launch-decisions-report.md
  - src/app/contact/page.tsx
  - src/app/meet-us/page.tsx
  - src/app/sell/page.tsx
  - src/lib/site.ts
  - src/components/trust-strip.tsx
- Recent commits include:
  - b2ba7b2 add TrustStrip to buy page
  - 41b6c0d refactor trust strip to reusable component
  - 7fd5a51 POOL-P0-S30F apply owner assets cleanup

OWNER PROVIDED:
- Logo asset ZIP: ~/Downloads/lipm_logo_assets.zip
- Team photo already deployed by S30F.
- Facebook: https://www.facebook.com/liveinportmoody
- Instagram: https://www.instagram.com/liveinportmoody/
- YouTube: omit until real URL exists.

DO NOT:
- re-enable coming-soon
- invent awards
- invent badges/logos
- invent social URLs
- add fake testimonials
- add fake sold data
- start content intake work
- overwrite current dirty code without reviewing the diff

ALLOWED FILES:
- src/lib/site.ts
- src/app/contact/page.tsx
- src/app/meet-us/page.tsx
- src/app/sell/page.tsx
- src/app/buy/page.tsx
- src/app/page.tsx
- src/components/trust-strip.tsx
- src/components/**/*.tsx
- public/images/brand/**
- public/favicon.ico
- public/icon*.png
- public/apple-touch-icon.png
- docs/placeholder-public-text-scan.md
- docs/current-launch-blockers.md
- agent-work/reports/POOL-P0-S30G-reconcile-logo-truststrip-and-deploy-report.md

TASKS:
1. Move this task to active.

2. Inspect current dirty state:
   git status --short
   git diff --stat
   git diff -- src/lib/site.ts src/app/contact/page.tsx src/app/meet-us/page.tsx src/app/sell/page.tsx src/components/trust-strip.tsx

3. Decide whether dirty TrustStrip changes are intentional:
   - If they are clean and consistent, keep and finish them.
   - If they are partial/broken, fix them.
   - Do not discard without explaining.

4. Confirm logo ZIP exists:
   ls -lh ~/Downloads/lipm_logo_assets.zip
   If missing, block with exact missing path.

5. Unzip logo assets to:
   public/images/brand/
   Expected assets may include:
   - lipm-logo-wide-dark.webp
   - lipm-logo-wide-light.webp
   - lipm-logo-stacked-dark.webp
   - lipm-logo-stacked-light.webp
   - lipm-mark-dark.webp
   - lipm-mark-light.webp
   - favicon-32.png
   - apple-touch-icon.png
   - icon-512.png

6. Wire logo assets:
   - Header should use wide dark or existing compact logo if the wide asset looks too large.
   - Footer should use stacked light or wide light.
   - Favicon/app icons should use mark/icon assets if safe.
   - Preserve layout on desktop and mobile.
   - Do not distort logo aspect ratio.

7. Confirm TrustStrip usage:
   - homepage
   - buy
   - sell
   - contact
   - meet-us/about if appropriate
   Keep text-only verified trust. Do not add fake awards or exact claims without proof.

8. Confirm public cleanup remains intact:
   - No visible "Social links coming soon"
   - No visible "Team photo coming soon"
   - No social href="#"
   - No YouTube link rendered
   - /accolades redirects to /meet-us
   - /accolades absent from sitemap/promoted nav/footer

9. Run local validation:
   npm run lint
   npm run build
   npm run crawl:prelaunch

   Note:
   Do not treat npm run smoke:prelaunch as blocking if it still expects the old coming-soon gate. The site is public now. If smoke is run and fails only because it expects pages to be gated, report that as obsolete smoke logic.

10. Commit scoped files only.

11. Deploy production with forced rebuild:
   vercel --prod --force

12. Post-deploy checks:
   curl -I https://www.liveinportmoody.com/
   curl -I https://www.liveinportmoody.com/contact
   curl -I https://www.liveinportmoody.com/meet-us
   curl -I https://www.liveinportmoody.com/accolades
   curl -s https://www.liveinportmoody.com/robots.txt | head
   curl -s https://www.liveinportmoody.com/sitemap.xml | head
   vercel logs --level error --since 1h

13. Write report.
14. Move task to done or blocked.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:

DIRTY STATE REVIEW:
- files reviewed:
- dirty changes kept:
- dirty changes reverted:
- reason:

LOGO:
- ZIP path:
- deployed logo files:
- header logo:
- footer logo:
- favicon/app icons:

TRUST STRIP:
- pages using it:
- fake/unverified claims added: no

PUBLIC CLEANUP:
- social placeholder text remaining:
- team photo placeholder text remaining:
- href "#" social links remaining:
- YouTube rendered:
- /accolades behavior:
- /accolades in sitemap:

VALIDATION:
- lint:
- build:
- crawl:
- smoke if run:

DEPLOYMENT:
- commit:
- deployment URL:
- production URL:
- vercel --prod --force used:

POST-DEPLOY:
- homepage:
- contact:
- meet-us:
- accolades:
- robots:
- sitemap:
- error logs:

RECOMMENDED NEXT STEP:
Run stale queue unblock task, then post-launch verification/indexing.
