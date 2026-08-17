import Link from "next/link";
import Image from "next/image";
import type { ComponentType } from "react";
import { Bed, Bath, Ruler, Phone, ChefHat, Umbrella, Sparkles, TrainFront, Martini, Receipt, Building, Car, Calendar } from "@/lib/icons";
import { LeadForm } from "@/components/lead-form";
import { ListingHeroGallery } from "@/components/listings/ListingHeroGallery";
import { ListingPropertyDetailsTabs } from "@/components/listings/ListingPropertyDetailsTabs";
import { ListingStatusBadge } from "@/components/listings/ListingStatusBadge";
import { PortMoodyMap } from "@/components/maps/PortMoodyMap";
import { getNeighbourhoodGuide } from "@/data/neighbourhoodGuides";
import { buildings } from "@/data/buildings";
import { formatRoomDimensions, type OurListing, type OurListingHighlightIcon } from "@/data/ourListings";
import { siteConfig } from "@/lib/site";
import { sectionHeadingClass } from "@/lib/typography";

const priceFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0,
});

const agentNames: Record<OurListing["listingAgent"], string> = {
  paul: "Paul Bennett",
  leilani: "Leilani Fong",
  both: "Paul Bennett and Leilani Fong",
};

const anchorLinks = [
  ["Photos", "#photos"],
  ["Overview", "#overview"],
  ["Facts & Features", "#facts"],
  ["Location", "#location"],
  ["Schedule a tour", "#schedule-a-tour"],
];

type IconComponent = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

const highlightIcons: Record<OurListingHighlightIcon, IconComponent> = {
  "chef-hat": ChefHat,
  umbrella: Umbrella,
  sparkles: Sparkles,
  "train-front": TrainFront,
  martini: Martini,
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-softBorder pt-10">
      <h2 className={sectionHeadingClass}>{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function ListingDetailTemplate({ listing }: { listing: OurListing }) {
  const neighbourhood = listing.neighbourhoodSlug ? getNeighbourhoodGuide(listing.neighbourhoodSlug) : undefined;
  const building = listing.buildingSlug ? buildings.find((b) => b.slug === listing.buildingSlug) : undefined;
  const propertyTax = listing.details
    ?.find((tab) => tab.label === "Taxes & Fees")
    ?.rows.find((row) => row.label === "Gross taxes")?.value;
  const maintenanceFee = listing.details
    ?.find((tab) => tab.label === "Taxes & Fees")
    ?.rows.find((row) => row.label === "Maintenance fee")?.value;
  const pricePerSqft = listing.sqft > 0 ? Math.round(listing.price / listing.sqft) : null;

  return (
    <>
      <div className="sticky top-20 z-30 w-full max-w-full overflow-hidden border-y border-softBorder bg-white/95 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 overflow-x-auto px-5">
          <nav className="flex w-max max-w-none gap-2 text-sm">
            {anchorLinks.map(([label, href]) => (
              <Link key={href} href={href} className="whitespace-nowrap rounded-full border border-softBorder px-3 py-1.5 text-charcoal hover:bg-mist">
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="#schedule-a-tour"
            className="whitespace-nowrap rounded-full bg-forest px-4 py-1.5 text-sm font-semibold text-white hover:bg-deepInlet"
          >
            Request a showing
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-12">
        <section id="photos" className="relative scroll-mt-28">
          <div className="absolute left-4 top-4 z-10">
            <ListingStatusBadge status={listing.status === "active" ? "active" : "coming-soon"} />
          </div>
          <ListingHeroGallery images={[listing.heroImage, ...listing.galleryImages]} />
        </section>

        <section className="mt-6 border-t border-softBorder pt-10">
          <div className={listing.floorplanImage ? "lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] lg:items-start lg:gap-10" : ""}>
            <div>
              <h1 className="text-balance font-heading text-xl font-semibold text-deepInlet sm:text-2xl lg:text-3xl">
                {listing.unit ? `${listing.unit} - ` : ""}
                {listing.address}
                {neighbourhood ? `, ${neighbourhood.name}` : ""}
              </h1>
              {building ? (
                <Link
                  href={`/buildings/${building.slug}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-deepInlet"
                >
                  {building.logoImage ? (
                    <Image src={building.logoImage.src} alt={building.logoImage.alt} width={20} height={20} className="rounded-sm" />
                  ) : null}
                  {building.name}
                </Link>
              ) : null}
              <p className="mt-3 text-lg font-semibold text-forest sm:text-xl lg:text-2xl">{priceFormatter.format(listing.price)}</p>
              <p className="mt-1 text-sm text-slateText">
                MLS® {listing.mlsNumber} · {listing.propertyType}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 border-y border-softBorder py-4 text-base font-semibold text-charcoal">
                <span className="inline-flex items-center gap-1.5">
                  <Bed className="h-4 w-4 text-forest" />
                  {listing.beds} beds
                </span>
                <span className="text-slateText" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Bath className="h-4 w-4 text-forest" />
                  {listing.baths} baths
                </span>
                <span className="text-slateText" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Ruler className="h-4 w-4 text-forest" />
                  {listing.sqft.toLocaleString()} sqft
                </span>
              </div>

              <div className="mt-4">
                <Link
                  href="#schedule-a-tour"
                  className="inline-flex rounded-lg border border-softBorder px-5 py-2.5 text-sm font-semibold text-charcoal hover:bg-mist"
                >
                  Request a showing
                </Link>
              </div>

              {listing.summary ? <p className="mt-6 max-w-3xl text-base leading-8 text-slateText">{listing.summary}</p> : null}
            </div>

            {listing.floorplanImage ? (
              <a href={listing.floorplanImage.src} target="_blank" rel="noreferrer" className="mt-8 block lg:mt-0">
                <p className="mb-2 text-right text-xs font-semibold uppercase tracking-wide text-slateText">Floor plan</p>
                <div className="relative aspect-[1086/1449] w-full overflow-hidden rounded-lg border border-softBorder bg-white shadow-sm">
                  <Image
                    src={listing.floorplanImage.src}
                    alt={listing.floorplanImage.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, 100vw"
                    className="object-contain"
                  />
                </div>
              </a>
            ) : null}
          </div>
        </section>

        <div className="mt-4 lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] lg:items-start lg:gap-10">
          <div className="space-y-10">
            {listing.highlights.length > 0 && (
              <Section id="overview" title="Highlights">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {listing.highlights.map((item) => {
                    const HighlightIcon = highlightIcons[item.icon];
                    return (
                      <li key={item.text} className="flex gap-3 text-sm leading-6 text-slateText">
                        <HighlightIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden={true} />
                        {item.text}
                      </li>
                    );
                  })}
                </ul>
              </Section>
            )}

            <Section id="facts" title="Facts & features">
              {listing.details && listing.details.length > 0 ? <ListingPropertyDetailsTabs tabs={listing.details} /> : null}

              {listing.rooms && listing.rooms.length > 0 ? (
                <div className="mt-10 border-t border-softBorder pt-6">
                  <h3 className="font-heading text-xl text-deepInlet">Room dimensions</h3>
                  <div className="mt-4 overflow-hidden rounded-lg border border-softBorder bg-white">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-mist text-xs font-bold uppercase tracking-wide text-charcoal">
                          <th className="py-2.5 pl-4 pr-4 text-left">Room</th>
                          <th className="py-2.5 pr-4 text-left">Floor</th>
                          <th className="py-2.5 pr-4 text-left">Dimensions</th>
                        </tr>
                      </thead>
                      <tbody className="[&>tr:nth-child(even)]:bg-mist/40">
                        {listing.rooms.map((room) => (
                          <tr key={room.name}>
                            <td className="py-2.5 pl-4 pr-4 font-medium text-charcoal">{room.name}</td>
                            <td className="py-2.5 pr-4 text-slateText">{room.floor ?? " - "}</td>
                            <td className="py-2.5 pr-4 text-charcoal">{formatRoomDimensions(room.dimensions)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}
            </Section>
          </div>

          <aside id="schedule-a-tour" className="scroll-mt-28 mt-10 lg:sticky lg:top-36 lg:mt-0 lg:self-start">
            <div className="rounded-lg border border-softBorder bg-white p-6 shadow-sm">
              <p className="font-heading text-2xl font-semibold text-deepInlet">{priceFormatter.format(listing.price)}</p>
              <p className="mt-1 text-sm text-slateText">
                {listing.beds} beds · {listing.baths} baths · {listing.sqft.toLocaleString()} sqft
              </p>
              <h2 className="mt-6 font-heading text-xl text-deepInlet">Request a showing</h2>
              <p className="mt-2 text-sm leading-6 text-slateText">
                Ask {agentNames[listing.listingAgent]} about {listing.address} or book a time to see it in person.
              </p>
              <div className="mt-4">
                <LeadForm
                  formType="listing-inquiry"
                  leadType="buyer"
                  ctaLabel="Request a showing"
                  resourceName={listing.address}
                  messageLabel="What would you like to know, or when works for a showing?"
                  tags={[
                    "source:liveinportmoody",
                    "intent:buyer",
                    "intent:listing-inquiry",
                    `mls:${listing.mlsNumber}`,
                    `listing_slug:${listing.slug}`,
                    "area:port-moody",
                  ]}
                  variant="compact"
                />
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-softBorder bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slateText">Listing agent</p>
              <p className="mt-2 font-heading text-lg text-deepInlet">{agentNames[listing.listingAgent]}</p>
              <p className="mt-1 text-sm text-slateText">{siteConfig.brokerageName}</p>
              <a
                href={`tel:${siteConfig.publicPhone.replace(/[^\d+]/g, "")}`}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-deepInlet"
              >
                <Phone className="h-3.5 w-3.5" />
                {siteConfig.publicPhone}
              </a>
              <a
                href={`mailto:${siteConfig.publicEmail}?subject=${encodeURIComponent(
                  `Question about ${listing.address}${listing.unit ? `, ${listing.unit}` : ""}`,
                )}`}
                className="mt-4 flex items-center justify-center rounded-md border border-softBorder px-4 py-2 text-sm font-semibold text-charcoal hover:bg-mist"
              >
                Ask a question
              </a>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-softBorder pt-5 text-sm">
              {listing.yearBuilt ? (
                <div>
                  <dt className="inline-flex items-center gap-1.5 text-slateText">
                    <Calendar className="h-4 w-4 text-forest" aria-hidden={true} />
                    Year built
                  </dt>
                  <dd className="font-medium text-charcoal">{listing.yearBuilt}</dd>
                </div>
              ) : null}
              {propertyTax ? (
                <div>
                  <dt className="inline-flex items-center gap-1.5 text-slateText">
                    <Receipt className="h-4 w-4 text-forest" aria-hidden={true} />
                    Property tax
                  </dt>
                  <dd className="font-medium text-charcoal">{propertyTax}</dd>
                </div>
              ) : null}
              {maintenanceFee ? (
                <div>
                  <dt className="inline-flex items-center gap-1.5 text-slateText">
                    <Building className="h-4 w-4 text-forest" aria-hidden={true} />
                    Strata fee
                  </dt>
                  <dd className="font-medium text-charcoal">{maintenanceFee}</dd>
                </div>
              ) : null}
              {pricePerSqft ? (
                <div>
                  <dt className="inline-flex items-center gap-1.5 text-slateText">
                    <Ruler className="h-4 w-4 text-forest" aria-hidden={true} />
                    Price per sqft
                  </dt>
                  <dd className="font-medium text-charcoal">{priceFormatter.format(pricePerSqft)}/sqft</dd>
                </div>
              ) : null}
              {listing.parkingSummary ? (
                <div>
                  <dt className="inline-flex items-center gap-1.5 text-slateText">
                    <Car className="h-4 w-4 text-forest" aria-hidden={true} />
                    Parking
                  </dt>
                  <dd className="font-medium text-charcoal">{listing.parkingSummary}</dd>
                </div>
              ) : null}
              {listing.lotSqft ? (
                <div>
                  <dt className="text-slateText">Lot size</dt>
                  <dd className="font-medium text-charcoal">{listing.lotSqft.toLocaleString()} sqft</dd>
                </div>
              ) : null}
              {listing.virtualTourUrl ? (
                <div>
                  <dt className="text-slateText">Virtual tour</dt>
                  <dd className="font-semibold">
                    <a href={listing.virtualTourUrl} target="_blank" rel="noreferrer" className="text-forest hover:text-deepInlet">
                      Watch the tour ↗
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </aside>
        </div>
      </div>

      <section id="location" className="mt-16 scroll-mt-28 pb-12 sm:mt-20">
        <div className="mx-auto max-w-6xl border-t border-softBorder px-5 pt-10">
          <h2 className={sectionHeadingClass}>Location</h2>
        </div>
        <div className="mt-6">
          <PortMoodyMap
            points={[
              {
                id: listing.slug,
                label: priceFormatter.format(listing.price),
                kind: "listing",
                latitude: listing.latitude,
                longitude: listing.longitude,
                isApproximate: false,
              },
            ]}
            initialCenter={[listing.longitude, listing.latitude]}
            initialZoom={16}
            showLegend={false}
            className="h-[380px] w-full sm:h-[440px]"
          />
        </div>
        {(neighbourhood || building) && (
          <div className="mx-auto max-w-6xl px-5">
            <p className="mt-4 text-sm text-slateText">
              {neighbourhood ? (
                <>
                  Learn more about{" "}
                  <Link href={`/neighbourhoods/${neighbourhood.slug}`} className="font-semibold text-forest hover:text-deepInlet">
                    {neighbourhood.name}
                  </Link>
                  .{" "}
                </>
              ) : null}
              {building ? (
                <>
                  Read the{" "}
                  <Link href={`/buildings/${building.slug}`} className="font-semibold text-forest hover:text-deepInlet">
                    {building.name} building guide
                  </Link>
                  .
                </>
              ) : null}
            </p>
          </div>
        )}
      </section>
    </>
  );
}
