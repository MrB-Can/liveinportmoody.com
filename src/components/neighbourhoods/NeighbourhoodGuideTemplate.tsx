import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { NeighbourhoodGuide, neighbourhoodGuides } from "@/data/neighbourhoodGuides";
import { Badge } from "@/components/ui/badge";
import { QuickFactsWithBars } from "@/components/neighbourhoods/quick-facts-with-bars";
import { FitCards } from "@/components/neighbourhoods/fit-cards";
import { NeighbourhoodFAQ } from "@/components/neighbourhoods/neighbourhood-faq";
import { PortMoodyMap } from "@/components/maps/PortMoodyMap";
import { neighbourhoodMapPoints, complexMapPoints } from "@/data/mapPoints";
import { complexes as allComplexes } from "@/data/complexes";
import { AlertCircle, Trees, GraduationCap, TrainFront } from "lucide-react";

interface NeighbourhoodGuideTemplateProps {
  guide: NeighbourhoodGuide;
  complexes?: Array<{ name: string; href: string }>;
  buildings?: Array<{ name: string; href: string }>;
  showBackLink?: boolean;
}

const previewNote =
  "An orientation to this area. Confirm current listing details, strata documents, and professional advice before making a decision.";

// Map a comparison area label to its guide slug, so "How X compares" can link to
// real neighbourhoods (and leave non-neighbourhood labels like "Coquitlam (Burke
// Mountain)" as plain text).
const slugByName: Record<string, string> = Object.fromEntries(
  neighbourhoodGuides
    .filter((g) => g.status === "published")
    .map((g) => [g.name, g.slug])
);

export function NeighbourhoodGuideTemplate({
  guide,
  complexes = [],
  buildings = [],
  showBackLink = true
}: NeighbourhoodGuideTemplateProps) {
  const statusBadgeColor = guide.status === "published" ? "forest" : "slate";
  const statusText = guide.status === "published" ? "Guide live" : "Neighbourhood guide preview";
  const areaLabel = guide.areaType === "nearby_community" ? "Nearby community" : "Port Moody neighbourhood";

  // Quick facts: use authored facts when present, otherwise derive from the
  // narrative fields (no truncation, full values read as finished content).
  const quickFacts =
    guide.quickFacts && guide.quickFacts.length > 0
      ? guide.quickFacts
      : [
          { label: "Best for", value: guide.bestFor.join(", ") },
          { label: "Housing types", value: guide.housingTypes.join(", ") },
          { label: "Walkability", value: guide.walkabilityNotes },
          { label: "Transit", value: guide.transitAndAccess },
        ];

  // Map markers: the neighbourhood's own point plus any complexes located in it.
  const ownMapPoint = neighbourhoodMapPoints.find(
    (p) => p.href === `/neighbourhoods/${guide.slug}`
  );
  const complexNames = new Set(
    allComplexes.filter((c) => c.neighbourhoodSlug === guide.slug).map((c) => c.name)
  );
  const guideMapPoints = [
    ...(ownMapPoint ? [ownMapPoint] : []),
    ...complexMapPoints.filter((p) => complexNames.has(p.label)),
  ];

  return (
    <>
      {/* Back link */}
      {showBackLink && (
        <div className="bg-mist px-5 py-3 border-b border-softBorder">
          <div className="mx-auto max-w-4xl">
            <Link href="/neighbourhoods" className="text-sm font-semibold text-forest hover:text-deepInlet">
              ← Back to all neighbourhoods
            </Link>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <Badge tone={statusBadgeColor}>{statusText}</Badge>
            <Badge tone="slate">{areaLabel}</Badge>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-deepInlet">
            {guide.name === guide.municipality ? guide.name : `${guide.name}, ${guide.municipality}`}
          </h1>
          <p className="mt-4 text-lg text-slateText">
            {guide.intro}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-12 px-5 py-10 md:py-12">
        {/* Overview */}
        {guide.overviewParagraph && (
          <section>
            <p className="text-slateText leading-7">{guide.overviewParagraph}</p>
          </section>
        )}

        {guide.status === "preview" && (
          <p className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-950">
            {previewNote}
          </p>
        )}

        {/* Quick facts and scoring bars */}
        <QuickFactsWithBars
          neighbourhoodName={guide.name}
          facts={quickFacts}
          scoringBars={guide.scoringBars ?? []}
        />

        {/* May fit / May not fit */}
        {guide.mayFit && guide.mayNotFit && guide.mayFit.length > 0 && guide.mayNotFit.length > 0 && (
          <FitCards mayFit={guide.mayFit} mayNotFit={guide.mayNotFit} neighbourhoodName={guide.name} />
        )}

        {/* Where it is */}
        {guideMapPoints.length > 0 && (
          <section>
            <h2 className="font-heading text-2xl text-deepInlet mb-4">Where {guide.name} is</h2>
            {guide.locationBlurb && <p className="text-slateText mb-8">{guide.locationBlurb}</p>}
            <PortMoodyMap
              points={guideMapPoints}
              initialCenter={[guide.longitude, guide.latitude]}
              initialZoom={13}
              showLegend={true}
            />
          </section>
        )}

        {/* Best For */}
        {guide.bestFor.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-deepInlet">Best For</h2>
            <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-2 md:divide-x md:divide-y-0">
              {guide.bestFor.map((item, i) => (
                <div key={i} className="p-4">
                  <p className="text-slateText flex items-center gap-2">
                    <span className="text-forest font-bold">✓</span>
                    <span>{item}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Housing Types */}
        {guide.housingTypeDetails && guide.housingTypeDetails.length > 0 ? (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-deepInlet">Housing types</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {guide.housingTypeDetails.map((type, i) => (
                <div key={i} className="rounded-lg border border-softBorder bg-white p-6">
                  <h3 className="font-semibold text-deepInlet mb-2">{type.name}</h3>
                  <p className="text-sm text-slateText mb-3">{type.description}</p>
                  <ul className="text-sm text-slateText space-y-1">
                    {type.bullets.map((bullet, j) => (
                      <li key={j}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ) : (
          guide.housingTypes.length > 0 && (
            <section className="space-y-4">
              <h2 className="font-heading text-2xl text-deepInlet">Housing Types</h2>
              <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white">
                {guide.housingTypes.map((type, i) => (
                  <div key={i} className="p-3 text-sm text-slateText">
                    {type}
                  </div>
                ))}
              </div>
            </section>
          )
        )}

        {/* Trade-offs */}
        {guide.tradeOffs.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <h2 className="font-heading text-2xl text-deepInlet">Things to Consider</h2>
            </div>
            <div className="divide-y divide-amber-200 rounded-lg border border-amber-200 bg-amber-50/70">
              {guide.tradeOffs.map((tradeoff, i) => (
                <div key={i} className="p-3 text-sm text-amber-950">
                  {tradeoff}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Schools */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-forest" />
            <h2 className="font-heading text-2xl text-deepInlet">Schools</h2>
          </div>
          {guide.schools.length > 0 ? (
            <div className="grid gap-4">
              {guide.schools.map((school, i) => (
                <div key={i} className="rounded-lg border border-softBorder p-4">
                  <h3 className="font-semibold text-deepInlet">{school.name}</h3>
                  <p className="text-sm text-slateText mt-1">{school.type}</p>
                  {school.assignmentNote && (
                    <p className="text-sm text-slate-600 mt-2 italic">{school.assignmentNote}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-softBorder bg-white p-4">
              <p className="text-sm leading-6 text-slateText">
                School assignment is based on exact property address through the applicable district. Confirm catchment for a specific home with School District 43.
              </p>
            </div>
          )}
          {guide.schoolVerificationNote && (
            <p className="text-sm text-slate-600 italic">{guide.schoolVerificationNote}</p>
          )}
          <div>
            <a
              href="https://www.sd43.bc.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-forest hover:text-deepInlet"
            >
              School District 43 official catchment maps →
            </a>
          </div>
        </section>

        {/* Parks & Trails */}
        {(guide.parks.length > 0 || guide.trails.length > 0) && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Trees className="w-5 h-5 text-forest" />
              <h2 className="font-heading text-2xl text-deepInlet">Parks & Trails</h2>
            </div>
            <div className="grid gap-4">
              {guide.parks.map((park, i) => (
                <div key={`park-${i}`} className="rounded-lg border border-softBorder p-4">
                  <h3 className="font-semibold text-deepInlet">{park.name}</h3>
                  <ul className="text-sm text-slateText mt-2 space-y-1">
                    {park.features.map((feature, j) => (
                      <li key={j}>• {feature}</li>
                    ))}
                  </ul>
                  {park.distance && <p className="text-sm text-slate-600 mt-2">{park.distance}</p>}
                </div>
              ))}
              {guide.trails.map((trail, i) => (
                <div key={`trail-${i}`} className="rounded-lg border border-softBorder p-4">
                  <h3 className="font-semibold text-deepInlet">{trail.name}</h3>
                  <p className="text-sm text-slateText mt-1">
                    {trail.type.charAt(0).toUpperCase() + trail.type.slice(1)}
                    {trail.difficulty && ` • ${trail.difficulty}`}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* What makes it special */}
        {guide.whatMakesItSpecial && (
          <section className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">What makes it special</h2>
            <p className="text-slateText leading-7">{guide.whatMakesItSpecial}</p>
          </section>
        )}

        {/* Photo gallery */}
        {guide.photos && guide.photos.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-deepInlet">Photos</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {guide.photos.map((photo, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={photo.src} alt={photo.alt} className="rounded-lg w-full object-cover aspect-video" />
              ))}
            </div>
          </section>
        )}

        {/* Transit & Walkability */}
        <section className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrainFront className="w-5 h-5 text-forest" />
              <h2 className="font-heading text-2xl text-deepInlet">Transit & Access</h2>
            </div>
            <p className="text-slateText">{guide.transitAndAccess}</p>
          </div>
          <div>
            <h3 className="font-heading text-xl text-deepInlet mb-3">Walkability</h3>
            <p className="text-slateText">{guide.walkabilityNotes}</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="https://www.translink.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-forest hover:text-deepInlet"
            >
              TransLink trip planner →
            </a>
            <a
              href="https://www.walkscore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-forest hover:text-deepInlet"
            >
              Walk Score explorer →
            </a>
          </div>
        </section>

        {/* Buyer Notes */}
        {guide.buyerNotes.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-deepInlet">Buyer Notes</h2>
            <div className="grid gap-3">
              {guide.buyerNotes.map((note, i) => (
                <div key={i} className="rounded-lg border border-softBorder bg-mist p-4">
                  <p className="text-slateText">{note}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Seller Notes */}
        {guide.sellerNotes.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-deepInlet">Seller Notes</h2>
            <div className="grid gap-3">
              {guide.sellerNotes.map((note, i) => (
                <div key={i} className="rounded-lg border border-softBorder bg-mist p-4">
                  <p className="text-slateText">{note}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* How it compares */}
        {guide.comparisons && guide.comparisons.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-deepInlet">How {guide.name} compares</h2>
            <div className="rounded-lg border border-softBorder bg-white p-6 space-y-4">
              {guide.comparisons.map((comparison, i) => {
                const slug = slugByName[comparison.area];
                return (
                  <div key={i} className="text-sm text-slateText">
                    {slug ? (
                      <Link
                        href={`/neighbourhoods/${slug}`}
                        className="font-semibold text-forest hover:text-deepInlet hover:underline"
                      >
                        {comparison.area}:
                      </Link>
                    ) : (
                      <span className="font-semibold text-deepInlet">{comparison.area}:</span>
                    )}{" "}
                    {comparison.text}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Featured complexes in this neighbourhood */}
        {complexes.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-deepInlet">Featured Complexes</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {complexes.map((complex) => (
                <li key={complex.href}>
                  <Link
                    href={complex.href}
                    className="flex items-center justify-between rounded-lg border border-softBorder bg-white px-4 py-3 text-sm font-semibold text-deepInlet hover:border-forest"
                  >
                    {complex.name}
                    <span aria-hidden="true" className="text-forest">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Featured buildings in this neighbourhood */}
        {buildings.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-deepInlet">Featured Buildings</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {buildings.map((building) => (
                <li key={building.href}>
                  <Link
                    href={building.href}
                    className="flex items-center justify-between rounded-lg border border-softBorder bg-white px-4 py-3 text-sm font-semibold text-deepInlet hover:border-forest"
                  >
                    {building.name}
                    <span aria-hidden="true" className="text-forest">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Listings Module */}
        {guide.listingsConfig.mode !== "none" && (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-deepInlet">Ask about homes in {guide.name}</h2>
            {guide.listingsConfig.disclosure && (
              <p className="border-l-4 border-slate-300 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                {guide.listingsConfig.disclosure}
              </p>
            )}
            <div className="rounded-lg border border-softBorder bg-mist p-6 text-center">
              <p className="text-slateText mb-4">
                Ask for local context on available homes and properties in {guide.name}.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-2 rounded-lg bg-forest text-white font-semibold hover:bg-deepInlet transition-colors"
                >
                  Ask about homes in {guide.name}
                </Link>
                <Link
                  href="/listings"
                  className="inline-block px-6 py-2 rounded-lg border border-seaGlass bg-white text-deepInlet font-semibold hover:bg-mist transition-colors"
                >
                  View Port Moody listings
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {guide.faq.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-deepInlet">Frequently Asked Questions</h2>
            <NeighbourhoodFAQ items={guide.faq} />
          </section>
        )}

        {/* Contact CTA */}
        <section className="rounded-lg border border-softBorder bg-white p-8">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">Questions about {guide.name}?</h2>
          <p className="text-slateText mb-6">Whether you&apos;re a buyer, seller, or just exploring, Paul and Leilani can help.</p>
          <div className="max-w-md">
            <LeadForm
              formType="ask-question"
              leadType="buyer"
              ctaLabel="Send a question"
              title={`Ask about ${guide.name}`}
              messageLabel={`What would you like to know about ${guide.name}?`}
              resourceName={`${guide.name} neighbourhood guidance`}
              tags={[
                "source:liveinportmoody",
                "intent:neighbourhood-guidance",
                "lead_type:buyer",
                `neighbourhood_name:${guide.name}`,
                `neighbourhood_slug:${guide.slug}`,
                `neighbourhood:${guide.slug}`,
                "area:port-moody",
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
}
