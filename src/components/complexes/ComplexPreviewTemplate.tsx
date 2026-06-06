import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { LeadForm } from "@/components/lead-form";

const MLS_DISCLOSURE =
  "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.";

type RelatedLink = { label: string; href: string };

type Props = {
  name: string;
  address?: string;
  area: string;
  summary: string;
  bestFor: string;
  setting: string;
  knownFacts: [string, string][];
  mustVerify: string[];
  locationContext: string;
  buyerNotes: string[];
  sellerNotes: string[];
  neighbourhoodSlug?: string;
  neighbourhoodName?: string;
  relatedLinks?: RelatedLink[];
};

export function ComplexPreviewTemplate({
  name,
  address,
  area,
  summary,
  bestFor,
  setting,
  knownFacts,
  mustVerify,
  locationContext,
  buyerNotes,
  sellerNotes,
  neighbourhoodSlug,
  neighbourhoodName,
  relatedLinks,
}: Props) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-softBorder bg-mist px-5 py-3">
        <div className="mx-auto flex max-w-6xl gap-5">
          <Link href="/complexes" className="text-sm font-semibold text-forest hover:text-deepInlet">
            ← All complexes
          </Link>
          {neighbourhoodSlug && neighbourhoodName && (
            <Link
              href={`/neighbourhoods/${neighbourhoodSlug}`}
              className="text-sm text-slateText hover:text-deepInlet"
            >
              {neighbourhoodName} neighbourhood →
            </Link>
          )}
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-softBorder bg-mist px-3 py-1 text-xs font-semibold text-slateText">
              Complex guide preview
            </span>
            <span className="text-xs text-slateText">{area}</span>
          </div>
          <h1 className="font-heading text-4xl text-deepInlet md:text-5xl">{name}</h1>
          {address && <p className="mt-2 text-sm text-slateText">{address}</p>}
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">{summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#ask-this-complex">Ask about this complex</CTAButton>
            <CTAButton href="/listings" variant="secondary">View Port Moody listings</CTAButton>
            <CTAButton href="/complexes" variant="ghost">Compare all complexes</CTAButton>
          </div>
          <p className="mt-4 max-w-2xl text-xs leading-5 text-slateText">{MLS_DISCLOSURE}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-10 px-5 py-10 md:py-12">
        {/* Preview notice */}
        <p className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-950">
          This is a guide preview. Information is being expanded. Verify all details in current strata documents and with a qualified professional before making any decision.
        </p>

        {/* Quick summary */}
        <section>
          <h2 className="mb-4 font-heading text-2xl text-deepInlet">About this complex</h2>
          <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-forest">Best for</p>
              <p className="text-sm leading-6 text-slateText">{bestFor}</p>
            </div>
            <div className="p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-forest">Setting</p>
              <p className="text-sm leading-6 text-slateText">{setting}</p>
            </div>
          </div>
        </section>

        {/* Known facts + must verify */}
        <section>
          <h2 className="mb-4 font-heading text-2xl text-deepInlet">What is known</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-softBorder bg-white p-6">
              <h3 className="mb-4 font-heading text-xl text-deepInlet">General orientation</h3>
              <dl className="grid gap-4 sm:grid-cols-2">
                {knownFacts.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-forest">{label}</dt>
                    <dd className="mt-1 text-sm text-charcoal">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-lg border border-softBorder bg-mist p-6">
              <h3 className="mb-4 font-heading text-xl text-deepInlet">What must be verified</h3>
              <ul className="grid gap-2 text-sm text-slateText sm:grid-cols-2">
                {mustVerify.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="shrink-0 text-forest">□</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Location context */}
        <section>
          <h2 className="mb-4 font-heading text-2xl text-deepInlet">Location and context</h2>
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="text-sm leading-6 text-slateText">{locationContext}</p>
          </div>
        </section>

        {/* Buyer notes */}
        <section>
          <h2 className="mb-4 font-heading text-2xl text-deepInlet">Buyer notes</h2>
          <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white">
            {buyerNotes.map((note, i) => (
              <div key={i} className="p-4">
                <p className="flex gap-3 text-sm leading-6 text-slateText">
                  <span className="shrink-0 font-bold text-forest">✓</span>
                  {note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Seller notes */}
        <section>
          <h2 className="mb-4 font-heading text-2xl text-deepInlet">Seller notes</h2>
          <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-mist">
            {sellerNotes.map((note, i) => (
              <div key={i} className="p-4">
                <p className="text-sm leading-6 text-slateText">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related links */}
        {relatedLinks && relatedLinks.length > 0 && (
          <section>
            <h2 className="mb-4 font-heading text-2xl text-deepInlet">Compare and explore</h2>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-10 items-center rounded-md border border-softBorder bg-white px-4 py-2 text-sm font-semibold text-deepInlet hover:border-seaGlass hover:bg-mist"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Active listings context */}
        <section>
          <h2 className="mb-3 font-heading text-2xl text-deepInlet">Active listings in {area}</h2>
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="text-sm leading-6 text-slateText">
              Use listings as the starting point, then compare the complex, strata documents, layout, location, and resale context before making a decision.
            </p>
            <p className="mt-3 text-xs leading-5 text-slateText">{MLS_DISCLOSURE}</p>
            <div className="mt-5">
              <CTAButton href="/listings" variant="secondary">View Port Moody listings</CTAButton>
            </div>
          </div>
        </section>

        {/* Lead form */}
        <section id="ask-this-complex" className="scroll-mt-8">
          <h2 className="mb-4 font-heading text-2xl text-deepInlet">Ask about {name}</h2>
          <div className="max-w-2xl">
            <LeadForm
              formType="complex-inquiry"
              leadType="buyer"
              ctaLabel={`Ask about ${name}`}
              description={`Send a question about ${name}: location, strata, layout, buyer or seller considerations, or what to verify before making a decision.`}
              messageLabel="What are you trying to figure out?"
              messagePlaceholder={`Complex name, listing, or question about ${name}...`}
              resourceName={`${name} complex inquiry`}
              tags={[
                "source:liveinportmoody",
                "intent:complex-inquiry",
                "lead_type:buyer",
                "property:townhouse",
                "area:port-moody",
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
}
