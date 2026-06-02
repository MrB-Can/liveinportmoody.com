AGENT:
Next available agent

TASK:
POOL-P0-S29Q — Prepare Coming-Soon Removal Task

STATUS:
Completed

FILES CREATED:
- agent-work/backlog/POOL-P0-S29R-remove-coming-soon-after-owner-approval.md

MECHANISM CONFIRMED:
The coming-soon gate is controlled entirely by the Vercel environment variable COMING_SOON_ENABLED.
middleware.ts evaluates: process.env.COMING_SOON_ENABLED !== "false"
No code edits are required to remove the gate. Setting COMING_SOON_ENABLED=false and redeploying is the full operation.

S29R TASK INCLUDES:
- Explicit owner approval gate (must confirm in writing before execution)
- Privacy/terms approval confirmation required
- GHL live form test confirmation required
- Pre-removal lint, build, smoke, crawl validation
- Exact Vercel env var command (vercel env add COMING_SOON_ENABLED production → "false")
- Post-launch spot checks (/, /contact, /coming-soon, robots.txt, sitemap.xml)
- Runtime error scan (vercel logs --level error)
- Rollback procedure (vercel env rm COMING_SOON_ENABLED production → vercel --prod)

COMMIT:
(see below)

RECOMMENDED NEXT STEP:
Wait for owner approval before running S29R. Owner must confirm: (1) privacy/terms reviewed, (2) GHL live form test passed, (3) explicit go-live authorization.
