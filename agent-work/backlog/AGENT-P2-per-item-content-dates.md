TASK:
AGENT-P2 - Add per-item lastReviewed dates to content data

TASK_TYPE:
agent

OWNER:
agent

GOAL:
Give sitemap lastmod a real per-item signal.

CONTEXT:
sitemap.ts used to stamp `new Date()` on every entry, which told Google that
every URL changed on every deploy. That is now replaced by a single
siteConfig.contentUpdated constant (src/lib/site.ts), which is honest but
coarse - one date for ~52 URLs.

None of the data files carry a date field:
src/data/neighbourhoodGuides.ts, buildings.ts, complexes.ts, ourListings.ts

FIX:
Add an optional `lastReviewed: string` (ISO date) to each record type and use
it in src/app/sitemap.ts, falling back to siteConfig.contentUpdated when absent.
Populate the dates as content is genuinely reviewed - do not backfill invented
dates.
