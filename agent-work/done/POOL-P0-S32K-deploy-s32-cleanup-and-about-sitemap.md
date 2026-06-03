TASK:
POOL-P0-S32K — Deploy S32 Cleanup and Add About to Sitemap

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes

GOAL:
Deploy committed S32A/S32B cleanup and add /about to sitemap/indexable phase-one routes.

CONTEXT:
Independent reviews S32D, S32H, and S32J identify one blocker before sitemap submission:
- production is behind committed S32 cleanup
- /raving-fans may still show stale incomplete language
- /about may still show stale blank video block
- /about indexing intent needs clarification

OWNER DECISION:
- /about should be treated as a primary indexable public page.
- Add /about to phaseOneRoutes or equivalent sitemap route source.

DO NOT:
- invent reviews
- invent awards
- invent businesses
- invent events
- add fake schema
- submit sitemap
- edit unrelated pages
- re-enable coming-soon

ALLOWED FILES:
- src/lib/site.ts
- src/app/about/page.tsx
- src/app/raving-fans/page.tsx
- src/app/testimonials/page.tsx
- src/app/local-businesses/page.tsx
- src/components/footer.tsx
- src/components/wordmark.tsx
- docs/s32-independent-review-synthesis.md
- agent-work/reports/POOL-P0-S32K-deploy-s32-cleanup-and-about-sitemap-report.md

TASKS:
1. Move task to active.
2. Confirm S32A/S32B commits are present locally.
3. Add /about to phaseOneRoutes or the current sitemap source.
4. Confirm these redirects remain:
   - /testimonials -> /raving-fans
   - /local-businesses -> /featured-businesses
   - /accolades -> /meet-us
5. Confirm no public stale text remains:
   - "will live here"
   - "Video content planned"
   - "Intro video" if no video exists
   - "Social links coming soon"
   - "Team photo coming soon"
6. Run:
   npm run lint
   npm run build
   npm run crawl:prelaunch
7. If validation passes, commit scoped files.
8. Deploy production:
   vercel --prod --force
9. Post-deploy checks:
   curl -I https://www.liveinportmoody.com/
   curl -I https://www.liveinportmoody.com/about
   curl -I https://www.liveinportmoody.com/raving-fans
   curl -I https://www.liveinportmoody.com/testimonials
   curl -I https://www.liveinportmoody.com/local-businesses
   curl -I https://www.liveinportmoody.com/accolades
   curl -s https://www.liveinportmoody.com/sitemap.xml | grep -E "/about|/accolades|/testimonials|/local-businesses" || true
   vercel logs --level error --since 1h
10. Write report.
11. Move task to done or blocked.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
ABOUT SITEMAP:
- /about added:
REDIRECTS:
- /testimonials:
- /local-businesses:
- /accolades:
STALE TEXT CHECK:
- will live here:
- Video content planned:
- Intro video:
- Social links coming soon:
- Team photo coming soon:
VALIDATION:
- lint:
- build:
- crawl:
DEPLOYMENT:
- commit:
- production URL:
- vercel --prod --force used:
POST-DEPLOY:
- homepage:
- about:
- raving-fans:
- testimonials:
- local-businesses:
- accolades:
- sitemap includes /about:
- sitemap excludes redirect pages:
- error logs:
RECOMMENDED NEXT STEP:
Submit sitemap and indexing requests.
