import { createMetadata } from "@/lib/seo";
import { ComplexPreviewTemplate } from "@/components/complexes/ComplexPreviewTemplate";

export const metadata = createMetadata(
  {
    title: "Discovery Ridge Heritage Mountain | Townhouse Complex Preview",
    description:
      "A preview guide to Discovery Ridge townhomes in Heritage Mountain, Port Moody, including setting, buyer notes, seller notes, and what to verify in strata documents.",
    path: "/complexes/discovery-ridge",
  },
  { robots: { index: false, follow: true } }
);

const knownFacts: [string, string][] = [
  ["Area", "Heritage Mountain"],
  ["Address", "Forest Park Way area (verify)"],
  ["Type", "Townhouse strata"],
  ["Setting", "Established residential, green surroundings"],
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
  "Compare with Treetops at 101 Parkside Drive for Heritage Mountain buyers — both are established townhouse communities in similar green settings.",
  "Review exterior maintenance history, roof condition, and any recent or planned capital projects before writing an offer.",
  "Verify strata documents thoroughly: Form B, meeting minutes, depreciation report, insurance policy, and reserve fund balance.",
  "Heritage Mountain is car-oriented — confirm your transit and commute needs match the location before committing.",
  "Unit condition varies in established complexes — arrange a proper home inspection and review renovation permit history.",
];

const sellerNotes = [
  "Prepare the strata package early — buyers comparing Heritage Mountain townhomes expect complete and current documentation.",
  "Green surroundings, established character, and proximity to Heritage Mountain trails and schools are strong positioning points for family buyers.",
  "Highlight layout, parking, outdoor space, and renovation quality since units vary significantly in established complexes.",
];

export default function DiscoveryRidgePage() {
  return (
    <ComplexPreviewTemplate
      name="Discovery Ridge"
      address="Forest Park Way area"
      area="Heritage Mountain"
      summary="Established Heritage Mountain townhouse community with green space and a residential hillside setting."
      bestFor="Buyers wanting established townhomes and green surroundings in Heritage Mountain"
      setting="Residential Heritage Mountain — green surroundings, established character, close to trails"
      knownFacts={knownFacts}
      mustVerify={mustVerify}
      locationContext="Discovery Ridge is located in Heritage Mountain, a hillside residential neighbourhood in Port Moody. The setting is green and established, closer to trails and schools than to SkyTrain and daily walkable amenities. Buyers who want urban convenience, cafe access, or transit-first commuting should compare Heritage Mountain against Klahanie, Suter Brook, Newport Village, or Moody Centre. For Heritage Mountain buyers specifically, compare Discovery Ridge with Treetops at 101 Parkside Drive on strata health, layout, parking, condition, and setting."
      buyerNotes={buyerNotes}
      sellerNotes={sellerNotes}
      neighbourhoodSlug="heritage-mountain"
      neighbourhoodName="Heritage Mountain"
      relatedLinks={[
        { label: "Treetops (Heritage Mountain)", href: "/complexes/treetops-101-parkside-drive" },
        { label: "Heritage Mountain neighbourhood guide", href: "/neighbourhoods/heritage-mountain" },
        { label: "All complexes", href: "/complexes" },
      ]}
    />
  );
}
