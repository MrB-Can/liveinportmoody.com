AGENT:
Next available agent (Claude Sonnet 4.6)

TASK:
POOL-P0-S29R — Remove Coming-Soon Gate (this session execution)

STATUS:
Completed

APPROVAL CONFIRMED:
- GHL live test passed: confirmed by owner in conversation
- Privacy/terms approved: confirmed by owner in conversation
- Go-live authorization: confirmed by owner in conversation

PRIOR AGENT NOTE:
A prior agent (Claude Haiku 4.5, commit 234f754) had already set COMING_SOON_ENABLED=false
in vercel.json and verified the gate was removed at their deployment time. However, subsequent
deployments restored a stale Edge Middleware bundle from build cache (deployment EH6Sg7FgpDwAgYVzfjdV8hRXtnFX,
from the earlier visual-fix stack deploy where COMING_SOON_ENABLED was true). Because Vercel Edge
Middleware bundles env vars at build time, the cached bundle still had the gate active.

ROOT CAUSE:
Vercel's build cache restored the Edge Middleware bundle from a deployment where
COMING_SOON_ENABLED was "true" (baked in at build time). Using `vercel --prod` without
--force reused this stale bundle. The env var in vercel.json and Vercel project settings
was correct ("false"), but the cached middleware ignored it.

FIX APPLIED:
`vercel --prod --force` forced a full rebuild without cache restoration. The fresh build
read COMING_SOON_ENABLED="false" from vercel.json and baked it into the Edge Middleware
bundle correctly.

COMMIT DEPLOYED:
fa480a2 (HEAD at deploy time)

DEPLOYMENT URL:
https://liveinportmoody-n4d38fdic-paul-1527s-projects.vercel.app

PRODUCTION URL:
https://www.liveinportmoody.com

PRE-REMOVAL VALIDATION:
- lint: pass — no ESLint errors
- build: pass — 86 static pages
- smoke: pass — 71/71
- crawl: pass — 106/106 (1 expected warning: Leilani photo)

POST-LAUNCH SPOT CHECKS:
- / no longer gated: ✅ x-matched-path: / (not /coming-soon), age: 0, title: "Port Moody Real Estate Decision Engine"
- /contact accessible: ✅ x-matched-path: /contact, HTTP 200
- /coming-soon still valid: ✅ HTTP 200 (page exists but not forced on visitors)
- /explore accessible: ✅ x-matched-path: /explore
- /neighbourhoods accessible: ✅ x-matched-path: /neighbourhoods
- /buildings accessible: ✅ x-matched-path: /buildings
- robots.txt: ✅ User-Agent: * Allow: /
- sitemap.xml: ✅ HTTP 200

RUNTIME ERRORS:
None — no error-level logs in post-deploy scan.

ROLLBACK USED:
No

ENV VAR STATE:
- vercel.json: COMING_SOON_ENABLED="false" (set by prior agent, commit 234f754)
- Vercel project env var: COMING_SOON_ENABLED=false (Production, plain type, set 2d ago)
- PREVIEW_KEY: unchanged (still active for preview access)

RECOMMENDED NEXT STEP:
Monitor first-48-hours runbook (docs/first-48-hours-monitoring-runbook.md).
Add social URLs and Leilani photo when available (docs/social-url-and-photo-intake.md).
