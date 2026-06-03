# Post-Launch Verification Results

Date: 2026-06-03

## Public Checks

| Check | Result |
| --- | --- |
| Homepage `/` | HTTP 200 |
| Contact `/contact` | HTTP 200 |
| Meet Us `/meet-us` | HTTP 200 |
| Buildings `/buildings` | HTTP 200 |
| Neighbourhoods `/neighbourhoods` | HTTP 200 |
| Accolades `/accolades` | HTTP 307 redirect to `/meet-us` |
| Robots `/robots.txt` | HTTP 200, `User-Agent: *`, `Allow: /`, sitemap declared |
| Sitemap `/sitemap.xml` | HTTP 200, XML available |
| Sitemap excludes `/accolades` | Yes |
| Coming-soon gate absent | Yes; public pages return live page responses |
| Team photo asset | HTTP 200 at `/images/team/leilani-paul-team.jpeg` |
| Obvious placeholder/incomplete text on sampled key pages | None found in targeted scan |

## Crawl

Command: `npm run crawl:prelaunch`

Result: pass, 106 passed, 1 warning, 0 failed.

Warning: the crawl script still checks for `public/images/team/leilani.*` and reports it missing. This is stale for the current owner asset because the deployed supplied image is a shared team photo at `public/images/team/leilani-paul-team.jpeg`.

## Logs

Command: `vercel logs --level error --since 1h`

Result: no error logs found for `paul-1527s-projects/liveinportmoody.com` on branch `main`.

## Notes

- No deployment was performed as part of this verification task.
- No `src/**` files were edited.
- `/accolades` should not be submitted for indexing because it redirects to `/meet-us`.
