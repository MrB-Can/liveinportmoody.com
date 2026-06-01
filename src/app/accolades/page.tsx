import { CTAButton } from "@/components/cta-button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Recognition and Community Involvement",
  description:
    "Recognition, community involvement, and professional background for Live in Port Moody, with verified details used before public launch.",
  path: "/accolades",
});

const sections = [
  {
    title: "Awards and recognition",
    body: "Verified awards, rankings, brokerage recognition, or professional acknowledgements can appear here only when source details are confirmed.",
  },
  {
    title: "Community involvement",
    body: "Community involvement can include local volunteering, sponsorship, participation, or community support when the context and permission are clear.",
  },
  {
    title: "Professional background",
    body: "Professional background can include role, brokerage, licensing context, and relevant real estate experience without overstating credentials.",
  },
];

const verificationItems = [
  "Public source or approving organization",
  "Correct name, date, category, and context",
  "Permission where the recognition or involvement is not already public",
  "Plain-language explanation of why the proof matters to buyers or sellers",
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
            A trust page for verified recognition, community involvement, and professional background. Awards and
            recognition will only be listed after source details are confirmed.
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
            <h2 className="font-heading text-3xl text-deepInlet">How recognition will be verified</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slateText">
              We are collecting approved examples of recognition and community involvement. The goal is to show useful
              proof without overstating credentials or publishing unverified claims.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {verificationItems.map((item) => (
                <div key={item} className="rounded-md border border-softBorder bg-white px-4 py-3 text-sm font-semibold text-deepInlet">
                  {item}
                </div>
              ))}
            </div>
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
