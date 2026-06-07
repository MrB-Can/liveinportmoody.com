import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { ImageHero } from "@/components/image-hero";
import { HomeEvaluationForm } from "@/components/home-evaluation-form";
import { ReviewProof } from "@/components/reviews/review-proof";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Request a Home Evaluation | Port Moody Home Value Opinion",
  description:
    "Request a home evaluation in Port Moody. Get a property value opinion, understand your home&apos;s positioning, and learn next steps for selling.",
  path: "/home-evaluation",
});

export default function HomeEvaluationPage() {
  return (
    <>
      {/* 1. Hero */}
      <ImageHero
        eyebrow="Understand your home&apos;s value"
        title="Get a home evaluation tailored to Port Moody."
        subtitle="A useful home evaluation looks beyond automated estimates. We consider your property type, condition, neighbourhood, building or complex reputation, recent sales context, and current buyer demand to give you a practical, honest assessment."
        primaryCta={{ label: "Request evaluation", href: "#evaluation-form" }}
        secondaryCta={{ label: "Learn the selling process", href: "/how-we-do-it" }}
        imageSrc="/hero-sell.webp"
        imageAlt="Port Moody residential homes surrounded by mature trees."
      />

      {/* 2. What is a home evaluation */}
      <Section
        eyebrow="Before you list"
        title="What we look at for a home evaluation."
        intro="A home evaluation is more than a number. We assess your property against real alternatives so you can make informed decisions about timing, preparation, pricing, and positioning."
        tone="white"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-softBorder bg-mist p-6">
            <p className="font-heading text-lg text-deepInlet">Property assessment</p>
            <ul className="mt-3 space-y-2">
              {["Property type and condition", "Layout, parking, storage", "Age and renovation status", "Outdoor space and privacy"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slateText">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-seaGlass" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="font-heading text-lg text-deepInlet">Market context</p>
            <ul className="mt-3 space-y-2">
              {["Active competing listings", "Recent comparable sales", "Neighbourhood buyer demand", "Strata health and fees"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slateText">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-seaGlass" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="font-heading text-lg text-deepInlet">Preparation priority</p>
            <ul className="mt-3 space-y-2">
              {["Repairs worth doing before listing", "Staging and cleaning focus", "Document gathering (strata, permits)", "Marketing opportunities"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slateText">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-seaGlass" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-softBorder bg-mist p-6">
            <p className="font-heading text-lg text-deepInlet">Next steps</p>
            <ul className="mt-3 space-y-2">
              {["Timing and market readiness", "Positioning strategy", "Pricing approach", "Launch and follow-up plan"].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slateText">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-seaGlass" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 3. When to get an evaluation */}
      <Section
        eyebrow="Good timing for an evaluation"
        title="When should you request a home evaluation?"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="font-heading text-lg text-deepInlet">Considering selling</p>
            <p className="mt-3 text-sm leading-6 text-slateText">
              Not sure if now is the right time? Understand your home&apos;s current value, prep priorities, and timeline before committing.
            </p>
          </div>

          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="font-heading text-lg text-deepInlet">Planning to list soon</p>
            <p className="mt-3 text-sm leading-6 text-slateText">
              Getting ready to list? We can help you understand positioning, pricing strategy, and what preparation will have the biggest impact.
            </p>
          </div>

          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="font-heading text-lg text-deepInlet">Comparing options</p>
            <p className="mt-3 text-sm leading-6 text-slateText">
              Weighing the decision to stay, upgrade, downsize, or relocate? Understanding your home&apos;s value helps you see your options clearly.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. Evaluation form */}
      <Section id="evaluation-form" eyebrow="Get your evaluation" title="Request a home evaluation" tone="white">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm leading-6 text-slateText">
              Share your property details and we&apos;ll get in touch to discuss your home, timeline, and next steps. Your evaluation is tailored to Port Moody&apos;s market and your specific situation.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg bg-mist p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emphasis">What happens next</p>
                <ol className="mt-3 space-y-2">
                  {[
                    "We review your property details",
                    "We research your neighbourhood and comparable sales",
                    "We reach out to discuss and answer questions",
                    "We follow up with practical valuation context and next-step recommendations",
                  ].map((step, i) => (
                    <li key={step} className="text-sm text-slateText">
                      <span className="font-semibold text-deepInlet">{i + 1}.</span> {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <HomeEvaluationForm />
        </div>
      </Section>

      <Section tone="sand">
        <ReviewProof
          title="Home-evaluation proof should be source-backed."
          intro="Approved Google review excerpts from sellers can support this page once the exact source and public wording are confirmed."
          tags={["seller", "home-evaluation"]}
          ctaLabel="View review standards"
        />
      </Section>

      {/* 5. Next steps section */}
      <Section title="After your evaluation">
        <div className="grid gap-3 lg:grid-cols-5">
          <Link
            href="/sell"
            className="flex flex-col rounded-lg border border-softBorder bg-white p-5 hover:border-forest"
          >
            <p className="font-heading text-lg text-deepInlet">Full seller strategy</p>
            <p className="mt-2 flex-1 text-sm text-slateText">
              Deep dive into positioning, pricing, media, preparation, and launch strategy.
            </p>
            <span className="mt-4 text-sm font-semibold text-forest">Learn more →</span>
          </Link>

          <Link
            href="/how-we-do-it"
            className="flex flex-col rounded-lg border border-softBorder bg-white p-5 hover:border-forest"
          >
            <p className="font-heading text-lg text-deepInlet">How we do it</p>
            <p className="mt-2 flex-1 text-sm text-slateText">
              Walk through our selling process step by step.
            </p>
            <span className="mt-4 text-sm font-semibold text-forest">Learn more →</span>
          </Link>

          <Link
            href="/seller-guide"
            className="flex flex-col rounded-lg border border-softBorder bg-white p-5 hover:border-forest"
          >
            <p className="font-heading text-lg text-deepInlet">Seller guide</p>
            <p className="mt-2 flex-1 text-sm text-slateText">
              Request the Port Moody seller guide with comprehensive selling guidance.
            </p>
            <span className="mt-4 text-sm font-semibold text-forest">Learn more →</span>
          </Link>

          <Link
            href="/recently-sold"
            className="flex flex-col rounded-lg border border-softBorder bg-white p-5 hover:border-forest"
          >
            <p className="font-heading text-lg text-deepInlet">Recently sold</p>
            <p className="mt-2 flex-1 text-sm text-slateText">
              Understand recent Port Moody sales context and comparable market activity.
            </p>
            <span className="mt-4 text-sm font-semibold text-forest">Explore →</span>
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
          <p className="mt-3 text-slateText">Request an evaluation and we&apos;ll help you make the right decision for your situation.</p>
          <div className="mt-8">
            <CTAButton href="#evaluation-form">Request evaluation now</CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
