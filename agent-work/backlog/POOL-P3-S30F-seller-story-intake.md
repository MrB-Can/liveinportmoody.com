TASK:
POOL-P3-S30F — First Seller Story / Sold Content Intake

TASK_TYPE:
content-intake

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Create a verified intake doc for the first seller story or sold-property content item. This content is only permitted if sharing is explicitly approved by the owner and client. Do not fabricate, estimate, or publish without full written consent.

WAIT CONDITION:
Owner must confirm that sold-property sharing is permitted and that the specific client has given written approval. Do not proceed otherwise.

DO NOT:
- invent client names, addresses, prices, or stories
- infer consent — written approval is required for every item
- include private client details (income, personal circumstances, reasons for selling)
- frame results as guarantees or typical outcomes
- edit src/**
- deploy

ALLOWED FILES:
- docs/seller-story-intake-01.md
- agent-work/reports/POOL-P3-S30F-seller-story-intake-report.md

TASKS:
1. Move this task to active.
2. Confirm with owner that sold-property content sharing is permitted for this specific property/client.
3. If not permitted, move task to blocked and note the reason.
4. If permitted, create docs/seller-story-intake-01.md with the following intake fields:
   - Property type and Port Moody area (no full address required if privacy preferred)
   - Sold date and approximate price range (only if owner and client approve sharing)
   - Client consent confirmed: [ ] Yes — written approval on file / [ ] Not yet
   - What may be shared publicly (checklist):
     - [ ] Price (exact or approximate)
     - [ ] Address / street
     - [ ] Days on market
     - [ ] Client first name
     - [ ] Client quote or story excerpt
     - [ ] Before/after photos
   - Story angle (owner-provided; framed as education, not guarantee):
     - What made this property stand out in the market?
     - What preparation or strategy was used?
     - What should a reader learn from this?
   - Outcome framing note: [ ] Confirmed — result is framed as one outcome, not a guarantee
   - Owner approval checkbox
5. Fill in any fields the owner has already confirmed.
6. Leave all unconfirmed fields as [OWNER / CLIENT TO APPROVE].
7. Commit intake doc and report only.
8. Move task to done or blocked depending on consent status.

FINAL REPORT:
AGENT:
TASK:
STATUS: done / blocked
CONSENT CONFIRMED:
FILES CHANGED:
FIELDS COMPLETED:
FIELDS PENDING APPROVAL:
COMMIT:
RECOMMENDED NEXT STEP:
If consent is confirmed, development team adds approved story to /recently-sold or /raving-fans page in a separate code task. If blocked, wait for client written approval.
