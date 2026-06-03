TASK:
POOL-P1-S30H — Clear Stale Blocked Queue Items

TASK_TYPE:
queue-cleanup

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Clear stale blocked items that no longer represent live launch blockers.

CURRENT BLOCKED ITEMS:
- A6-S28D-internal-link-and-redirect-audit-post-launch.md
- POOL-P0-S30B-apply-owner-approval-decisions-superseded.md
- POOL-P0-S30B-apply-owner-launch-decisions.md

CONTEXT:
- S30F report says owner asset cleanup is complete and deployed.
- /accolades redirect, social links, team photo, placeholder cleanup, and production checks are complete.
- Internal link audit is post-launch and should not block the queue.
- The two S30B items are superseded by S30F and current logo/truststrip task S30G.

DO NOT:
- edit src/**
- deploy
- modify production
- delete reports

ALLOWED FILES:
- agent-work/blocked/**
- agent-work/done/**
- agent-work/reports/POOL-P1-S30H-clear-stale-blocked-queue-report.md
- docs/current-launch-blockers.md

TASKS:
1. Move this task to active.
2. Inspect each blocked task.
3. For A6 internal-link audit:
   - If a completed report exists, move to done as completed-post-launch.
   - If no completed report exists, leave blocked but rename/report as optional post-launch backlog, not launch blocker.
4. For POOL-P0-S30B-apply-owner-approval-decisions-superseded:
   - Move to done as superseded.
5. For POOL-P0-S30B-apply-owner-launch-decisions:
   - Move to done as superseded by S30F and S30G if S30G has completed.
   - If S30G has not completed, keep blocked and clearly state it is waiting for S30G.
6. Update docs/current-launch-blockers.md:
   - launch blockers should be none after S30G succeeds.
   - remaining work should be post-launch content/ops only.
7. Run:
   npm run agent:status
   npm run agent:conflicts
8. Write report.
9. Move this task to done.
10. Commit only agent-work/docs files.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
BLOCKED ITEMS REVIEWED:
- item/status/action
LAUNCH BLOCKERS REMAINING:
- item or none
QUEUE STATUS:
- backlog:
- active:
- blocked:
- done:
COMMIT:
RECOMMENDED NEXT STEP:
Run post-launch verification and indexing.
