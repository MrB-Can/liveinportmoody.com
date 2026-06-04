import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { FAQAccordion } from "@/components/faq-accordion";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Port Moody Real Estate Resources | Buyer, Seller, Strata and Neighbourhood Guides",
  description: "Practical Port Moody real estate resources for buyers, sellers, owners, and relocation researchers, including neighbourhood guides, strata review notes, market context, listings, and preparation checklists.",
  path: "/resources",
});

type ResourceCard = { title: string; description: string; cta: string; href: string };

const buyingResources: ResourceCard[] = [
  {
    title: "Buyer Guide",
    description: "Request the Port Moody buyer guide. Covers neighbourhood selection, property types, strata documents, offer preparation, and common mistakes.",
    cta: "Request the buyer guide",
    href: "/buyer-guide",
  },
  {
    title: "First-Time Buyers",
    description: "Step-by-step guidance for first-time home buyers in Port Moody — process, closing costs, strata basics, and area fit.",
    cta: "Start here",
    href: "/first-time-home-buyers",
  },
  {
    title: "Active Listings",
    description: "Search active Port Moody listings through MLS Reciprocity and ask for local context on buildings, complexes, and neighbourhoods.",
    cta: "View listings",
    href: "/listings",
  },
  {
    title: "Request Recent Sales Context",
    description: "Request comparable sales context where permitted. Sold data availability depends on applicable rules and professional context.",
    cta: "Request context",
    href: "/request-recent-sales",
  },
];

const sellingResources: ResourceCard[] = [
  {
    title: "Seller Guide",
    description: "Request the Port Moody seller guide. Covers preparation, pricing, positioning, media, and launch planning for your specific property type.",
    cta: "Request the seller guide",
    href: "/seller-guide",
  },
  {
    title: "Request Recent Sales Context",
    description: "Ask for recent sales context to understand how your property compares to recent activity in your neighbourhood or building.",
    cta: "Request context",
    href: "/request-recent-sales",
  },
  {
    title: "Testimonials",
    description: "Approved client stories and reviews from buyers and sellers who worked with Paul and Leilani in Port Moody.",
    cta: "View testimonials",
    href: "/raving-fans",
  },
];

const researchResources: ResourceCard[] = [
  {
    title: "Neighbourhood Guides",
    description: "Compare Port Moody neighbourhoods by lifestyle, housing type, walkability, schools, transit, trails, and buyer trade-offs.",
    cta: "Compare neighbourhoods",
    href: "/neighbourhoods",
  },
  {
    title: "Condo Buildings",
    description: "Review condo buildings by location, age, strata considerations, walkability, transit access, and buyer fit.",
    cta: "Research buildings",
    href: "/buildings",
  },
  {
    title: "Townhouse Complexes",
    description: "Compare townhouse complexes by neighbourhood, layout, parking, outdoor space, strata health, and buyer considerations.",
    cta: "Research complexes",
    href: "/complexes",
  },
  {
    title: "Moving to Port Moody",
    description: "A practical guide to Port Moody lifestyle, commute, schools, trails, housing types, neighbourhoods, and relocation decisions.",
    cta: "Relocation guide",
    href: "/local-life",
  },
];

const localLifeResources: ResourceCard[] = [
  {
    title: "Local Businesses",
    description: "Local cafes, breweries, services, and community groups that shape daily life in Port Moody. Nominate a business or explore what is featured.",
    cta: "Explore businesses",
    href: "/featured-businesses",
  },
  {
    title: "Events",
    description: "Community, seasonal, family, and real estate events in Port Moody — added only after dates and details are verified.",
    cta: "View events",
    href: "/events",
  },
  {
    title: "Presales and New Builds",
    description: "Get notified about verified Port Moody presale and new-build projects when there is current context worth reviewing.",
    cta: "Get presale updates",
    href: "/presales",
  },
  {
    title: "FAQ",
    description: "Straight answers to common Port Moody real estate questions about buying, selling, strata, neighbourhoods, and the market.",
    cta: "View FAQ",
    href: "/faq",
  },
  {
    title: "Generational Wealth",
    description: "Long-term real estate thinking — family help, rental decisions, cash flow, taxes, leverage, and planning for future generations.",
    cta: "Learn more",
    href: "/generational-wealth-real-estate",
  },
  {
    title: "Market Context",
    description: "Qualitative Port Moody market context by property type. Understand buyer demand and active listing landscape without fake statistics.",
    cta: "View market context",
    href: "/market",
  },
];

const strataItems = [
  "Form B",
  "Strata minutes",
  "Depreciation report",
  "Contingency reserve fund",
  "Insurance and deductibles",
  "Bylaws and rules",
  "Parking and storage",
  "Pets and rentals",
  "Special levies and capital projects",
];

const faqs = [
  {
    question: "What should I read before buying in Port Moody?",
    answer:
      "Start with neighbourhood guides to understand area fit, then research the specific property type (detached, townhome, or condo) and building/complex context. Finally, review strata documents if applicable.",
  },
  {
    question: "What should I prepare before selling?",
    answer:
      "Understand your home's positioning in the local market, prepare key documents (title, strata, inspections), clarify what upgrades or repairs matter most, and establish realistic expectations based on neighbourhood and property type.",
  },
  {
    question: "What should I review in strata documents?",
    answer:
      "For condos and townhouses, review Form B, depreciation reports, contingency reserve funding, insurance, bylaws, fees, and upcoming capital projects. These can materially affect resale value and buyer confidence.",
  },
  {
    question: "How do I compare neighbourhoods?",
    answer:
      "Use the neighbourhood guides to compare areas side by side by lifestyle, housing type, walkability, schools, transit, trails, and trade-offs. Then dive into detailed neighbourhood guides.",
  },
  {
    question: "Can I ask about a specific listing, building, or complex?",
    answer:
      "Yes. Use the form at the bottom of this page or contact us directly with the property address or building/complex name.",
  },
  {
    question: "Are these resources a replacement for professional advice?",
    answer:
      "No. These resources are for general orientation. Property-specific decisions should be made with current documents, professional advice where needed, and up-to-date market context.",
  },
];

function ResourceGroup({ resources }: { resources: ResourceCard[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {resources.map((r) => (
        <article key={r.href} className="flex flex-col rounded-lg border border-softBorder bg-white p-6">
          <h3 className="font-heading text-xl text-deepInlet">{r.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-6 text-slateText">{r.description}</p>
          <div className="mt-5">
            <CTAButton href={r.href} variant="secondary">{r.cta}</CTAButton>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-emphasis">Resource library</p>
          <h1 className="font-heading text-4xl md:text-5xl text-deepInlet">Port Moody real estate resources</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            Practical guides, checklists, and local research for buying, selling, moving, comparing neighbourhoods, reviewing strata documents, and understanding Port Moody real estate.
          </p>
          <div className="mt-8 flex gap-3 flex-col sm:flex-row sm:flex-wrap">
            <CTAButton href="#buying">Buying resources</CTAButton>
            <CTAButton href="#selling" variant="secondary">Selling resources</CTAButton>
            <CTAButton href="#ask-a-question" variant="ghost">Ask a question</CTAButton>
          </div>
        </div>
      </section>

      <Section
        id="buying"
        eyebrow="Buying in Port Moody"
        title="Buyer resources"
        intro="Guides for neighbourhood selection, property types, listings, strata document review, and offer preparation."
        tone="white"
      >
        <ResourceGroup resources={buyingResources} />
      </Section>

      <Section
        id="selling"
        eyebrow="Selling in Port Moody"
        title="Seller resources"
        intro="Preparation guides, pricing context, media planning, and micro-market value analysis for your Port Moody property."
      >
        <ResourceGroup resources={sellingResources} />
      </Section>

      <Section
        eyebrow="Research and compare"
        title="Research Port Moody"
        intro="Neighbourhood guides, building and complex research, market context, and relocation planning."
        tone="white"
      >
        <ResourceGroup resources={researchResources} />
      </Section>

      <Section
        eyebrow="More resources"
        title="Local life and guidance"
        intro="Local businesses, events, presales, FAQ, generational wealth, and market context."
      >
        <ResourceGroup resources={localLifeResources} />
      </Section>

      <Section
        id="strata-section"
        eyebrow="Strata documents"
        title="Strata documents buyers should understand"
        intro="For condos and townhouses, the strata can matter as much as the unit. Always verify current documents for the specific property."
        tone="white"
      >
        <div className="grid gap-3 md:grid-cols-3">
          {strataItems.map((item) => (
            <div key={item} className="rounded-lg border border-softBorder bg-mist px-5 py-4 text-sm font-semibold text-deepInlet">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <CTAButton href="#ask-a-question" variant="secondary">Ask about a strata document</CTAButton>
        </div>
      </Section>

      <Section
        id="ask-a-question"
        eyebrow="Have a question?"
        title="Ask a local Port Moody question"
        intro="Ask about a listing, building, complex, neighbourhood, strata document, commute, school area, sale, or move."
      >
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-softBorder bg-deepInlet p-6 text-white">
            <h3 className="font-heading text-2xl">What can you ask?</h3>
            <ul className="mt-4 space-y-2 text-sm text-mist">
              {[
                "Buying in Port Moody",
                "Selling in Port Moody",
                "Neighbourhood guidance",
                "Building or complex questions",
                "Strata document review",
                "Recent sales context",
                "Presales and new builds",
                "Relocation planning",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-seaGlass">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm
            formType="ask-question"
            leadType="local-question"
            ctaLabel="Ask a local question"
            title="Send your question"
            messageLabel="What would you like to know about Port Moody real estate?"
            tags={["source:liveinportmoody", "intent:general-local-question", "area:port-moody"]}
          />
        </div>
      </Section>

      <Section title="Real estate terminology glossary" tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-deepInlet mb-2">Subject Removal</h3>
            <p className="text-sm text-slateText">An offer condition allowing you to back out if a home inspection or other due diligence reveals issues. Subject removal typically expires within 7-10 days.</p>
          </div>
          <div>
            <h3 className="font-semibold text-deepInlet mb-2">Strata Documents</h3>
            <p className="text-sm text-slateText">Official records for condo and townhouse ownership. Includes bylaws, financial statements, meeting minutes, and reserve fund assessments. Review before buying.</p>
          </div>
          <div>
            <h3 className="font-semibold text-deepInlet mb-2">Form B (Property Disclosure Statement)</h3>
            <p className="text-sm text-slateText">Legal disclosure form where the seller declares known problems with the property. Reviewed and disclosed before offer acceptance.</p>
          </div>
          <div>
            <h3 className="font-semibold text-deepInlet mb-2">Depreciation Report</h3>
            <p className="text-sm text-slateText">Strata engineering report estimating future reserve fund needs and major capital expenses. Important for understanding long-term condo costs.</p>
          </div>
          <div>
            <h3 className="font-semibold text-deepInlet mb-2">Presale Disclosure Statement</h3>
            <p className="text-sm text-slateText">Legal disclosure required for new construction presales. Details deposits, completion timelines, amendments, and terms. Review carefully before committing.</p>
          </div>
          <div>
            <h3 className="font-semibold text-deepInlet mb-2">MLS Reciprocity</h3>
            <p className="text-sm text-slateText">Shared listing database between Vancouver and Greater Vancouver real estate boards. Most active residential listings appear here. Sold listings are not included in this system.</p>
          </div>
          <div>
            <h3 className="font-semibold text-deepInlet mb-2">Assessment vs. Market Value</h3>
            <p className="text-sm text-slateText">Assessment value is used for property tax (set by provincial assessor). Market value is what buyers actually pay. These can differ significantly — market value typically higher.</p>
          </div>
          <div>
            <h3 className="font-semibold text-deepInlet mb-2">Appraisal</h3>
            <p className="text-sm text-slateText">Professional estimate of property value, usually required by lenders. Different from market value — appraisals can be lower if the property doesn&apos;t support the purchase price.</p>
          </div>
        </div>
      </Section>

      <Section title="Frequently asked questions" tone="white">
        <FAQAccordion items={faqs} />
      </Section>

      <Section tone="sand">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-softBorder bg-white p-5">
            <p className="font-semibold text-deepInlet">Not sure where to start?</p>
            <p className="mt-2 text-sm text-slateText">Use the Explore hub to move between neighbourhoods, buildings, listings, and buyer or seller resources.</p>
            <div className="mt-4">
              <Link href="/explore" className="text-sm font-semibold text-forest hover:underline">Explore Port Moody →</Link>
            </div>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-5">
            <p className="font-semibold text-deepInlet">Ready to buy?</p>
            <p className="mt-2 text-sm text-slateText">Use the buyer journey to compare areas, property types, buildings, and listings with local context.</p>
            <div className="mt-4">
              <Link href="/buy" className="text-sm font-semibold text-forest hover:underline">Buyer guidance →</Link>
            </div>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-5">
            <p className="font-semibold text-deepInlet">Thinking about selling?</p>
            <p className="mt-2 text-sm text-slateText">Use the seller journey to understand pricing, preparation, positioning, and launch strategy.</p>
            <div className="mt-4">
              <Link href="/sell" className="text-sm font-semibold text-forest hover:underline">Seller guidance →</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
