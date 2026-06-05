import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { NeighbourhoodGuide } from "@/data/neighbourhoodGuides";
import { Badge } from "@/components/ui/badge";
import { QuickFactsWithBars } from "@/components/neighbourhoods/quick-facts-with-bars";
import { NeighbourhoodFAQ } from "@/components/neighbourhoods/neighbourhood-faq";
import { AlertCircle, Trees, GraduationCap, TrainFront } from "lucide-react";

interface NeighbourhoodGuideTemplateProps {
  guide: NeighbourhoodGuide;
  complexes?: Array<{ name: string; slug: string }>;
  buildings?: Array<{ name: string; slug: string }>;
  showBackLink?: boolean;
}

const standardVerificationNote =
  "This guide is for general orientation. Unit details, bylaws, strata fees, rental rules, pet rules, parking, storage, school assignment, measurements, and strata documents should be verified for the specific property before making a decision.";

const previewNote =
  "This guide is being expanded. Use it for orientation, then verify property-specific details, school assignment, strata information, and listing details before making a decision.";

export function NeighbourhoodGuideTemplate({
  guide,
  complexes = [],
  buildings = [],
  showBackLink = true
}: NeighbourhoodGuideTemplateProps) {
  const statusBadgeColor = guide.status === "published" ? "forest" : "slate";
  const statusText = guide.status === "published" ? "Guide live" : "Neighbourhood guide preview";
  const areaLabel = guide.areaType === "nearby_community" ? "Nearby community" : "Port Moody neighbourhood";

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

        {/* Verification note */}
        <p className="border-l-4 border-amber-300 bg-amber-50/70 px-4 py-3 text-sm leading-6 text-amber-950">
          {standardVerificationNote}
        </p>

        {/* Quick facts and scoring bars - to be populated */}
        <QuickFactsWithBars
          neighbourhoodName={guide.name}
          facts={[
            { label: "Best for", value: guide.bestFor.join(", ") },
            { label: "Housing types", value: guide.housingTypes.join(", ") },
            { label: "Walkability", value: guide.walkabilityNotes.substring(0, 40) + "..." },
            { label: "Transit", value: guide.transitAndAccess.substring(0, 40) + "..." },
          ]}
          scoringBars={[]}
        />

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
        {guide.housingTypes.length > 0 && (
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
          {guide.schoolVerificationNote && (
            <p className="border-l-4 border-blue-300 bg-blue-50/70 px-4 py-3 text-sm leading-6 text-blue-950">
              {guide.schoolVerificationNote}
            </p>
          )}
          {guide.schools.length > 0 ? (
            <div className="grid gap-4">
              {guide.schools.map((school, i) => (
                <div key={i} className="rounded-lg border border-softBorder p-4">
                  <h3 className="font-semibold text-deepInlet">{school.name}</h3>
                  <p className="text-sm text-slateText mt-1">{school.type}</p>
                  {school.assignmentNote && (
                    <p className="text-sm text-slate-600 mt-2 italic">{school.assignmentNote}</p>
                  )}
                  {school.verificationLink && (
                    <a
                      href={school.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-forest hover:text-deepInlet mt-2 inline-block"
                    >
                      Verify with {school.district} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-softBorder bg-white p-4">
              <p className="text-sm leading-6 text-slateText">
                Specific school references are not listed for this preview. Verify school assignment by exact address with the applicable district or official school locator before relying on any school assumption.
              </p>
            </div>
          )}
        </section>

        {/* Parks & Trails */}
        {(guide.parks.length > 0 || guide.trails.length > 0) && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Trees className="w-5 h-5 text-forest" />
              <h2 className="font-heading text-2xl text-deepInlet">Parks & Trails</h2>
            </div>
            <p className="text-sm text-slate-600">
              Park, trail, amenity, and access details can change. Verify current details through the applicable municipal or regional source before relying on park or trail assumptions.
            </p>
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

        {/* Related Complexes - Placeholder for future wiring */}
        {complexes.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-deepInlet">Featured Complexes</h2>
            <p className="text-sm text-slate-600 italic">Complex details to be rendered here</p>
          </section>
        )}

        {/* Related Buildings - Placeholder for future wiring */}
        {buildings.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl text-deepInlet">Featured Buildings</h2>
            <p className="text-sm text-slate-600 italic">Building details to be rendered here</p>
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
