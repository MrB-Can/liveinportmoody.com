import Link from "next/link";
import { FAQAccordion } from "@/components/faq-accordion";
import { ListingSupportForm } from "@/components/listings/ListingSupportForm";
import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { ExternalLink } from "@/lib/icons";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Port Moody Listings",
  description:
    "Search active Port Moody listings through MLS Reciprocity and ask for local context on neighbourhoods, condo buildings, townhouse complexes, strata documents, and buyer trade-offs.",
  path: "/listings",
});

const reciprocitySearchUrl = process.env.NEXT_PUBLIC_GVR_RECIPROCITY_SEARCH_URL;

const contextCards = [
  {
    title: "Neighbourhood fit",
    copy: "A listing can look good online but still be a poor fit for commute, walkability, schools, slope, or lifestyle.",
  },
  {
    title: "Building or complex research",
    copy: "For condos and townhouses, the building or strata can matter as much as the unit.",
  },
  {
    title: "Strata document review",
    copy: "Before writing or removing subjects, review minutes, Form B, depreciation report, insurance, bylaws, fees, and planned work.",
  },
  {
    title: "Pricing context",
    copy: "Ask for current context before relying on list price alone. Sold data is not published here unless approved.",
  },
  {
    title: "Buyer trade-offs",
    copy: "Understand what you are giving up: walkability, space, age, parking, privacy, exposure, or renovation level.",
  },
];

const researchLinks = [
  {
    title: "Compare neighbourhoods",
    href: "/neighbourhoods",
    copy: "Understand area fit before you compare homes.",
  },
  {
    title: "Research townhouse complexes",
    href: "/complexes",
    copy: "Compare strata context, layouts, parking, and outdoor space.",
  },
  {
    title: "Research condo buildings",
    href: "/buildings",
    copy: "Review building-level questions before writing.",
  },
  {
    title: "Understand the market",
    href: "/market",
    copy: "Use local market guidance without relying on fake stats.",
  },
  {
    title: "Buyer guidance",
    href: "/buy",
    copy: "Work through area, property type, strata, and offer decisions.",
  },
];

const faqs = [
  {
    question: "Are these active listings?",
    answer:
      "Yes. Active listings are provided through MLS Reciprocity when the search connection is available. Only active listings are shown.",
  },
  {
    question: "Can I see sold listings here?",
    answer:
      "Sold and expired listings are not published here. Ask for current context before relying on list price alone.",
  },
  {
    question: "Can I ask about a specific listing?",
    answer:
      "Yes. Send the listing URL or address and we can help with neighbourhood, building, complex, strata, pricing, and buyer trade-off context.",
  },
  {
    question: "Why should I research the building or complex before writing?",
    answer:
      "For condos and townhouses, strata documents, building condition, bylaws, fees, insurance, parking, and planned work can materially affect the decision.",
  },
  {
    question: "Can you help compare two listings?",
    answer:
      "Yes. Send both listings and the decision you are weighing. We can help compare location, strata context, layout, exposure, parking, condition, and trade-offs.",
  },
  {
    question: "Can you help with strata documents?",
    answer:
      "Yes. We can help you understand what to review and what questions to ask. Legal, insurance, financing, or tax questions should be checked with the right professional.",
  },
];

export default function ListingsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-14 md:py-18">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-emphasis">MLS Reciprocity</p>
          <h1 className="max-w-4xl font-heading text-4xl leading-tight text-deepInlet md:text-6xl">Port Moody listings</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slateText">
            Search active Port Moody listings through MLS Reciprocity and ask for local context on neighbourhoods, buildings, complexes, strata documents, pricing, and buyer trade-offs.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="#search-active-listings">Search active listings</CTAButton>
            <CTAButton href="#ask-listing" variant="secondary">Ask about a listing</CTAButton>
          </div>
        </div>
      </section>

      <Section title="Search active Port Moody listings" tone="white">
        <div id="search-active-listings" className="rounded-lg border border-softBorder bg-mist p-6">
          {reciprocitySearchUrl ? (
            <div className="grid gap-5 lg:grid-cols-[1fr_0.55fr]">
              <div>
                <h2 className="font-heading text-2xl text-deepInlet">MLS Reciprocity search</h2>
                <p className="mt-3 text-sm leading-6 text-slateText">
                  Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.
                </p>
              </div>
              <div className="flex items-center lg:justify-end">
                <a
                  href={reciprocitySearchUrl}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-deepInlet px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest"
                  target="_blank"
                  rel="noreferrer"
                >
                  Search active listings
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="font-heading text-2xl text-deepInlet">MLS Reciprocity search is being connected</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slateText">
                Ask us about current Port Moody listings and we can help immediately.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-slateText">
                Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.
              </p>
              <div className="mt-5">
                <CTAButton href="#ask-listing" variant="secondary">Ask about current listings</CTAButton>
              </div>
            </div>
          )}
        </div>
      </Section>

      <Section title="Use listings with local context" intro="The listing page rarely tells the whole story. Use local research to understand what the property, building, complex, and area mean for your decision.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {contextCards.map((card) => (
            <article key={card.title} className="rounded-lg border border-softBorder bg-white p-6">
              <h3 className="font-heading text-xl text-deepInlet">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slateText">{card.copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <CTAButton href="#ask-listing" variant="secondary">Send us a listing before you write</CTAButton>
        </div>
      </Section>

      <Section title="Listing support" tone="white">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-softBorder bg-deepInlet p-6 text-white">
            <h2 className="font-heading text-3xl">Get local context before you write.</h2>
            <p className="mt-4 text-sm leading-6 text-mist">
              Send the listing URL or address. We can help you think through neighbourhood fit, building or complex risk, strata documents, pricing context, and the trade-offs that are not obvious online.
            </p>
          </div>
          <ListingSupportForm />
        </div>
      </Section>

      <Section title="Research before you write">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {researchLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg border border-softBorder bg-white p-6 transition hover:border-seaGlass hover:bg-mist">
              <h3 className="font-heading text-xl text-deepInlet">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slateText">{item.copy}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Listings FAQ" tone="white">
        <FAQAccordion items={faqs} />
      </Section>
    </>
  );
}
