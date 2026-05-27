import { createMetadata } from "@/lib/seo";
import { ComplexPreviewTemplate } from "@/components/complexes/ComplexPreviewTemplate";

export const metadata = createMetadata(
  {
    title: "Aria Townhomes Moody Centre Port Moody | Complex Preview",
    description:
      "A preview guide to Aria Townhomes near Brewers Row in Moody Centre, Port Moody, including setting, buyer notes, seller notes, and what to verify in strata documents.",
    path: "/complexes/aria-townhomes",
  },
  { robots: { index: false, follow: true } }
);

const knownFacts: [string, string][] = [
  ["Area", "Moody Centre / Brewers Row"],
  ["Address", "Brew Street area (verify)"],
  ["Type", "Townhouse strata"],
  ["Setting", "Urban Port Moody, near SkyTrain and Brewers Row"],
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
  "Construction details",
  "Contingency reserve fund",
];

const buyerNotes = [
  "More urban and transit-connected than Heritage Mountain options — compare walkability, noise, and lifestyle trade-offs before deciding.",
  "Newer construction context; verify current strata health, reserve fund status, and any early maintenance or capital considerations.",
  "Review parking and storage carefully — urban townhomes in central Port Moody often have constrained or structured parking arrangements.",
  "Verify strata documents thoroughly: Form B, meeting minutes, depreciation report, bylaws, and unit-specific entitlements.",
  "Compare against Moody Centre condo options on price per square foot, strata fees, private entry value, and outdoor space.",
];

const sellerNotes = [
  "Transit access, SkyTrain proximity, and Brewers Row character are strong positioning points for urban lifestyle and transit-first buyers.",
  "Prepare a complete strata package — buyers comparing urban townhomes against condos expect clear documentation on fees, bylaws, and parking.",
  "Highlight private entry, outdoor space, and layout advantages over comparable condo options in the area.",
];

export default function AriaTownhomesPage() {
  return (
    <ComplexPreviewTemplate
      name="Aria Townhomes"
      address="Brew Street area"
      area="Moody Centre / Brewers Row"
      summary="Urban-access townhome option for buyers comparing newer or more central Port Moody townhouse living near Brewers Row and SkyTrain."
      bestFor="Buyers comparing urban-access townhomes with transit proximity and Moody Centre lifestyle"
      setting="Central Port Moody near Brewers Row and SkyTrain — more urban than Heritage Mountain options"
      knownFacts={knownFacts}
      mustVerify={mustVerify}
      locationContext="Aria Townhomes are located in the Brew Street area of Moody Centre, Port Moody's most urban and transit-connected district. This is one of the more central Port Moody townhome options, with SkyTrain access, the craft brewery corridor, and Rocky Point Park nearby. Buyers who prioritise greenery, quiet, and hillside residential character may find Heritage Mountain options a better fit. Buyers who want transit access, walkability, and urban lifestyle will find this location worth comparing."
      buyerNotes={buyerNotes}
      sellerNotes={sellerNotes}
      neighbourhoodSlug="moody-centre"
      neighbourhoodName="Moody Centre"
    />
  );
}
