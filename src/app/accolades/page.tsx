import { CTAButton } from "@/components/cta-button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Recognition and Community Involvement",
  description:
    "Recognition, community involvement, and professional background for Live in Port Moody. Awards and accolades will be added after approval.",
  path: "/accolades",
});

const sections = [
  {
    title: "Awards and recognition",
    body: "Approved accolades will be added here after they are confirmed. This section will not list invented awards, rankings, or unverified claims.",
  },
  {
    title: "Community involvement",
    body: "Community involvement notes will be added with accurate context, current participation details, and permission where needed.",
  },
  {
    title: "Professional background",
    body: "Professional background can include role, brokerage, licensing context, and relevant real estate experience without overstating credentials.",
  },
];

export default function AccoladesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Recognition</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">
            Recognition, community involvement, and professional background
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            A trust page for approved accolades, community involvement, and professional background. Awards and
            recognition will only be listed after they are verified.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact">Work with Paul and Leilani</CTAButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="rounded-lg border border-softBorder bg-white p-6">
              <h2 className="font-heading text-2xl text-deepInlet">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slateText">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-warmSand px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-lg border border-dashed border-softBorder bg-white/85 p-6 md:p-8">
            <h2 className="font-heading text-3xl text-deepInlet">Approved accolades will be added after verification</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slateText">
              This section intentionally stays general until specific awards, recognition, or community involvement
              details are verified and approved for public use.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="rounded-lg bg-deepInlet p-6 text-white md:p-8">
          <h2 className="font-heading text-3xl">Work with local Port Moody guidance.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-mist">
            Talk with Paul and Leilani about your next Port Moody real estate decision.
          </p>
          <div className="mt-6">
            <CTAButton href="/contact" variant="secondary">Start a conversation</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
