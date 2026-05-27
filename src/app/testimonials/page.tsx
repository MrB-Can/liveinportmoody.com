import { CTAButton } from "@/components/cta-button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Port Moody Client Stories and Testimonials",
  description:
    "Trust page for approved public Google reviews and client stories from Live in Port Moody. Review content will be added after approval.",
  path: "/testimonials",
});

const storyPlaceholders = [
  "Buyer story review area",
  "Seller story review area",
  "Relocation story review area",
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Client trust</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">Google reviews and client stories</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            This page is reserved for approved public reviews and client stories. We will not invent testimonials,
            star ratings, review copy, or client outcomes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="/contact">Contact Paul and Leilani</CTAButton>
            <CTAButton href="/resources" variant="ghost">Browse resources</CTAButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="rounded-lg border border-dashed border-softBorder bg-white p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Google testimonials</p>
          <h2 className="mt-3 font-heading text-3xl text-deepInlet">Approved public reviews will be added here</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slateText">
            Review excerpts will only be added from approved public reviews or client-approved story material.
            Google review links can be added when the official public profile URL is confirmed.
          </p>
        </div>
      </section>

      <section className="bg-warmSand px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl text-deepInlet">Client stories under review</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {storyPlaceholders.map((story) => (
              <article key={story} className="rounded-lg border border-dashed border-softBorder bg-white/85 p-6">
                <h3 className="font-heading text-xl text-deepInlet">{story}</h3>
                <p className="mt-3 text-sm leading-6 text-slateText">
                  To be added only after the story is approved, accurate, and appropriate for public use.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="rounded-lg bg-deepInlet p-6 text-white md:p-8">
          <h2 className="font-heading text-3xl">Want local guidance?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-mist">
            Ask a specific Port Moody question about buying, selling, moving, neighbourhoods, buildings, complexes,
            or market context.
          </p>
          <div className="mt-6">
            <CTAButton href="/contact" variant="secondary">Contact Paul and Leilani</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
