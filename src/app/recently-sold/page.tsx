import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { ImageHero } from "@/components/image-hero";
import { Section } from "@/components/section";
import { FeaturedListingCard } from "@/components/listings/FeaturedListingCard";
import { getSoldOurListings } from "@/data/ourListings";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Recently Sold | Port Moody",
  description:
    "Recently sold listings from Paul Bennett and Leilani Fong in Port Moody, plus a way to request comparable-sales context for your own property.",
  path: "/recently-sold",
});

export default function RecentlySoldPage() {
  const soldListings = getSoldOurListings();

  return (
    <>
      {/* 1. Hero */}
      <ImageHero
        eyebrow="Recently sold"
        title="Recently sold by Paul and Leilani."
        subtitle="A look at what we've recently sold in Port Moody, plus a way to request comparable-sales context for your own property where it can be shared appropriately."
        primaryCta={{ label: "Get a home evaluation", href: "/home-evaluation" }}
        secondaryCta={{ label: "Ask about comparable sales", href: "#ask-comparable" }}
        imageSrc="/hero-sell.webp"
        imageAlt="Port Moody residential homes surrounded by mature trees."
      />

      {/* 2. Our sold listings */}
      <Section eyebrow="Track record" title="Recently sold" tone="white">
        {soldListings.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {soldListings.map((listing) => (
              <FeaturedListingCard key={listing.slug} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="text-sm leading-6 text-slateText">
              Nothing to show here yet. If you want to understand how a property might position in the Port Moody market, request a home evaluation and we will respond directly.
            </p>
          </div>
        )}
      </Section>

      {/* 3. Third-party comparable sales - a separate, more sensitive category */}
      <Section
        eyebrow="Compliance-first"
        title="Asking about other sold properties"
        tone="sand"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm leading-6 text-slateText">
              Comparable-sales data for properties we didn&apos;t list is handled differently than our own track record above - it&apos;s not published on this site, but we can respond with appropriate context for your specific situation.
            </p>
            <ul className="mt-5 space-y-2">
              {[
                "Property type and neighbourhood context",
                "Building or complex comparison prompts",
                "Current active competition",
                "Questions to ask before relying on sales context",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slateText">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-seaGlass" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-softBorder bg-white p-5">
            <h3 className="font-heading text-xl text-deepInlet">Why this is handled carefully</h3>
            <p className="mt-3 text-sm leading-6 text-slateText">
              Comparable-sales context for other agents&apos; listings can be useful, but it should be handled with the right permissions, professional context, and property-specific review rather than published in bulk.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. Get comparable sales */}
      <Section id="ask-comparable" eyebrow="Ask about your market" title="Get comparable sales for your property" tone="white">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm leading-6 text-slateText">
              If you&apos;re curious about how your property would market, what context matters in your building or complex, or what comparable activity may be relevant, send us the address or complex name.
            </p>
            <div className="mt-6 space-y-3">
              <div className="rounded-lg bg-white p-4 border border-softBorder">
                <p className="text-sm font-semibold text-deepInlet">What we can discuss</p>
                <ul className="mt-3 space-y-1">
                  {[
                    "Comparable-sales context where permitted",
                    "Current active competition",
                    "Market positioning for your property type",
                    "Questions to ask for your neighbourhood",
                  ].map((item) => (
                    <li key={item} className="text-xs text-slateText">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h3 className="font-heading text-2xl text-deepInlet">Ask about comparable sales</h3>
            <p className="mt-3 text-sm text-slateText">
              Send your address or property details and we will respond with appropriate comparable-sales context and positioning questions.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <CTAButton href="/request-recent-sales">Request comparable sales</CTAButton>
              <CTAButton href="/home-evaluation" variant="secondary">
                Get a full evaluation
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Related resources */}
      <Section eyebrow="Selling resources" title="Learn about selling in Port Moody">
        <div className="grid gap-3 lg:grid-cols-4">
          <Link
            href="/sell"
            className="flex flex-col rounded-lg border border-softBorder bg-white p-5 hover:border-forest"
          >
            <p className="font-heading text-lg text-deepInlet">Seller strategy</p>
            <p className="mt-2 flex-1 text-sm text-slateText">
              Positioning, pricing, preparation, media, and launch strategy.
            </p>
            <span className="mt-4 text-sm font-semibold text-forest">Read more →</span>
          </Link>

          <Link
            href="/how-we-do-it"
            className="flex flex-col rounded-lg border border-softBorder bg-white p-5 hover:border-forest"
          >
            <p className="font-heading text-lg text-deepInlet">Our selling process</p>
            <p className="mt-2 flex-1 text-sm text-slateText">
              8-step process from strategy to closing.
            </p>
            <span className="mt-4 text-sm font-semibold text-forest">Learn more →</span>
          </Link>

          <Link
            href="/home-evaluation"
            className="flex flex-col rounded-lg border border-softBorder bg-white p-5 hover:border-forest"
          >
            <p className="font-heading text-lg text-deepInlet">Home evaluation</p>
            <p className="mt-2 flex-1 text-sm text-slateText">
              Get a property assessment and market positioning.
            </p>
            <span className="mt-4 text-sm font-semibold text-forest">Request now →</span>
          </Link>

          <Link
            href="/raving-fans"
            className="flex flex-col rounded-lg border border-softBorder bg-white p-5 hover:border-forest"
          >
            <p className="font-heading text-lg text-deepInlet">Client stories</p>
            <p className="mt-2 flex-1 text-sm text-slateText">
              Review the future home for approved client stories and verified public review links.
            </p>
            <span className="mt-4 text-sm font-semibold text-forest">Read stories →</span>
          </Link>
        </div>
      </Section>

      {/* 6. Final CTA */}
      <Section tone="sand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl text-deepInlet">Ready to understand your home&apos;s value?</h2>
          <p className="mt-3 text-slateText">Get a home evaluation and see how your property positions in the Port Moody market.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton href="/home-evaluation">Request evaluation</CTAButton>
            <CTAButton href="/request-recent-sales" variant="secondary">
              Ask about comparable sales
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
