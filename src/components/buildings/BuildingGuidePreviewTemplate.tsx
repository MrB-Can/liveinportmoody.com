import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
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
  if (status === "full-guide-in-progress") return "Guide in progress";
  return "Building guide preview";
}

function knownItems(building: PortMoodyBuilding) {
  return [
    `${building.name} is a ${building.type.toLowerCase()} preview guide for buyers comparing Port Moody building options.`,
    `Area context: ${building.neighbourhood}.`,
    building.address
      ? `Address context: ${building.address}. Confirm against the active listing, strata documents, and civic records before making decisions.`
      : "Confirm address details against the active listing, strata documents, and civic records before making decisions.",
    building.summary,
    building.bestFor,
  ];
}

function verificationItems(building: PortMoodyBuilding) {
  return [building.watchouts, ...commonVerificationItems];
}

export function BuildingGuidePreviewTemplate({ building }: { building: PortMoodyBuilding }) {
  const isGroup = building.type.toLowerCase().includes("group");

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
            Compare location, building fit, and key due-diligence questions here. Confirm strata documents, bylaws, fees, parking, storage, and unit-specific details before making decisions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="/contact">Ask about this building</CTAButton>
            <CTAButton href="/listings" variant="secondary">View Port Moody listings</CTAButton>
            <CTAButton href="/buildings" variant="ghost">Compare buildings</CTAButton>
          </div>
        </div>
      </section>

      <Section title="Quick summary" intro="Orientation for comparing building fit. Confirm building-specific and unit-specific details before making a purchase or sale decision." tone="white">
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
            <p className="mt-2 text-sm font-semibold text-charcoal">{building.address || "Confirm with active listing details"}</p>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emphasis">Status</p>
            <p className="mt-2 text-sm font-semibold text-charcoal">{formatStatus(building.guideStatus)}</p>
          </div>
        </div>
      </Section>

      <Section title="Building context">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-2 md:divide-x md:divide-y-0">
          {knownItems(building).map((item) => (
            <div key={item} className="p-5 text-sm leading-6 text-slateText">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Before you buy" intro="A checklist to review alongside current listing details, strata documents, and professional advice." tone="white">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-mist md:grid md:grid-cols-2 md:divide-x md:divide-y-0">
          {verificationItems(building).map((item) => (
            <div key={item} className="p-5 text-sm leading-6 text-slateText">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Location and context"
        intro={isGroup ? "A building-group preview for comparing fit across an area. Confirm specific buildings, addresses, and strata details individually." : "Pair this local context with the exact address, strata package, and unit details for the property you are considering."}
      >
        <div className="rounded-lg border border-softBorder bg-white p-6">
          <p className="text-sm leading-6 text-slateText">
            {building.name} is shown with this area context: {building.neighbourhood}. It frames the location; check the exact listing, building documents, property disclosure materials, and strata records before making decisions.
          </p>
          <p className="mt-3 text-sm leading-6 text-slateText">
            Neighbourhood boundaries, building names, address labels, and buyer search behaviour can overlap in Port Moody. Confirm exact fit against the property address and current listing materials.
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
            <h2 className="font-heading text-2xl text-deepInlet">Prepare strata documents early</h2>
            <p className="mt-4 text-sm leading-6 text-slateText">
              Buyers comparing Port Moody condo buildings expect a current Form B, meeting minutes, depreciation report, insurance certificate, and clear answers on fees, parking, storage, and any pending work. Prepare these before going to market.
            </p>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h2 className="font-heading text-2xl text-deepInlet">Highlight renovations carefully</h2>
            <p className="mt-4 text-sm leading-6 text-slateText">
              Renovation claims must be supported by what is verifiable: permits pulled, work completed, and materials used. Avoid unverified estimates or general descriptions that go beyond what can be confirmed in the unit.
            </p>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h2 className="font-heading text-2xl text-deepInlet">Know your active competition</h2>
            <p className="mt-4 text-sm leading-6 text-slateText">
              Understand what is currently listed in the same building and in comparable Port Moody buildings before pricing. Buyer response is building-specific, and verified condition, documents, exposure, parking, storage, and known issues can materially affect positioning.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Active listings" tone="white">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h2 className="font-heading text-2xl text-deepInlet">Use listings with building research</h2>
            <p className="mt-3 text-sm leading-6 text-slateText">
              This preview frames the building and location; start with an active listing for unit-specific details. Ask about the building if you want help sorting what matters before writing an offer.
            </p>
            <p className="mt-3 text-xs leading-5 text-slateText">{disclosure}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CTAButton href="/listings" variant="secondary">View Port Moody listings</CTAButton>
              <CTAButton href="/contact">Ask about this building</CTAButton>
            </div>
          </div>
          <div className="rounded-lg border border-softBorder bg-deepInlet p-6 text-white">
            <h2 className="font-heading text-2xl">Have a question?</h2>
            <p className="mt-3 text-sm leading-6 text-mist">
              Send the building name, unit, or listing link. We can help you understand location, strata documents, layout, exposure, fees, parking, and key due diligence before relying on the listing.
            </p>
            <div className="mt-5">
              <Link href="/contact" className="text-sm font-semibold text-white underline underline-offset-4">
                Contact Paul and Leilani
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
