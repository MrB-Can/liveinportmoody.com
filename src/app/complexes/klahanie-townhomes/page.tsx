import { createMetadata } from "@/lib/seo";
import { ComplexPreviewTemplate } from "@/components/complexes/ComplexPreviewTemplate";

export const metadata = createMetadata(
  {
    title: "Klahanie Townhomes Port Moody | Complex Preview",
    description:
      "A preview guide to Klahanie townhomes in Port Moody, including setting, buyer notes, seller notes, and what to verify in strata documents.",
    path: "/complexes/klahanie-townhomes",
  },
  { robots: { index: false, follow: true } }
);

const knownFacts: [string, string][] = [
  ["Area", "Klahanie"],
  ["Type", "Townhouse strata"],
  ["Setting", "Central Port Moody, walkable, near Rocky Point and Newport Village"],
  ["Transit", "Good transit access (verify routes and frequency)"],
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
  "More central and walkable than Heritage Mountain options: Rocky Point Park, Newport Village, and SkyTrain access are within reasonable reach.",
  "Klahanie has varied strata inventory with different ages and conditions; compare strata fees, exterior condition, and building age across specific units.",
  "Verify parking, storage, and visitor parking allocation carefully. Established areas can have varied and sometimes constrained parking arrangements.",
  "Verify strata documents thoroughly: Form B, minutes, depreciation report, insurance certificate, bylaws, and contingency reserve fund balance.",
  "Compare against Suter Brook and Newport Village condo options on price, strata fees, private entry, outdoor space, and resale demand.",
];

const sellerNotes = [
  "Rocky Point Park, Newport Village walkability, and SkyTrain proximity are strong positioning points for lifestyle buyers who want central location without high-rise density.",
  "Buyers comparing Klahanie townhomes often also consider Suter Brook condos. Emphasise space, private entry, and layout advantages to differentiate.",
  "Prepare strata documents early and clarify parking, storage, and any unit-specific entitlements to reduce buyer hesitation.",
];

export default function KlahanieTownhomesPage() {
  return (
    <ComplexPreviewTemplate
      name="Klahanie townhomes"
      area="Klahanie"
      summary="Central Port Moody townhouse pockets near Rocky Point Park, Newport Village, and Suter Brook, suited to buyers comparing walkable location with more space than a condo."
      bestFor="Buyers wanting central location near Rocky Point, Suter Brook, Newport Village, and walkable amenities"
      setting="Walkable, amenity-oriented Port Moody, more central than Heritage Mountain, with parks and transit access nearby"
      knownFacts={knownFacts}
      mustVerify={mustVerify}
      locationContext="Klahanie is one of Port Moody's more walkable residential areas, with access to Rocky Point Park, Newport Village, Suter Brook, and the Inlet waterfront within a short distance. Klahanie townhomes sit in an established setting with transit access and daily amenity convenience that most Heritage Mountain options do not offer. Buyers comparing Klahanie with Heritage Mountain should weigh walkability and central location against green space, quieter streets, and hillside character."
      buyerNotes={buyerNotes}
      sellerNotes={sellerNotes}
      relatedLinks={[
        { label: "Aria Townhomes (Moody Centre)", href: "/complexes/aria-townhomes" },
        { label: "Discovery Ridge (Heritage Mountain)", href: "/complexes/discovery-ridge" },
        { label: "All complexes", href: "/complexes" },
      ]}
    />
  );
}
