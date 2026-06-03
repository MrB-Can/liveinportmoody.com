AGENT:
Codex

TASK:
POOL-P0-S32A — Remove Public Incomplete Content Language

STATUS:
Completed

PAGES UPDATED:
- `/raving-fans`: changed future-state review copy into current verification/source standards.
- `/testimonials`: changed compatibility page to redirect to `/raving-fans`.
- `/about`: removed empty intro video block and removed prominent Raving Fans card.
- `/local-businesses`: changed compatibility page to redirect to `/featured-businesses`.
- `/featured-businesses`: changed future publication wording into current suggestion/review standards.
- `/events`: changed future event-listing wording into current source-checking standards.
- Shared market snapshot: removed after-launch market-note wording.
- Navigation/footer: removed visible Raving Fans links where approved reviews are not yet public.

INCOMPLETE LANGUAGE REMOVED:
- "future connected review sources" / `src/app/raving-fans/page.tsx`
- "can appear once" / `src/app/raving-fans/page.tsx`
- "can be added later" / `src/app/raving-fans/page.tsx`
- "can appear only after" / `src/app/raving-fans/page.tsx`
- "before approved proof content is added" / `src/app/testimonials/page.tsx`
- "can be added later" / `src/app/testimonials/page.tsx`
- "Local Businesses is now Featured Businesses" / `src/app/local-businesses/page.tsx`
- "Featured businesses will support..." and "Until approved features..." / `src/app/local-businesses/page.tsx`
- "Features are published only after..." / `src/app/featured-businesses/page.tsx`
- "No businesses are listed here until..." / `src/app/featured-businesses/page.tsx`
- "Current dates and event details will be listed..." / `src/app/events/page.tsx`
- "First Port Moody detached note will be published after launch" / `src/components/market-snapshot.tsx`

ROUTES REDIRECTED:
- `/testimonials` -> `/raving-fans`
- `/local-businesses` -> `/featured-businesses`

NAV/FOOTER CHANGES:
- Removed Raving Fans from Sell dropdown.
- Removed Raving Fans from About dropdown.
- Removed Raving Fans from footer Sell group.
- Removed Raving Fans prominent About page card.

VALIDATION:
- lint: pass (`npm run lint` under Node 20.20.0)
- build: pass (`npm run build` under Node 20.20.0)
- crawl: pass (`npm run crawl:prelaunch` under Node 20.20.0; 105 passed, 2 existing warnings, 0 failed)

COMMIT:
Scoped commit created: Remove public incomplete content language

RECOMMENDED NEXT STEP:
Run S32B visual polish, then deploy.
