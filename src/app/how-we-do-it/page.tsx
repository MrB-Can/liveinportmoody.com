import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { ImageHero } from "@/components/image-hero";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "How We Do It | Port Moody Selling Process",
  description:
    "Our Port Moody selling process: from strategy consultation and pricing to preparation, launch, showings, and closing. An honest, step-by-step breakdown.",
  path: "/how-we-do-it",
});

const processSteps = [
  {
    step: 1,
    title: "Strategy consultation",
    description: "Understand your home&apos;s position in the Port Moody market",
    details: [
      "Review your property type, condition, and neighbourhood",
      "Assess current active competition and recent sales context",
      "Identify key buyer personas and what they prioritize",
      "Discuss your timeline, motivation, and next-step housing needs",
      "Answer questions about pricing, positioning, and preparation",
    ],
  },
  {
    step: 2,
    title: "Pricing and positioning",
    description: "Set the right price based on real market alternatives",
    details: [
      "Compare your property against current competition, not broad averages",
      "Review recent sales in your building, complex, or neighbourhood",
      "Assess your home&apos;s condition against comparable properties",
      "Develop a pricing strategy that balances market conditions and your timeline",
      "Create a positioning statement that explains your home&apos;s value to buyers",
    ],
  },
  {
    step: 3,
    title: "Prep and staging",
    description: "Prepare the property and create strong visual presentation",
    details: [
      "Identify repairs and maintenance that have the highest ROI",
      "Develop a cleaning and decluttering strategy",
      "Plan staging approaches by room and property type",
      "Gather and organize strata documents, permits, and history",
      "Prepare property disclosures and maintenance documentation",
    ],
  },
  {
    step: 4,
    title: "Professional media",
    description: "Create photography, video, and copy that tell the story",
    details: [
      "Schedule professional photography that showcases light, space, and condition",
      "Create video walkthrough showing layout, flow, and how it lives",
      "Develop floor plans that remove confusion about layout",
      "Write copy that explains features, neighbourhood fit, and buyer benefits",
      "Compile media package with all visuals and documentation",
    ],
  },
  {
    step: 5,
    title: "Launch planning",
    description: "Develop a launch strategy that gets buyer attention",
    details: [
      "Coordinate MLS listing with complete media and positioning",
      "Plan local distribution to relevant buyer pools",
      "Develop social media strategy and content calendar",
      "Brief open house logistics and showing procedures",
      "Set up lead tracking and buyer follow-up process",
    ],
  },
  {
    step: 6,
    title: "Showings and feedback",
    description: "Manage viewings and gather buyer insights",
    details: [
      "Coordinate open houses and private showings",
      "Collect and review feedback from showing agents and buyers",
      "Monitor market response and competing listings",
      "Adjust positioning or pricing strategy based on data",
      "Maintain buyer follow-up and pipeline tracking",
    ],
  },
  {
    step: 7,
    title: "Offer review and negotiation",
    description: "Evaluate and negotiate terms that protect your interests",
    details: [
      "Review incoming offers for price, terms, and conditions",
      "Analyze offer strength, buyer profile, and timing implications",
      "Develop counter-offer strategy aligned with your goals",
      "Negotiate inspection, financing, and closing conditions",
      "Manage backup offers and contingency strategy",
    ],
  },
  {
    step: 8,
    title: "Closing and handoff",
    description: "Finalize the transaction and complete the sale",
    details: [
      "Coordinate with buyer, lawyer, and lender through final steps",
      "Manage inspections, appraisals, and financing conditions",
      "Prepare for closing with utility transfers and final walkthrough",
      "Complete transaction documentation and sign-off",
      "Follow up after closing to ensure smooth transition",
    ],
  },
];

export default function HowWeDoItPage() {
  return (
    <>
      {/* 1. Hero */}
      <ImageHero
        eyebrow="Our selling process"
        title="How we help you sell in Port Moody."
        subtitle="From strategy consultation to closing, our process is built on understanding your home&apos;s value, positioning it clearly to the right buyers, and navigating the sale with care and precision."
        primaryCta={{ label: "Request evaluation", href: "/home-evaluation" }}
        secondaryCta={{ label: "Learn about selling", href: "/sell" }}
        imageSrc="/hero-sell.png"
        imageAlt="Port Moody residential homes surrounded by mature trees."
      />

      {/* 2. Process overview */}
      <Section
        eyebrow="8-step process"
        title="The Port Moody selling process."
        intro="Our approach focuses on understanding your property, knowing the market, and creating clarity for buyers. Each step builds on the last without turning the sale into a black box."
        tone="white"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {processSteps.map((step) => (
            <article key={step.title} className="rounded-lg border border-softBorder bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-deepInlet text-center">
                  <span className="font-heading text-xl font-bold text-white">{step.step}</span>
                </div>
                <div>
                  <h2 className="font-heading text-xl text-deepInlet">{step.title}</h2>
                  <p className="mt-1 text-sm text-emphasis">{step.description}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 text-sm leading-6 text-slateText">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-seaGlass" />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* 3. Key principles */}
      <Section
        eyebrow="Our approach"
        title="What guides our process."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="font-heading text-lg text-deepInlet">Market-first</p>
            <p className="mt-3 text-sm leading-6 text-slateText">
              We start by understanding the market context, not by assuming a price. What are buyers actually looking for? What&apos;s selling, and what&apos;s sitting?
            </p>
          </div>

          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="font-heading text-lg text-deepInlet">Property-specific</p>
            <p className="mt-3 text-sm leading-6 text-slateText">
              Your home competes against real alternatives. We compare you to the same building, complex, or neighbourhood type — not broad city averages.
            </p>
          </div>

          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="font-heading text-lg text-deepInlet">Clarity-focused</p>
            <p className="mt-3 text-sm leading-6 text-slateText">
              Strong positioning, honest media, and complete documentation reduce buyer uncertainty and speed up decision-making.
            </p>
          </div>

          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="font-heading text-lg text-deepInlet">Timeline-flexible</p>
            <p className="mt-3 text-sm leading-6 text-slateText">
              Whether you&apos;re selling quickly, taking time to prepare, or weighing options, our process adapts to your timeline and goals.
            </p>
          </div>

          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="font-heading text-lg text-deepInlet">Feedback-driven</p>
            <p className="mt-3 text-sm leading-6 text-slateText">
              We collect buyer feedback, market response, and competing activity — then adjust strategy based on what the market tells us.
            </p>
          </div>

          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="font-heading text-lg text-deepInlet">Negotiation-sharp</p>
            <p className="mt-3 text-sm leading-6 text-slateText">
              When offers come in, we review them thoughtfully, negotiate strategically, and protect your interests through closing.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. Getting started */}
      <Section eyebrow="Ready to start?" title="How to get started" tone="white">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-lg border border-softBorder bg-mist p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-deepInlet text-white">
              <span className="font-heading text-xl">1</span>
            </div>
            <p className="mt-4 font-heading text-lg text-deepInlet">Request evaluation</p>
            <p className="mt-2 text-sm text-slateText">
              Tell us about your property and we&apos;ll assess your home&apos;s market position and next steps.
            </p>
            <div className="mt-4">
              <Link href="/home-evaluation" className="text-sm font-semibold text-forest hover:underline">
                Request evaluation →
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-softBorder bg-mist p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-deepInlet text-white">
              <span className="font-heading text-xl">2</span>
            </div>
            <p className="mt-4 font-heading text-lg text-deepInlet">Strategy discussion</p>
            <p className="mt-2 text-sm text-slateText">
              We&apos;ll walk through positioning, pricing approach, preparation priorities, and timeline.
            </p>
            <div className="mt-4">
              <Link href="/contact" className="text-sm font-semibold text-forest hover:underline">
                Contact us →
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-softBorder bg-mist p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-deepInlet text-white">
              <span className="font-heading text-xl">3</span>
            </div>
            <p className="mt-4 font-heading text-lg text-deepInlet">Execute and close</p>
            <p className="mt-2 text-sm text-slateText">
              We handle preparation, launch, showings, negotiation, and closing. You focus on the transition.
            </p>
            <div className="mt-4">
              <Link href="/sell" className="text-sm font-semibold text-forest hover:underline">
                Learn about selling →
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="font-heading text-lg text-deepInlet">Recently sold</p>
            <p className="mt-2 text-sm text-slateText">
              Understand recent Port Moody sales context and comparable market activity for your property type.
            </p>
            <div className="mt-4">
              <Link href="/recently-sold" className="text-sm font-semibold text-forest hover:underline">
                Request sales context →
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="font-heading text-lg text-deepInlet">Client stories</p>
            <p className="mt-2 text-sm text-slateText">
              Review the future home for approved client stories and verified public review links.
            </p>
            <div className="mt-4">
              <Link href="/raving-fans" className="text-sm font-semibold text-forest hover:underline">
                Read stories →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Final CTA */}
      <Section tone="sand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl text-deepInlet">Ready to sell in Port Moody?</h2>
          <p className="mt-3 text-slateText">Get a home evaluation and we&apos;ll walk you through the process.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton href="/home-evaluation">Request evaluation</CTAButton>
            <CTAButton href="/sell" variant="secondary">Learn more about selling</CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
