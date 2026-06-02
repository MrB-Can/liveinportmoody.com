TASK:
POOL-P0-S29R — Remove Coming-Soon Gate After Owner Approval

TASK_TYPE:
deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized — but ONLY after owner provides explicit written approval in the conversation or task file

PRIORITY:
P0

WAIT CONDITION:
Do not start until ALL of the following are confirmed:
1. Owner explicitly approves going live (in conversation or written here).
2. Privacy policy and terms have been reviewed and approved by owner (POOL-P1-S29I complete).
3. Owner confirms GHL live form test passed (POOL-P1-S29H runbook executed).
4. No active src/** tasks are in flight that could conflict with this deploy.

DO NOT:
- remove coming-soon without explicit owner approval
- edit src/**
- edit middleware.ts
- change PREVIEW_KEY
- change any env var other than COMING_SOON_ENABLED
- submit live forms
- change DNS or domain config

ALLOWED FILES:
- Vercel env var: COMING_SOON_ENABLED (set to "false")
- agent-work/reports/POOL-P0-S29R-remove-coming-soon-report.md
- agent-work/done/POOL-P0-S29R-remove-coming-soon-after-owner-approval.md

MECHANISM:
The gate is controlled entirely by the Vercel environment variable COMING_SOON_ENABLED.
middleware.ts: `const comingSoonEnabled = process.env.COMING_SOON_ENABLED !== "false";`
No code changes are required. Setting COMING_SOON_ENABLED=false and redeploying is the entire operation.

TASKS:

1. Move this task to active.

2. Run agent:status and agent:conflicts to confirm queue is clean:
   npm run agent:status
   npm run agent:conflicts

3. Confirm git working tree is clean:
   git status --short

4. PRE-REMOVAL VALIDATION — run all three against production:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch
   All must pass before proceeding.

5. SET ENV VAR — set COMING_SOON_ENABLED to "false" on Vercel production:
   vercel env add COMING_SOON_ENABLED production
   Enter value: false
   (Or via Vercel dashboard: Project Settings → Environment Variables → add COMING_SOON_ENABLED = false, Production only)

   Verify the var is set:
   vercel env ls

6. DEPLOY to production:
   vercel --prod

7. POST-LAUNCH SPOT CHECKS — run immediately after READY:
   a. Confirm / is no longer gated (no redirect to /coming-soon):
      curl -sI https://www.liveinportmoody.com/ | grep -E "x-matched-path|location|HTTP"
      Expected: HTTP/2 200, x-matched-path: / (NOT /coming-soon)

   b. Confirm /contact is still accessible:
      curl -sI https://www.liveinportmoody.com/contact | grep "HTTP"
      Expected: HTTP/2 200

   c. Confirm /coming-soon is still a valid page (not removed):
      curl -sI https://www.liveinportmoody.com/coming-soon | grep "HTTP"
      Expected: HTTP/2 200

   d. Confirm robots.txt still resolves:
      curl -s https://www.liveinportmoody.com/robots.txt | head -5

   e. Confirm sitemap still resolves:
      curl -sI https://www.liveinportmoody.com/sitemap.xml | grep "HTTP"
      Expected: HTTP/2 200

8. POST-LAUNCH FULL SMOKE — update and run a post-launch smoke if available, or run:
   npm run smoke:prelaunch
   (Note: after launch, the "gated" checks will fail because the site is open — owner should coordinate any post-launch smoke script update)

9. Verify runtime errors:
   vercel logs <deployment-url> --level error --since 1h

10. If anything fails → ROLLBACK by resetting the env var:
    vercel env rm COMING_SOON_ENABLED production
    vercel --prod
    This re-enables the gate without any code change.

11. Write report:
    agent-work/reports/POOL-P0-S29R-remove-coming-soon-report.md

12. Move this task to done.

13. Commit only: report and task movement.

ROLLBACK PROCEDURE (if post-launch checks fail):
  vercel env rm COMING_SOON_ENABLED production
  vercel --prod
  Gate re-enables immediately on next deploy. Preview cookie access still works during rollback period.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
APPROVAL CONFIRMED:
COMMIT DEPLOYED:
DEPLOYMENT URL:
PRODUCTION URL:
PRE-REMOVAL VALIDATION:
- lint:
- build:
- smoke:
- crawl:
POST-LAUNCH SPOT CHECKS:
- / no longer gated:
- /contact accessible:
- /coming-soon still valid:
- robots.txt resolves:
- sitemap resolves:
RUNTIME ERRORS:
ROLLBACK USED:
RECOMMENDED NEXT STEP:
Monitor first-48-hours runbook (POOL-P1-S29U).
