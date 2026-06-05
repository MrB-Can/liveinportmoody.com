TASK:
POOL-P0-S36I — Fix Treetops Mobile Overflow and Gallery Polish

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes

GOAL:
Fix the remaining mobile horizontal overflow on the Treetops page and lightly polish the gallery layout without adding new content.

CONTEXT:
Latest S36H capture shows:
- Treetops gallery is visible and real photos are showing.
- Old internal photo-planning language is gone visually.
- Mobile overflow remains: clientWidth 390, scrollWidth 403.
- Mobile tab row appears to be the likely overflow source.
- Gallery works, but desktop treatment is still basic.

DO NOT:
- add new images
- fetch images
- add new copy sections
- change forms
- change consent behavior
- submit sitemap
- reintroduce placeholder/internal language

ALLOWED FILES:
- src/app/complexes/treetops-101-parkside-drive/page.tsx
- src/app/complexes/**/*.tsx
- src/components/complexes/**/*.tsx
- src/data/**/*.ts
- agent-work/reports/POOL-P0-S36I-fix-treetops-mobile-overflow-and-gallery-polish-report.md

TASKS:
1. Move task to active.

2. Fix mobile horizontal overflow:
   - Inspect sticky tab/nav row.
   - Ensure page/body does not exceed viewport width.
   - Use max-w-full and overflow-x-auto on the tab wrapper.
   - Use width max-content on inner tab row only if contained.
   - Check other likely overflow sources: maps, tables, cards, forms, image grids.

3. Lightly polish gallery:
   - Keep the same three images.
   - On desktop, make the entrance image visually primary if easy.
   - Keep mobile stacked and readable.
   - Do not add placeholders or future-photo text.

4. Confirm no public internal language:
   grep -RniE "photos needed|future photo|photo set|owner-approved photography|shot list|placeholder|coming soon|verification needed|research in progress|TODO|TBD" src/app/complexes src/components/complexes src/data || true

5. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch

6. Commit scoped files only.

7. Push:
   git pull --rebase origin main
   git push origin main

8. Deploy:
   vercel --prod --force

9. Post-deploy checks:
   curl -I https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive

   curl -s https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive | grep -iE "photos needed|future photo|photo set|owner-approved photography|shot list|placeholder|coming soon|verification needed|research in progress|TODO|TBD" || true

   curl -s https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive | grep -iE "treetops-entrance|treetops-driveway|treetops-pool" || true

   vercel logs --level error --since 1h

10. Write report.
11. Move task to done or blocked.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:

MOBILE OVERFLOW:
- cause:
- fix:
- before width:
- after width:

GALLERY:
- primary image treatment:
- mobile behavior:

PUBLIC COPY:
- internal/staging text found:
- remaining false positives:

VALIDATION:
- lint:
- build:
- smoke:
- crawl:

DEPLOYMENT:
- commit:
- production URL:
- vercel --prod --force used:

POST-DEPLOY:
- status:
- stale text grep:
- image references:
- error logs:

RECOMMENDED NEXT STEP:
Run one final Treetops mobile-only recapture if overflow was fixed.
