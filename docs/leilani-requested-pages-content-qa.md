# Leilani-Requested Pages Content QA

Date: 2026-05-31

Scope: post-deploy content and claims QA for the Leilani education, lead-magnet, community, trust, and presales pages.

Result: no content blockers found. The pages are safe from a claims/compliance standpoint, but several placeholder-heavy pages need copy polish and verified content before a full public launch.

## Summary

| Page | QA result | Priority | Safe behind coming-soon | Ready for public launch later |
| --- | --- | --- | --- | --- |
| `/first-time-home-buyers` | Pass | Low | Yes | Yes, after minor copy polish |
| `/generational-wealth-real-estate` | Pass | Low | Yes | Yes, after minor copy polish |
| `/buyer-guide` | Pass with polish recommended | Medium | Yes | Not until guide/download language is finalized |
| `/seller-guide` | Pass with polish recommended | Medium | Yes | Not until guide/download language is finalized |
| `/faq` | Pass | Low | Yes | Yes |
| `/request-recent-sales` | Pass with polish recommended | Medium | Yes | Yes, after replacing placeholder section label |
| `/presales` | Pass with polish recommended | Medium | Yes | Not until verified project content or cleaner holding copy exists |
| `/local-businesses` | Pass with polish recommended | Medium | Yes | Not until verified business/community content exists |
| `/events` | Pass with polish recommended | Medium | Yes | Not until verified event content exists |
| `/testimonials` | Pass with polish recommended | Medium | Yes | Not until approved testimonials/review links exist |
| `/accolades` | Pass with polish recommended | Medium | Yes | Not until verified accolades/community involvement details exist |

## Page QA

### `/first-time-home-buyers`

Status: Pass.

Findings:
- Clear H1: "First-time buying in Port Moody".
- Page purpose is obvious: first-time buyer education for Port Moody.
- CTAs exist and go to real routes: `/buyer-guide`, `/contact`, `/neighbourhoods`, and the embedded lead form.
- No fake listing cards, IDX, sold data, fake claims, or legal/tax/financial advice stated as fact.
- Deposit, down payment, closing costs, strata basics, common mistakes, and Port Moody area fit are covered.

Fixes needed:
- Low priority: replace "First version guide request" with more polished public copy before broader launch.

### `/generational-wealth-real-estate`

Status: Pass.

Findings:
- Clear H1: "Real estate and generational wealth".
- Page purpose is obvious: general education on long-term family real estate thinking.
- CTAs exist and go to real routes/targets: guide request section and `/contact`.
- Includes appropriate disclaimer: "This is general education, not legal, tax, or financial advice."
- Covers helping children buy, keeping property as a rental, leverage, cash flow, taxes, and market cycles.
- No fake claims, sold data, IDX, or advice stated as fact.

Fixes needed:
- Low priority: if this is public later, consider changing "Get the generational wealth guide" if no finished guide asset exists.

### `/buyer-guide`

Status: Pass with polish recommended.

Findings:
- Clear H1: "Get the Port Moody buyer guide".
- Metadata is present.
- CTAs exist and go to real routes/targets: in-page guide request and `/contact`.
- Existing `LeadForm` is a real form component, not a fake visual form.
- No fake download is provided; copy states the downloadable version is being prepared.
- No sold data, IDX, fake listing cards, or legal/tax/financial advice stated as fact.

Fixes needed:
- Medium priority: replace "Download/request form placeholder" with public-facing copy such as "Request the guide".
- Medium priority: finalize whether this page is a gated guide waitlist/request page or a true download page before broad launch.

### `/seller-guide`

Status: Pass with polish recommended.

Findings:
- Clear H1: "Get the Port Moody seller guide".
- Metadata is present.
- CTAs exist and go to real routes/targets: in-page guide request and `/contact`.
- Existing `LeadForm` is a real form component.
- No fake download is provided; copy states the downloadable version is being prepared.
- No fake pricing claims, fake outcomes, sold data, testimonials, or awards.

Fixes needed:
- Medium priority: replace "Download/request form placeholder" with polished public-facing copy.
- Medium priority: finalize the guide asset or frame the page more clearly as a request/waitlist page.

### `/faq`

Status: Pass.

Findings:
- Clear H1: "Port Moody real estate FAQ".
- Metadata is present.
- CTAs exist and go to real routes: `/contact` and `/listings`.
- Covers buying, selling, first-time buyers, neighbourhoods, buildings/complexes, presales, listings, schools, and moving to Port Moody.
- States that sold/expired listings are not published as listing inventory on the site.
- No fake data, fake listings, sold data, or legal/tax/financial advice stated as fact.

Fixes needed:
- None required.

### `/request-recent-sales`

Status: Pass with polish recommended.

Findings:
- Clear H1: "Request recent Port Moody sales".
- Metadata is present.
- CTAs exist and go to real routes/targets: in-page request section and `/contact`.
- No sold data is displayed.
- Uses request/professional-context language.
- Includes disclosure that sold data availability and sharing depends on applicable rules, permissions, and professional context.

Fixes needed:
- Medium priority: replace the public section title "CTA/form placeholder" with a polished label such as "Request sales context".

### `/presales`

Status: Pass with polish recommended.

Findings:
- Clear H1: "Port Moody presales and new developments".
- Metadata is present.
- CTAs exist and go to real routes: `/contact`, `/buy`, and `/listings`.
- No fake presale projects, pricing, incentives, availability, or completion dates are shown.
- Includes verification language for availability, pricing, incentives, completion dates, disclosure documents, tax treatment, and assignment terms.
- Presale legal/tax/financing content is framed as general education and directs users to qualified advice.

Fixes needed:
- Medium priority: "Verified project coverage coming soon" is safe but placeholder-heavy. Replace with verified project content or a more polished holding section before full public launch.

### `/local-businesses`

Status: Pass with polish recommended.

Findings:
- Clear H1: "Port Moody local business features".
- Metadata is present.
- CTAs exist and go to real routes: `/contact` and `/explore`.
- No fake business listings are shown.
- Copy is explicit that profiles will only be added after approval and verification.

Fixes needed:
- Medium priority: the "Business feature slot" cards are safe but visibly placeholder-like. Replace with verified businesses/community profiles before public launch, or simplify the page to one nomination CTA.

### `/events`

Status: Pass with polish recommended.

Findings:
- Clear H1: "Port Moody events hub".
- Metadata is present.
- CTAs exist and go to real routes: `/contact` and `/explore`.
- No fake events, dates, hosts, or schedules are shown.
- Copy is explicit that current dates and details will only be listed after verification.

Fixes needed:
- Medium priority: "Verified events will appear here" is safe but placeholder-heavy. Replace with verified event content or simplify to a submission/review CTA before public launch.

### `/testimonials`

Status: Pass with polish recommended.

Findings:
- Clear H1: "Google reviews and client stories".
- Metadata is present.
- CTA exists and goes to `/contact`; secondary CTA goes to `/resources`.
- No fake testimonials, star ratings, review copy, client outcomes, or scraped Google reviews are shown.
- Copy says review excerpts will only be added from approved public reviews or client-approved story material.

Fixes needed:
- Medium priority: "Buyer story review area", "Seller story review area", and "Relocation story review area" are safe but read like placeholders. Replace with approved testimonials or remove those cards before public launch.

### `/accolades`

Status: Pass with polish recommended.

Findings:
- Clear H1: "Recognition, community involvement, and professional background".
- Metadata is present.
- CTA exists and goes to `/contact`.
- No fake awards, rankings, accolades, or unverified claims are listed.
- Copy states awards and recognition will only be added after verification.

Fixes needed:
- Medium priority: the accolades page is safe but thin. Add verified professional/community details or keep it behind coming-soon until content is approved.

## Social Placeholder Check

Status: Pass.

Findings:
- The social feed placeholder uses clear "Instagram and YouTube connection coming soon" language.
- It explicitly states that the block does not use fake posts, scraped content, or unapproved embeds.
- No scraped Instagram or fake social posts are present.

Fixes needed:
- Low priority: replace "Instagram link pending" and "YouTube link pending" with approved official links when available.

## Blocker List

No blockers for staying behind coming-soon or controlled preview.

No legal/tax/financial advice as fact was found. No fake testimonials, fake awards, fake business listings, fake events, fake presale availability/pricing, sold data, IDX, or fake listing cards were found.

## Recommended Next Fixes

1. Replace public-facing placeholder labels:
   - `/buyer-guide`: "Download/request form placeholder".
   - `/seller-guide`: "Download/request form placeholder".
   - `/request-recent-sales`: "CTA/form placeholder".

2. Decide whether guide pages are waitlist/request pages or actual gated downloads.
   - If no downloadable guide exists, keep the current request framing and remove any "download" phrasing.

3. Before full public launch, replace placeholder cards with verified content or remove them:
   - `/local-businesses`
   - `/events`
   - `/testimonials`
   - `/accolades`
   - `/presales`

4. Add approved official social profile links when confirmed.

## Validation Notes

No code changes were made during this QA pass. Lint/build were not run because the requested rule was to run them only if code changed.
