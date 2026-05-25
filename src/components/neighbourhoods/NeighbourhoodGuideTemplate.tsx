import Link from "next/link";
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
  "This guide is for general orientation. Unit details, bylaws, strata fees, rental rules, pet rules, parking, storage, school catchments, measurements, and strata documents should be verified for the specific property before making a decision.";

export function NeighbourhoodGuideTemplate({
  guide,
  complexes = [],
  buildings = [],
  showBackLink = true
}: NeighbourhoodGuideTemplateProps) {
  const statusBadgeColor = guide.status === "published" ? "forest" : "slate";
  const statusText = guide.status === "published" ? "Guide live" : `${guide.status}`;

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
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-deepInlet">
            {guide.name}, {guide.municipality}
          </h1>
          <p className="mt-4 text-lg text-slateText">
            {guide.intro}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-12 space-y-16">
        {/* Verification note */}
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
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
            <div className="grid gap-3 md:grid-cols-2">
              {guide.bestFor.map((item, i) => (
                <div key={i} className="rounded-lg border-l-4 border-forest bg-white p-4">
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
            <div className="grid gap-3">
              {guide.housingTypes.map((type, i) => (
                <div key={i} className="rounded-lg border border-softBorder bg-mist p-3 text-sm text-slateText">
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
            <div className="grid gap-3">
              {guide.tradeOffs.map((tradeoff, i) => (
                <div key={i} className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-950">
                  {tradeoff}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Schools */}
        {guide.schools.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-forest" />
              <h2 className="font-heading text-2xl text-deepInlet">Schools</h2>
            </div>
            {guide.schoolVerificationNote && (
              <p className="rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-950">
                {guide.schoolVerificationNote}
              </p>
            )}
            <div className="grid gap-4">
              {guide.schools.map((school, i) => (
                <div key={i} className="rounded-lg border border-softBorder p-4">
                  <h3 className="font-semibold text-deepInlet">{school.name}</h3>
                  <p className="text-sm text-slateText mt-1">{school.type}</p>
                  {school.catchmentNote && (
                    <p className="text-sm text-slate-600 mt-2 italic">{school.catchmentNote}</p>
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
          </section>
        )}

        {/* Parks & Trails */}
        {(guide.parks.length > 0 || guide.trails.length > 0) && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Trees className="w-5 h-5 text-forest" />
              <h2 className="font-heading text-2xl text-deepInlet">Parks & Trails</h2>
            </div>
            <p className="text-sm text-slate-600">
              Information sourced from City of Port Moody and Metro Vancouver official park and trail systems. Verify current hours, amenities, and accessibility directly with the City of Port Moody.
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
            <h2 className="font-heading text-2xl text-deepInlet">Listings in {guide.name}</h2>
            {guide.listingsConfig.disclosure && (
              <p className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                {guide.listingsConfig.disclosure}
              </p>
            )}
            <div className="rounded-lg border border-softBorder bg-mist p-6 text-center">
              <p className="text-slateText mb-4">
                Find available homes and properties in {guide.name}
              </p>
              <Link
                href="/listings"
                className="inline-block px-6 py-2 rounded-lg bg-forest text-white font-semibold hover:bg-deepInlet transition-colors"
              >
                Ask about homes in {guide.name}
              </Link>
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

        {/* CTA Section */}
        <section className="rounded-lg bg-gradient-to-r from-forest/5 to-deepInlet/5 border border-softBorder p-8 text-center">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">Have more questions about {guide.name}?</h2>
          <p className="text-slateText mb-6">Get personalized guidance from a local expert</p>
          <Link
            href="/contact"
            className="inline-block px-6 py-2 rounded-lg bg-forest text-white font-semibold hover:bg-deepInlet transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </>
  );
}
