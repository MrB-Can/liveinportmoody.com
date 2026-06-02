TASK:
POOL-P3-S30B — First Local Events Intake

TASK_TYPE:
content-intake

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Create a verified intake doc for the first local event to appear on the /events page. Do not invent event details — all event information must come from the owner or a confirmed public source.

WAIT CONDITION:
Owner must identify the first event to add. Do not fabricate an event.

DO NOT:
- invent event names, dates, organizers, or descriptions
- use stale or unverified event details
- publish events that have already passed
- edit src/**
- deploy

ALLOWED FILES:
- docs/local-events-intake-01.md
- agent-work/reports/POOL-P3-S30B-local-events-intake-report.md

TASKS:
1. Move this task to active.
2. Create docs/local-events-intake-01.md with the following intake fields:
   - Event name
   - Organizer name and public contact / website
   - Public source link (event page, city site, Eventbrite, etc.)
   - Date and time (or recurring schedule)
   - Location (venue name and address or area)
   - Registration / ticket details (if applicable)
   - Is this event one-time or recurring?
   - Freshness check: date this information was last confirmed
   - Change-risk note (add "details subject to change, verify before attending" if date is more than 2 weeks out)
   - Owner approval checkbox
3. Fill in any fields the owner has already provided.
4. Leave blank fields clearly marked as [OWNER TO COMPLETE].
5. Commit intake doc and report only.
6. Move task to done.

FINAL REPORT:
AGENT:
TASK:
STATUS:
FILES CHANGED:
FIELDS COMPLETED:
FIELDS PENDING OWNER INPUT:
COMMIT:
RECOMMENDED NEXT STEP:
Owner completes intake doc fields. Development team adds event to /events page and sets a review reminder if the event is time-sensitive.
