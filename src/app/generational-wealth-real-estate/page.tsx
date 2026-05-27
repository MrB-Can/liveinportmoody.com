import { CTAButton } from "@/components/cta-button";
import { FAQAccordion } from "@/components/faq-accordion";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Generational Wealth and Port Moody Real Estate",
  description:
    "General education on long-term family real estate planning, including first-to-second property pathways, helping children buy, rentals, downsizing, estate planning, and risk.",
  path: "/generational-wealth-real-estate",
});

const riskItems = [
  "Leverage can amplify gains and losses.",
  "Cash flow can change with rates, strata fees, repairs, vacancies, and insurance.",
  "Tax rules and reporting obligations require professional advice.",
  "Market cycles can affect timing, liquidity, and refinance options.",
  "Family help should be documented carefully with legal and financial guidance.",
];

const faqItems = [
  {
    question: "Is real estate always a good way to build family wealth?",
    answer:
      "No. Real estate can be a long-term asset, but it carries risk, costs, leverage, tax considerations, maintenance, and market-cycle exposure. This page is general education only.",
  },
  {
    question: "Can parents help children buy a first home?",
    answer:
      "Sometimes, but the structure matters. Gifts, loans, co-signing, ownership shares, and estate implications should be discussed with legal, tax, lending, and financial professionals.",
  },
  {
    question: "Should I keep my first property as a rental?",
    answer:
      "It depends on cash flow, financing, tax position, landlord obligations, property condition, strata rules, and risk tolerance. Get professional advice before relying on a plan.",
  },
  {
    question: "How does downsizing fit into family wealth planning?",
    answer:
      "Downsizing can free equity, reduce maintenance, or help family members, but tax, estate, lifestyle, and timing considerations should be reviewed carefully.",
  },
  {
    question: "Can you help compare long-term real estate options?",
    answer:
      "Yes. We can help with local Port Moody property context, resale considerations, neighbourhood fit, and questions to ask your lender, lawyer, accountant, and financial planner.",
  },
];

export default function GenerationalWealthRealEstatePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-14 md:py-18">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-emphasis">Long-term planning</p>
          <h1 className="max-w-4xl font-heading text-4xl leading-tight text-deepInlet md:text-6xl">
            Real estate and generational wealth
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slateText">
            General education for Port Moody families thinking about long-term property ownership, helping children buy, rental decisions, downsizing, and risk.
          </p>
          <p className="mt-4 max-w-3xl text-sm font-semibold leading-6 text-slateText">
            This is general education, not legal, tax, or financial advice.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="#generational-guide">Get the generational wealth guide</CTAButton>
            <CTAButton href="#long-term-question" variant="secondary">Ask about your long-term real estate plan</CTAButton>
          </div>
        </div>
      </section>

      <Section title="Real estate as a long-term family asset" tone="white">
        <p className="max-w-3xl text-sm leading-6 text-slateText">
          Real estate can support long-term family goals when the property, financing, cash flow, maintenance, tax position, and holding period make sense. The local context matters: neighbourhood, property type, strata health, land value, condition, and future resale audience can all affect the plan.
        </p>
      </Section>

      <Section title="First property to second property pathway">
        <div className="grid gap-4 md:grid-cols-3">
          {["Buy carefully", "Build equity over time", "Reassess before keeping or selling"].map((item) => (
            <div key={item} className="rounded-lg border border-softBorder bg-white p-6">
              <h2 className="font-heading text-2xl text-deepInlet">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-slateText">
                Use current lender, legal, tax, and property-specific advice before relying on any long-term strategy.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Helping children buy" tone="white">
        <p className="max-w-3xl text-sm leading-6 text-slateText">
          Family support can take many forms, including gifts, loans, co-signing, shared ownership, or early inheritance planning. Each can have legal, tax, lending, relationship, and estate implications. Get professional advice before committing funds or signing documents.
        </p>
      </Section>

      <Section title="Keeping property as a rental">
        <p className="max-w-3xl text-sm leading-6 text-slateText">
          Keeping a property as a rental should be tested against realistic rent, vacancy, repairs, strata rules, insurance, financing, taxes, landlord obligations, and cash-flow stress. Do not rely on optimistic rent assumptions alone.
        </p>
      </Section>

      <Section title="Downsizing and estate planning considerations" tone="white">
        <p className="max-w-3xl text-sm leading-6 text-slateText">
          Downsizing, gifting equity, changing title, or holding property for estate purposes can affect lifestyle, taxes, probate, family expectations, and future flexibility. Use legal, tax, and financial planning advice before making structural decisions.
        </p>
      </Section>

      <Section title="Risks: leverage, cash flow, taxes, and market cycles">
        <div className="grid gap-3 md:grid-cols-2">
          {riskItems.map((item) => (
            <div key={item} className="rounded-lg border border-softBorder bg-white p-5 text-sm leading-6 text-slateText">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section id="generational-guide" title="Get the generational wealth guide" tone="white">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-lg border border-softBorder bg-mist p-6">
            <h2 className="font-heading text-2xl text-deepInlet">Guide request</h2>
            <p className="mt-3 text-sm leading-6 text-slateText">
              Request the guide and include the decision you are weighing: first-to-second property, helping children buy, keeping a rental, selling, or downsizing.
            </p>
            <p className="mt-3 text-xs leading-5 text-slateText">This is general education, not legal, tax, or financial advice.</p>
          </div>
          <div id="long-term-question">
            <LeadForm
              formType="ask-question"
              leadType="local-question"
              ctaLabel="Ask about your long-term real estate plan"
              title="Ask a long-term real estate question"
              tags={["source:liveinportmoody", "intent:generational-wealth", "area:port-moody"]}
            />
          </div>
        </div>
      </Section>

      <Section title="Generational wealth FAQ">
        <FAQAccordion items={faqItems} />
      </Section>
    </>
  );
}
