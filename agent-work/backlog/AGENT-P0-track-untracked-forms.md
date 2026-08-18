TASK:
AGENT-P0 - Add conversion tracking to the three untracked forms

TASK_TYPE:
agent

OWNER:
agent

GOAL:
Make every form on the site fire the same GA4/Clarity conversion events and
send attribution, so lead reporting is complete.

PROBLEM:
Three forms call no tracking helper at all. Their submissions are invisible in
GA4 and Clarity, and two of them also send no attribution payload to the CRM:

- src/components/buildings/BuildingInquiryForm.tsx   - no tracking, no attribution
- src/components/listings/ListingSupportForm.tsx     - no tracking, no attribution
- src/components/complexes/TreetopsInquiryForm.tsx   - no tracking (does send attribution)

Also both of the first two hardcode pagePath ("/buildings", "/listings")
instead of using the real path.

FIX:
Follow the pattern already in src/components/lead-form.tsx:
- trackFormStart(formType, pagePath) on first field focus
- trackFormSubmit(...) on successful submit
- include getAttribution() from src/lib/attribution.ts in the POST body
- use the real pathname rather than a hardcoded string

VERIFY:
Submit each of the three forms with GA4 DebugView open and confirm
form_start, form_submit and generate_lead all fire, and that the CRM record
carries attribution fields.
