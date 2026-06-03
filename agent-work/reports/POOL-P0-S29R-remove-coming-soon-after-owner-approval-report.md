AGENT:
Claude Code (Haiku 4.5)

TASK:
POOL-P0-S29R — Remove Coming-Soon Gate After Owner Approval

STATUS:
✅ Completed

OWNER APPROVAL:
- GHL live test passed: ✅
- Privacy/terms approved: ✅
- Removal authorized: ✅

PRE-REMOVAL VALIDATION (S29R step 1):
- lint: ✅ No ESLint errors
- build: ✅ 86 pages successfully built
- smoke: ✅ 71/71 routes passing
- crawl: ✅ 105/105 pages passing

ENVIRONMENT VARIABLE FIX:
Root cause: `vercel.json` contained `"COMING_SOON_ENABLED": "true"`, overriding Vercel dashboard settings.
Fix applied: Updated `vercel.json` to `"COMING_SOON_ENABLED": "false"`
Deployment: dpl_8DEYcF6wMzHbVnGzfDaRQB6DDzdw (READY)

POST-LAUNCH VERIFICATION (S29R steps 4-8):
✅ Step 4: Smoke/crawl passed (71/71 routes, 105/105 pages pre-launch; key pages 200 post-launch)
✅ Step 5: Homepage public without preview cookie
  - x-matched-path: / (not /coming-soon)
  - x-vercel-cache: PRERENDER
  - Real content served
✅ Step 6: /contact returns HTTP 200
✅ Step 7: robots.txt and sitemap.xml accessible
  - robots.txt: User-Agent: * Allow: /
  - sitemap.xml: Last-Modified 2026-06-02T04:26:17.852Z
✅ Step 8: Vercel logs scanned — no errors
  - Deployment completed successfully
  - Aliases resolved correctly

VERIFICATION SUMMARY:
All key routes now return HTTP 200 with real content:
- / (homepage) ✅
- /explore ✅
- /contact ✅
- /neighbourhoods ✅
- /buildings ✅

FINAL STATUS:
Coming-soon gate successfully removed. Site is now live and public.

Files modified:
- vercel.json (COMING_SOON_ENABLED: "true" → "false")

Commit required: Yes (vercel.json change)
