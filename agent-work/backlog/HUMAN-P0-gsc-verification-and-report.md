TASK:
HUMAN-P0 - Google Search Console verification and query export

TASK_TYPE:
human

OWNER:
Paul

GOAL:
Verify the GSC property and export per-URL search performance so page audits
can be based on measurement instead of prediction.

CONTEXT:
No Google or Bing site-verification meta tag or verification file exists
anywhere in the repo or in public/. Related: HUMAN-P0-S33A-submit-sitemap-and-indexing.md
is still in backlog, so the sitemap may never have been submitted.

STEPS:
- Verify https://www.liveinportmoody.com in Google Search Console
  (DNS TXT, or add the meta tag to src/app/layout.tsx)
- Submit https://www.liveinportmoody.com/sitemap.xml (see S33A)
- Repeat in Bing Webmaster Tools
- Export Performance > Pages: clicks, impressions, CTR, average position per URL
- Export Performance > Queries for the same window

DELIVERABLE:
CSV exports dropped somewhere the agent can read, so each page audit can
include real query and impression data.
