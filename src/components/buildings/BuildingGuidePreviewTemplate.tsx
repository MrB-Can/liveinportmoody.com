import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { VerificationNote } from "@/components/ui/verification-note";
import type { PortMoodyBuilding } from "@/data/buildings";

const disclosure =
  "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.";

const commonVerificationItems = [
  "Current strata documents, Form B, depreciation report, insurance, minutes, financials, and any planned work",
  "Strata fees, parking, storage, bylaws, pet rules, rental rules, move-in rules, and any special levies",
  "Exact unit exposure, noise, measurements, condition, renovations, and included features",
  "Current active listing availability through approved MLS Reciprocity sources",
];

function formatStatus(status: PortMoodyBuilding["guideStatus"]) {
  if (status === "guide-live") return "Guide live";
  if (status === "full-guide-in-progress") return "Information is being expanded";
  return "Building guide preview";
}

function knownItems(building: PortMoodyBuilding) {
  return [
    `${building.name} is currently stored as a ${building.type.toLowerCase()} research record.`,
    `Area context: ${building.neighbourhood}.`,
    building.address
      ? `Address on file: ${building.address}. Verify against the listing, strata documents, and civic records before relying on it.`
      : "Exact address details are not yet published in this preview and should be verified against the listing and strata documents.",
    building.summary,
    building.bestFor,
  ];
}

function verificationItems(building: PortMoodyBuilding) {
  return [building.watchouts, ...commonVerificationItems];
}

export function BuildingGuidePreviewTemplate({ building }: { building: PortMoodyBuilding }) {
  const isGroup = building.type.toLowerCase().includes("group");
  const askHref = `/buildings#ask-building-${building.slug}`;

  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-14 md:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge tone="slate">Building guide preview</Badge>
            <Badge tone="sea">{building.type}</Badge>
          </div>
          <h1 className="max-w-4xl font-heading text-4xl leading-tight text-deepInlet md:text-6xl">
            {building.name}
          </h1>
          <p className="mt-3 text-base font-semibold text-forest">{building.neighbourhood}</p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slateText">{building.summary}</p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slateText">
            Information is being expanded. This preview is designed to help buyers and sellers ask better questions before relying on a listing or strata package.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href={askHref}>Ask about this building</CTAButton>
            <CTAButton href="/listings" variant="secondary">View Port Moody listings</CTAButton>
            <CTAButton href="/buildings" variant="ghost">Compare buildings</CTAButton>
          </div>
        </div>
      </section>

      <Section title="Quick summary" intro="Preview-level context only. Building-specific facts must be verified before making a purchase or sale decision." tone="white">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-lg border border-softBorder bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emphasis">Type</p>
            <p className="mt-2 text-sm font-semibold text-charcoal">{building.type}</p>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emphasis">Area context</p>
            <p className="mt-2 text-sm font-semibold text-charcoal">{building.neighbourhood}</p>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emphasis">Address</p>
            <p className="mt-2 text-sm font-semibold text-charcoal">{building.address || "Verify before relying on a listing"}</p>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emphasis">Status</p>
            <p className="mt-2 text-sm font-semibold text-charcoal">{formatStatus(building.guideStatus)}</p>
          </div>
        </div>
      </Section>

      <Section title="What is known">
        <div className="grid gap-3 md:grid-cols-2">
          {knownItems(building).map((item) => (
            <div key={item} className="rounded-lg border border-softBorder bg-white p-5 text-sm leading-6 text-slateText">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="What must be verified" intro="Do not rely on this preview as a substitute for current listing details, strata documents, professional advice, or direct verification." tone="white">
        <div className="grid gap-3 md:grid-cols-2">
          {verificationItems(building).map((item) => (
            <div key={item} className="rounded-lg border border-softBorder bg-mist p-5 text-sm leading-6 text-slateText">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <VerificationNote note="This preview does not invent unit counts, strata fees, amenities, bylaws, pet rules, rental rules, school claims, or active listing counts. Verify all building and unit details before relying on them." />
        </div>
      </Section>

      <Section
        title="Location and context"
        intro={isGroup ? "This page is a building-group preview. Specific buildings, addresses, and strata details must be verified individually." : "This page gives local context for a building preview. Exact address, strata, and unit details must still be verified."}
      >
        <div className="rounded-lg border border-softBorder bg-white p-6">
          <p className="text-sm leading-6 text-slateText">
            {building.name} is being researched with this area context: {building.neighbourhood}. Use this page to frame the location, then check the exact listing, building documents, property disclosure materials, and strata records before making decisions.
          </p>
          <p className="mt-3 text-sm leading-6 text-slateText">
            Neighbourhood boundaries, building names, address labels, and buyer search behaviour can overlap in Port Moody. If the exact fit matters, verify it against the property address and current listing materials.
          </p>
        </div>
      </Section>

      <Section title="Buyer notes" tone="white">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h2 className="font-heading text-2xl text-deepInlet">Good questions to ask</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slateText">
              <li>How does this building or group compare with nearby Port Moody options by location, exposure, noise, and daily convenience?</li>
              <li>What do the current strata documents say about insurance, capital planning, fees, bylaws, and upcoming work?</li>
              <li>Does the specific unit have the parking, storage, layout, condition, and exposure you need?</li>
              <li>Are there active listings available through approved MLS Reciprocity sources?</li>
            </ul>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h2 className="font-heading text-2xl text-deepInlet">Use with a real listing</h2>
            <p className="mt-4 text-sm leading-6 text-slateText">
              This preview is most useful when paired with a specific active listing, strata package, and your own priorities. Send the listing or building name if you want help sorting what matters before writing.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Seller notes">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h2 className="font-heading text-2xl text-deepInlet">Position the specific property</h2>
            <p className="mt-4 text-sm leading-6 text-slateText">
              Building context matters, but the strongest seller positioning comes from verified property details: layout, condition, updates, exposure, parking, storage, strata health, and how the home compares with active alternatives.
            </p>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h2 className="font-heading text-2xl text-deepInlet">Avoid unsupported claims</h2>
            <p className="mt-4 text-sm leading-6 text-slateText">
              Do not market unverified amenities, bylaws, rental rules, pet rules, fees, school placement, or listing availability. Confirm the details first, then use careful, property-specific language.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Listings and MLS Reciprocity" tone="white">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h2 className="font-heading text-2xl text-deepInlet">Listing fallback CTA</h2>
            <p className="mt-3 text-sm leading-6 text-slateText">
              Filtered building links have not been approved for this preview. Start with the general Port Moody listings page or ask about this building so active inventory can be checked through approved sources.
            </p>
            <p className="mt-3 text-xs leading-5 text-slateText">{disclosure}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CTAButton href="/listings" variant="secondary">View Port Moody listings</CTAButton>
              <CTAButton href={askHref}>Ask about this building</CTAButton>
            </div>
          </div>
          <div className="rounded-lg border border-softBorder bg-deepInlet p-6 text-white">
            <h2 className="font-heading text-2xl">Contact CTA</h2>
            <p className="mt-3 text-sm leading-6 text-mist">
              Send the building name, unit, or listing link. We can help you identify what should be verified before relying on the listing copy.
            </p>
            <div className="mt-5">
              <Link href="/contact" className="text-sm font-semibold text-white underline underline-offset-4">
                Contact us about this building
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
