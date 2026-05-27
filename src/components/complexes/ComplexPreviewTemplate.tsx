import Link from "next/link";

const MLS_DISCLOSURE =
  "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.";

const VERIFICATION_NOTE =
  "This guide is for general orientation. Unit details, bylaws, strata fees, rental rules, pet rules, parking, storage, school catchments, measurements, and strata documents should be verified for the specific property before making a decision.";

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
}: Props) {
  return (
    <>
      {/* Back link */}
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
            <Link
              href="/listings"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-deepInlet px-5 py-3 text-sm font-semibold text-white hover:bg-forest"
            >
              Ask about homes in {name}
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-deepInlet px-5 py-3 text-sm font-semibold text-deepInlet hover:bg-mist"
            >
              Ask about this complex
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-xs leading-5 text-slateText">{MLS_DISCLOSURE}</p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl space-y-12 px-5 py-12">
        {/* Preview notice */}
        <p className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-950">
          This is a guide preview. Information is being expanded. Verify all details in current
          strata documents and with a qualified professional before making any decision.
        </p>

        {/* Verification note */}
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {VERIFICATION_NOTE}
        </p>

        {/* Quick summary */}
        <section>
          <h2 className="mb-4 font-heading text-2xl text-deepInlet">About this complex</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-softBorder bg-white p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-forest">Best for</p>
              <p className="text-sm leading-6 text-slateText">{bestFor}</p>
            </div>
            <div className="rounded-lg border border-softBorder bg-white p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-forest">Setting</p>
              <p className="text-sm leading-6 text-slateText">{setting}</p>
            </div>
          </div>
        </section>

        {/* Known + must verify */}
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
                    <span className="flex-shrink-0 text-forest">□</span>
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
          <div className="grid gap-3">
            {buyerNotes.map((note, i) => (
              <div key={i} className="rounded-lg border border-softBorder bg-white p-4">
                <p className="flex gap-3 text-sm leading-6 text-slateText">
                  <span className="flex-shrink-0 font-bold text-forest">✓</span>
                  {note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Seller notes */}
        <section>
          <h2 className="mb-4 font-heading text-2xl text-deepInlet">Seller notes</h2>
          <div className="grid gap-3">
            {sellerNotes.map((note, i) => (
              <div key={i} className="rounded-lg border border-softBorder bg-mist p-4">
                <p className="text-sm leading-6 text-slateText">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Listing fallback CTA */}
        <section className="rounded-lg border border-softBorder p-6">
          <h2 className="mb-2 font-heading text-2xl text-deepInlet">Listings in {area}</h2>
          <p className="mb-4 text-xs leading-5 text-slateText">{MLS_DISCLOSURE}</p>
          <div className="rounded-lg border border-softBorder bg-mist p-6 text-center">
            <p className="mb-4 text-sm text-slateText">Find available homes in {area}</p>
            <Link
              href="/listings"
              className="inline-block rounded-lg bg-forest px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-deepInlet"
            >
              Ask about homes in {name}
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="rounded-lg border border-softBorder bg-gradient-to-r from-forest/5 to-deepInlet/5 p-8 text-center">
          <h2 className="mb-3 font-heading text-2xl text-deepInlet">
            Have more questions about {name}?
          </h2>
          <p className="mb-6 text-sm text-slateText">
            Get guidance from a local expert before you decide
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-forest px-6 py-2 font-semibold text-white transition-colors hover:bg-deepInlet"
          >
            Get in Touch
          </Link>
        </section>
      </main>
    </>
  );
}
