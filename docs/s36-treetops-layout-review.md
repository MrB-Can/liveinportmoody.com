# S36 Treetops Layout Review

Captured: 2026-06-03
Base URL: https://www.liveinportmoody.com
Route: /complexes/treetops-101-parkside-drive
Screenshot folder: visual-review-screenshots/s36-treetops-layout-review
Zip: visual-review-screenshots/S36-treetops-layout-review.zip

## Summary

The production Treetops page is clean from a general layout and public-copy perspective, but it does not render the approved Treetops photo gallery on production. The image assets themselves return 200, and local source contains the gallery section, but production HTML and screenshots show the older gradient visual-summary blocks and no entrance, driveway/townhome, or pool photos.

This should be treated as a P0 launch issue for the Treetops photo integration task because S36E reported the approved gallery as deployed and verified.

## Screenshot Set

- desktop-1440-full.png
- desktop-1440-hero.png
- desktop-1440-gallery.png
- desktop-1440-form.png
- mobile-390-full.png
- mobile-390-hero.png
- mobile-390-gallery.png
- mobile-390-form.png
- mobile-390-footer.png

No failed captures.

## Public Copy Check

Visible public copy is clean. No visible "coming soon", "photos needed", "photography pending", "staging", "TODO", or lorem-style language was observed in the screenshots.

The automated scan flagged `placeholder`, but this appears to come from form placeholder attributes or similar markup, not visible staging copy. It is not a public-copy blocker.

## Photo And Gallery Review

- Entrance image: asset URL returns 200, but the image does not render on the production page.
- Driveway/townhome image: asset URL returns 200, but the image does not render on the production page.
- Pool image: asset URL returns 200, but the image does not render on the production page.
- Gallery placement: local source places the gallery between the hero and main content; production does not include it.
- Image sizing/cropping: not reviewable on production because the gallery is absent.

## Layout Review

Desktop hierarchy is understandable. The page starts with a clear Treetops heading, concise positioning, and three relevant CTAs. The sticky section navigation is useful and the first content block explains fit before diving into detail.

Mobile layout is readable and does not show horizontal overflow. The page is long, but the section anchors and repeated CTAs make it navigable. The mobile full-page capture shows a very tall page, which is expected for this amount of guide content.

Spacing is generally balanced. The strongest issue is that the page still feels text-heavy because the expected approved local photos are absent. The gradient visual blocks in "What the homes are like" read as generic visual placeholders even though they avoid explicit staging language.

CTA and form balance is acceptable. There is one full Treetops form plus several anchor CTAs. The CTAs are specific to Treetops and cover buyer, owner-value, and update intent without adding multiple full forms.

## Findings

### P0

- Production page does not render the approved Treetops photo gallery. Local source includes the gallery and all three image assets return 200, so the likely issue is stale production output, deployment mismatch, or cache state.

### P1

- Once the gallery is visible, recapture desktop and mobile screenshots to verify placement, cropping, and visual balance before considering the Treetops photo integration complete.

### P2

- Consider replacing or reducing the generic gradient visual-summary blocks after the real gallery renders, because they may feel redundant beneath real photography.

## Recommended Next Step

Upload visual-review-screenshots/S36-treetops-layout-review.zip to ChatGPT for final visual review after resolving the missing production gallery.
