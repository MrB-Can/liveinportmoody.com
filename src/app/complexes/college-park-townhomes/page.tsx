import { createMetadata } from "@/lib/seo";
import { ComplexPreviewTemplate } from "@/components/complexes/ComplexPreviewTemplate";

export const metadata = createMetadata(
  {
    title: "College Park Townhomes Port Moody | Complex Preview",
    description:
      "A preview guide to College Park townhomes in Port Moody, including setting, buyer notes, seller notes, and what to verify in strata documents.",
    path: "/complexes/college-park-townhomes",
  },
  { robots: { index: false, follow: true } }
);

const knownFacts: [string, string][] = [
  ["Area", "College Park"],
  ["Type", "Townhouse strata"],
  ["Setting", "Established residential, quieter than central Port Moody"],
  ["Walkability", "Car-dependent for most errands (verify)"],
];

const mustVerify = [
  "Year built",
  "Strata fees",
  "Depreciation report",
  "Pets and rentals",
  "Parking allocation",
  "Storage allocation",
  "Special levies",
  "Bylaws and rules",
  "Exterior maintenance history",
  "Contingency reserve fund",
];

const buyerNotes = [
  "Established residential area. Review age, exterior condition, envelope history, and maintenance record carefully before committing.",
  "Quieter alternative to Klahanie or Moody Centre; well-suited to buyers who prioritise space and residential character over daily walkability.",
  "College Park has limited daily walkability. Verify transit, commute fit, and driving distances before making a neighbourhood decision.",
  "Verify strata documents thoroughly: Form B, minutes, depreciation report, insurance, bylaws, and any past or planned special levies.",
  "Compare against Heritage Mountain options on green setting and trail access, and against Klahanie on central location and transit access.",
];

const sellerNotes = [
  "Established quiet character and residential feel appeals to buyers who want space and calm without central Port Moody density.",
  "Prepare strata documents early. Buyers in established areas look closely at maintenance history and capital project planning before writing.",
  "Highlight layout, parking, outdoor space, and condition; differentiation from both Heritage Mountain and central condo options matters for positioning.",
];

export default function CollegeParkTownhomesPage() {
  return (
    <ComplexPreviewTemplate
      name="College Park townhomes"
      area="College Park"
      summary="Established residential townhouse alternatives for buyers comparing quieter Port Moody settings with more space than central condo areas offer."
      bestFor="Buyers considering established residential alternatives away from central Port Moody density"
      setting="Quieter residential College Park setting, established character, more car-dependent than Klahanie or Moody Centre"
      knownFacts={knownFacts}
      mustVerify={mustVerify}
      locationContext="College Park is an established residential neighbourhood in Port Moody near Douglas College, with quieter streets and a suburban character. Townhome options here appeal to buyers who want established living and more space than central condo areas offer, but are willing to be more car-dependent for daily errands and commuting. Compare College Park with Heritage Mountain for green setting and trail access, or with Klahanie for more walkability and central location."
      buyerNotes={buyerNotes}
      sellerNotes={sellerNotes}
      relatedLinks={[
        { label: "Discovery Ridge (Heritage Mountain)", href: "/complexes/discovery-ridge" },
        { label: "Klahanie townhomes", href: "/complexes/klahanie-townhomes" },
        { label: "All complexes", href: "/complexes" },
      ]}
    />
  );
}
