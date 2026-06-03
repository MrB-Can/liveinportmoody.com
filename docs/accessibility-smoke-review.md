# Accessibility Smoke Review - Sprint 28C

## Summary
A lightweight accessibility review of the site's navigation, forms, and core UI components.

## Findings

### Navigation
- **`Header`**: Navigation menus use `aria-expanded` and `aria-haspopup`. Keyboard support is generally good, as `button` elements are used for toggles.
- **`MobileNav`**: Toggle button has `aria-label="Open navigation"` and `aria-expanded`.
- **General**: Semantic HTML is used well.

### Forms (`/contact`, `/home-evaluation`)
- **Forms**: Need to ensure `LeadForm` components have proper `label` associations for all inputs (checked implicitly via standard practices, need verification).

## Action Plan
1. **Header/MobileNav**: Verify keyboard navigation behaves as expected (closing on Esc, etc. - out of scope for *tiny* fix, but worth noting).
2. **Forms**: Audit `LeadForm` and other input fields for explicit `htmlFor` on labels if not handled by standard libraries or components.
3. **General**: Ensure all buttons have sufficient contrast (checked via visual audit of styles).

## Fixes Applied
- Added explicit `htmlFor` attributes to `LeadForm` input labels to improve form accessibility and screen reader support.

## Recommendations
- Add `ESC` key support for menu closing to improve keyboard navigation.
- Audit input labels across all `LeadForm` implementations to ensure explicit `htmlFor` association.
