import { CTAButton } from "@/components/cta-button";
import { FAQAccordion } from "@/components/faq-accordion";
import { LeadForm } from "@/components/lead-form";
import { VerificationNote } from "@/components/ui/verification-note";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Port Moody Presales and New Developments",
  description:
    "A Port Moody presales and new developments hub for buyers researching deposits, completion timing, GST, assignments, disclosure documents, and verification steps.",
  path: "/presales",
});

const buyerNotes = [
  "Presales are contract decisions before the home is finished, so timing, financing, disclosure documents, and developer history matter.",
  "Completion dates can move. Buyers should plan for financing, rate changes, deposit timing, and temporary housing risk.",
  "Project availability and pricing must be verified from current developer, disclosure, or listing sources before relying on it.",
];

const considerationCards = [
  {
    title: "Deposits",
    body: "Review the deposit schedule, who holds the funds, when payments are due, and what happens if financing or timing changes.",
  },
  {
    title: "Completion",
    body: "Ask about estimated completion, outside dates, amendment history, walk-through timing, and how delays are handled.",
  },
  {
    title: "GST",
    body: "New homes may involve GST. Confirm tax treatment with qualified tax or legal advice for the specific purchase.",
  },
  {
    title: "Assignments",
    body: "Assignment rights and restrictions vary. Review contract terms, fees, developer consent requirements, and marketability.",
  },
  {
    title: "Disclosure",
    body: "Read the disclosure statement and amendments carefully. Confirm parking, storage, strata budget, amenities, and estimated fees.",
  },
];

const faqs = [
  {
    question: "Are there active Port Moody presale projects listed here?",
    answer:
      "Not yet. This first version is a research hub. Current project availability, pricing, incentives, and timelines will only be added after they are verified from approved sources.",
  },
  {
    question: "Is presale advice legal or tax advice?",
    answer:
      "No. This page is general real estate orientation. Buyers should use qualified legal, tax, lending, and insurance advice before signing or relying on specific terms.",
  },
  {
    question: "What should I verify before writing on a presale?",
    answer:
      "Verify disclosure documents, amendments, deposit schedule, completion timing, GST treatment, assignment rules, developer history, strata assumptions, and financing conditions.",
  },
  {
    question: "Can you send updates when new projects are verified?",
    answer:
      "Yes. Use the presale updates form and we can follow up when there is verified information worth reviewing.",
  },
];

export default function PresalesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Presales</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">
            Port Moody presales and new developments
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            A practical starting point for researching Port Moody presales, new builds, completion risk, deposit
            schedules, disclosure documents, and the local context behind a project.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="/contact">Ask about Port Moody presales</CTAButton>
            <CTAButton href="/buy" variant="ghost">Review buyer guidance</CTAButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {buyerNotes.map((note) => (
            <article key={note} className="rounded-lg border border-softBorder bg-white p-6">
              <p className="text-sm leading-6 text-slateText">{note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-warmSand px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl text-deepInlet">What buyers should know about presales</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {considerationCards.map((card) => (
              <article key={card.title} className="rounded-lg border border-softBorder bg-white/85 p-5">
                <h3 className="font-heading text-xl text-deepInlet">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slateText">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6">
            <VerificationNote
              title="Verify before relying on presale information"
              note="Availability, pricing, incentives, completion dates, disclosure documents, tax treatment, and assignment terms can change."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="rounded-lg border border-dashed border-softBorder bg-mist p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Current and new developments</p>
          <h2 className="mt-3 font-heading text-3xl text-deepInlet">Verified project coverage coming soon</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slateText">
            This section is reserved for verified Port Moody presale and new development information. Project
            availability, pricing, incentives, and dates will only be published after they are checked against approved
            current sources.
          </p>
        </div>
      </section>

      <section id="ask-presales" className="bg-deepInlet px-5 py-12 text-white">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-seaGlass">Ask a presale question</p>
            <h2 className="mt-3 font-heading text-3xl">Get local context before you sign.</h2>
            <p className="mt-4 text-sm leading-6 text-mist">
              Ask about a project, contract timing, neighbourhood fit, resale considerations, or how a presale compares
              with existing Port Moody homes.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CTAButton href="/contact" variant="secondary">Contact Paul and Leilani</CTAButton>
              <CTAButton href="/listings" variant="ghost">Compare active listings</CTAButton>
            </div>
          </div>
          <div id="presale-updates" className="rounded-lg bg-white p-5 text-charcoal">
            <LeadForm
              formType="ask-question"
              leadType="buyer"
              title="Ask about Port Moody presales"
              description="Share the project, timing, or question you want to verify."
              ctaLabel="Send presale question"
              resourceName="Port Moody presales"
              messageLabel="What presale question should we help with?"
              tags={["presales", "new-development"]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <FAQAccordion items={faqs} />
      </section>
    </>
  );
}
