import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Testimonials and Raving Fans",
  description:
    "Compatibility page for testimonials, raving fans, verified reviews, and approved client stories.",
  path: "/testimonials",
});

const trustPaths = [
  {
    title: "Raving Fans",
    body: "Verified review links and client-approved stories.",
    href: "/raving-fans",
    cta: "Open Raving Fans",
  },
  {
    title: "Meet us",
    body: "Learn who is behind Live in Port Moody before approved proof content is added.",
    href: "/meet-us",
    cta: "Meet Paul and Leilani",
  },
  {
    title: "Ask directly",
    body: "Use the contact path for a specific buying, selling, or local question.",
    href: "/contact",
    cta: "Contact us",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Testimonials</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">
            Verified client reviews and stories on Raving Fans.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            Approved reviews, connected review profiles, and client-approved stories appear on Raving Fans with verified source material.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="/raving-fans">Go to Raving Fans</CTAButton>
            <CTAButton href="/contact" variant="secondary">Contact Paul and Leilani</CTAButton>
          </div>
        </div>
      </section>

      <Section title="No unverified testimonials" tone="white" intro="This page intentionally avoids unsupported reviews, unsupported star ratings, and invented client quotes.">
        <div className="rounded-lg border border-softBorder bg-mist p-6">
          <p className="text-sm leading-6 text-slateText">
            Verified public reviews and client-approved stories can be added later when approved sources are available.
          </p>
        </div>
      </Section>

      <Section title="Where to go next">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
          {trustPaths.map((path) => (
            <article key={path.title} className="p-6">
              <h2 className="font-heading text-2xl text-deepInlet">{path.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slateText">{path.body}</p>
              <div className="mt-5">
                <CTAButton href={path.href} variant="secondary">{path.cta}</CTAButton>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
