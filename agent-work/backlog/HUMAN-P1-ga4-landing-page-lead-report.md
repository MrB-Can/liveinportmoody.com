TASK:
HUMAN-P1 - GA4 landing page and lead conversion export

TASK_TYPE:
human

OWNER:
Paul

GOAL:
Export which landing pages actually produce leads.

CONTEXT:
GA4 (G-2D5FTS1HRT) already fires generate_lead plus per-form Key Events
defined in keyEventByForm (src/lib/analytics.ts): home_valuation_submit,
buyer_inquiry_submit, relocation_inquiry_submit, contact_form_submit,
market_update_submit, newsletter_signup, resource_download_submit,
community_submit. Nothing has been reported out of it yet.

STEPS:
- Confirm the Key Events above are marked as conversions in GA4
- Export landing page x generate_lead for the last 90 days
- Export landing page x engagement rate and average engagement time

DEPENDS ON:
AGENT-P0-track-untracked-forms.md - three forms currently fire no events at
all, so any report run before that fix undercounts leads.
