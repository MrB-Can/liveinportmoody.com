# Accessibility Polish Notes

**Date:** June 3, 2026  
**Task:** POOL-P2-S33L — Accessibility Nav and Consent Polish

---

## Mobile Nav: aria-expanded / aria-haspopup

### Status: Fixed

Both submenu toggle buttons in `src/components/mobile-nav.tsx` were missing `aria-expanded` and `aria-haspopup`.

**Fixed (both button patterns):**
```tsx
<button
  type="button"
  onClick={() => toggle(item.label)}
  aria-expanded={openMenu === item.label}
  aria-haspopup="true"
  className="..."
>
```

This applies to:
- `item.submenu` pattern (Explore menu)
- `item.groups` pattern (other grouped nav items)

The main hamburger button already had `aria-label="Open navigation"` and `aria-expanded={open}` — no change needed there.

---

## Desktop Dropdown: Keyboard Close (Escape)

### Status: Partially fixed — Escape key added

`src/components/header.tsx` desktop nav item containers now handle Escape to close dropdowns:

```tsx
<div key={item.href} className="relative" onKeyDown={(e) => { if (e.key === "Escape") close(); }}>
```

This closes the active dropdown when Escape is pressed from any element inside the container (trigger button or any link within the dropdown) via event bubbling.

**Already correct (no change needed):**
- Both desktop button patterns already had `aria-expanded` and `aria-haspopup="true"`

**Remaining gap (not addressed — would require medium refactor):**
- **Click-outside close**: Dropdown stays open when user clicks outside the nav item. Implementing this requires `useEffect` with `document.addEventListener('click', ...)` and a `useRef` on the container. Not implemented — low priority, common pattern limitation.

---

## Consent Checkbox Defaults

### Status: BLOCKED — Owner/Legal Decision Required

All lead forms pre-check `consentToContact` by default:

| Component | consentToContact | consentToSms |
|---|---|---|
| `lead-form.tsx` | `defaultValues: { consentToContact: true }` | Not pre-checked ✅ |
| `home-evaluation-form.tsx` | `defaultValues: { consentToContact: true }` | Not pre-checked ✅ |
| `ListingSupportForm.tsx` | `defaultChecked` | N/A |
| `BuildingInquiryForm.tsx` | `defaultChecked` | N/A |
| `TreetopsInquiryForm.tsx` | `defaultChecked` | Not pre-checked ✅ |

**Why this is blocked:**

Under CASL (Canadian Anti-Spam Law) and PIPEDA, pre-checked consent checkboxes are generally not considered valid express consent — the user must take an affirmative action. However:

1. Changing this default could reduce lead conversion and affect existing CRM workflow expectations
2. The legal interpretation depends on the nature of the contact (transactional vs. marketing)
3. The `consentToSms` checkbox is correctly NOT pre-checked everywhere
4. The contact consent may qualify under "implied consent" provisions depending on context

**Recommendation:** Owner to review with a CASL/privacy professional before changing defaults. The SMS consent default (unchecked) is correct. The email/phone contact consent default (pre-checked) should be evaluated.

**No code change made to consent defaults.**

---

## Files Changed

- `src/components/mobile-nav.tsx` — Added `aria-expanded` and `aria-haspopup` to both submenu buttons
- `src/components/header.tsx` — Added `onKeyDown` Escape handler to nav item containers
