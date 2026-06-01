# SEO LLM Claim Safety Audit

**Date:** June 1, 2026
**Agent:** Agent 6
**Status:** Completed

## 1. Audit Overview
This audit was conducted to identify risky real estate claims, unsupported statements, or misleading terminology that could affect SEO performance or LLM clarity. The focus was on ensuring all claims are verified, cautious placeholders, or absent.

## 2. Risky Terms Search Results
The following terms were searched across the codebase:

| Term | Status | Findings |
| :--- | :--- | :--- |
| Top 2% | Absent | No instances found in page content. |
| Medallion | Absent | No instances found in page content. |
| ICON | Absent | No instances found in page content. |
| RankMyAgent | Placeholder | Used in `/raving-fans` as a future connection point. |
| RateMyAgent | Placeholder | Used in `/raving-fans` as a future connection point. |
| five star / 5 star | Absent | No instances found in page content. |
| review count | Absent | No instances found in page content. |
| sales volume | Absent | No instances found in page content. |
| sold price | Caution | Used to state that sold prices are *not* displayed (`/recently-sold`). |
| guaranteed | Caution | Used in disclaimers to state that assignments are *not* guaranteed (`/faq`). |
| best realtor | Absent | No instances found in page content. |
| best school | Absent | No instances found in page content. |
| catchment | Caution | Used extensively with verification instructions (SD43). |
| complete guide | Caution | Used in FAQ to clarify that preview pages are *not* yet complete. |
| full guide | Caution | Used in disclaimers to indicate orientation purpose only. |

## 3. Page Clarity Audit

### Homepage (/)
- **Clarity:** High. Clearly states its purpose as a "Decision Engine".
- **Safety:** High. Explicitly disclaims invented reviews, rankings, or awards.

### Buy (/buy)
- **Clarity:** High. Focused on process and research.
- **Safety:** High. Uses "VerificationNote" for all property-specific details.

### Sell (/sell)
- **Clarity:** High. Focuses on positioning over automated valuation.
- **Safety:** High. Explicitly states "We don't publish automated valuations."

### Recently Sold (/recently-sold)
- **Clarity:** High. Compliance-first approach.
- **Safety:** High. Clear statements about not showing sold data or prices.

### Raving Fans (/raving-fans)
- **Clarity:** High. Prepared for future verified content.
- **Safety:** High. No unverified testimonials; clear rules for trust content.

### Neighbourhoods & Complexes
- **Clarity:** High. Uses consistent scoring and comparison tables.
- **Safety:** High. Catchment claims are always accompanied by SD43 verification instructions.

## 4. Compliance Findings
- No absolute catchment claims found.
- No invented sales stats or awards found.
- No "best" or "top" realtor claims found.
- All "Trust" content is presented as "to be verified" or "future connected".

## 5. Conclusion
The site is in excellent condition regarding SEO/LLM claim safety. It prioritizes research, verification, and transparency over marketing fluff or unsupported claims. No major fixes were required.
