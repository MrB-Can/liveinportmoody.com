import { ComplexHero } from "@/components/complexes/ComplexHero";
import { ComplexQuickFacts } from "@/components/complexes/ComplexQuickFacts";
import { ComplexOverview } from "@/components/complexes/ComplexOverview";
import { ComplexFitCards } from "@/components/complexes/ComplexFitCards";
import { ComplexDetails } from "@/components/complexes/ComplexDetails";
import { ComplexAmenities } from "@/components/complexes/ComplexAmenities";
import { ComplexLocation } from "@/components/complexes/ComplexLocation";
import { ComplexParksAndTrails } from "@/components/complexes/ComplexParksAndTrails";
import { ComplexSchools } from "@/components/complexes/ComplexSchools";
import { ComplexTransit } from "@/components/complexes/ComplexTransit";
import { ComplexBuyerNotes } from "@/components/complexes/ComplexBuyerNotes";
import { ComplexSellerNotes } from "@/components/complexes/ComplexSellerNotes";
import { ComplexMarketContext } from "@/components/complexes/ComplexMarketContext";
import { ComplexListingsCTA } from "@/components/complexes/ComplexListingsCta";
import { ComplexFaq } from "@/components/complexes/ComplexFaq";
import { ComplexExternalResources } from "@/components/complexes/ComplexExternalResources";
import { LeadForm } from "@/components/lead-form";
import { createMetadata } from "@/lib/seo";
import { treetopsComplex } from "@/data/complexes/treetops";

export const metadata = createMetadata({
  title: treetopsComplex.seo.title,
  description: treetopsComplex.seo.description,
  path: "/complexes/treetops-101-parkside-drive",
});

export default function TreetopsPage() {
  return (
    <>
      <ComplexHero
        name={treetopsComplex.name}
        address={treetopsComplex.address}
        neighborhood={treetopsComplex.neighborhood}
      />

      <div className="mx-auto max-w-4xl px-5 py-12 space-y-16">
        {/* Quick Facts */}
        <ComplexQuickFacts facts={treetopsComplex.quickFacts} />

        {/* Overview */}
        <ComplexOverview
          introduction={treetopsComplex.overview.introduction}
          typicalLayout={treetopsComplex.overview.typicalLayout}
          condition={treetopsComplex.overview.condition}
        />

        {/* Fit Cards */}
        <ComplexFitCards fitTypes={treetopsComplex.whoItFitsFor} />

        {/* What Homes Are Like */}
        <ComplexDetails details={treetopsComplex.whatTheHomesAreLike} />

        {/* Amenities */}
        <ComplexAmenities amenities={treetopsComplex.amenities} />

        {/* Location */}
        <ComplexLocation location={treetopsComplex.location} />

        {/* Parks & Trails */}
        <ComplexParksAndTrails trails={treetopsComplex.nearbyParksAndTrails} />

        {/* Schools */}
        <ComplexSchools schools={treetopsComplex.schoolsAndEducation} />

        {/* Transit */}
        <ComplexTransit transit={treetopsComplex.transitAndWalkability} />

        {/* Buyer Notes */}
        <ComplexBuyerNotes notes={treetopsComplex.buyerNotes} />

        {/* Seller Notes */}
        <ComplexSellerNotes notes={treetopsComplex.sellerNotes} />

        {/* Market Context */}
        <ComplexMarketContext context={treetopsComplex.marketContext} />

        {/* Listings & Inquiry CTA */}
        <ComplexListingsCTA leadData={treetopsComplex.leadData} />

        {/* Complex Watch CTA */}
        <section className="rounded-lg border border-softBorder bg-sand p-8 text-center">
          <h2 className="font-heading text-2xl text-deepInlet">Stay Updated on Treetops</h2>
          <p className="mt-3 text-slateText max-w-2xl mx-auto">Get monthly Port Moody market updates and notifications when new units come available at Treetops.</p>
          <div className="mt-6 max-w-md mx-auto">
            <LeadForm
              formType="market-notes"
              leadType="market-update"
              ctaLabel="Subscribe to market notes"
              title="Subscribe"
              messageLabel="Tell us what property types interest you"
              tags={["source:liveinportmoody", "intent:market-watch", "complex:treetops"]}
            />
          </div>
        </section>

        {/* FAQ */}
        <ComplexFaq items={treetopsComplex.faqItems} />

        {/* External Resources */}
        <ComplexExternalResources resources={treetopsComplex.externalResources} />

        {/* Related Complexes */}
        <section>
          <h2 className="font-heading text-2xl text-deepInlet">Related Port Moody Complexes</h2>
          <p className="mt-2 text-sm text-slateText">Coming soon: guides for other Port Moody townhouse communities.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {treetopsComplex.relatedComplexes.map((complex) => (
              <div key={complex.name} className="rounded-lg border border-softBorder bg-mist p-5 opacity-60">
                <h3 className="font-semibold text-deepInlet">{complex.name}</h3>
                <p className="mt-1 text-sm text-slateText">{complex.area}</p>
                <p className="mt-2 text-xs font-medium text-forest">{complex.status}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Contact CTA */}
        <section className="rounded-lg border border-softBorder bg-white p-8">
          <h2 className="font-heading text-2xl text-deepInlet">Questions About Treetops?</h2>
          <p className="mt-3 text-slateText">Reach out to Leilani or Paul directly. No pressure, just local knowledge.</p>
          <div className="mt-6 max-w-2xl">
            <LeadForm
              formType="ask-question"
              leadType="local-question"
              ctaLabel="Send a question"
              title="Ask us anything"
              messageLabel="Your question about Treetops, Port Moody, or local real estate"
              tags={["source:liveinportmoody", "complex:treetops"]}
            />
          </div>
        </section>
      </div>
    </>
  );
}
