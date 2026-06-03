TASK:
POOL-P0-S32A — Remove Public Incomplete Content Language

TASK_TYPE:
code

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Remove public-facing text that makes the live site look incomplete. The site is live, so trust/local shell pages must read as intentional, not unfinished.

VISUAL REVIEW FINDINGS:
Pages with visible incomplete/scaffold language:
- /raving-fans
- /testimonials
- /about
- /local-businesses
- /featured-businesses
- /events

SPECIFIC TEXT TO REMOVE OR REWRITE:
- "will live here"
- "connect later"
- "being organized"
- "will be published"
- "VIDEO CONTENT PLANNED"
- "coming soon"
- "pending"
- "placeholder"
- "future"
- "will be added"
- "source material is verified" if phrased as future-state content
- "Local Businesses is now Featured Businesses"

DO NOT:
- invent testimonials
- invent reviews
- invent awards
- invent businesses
- invent events
- add fake social proof
- add fake logos or badges
- remove necessary legal/compliance disclaimers
- deploy

ALLOWED FILES:
- src/app/raving-fans/page.tsx
- src/app/testimonials/page.tsx
- src/app/about/page.tsx
- src/app/local-businesses/page.tsx
- src/app/featured-businesses/page.tsx
- src/app/events/page.tsx
- src/components/**/*.tsx
- src/lib/site.ts
- docs/visual-review-final-fixes.md
- agent-work/reports/POOL-P0-S32A-remove-public-incomplete-content-language-report.md

TASKS:
1. Move this task to active.
2. Review the listed pages.
3. Rewrite or remove incomplete/future-state public language.
4. If a page has no real content, make it a useful request/guidance page or redirect it to a stronger page.
5. Recommended route behavior:
   - /testimonials should redirect to /raving-fans or /meet-us unless it has unique useful content.
   - /local-businesses should redirect to /featured-businesses or become a simple bridge without "now Featured Businesses" wording.
6. Remove the About page empty video block unless there is a real video.
7. Remove Raving Fans / Testimonials from visible footer/nav/prominent CTAs if no approved reviews exist.
8. Keep compliance-safe language, but make it feel intentional.
9. Run:
   npm run lint
   npm run build
   npm run crawl:prelaunch
10. Write report.
11. Move task to done or blocked.
12. Commit scoped files only.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
PAGES UPDATED:
- page/change
INCOMPLETE LANGUAGE REMOVED:
- phrase/file
ROUTES REDIRECTED:
- route/target
NAV/FOOTER CHANGES:
- item
VALIDATION:
- lint:
- build:
- crawl:
COMMIT:
RECOMMENDED NEXT STEP:
Run S32B visual polish, then deploy.
