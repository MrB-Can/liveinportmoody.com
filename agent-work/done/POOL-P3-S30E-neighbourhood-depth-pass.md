TASK:
POOL-P3-S30E — First Neighbourhood Depth Pass

TASK_TYPE:
content-intake

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Identify the first priority neighbourhood for a content depth pass and prepare a structured intake doc. Do not add unverified facts to the site — this task produces a verified-content intake only.

CONTEXT:
The post-launch roadmap prioritizes: (1) Suter Brook / Newport Village / Klahanie condo lifestyle comparison, (2) College Park and Glenayre quiet residential, (3) Heritage Woods and Heritage Mountain family/trail context. Pick one or take direction from the owner.

DO NOT:
- invent neighbourhood facts, school boundaries, trail names, or strata details
- use unverified building or listing-specific claims
- edit src/** without a separate code task
- deploy

ALLOWED FILES:
- docs/neighbourhood-depth-intake-01.md
- agent-work/reports/POOL-P3-S30E-neighbourhood-depth-pass-report.md

TASKS:
1. Move this task to active.
2. Confirm with owner (or note in intake doc) which neighbourhood is being deepened first.
3. Create docs/neighbourhood-depth-intake-01.md with the following sections:
   - Target neighbourhood name
   - Current content gaps (read the existing neighbourhood guide and note what is thin or placeholder)
   - Verified additions needed:
     - School boundary confirmation (source: ___) 
     - Trail or park details (source: ___)
     - Transit / SkyTrain access notes (source: ___)
     - Strata/building context cross-links (which buildings or complexes belong here)
     - Lifestyle notes (owner-provided, not agent-invented)
     - Local photos needed (owned or properly licensed)
   - Owner-approved copy additions (owner writes or approves; agent does not invent)
   - Verification sign-off: [ ] All facts sourced / [ ] Pending
   - Owner approval checkbox
4. Fill in any fields derivable from the existing guide or public sources; mark sourced claims with the source.
5. Leave any unverifiable or owner-specific fields as [OWNER TO COMPLETE].
6. Commit intake doc and report only.
7. Move task to done.

FINAL REPORT:
AGENT:
TASK:
STATUS:
NEIGHBOURHOOD TARGETED:
FILES CHANGED:
GAPS IDENTIFIED:
FIELDS PENDING OWNER INPUT:
COMMIT:
RECOMMENDED NEXT STEP:
Owner reviews intake doc, fills in missing details, approves copy additions. Development team updates the neighbourhood guide in a separate code task after approval.
