import { FAQAccordion } from "@/components/faq-accordion";
import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Port Moody Real Estate FAQ",
  description:
    "Central FAQ hub for buying, selling, first-time buyers, neighbourhoods, buildings, complexes, presales, MLS Reciprocity, schools, and moving to Port Moody.",
  path: "/faq",
});

const faqCategories = [
  {
    title: "Buying",
    items: [
      {
        question: "What should buyers compare before choosing a Port Moody property?",
        answer:
          "Compare neighbourhood fit, property type, condition, strata documents if applicable, commute, walkability, parking, storage, active alternatives, and what must be verified before writing.",
      },
      {
        question: "Should I start with listings or neighbourhoods?",
        answer:
          "Use both. Listings show what is active, while neighbourhood and building context helps you understand whether the property fits your daily life and risk tolerance.",
      },
    ],
  },
  {
    title: "Selling",
    items: [
      {
        question: "What matters most before selling in Port Moody?",
        answer:
          "Preparation, pricing, positioning, media quality, property-specific documents, active competition, and the likely buyer profile all matter.",
      },
      {
        question: "Should sellers rely on online estimates?",
        answer:
          "No. Online estimates can be a starting point, but property condition, location, strata context, buyer demand, and current competition need local review.",
      },
    ],
  },
  {
    title: "First-time buyers",
    items: [
      {
        question: "What should first-time buyers verify first?",
        answer:
          "Confirm financing assumptions with a lender, understand closing costs with the right professionals, and verify building, strata, and property details before relying on a listing.",
      },
      {
        question: "Are Port Moody condos a good first purchase?",
        answer:
          "They can be, but it depends on the building, strata documents, fees, parking, storage, exposure, location, and your holding plan.",
      },
    ],
  },
  {
    title: "Neighbourhoods",
    items: [
      {
        question: "Which Port Moody neighbourhood is best?",
        answer:
          "There is no single best neighbourhood. Moody Centre, Suter Brook, Newport Village, Klahanie, Heritage Mountain, Glenayre, College Park, and other areas solve different problems.",
      },
      {
        question: "Are school assignments guaranteed by neighbourhood?",
        answer:
          "No. School assignment should be verified by exact address with SD43. Neighbourhood guides should not be treated as catchment confirmation.",
      },
    ],
  },
  {
    title: "Buildings and complexes",
    items: [
      {
        question: "What should I verify in a condo building or townhouse complex?",
        answer:
          "Review current strata documents, Form B, depreciation report, insurance, bylaws, fees, parking, storage, planned work, special levies, and property-specific details.",
      },
      {
        question: "Are preview building pages complete guides?",
        answer:
          "No. Preview pages are early research pages. They are noindex and should be used as prompts for verification, not as complete building due diligence.",
      },
    ],
  },
  {
    title: "Presales",
    items: [
      {
        question: "What should buyers understand about presales?",
        answer:
          "Presales require careful review of disclosure statements, deposit structure, completion risk, assignment rules, financing timelines, GST, and legal advice.",
      },
      {
        question: "Is this site giving legal or financial advice about presales?",
        answer:
          "No. Presale content is general education. Buyers should get legal, lending, accounting, and insurance advice where appropriate.",
      },
    ],
  },
  {
    title: "MLS Reciprocity and listings",
    items: [
      {
        question: "Does LiveInPortMoody.com show sold listings?",
        answer:
          "No. Sold and expired listings are not published as listing inventory on the site. Active listings are handled through approved MLS Reciprocity paths where available.",
      },
      {
        question: "Why do some pages use listing fallback CTAs?",
        answer:
          "Filtered MLS Reciprocity links need provider approval and testing. Until then, pages use a safe fallback to /listings and inquiry CTAs.",
      },
    ],
  },
  {
    title: "Schools",
    items: [
      {
        question: "How should buyers verify schools?",
        answer:
          "Use SD43 exact-address verification and contact the district where needed. School references on this site are general prompts, not assignment guarantees.",
      },
      {
        question: "Can school boundaries change?",
        answer:
          "Programs, boundaries, capacity, and placement rules can change. Verify before relying on a school assumption.",
      },
    ],
  },
  {
    title: "Moving to Port Moody",
    items: [
      {
        question: "What should relocation buyers compare?",
        answer:
          "Compare commute, transit, walkability, schools by exact address, trails, shops, property type, weather exposure, hillsides, and daily routines.",
      },
      {
        question: "Is Port Moody car-dependent?",
        answer:
          "It depends on the area and address. Central village areas can be more walkable, while hillside and quieter residential areas often require more driving.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-14 md:py-18">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-emphasis">FAQ hub</p>
          <h1 className="max-w-4xl font-heading text-4xl leading-tight text-deepInlet md:text-6xl">
            Port Moody real estate FAQ
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slateText">
            Answers to common questions about buying, selling, first-time buying, neighbourhoods, buildings, complexes, presales, listings, schools, and moving to Port Moody.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="/contact">Ask a Port Moody question</CTAButton>
            <CTAButton href="/listings" variant="secondary">View current listings</CTAButton>
          </div>
        </div>
      </section>

      {faqCategories.map((category, index) => (
        <Section key={category.title} title={category.title} tone={index % 2 === 0 ? "white" : "mist"}>
          <FAQAccordion items={category.items} />
        </Section>
      ))}
    </>
  );
}
