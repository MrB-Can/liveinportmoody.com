TASK:
POOL-P0-S30E — Record Owner Decisions and Launch Blockers

TASK_TYPE:
qa

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Record final owner GO/NO-GO launch decisions and prevent coming-soon removal until unresolved blockers are cleared.

OWNER DECISIONS CONFIRMED:
- Privacy/terms approved: GO
- GHL test passed: GO
- Remove standalone Accolades page from visible nav/footer: GO
- Keep /accolades route live but not promoted: NO-GO
- Use text-only verified accolade/trust blocks across pages: GO
- Use non-public code/data placeholders for future badge/logo assets: GO
- Do not show public badge/logo placeholder labels: GO
- Launch without Leilani/team photo if missing: NO-GO
- Remove coming-soon after final scan passes: GO

OWNER DECISIONS STILL REQUIRED:
- Launch without real social links if missing/hidden: GO/NO-GO
- Launch with MLS listings fallback if reciprocity URL is not ready: GO/NO-GO

DO NOT:
- deploy
- remove coming-soon
- edit src/**
- invent content
- add fake photos
- add fake social URLs
- add fake MLS URLs

ALLOWED FILES:
- docs/final-owner-launch-approval.md
- docs/current-launch-blockers.md
- agent-work/reports/POOL-P0-S30E-record-owner-decisions-and-blockers-report.md

TASKS:
1. Move task to active.
2. Update owner approval docs with confirmed GO/NO-GO decisions.
3. Mark launch BLOCKED until real Leilani/team photo is added.
4. Mark social links and MLS fallback as pending owner decision.
5. Mark S29R not allowed until:
   - real Leilani/team photo exists
   - social-link launch decision is recorded
   - MLS fallback decision is recorded
   - final placeholder scan passes
6. Write report.
7. Move task to done or blocked.
8. Commit only docs/report/task movement.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
GO ITEMS:
- item
NO-GO ITEMS:
- item
MISSING OWNER DECISIONS:
- item
LAUNCH BLOCKERS:
- item
S29R ALLOWED:
yes/no
COMMIT:
RECOMMENDED NEXT STEP:
