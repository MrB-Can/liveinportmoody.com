TASK:
POOL-P0-S36B — Independent Live Public Copy Audit

TASK_TYPE:
qa

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

WAIT CONDITION:
Do not start until S36A is deployed.

GOAL:
Independently audit the live production site after S36A. This task must verify that no internal/staging/workboard language remains public.

DO NOT:
- edit src/**
- deploy
- change content
- submit sitemap

BASE URL:
https://www.liveinportmoody.com

TASKS:
1. Move task to active.
2. Run:
   node scripts/public-copy-denylist-scan.mjs --base https://www.liveinportmoody.com
3. Manually inspect high-risk pages:
   - /complexes/treetops-101-parkside-drive
   - /complexes
   - /buildings
   - /neighbourhoods
   - /neighbourhoods/heritage-mountain
   - /listings
   - /presales
   - /raving-fans
   - /featured-businesses
   - /events
   - /about
   - /resources
4. Classify every match:
   - public blocker
   - acceptable real-estate context
   - false positive
5. Create:
   docs/s36-independent-live-public-copy-audit.md
6. If public blockers remain, create a new P0 fix task.
7. Write report:
   agent-work/reports/POOL-P0-S36B-independent-live-public-copy-audit-report.md
8. Move task to done or blocked.
9. Commit docs/report/task movement only.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
ROUTES REVIEWED:
PUBLIC BLOCKERS:
- item or none
FALSE POSITIVES:
- route / phrase / why acceptable
HIGH-RISK PAGE VERDICT:
- Treetops:
- complexes:
- buildings:
- neighbourhoods:
- listings:
- presales:
FOLLOW-UP TASK CREATED:
COMMIT:
