# Social URL and Team Photo Intake

This document is an owner action item. The site has three social link slots (Instagram, YouTube, Facebook) currently disabled with `href: "#"` and a missing Leilani team photo. Provide the items below to enable these features.

---

## Social Link Slots

These three links are wired in `src/lib/site.ts` → `socialLinks[]` and render in the footer once enabled (when `disabled: true` is removed).

### Required

| Platform | What to provide | Example format |
|---|---|---|
| Instagram | Full profile URL | `https://www.instagram.com/liveinportmoody` |
| Facebook | Full page URL | `https://www.facebook.com/liveinportmoody` |
| YouTube | Channel URL | `https://www.youtube.com/@liveinportmoody` |

### Optional

| Platform | What to provide | Example format |
|---|---|---|
| LinkedIn | Profile or company page URL | `https://www.linkedin.com/in/yourname` |

**Notes:**
- Provide the exact URL you want linked — do not abbreviate or use handles only.
- The footer currently only renders links that are not `disabled`. Providing a URL enables the slot; no URL means it stays hidden.
- LinkedIn is not currently wired as a slot. If desired, a task will be needed to add it to `socialLinks[]`.
- The `headerAssetTodo` note in `site.ts` flags that a Facebook-aligned logo/header asset is pending. If a new logo is ready, provide it separately — do not bundle with social URLs.

---

## Team Photo — Leilani Fong

Paul's photo is live at `public/images/team/paul.jpeg`. Leilani's photo is missing. Every pre-launch crawl reports this as an expected gap.

### Requirements

| Item | Spec |
|---|---|
| Subject | Leilani Fong (headshot or professional portrait) |
| Orientation | Portrait preferred; square acceptable |
| Minimum size | 600 × 600 px |
| Recommended size | 800 × 800 px or larger |
| Format | JPEG (preferred) or WebP |
| Target filename | `leilani.jpeg` (or `leilani.jpg`) |
| Target path | `public/images/team/leilani.jpeg` |
| Background | Neutral or on-location; consistent with Paul's photo style if possible |
| File size | Under 400 KB after optimization |

### Delivery

1. Send the photo file (or a Dropbox/Drive link) to the development team.
2. The team will optimize and place it at `public/images/team/leilani.jpeg`.
3. No code changes are required — the `meet-us` page and any team components already reference this path.

---

## Approval Checklist

Owner completes this before the development team activates the slots:

- [ ] Instagram URL confirmed and tested (logs in, correct account)
- [ ] Facebook URL confirmed and tested (correct page, not personal profile)
- [ ] YouTube URL confirmed and tested (correct channel)
- [ ] LinkedIn URL confirmed (optional — flag if desired)
- [ ] Leilani photo file delivered and approved for public use
- [ ] Photo release / consent confirmed (if photo taken by third party)
- [ ] No temporary or placeholder accounts used

---

## How to Submit

Email or message the development team with:

1. Each platform URL (copy-paste from the browser address bar)
2. The Leilani photo file (or shareable link)
3. Any notes on the LinkedIn slot (add or skip)

Once received, the development team will:
- Update `src/lib/site.ts` `socialLinks[]` entries with real URLs and remove `disabled: true`
- Place the team photo at `public/images/team/leilani.jpeg`
- Run lint, build, and smoke checks
- Deploy in the next available update window
