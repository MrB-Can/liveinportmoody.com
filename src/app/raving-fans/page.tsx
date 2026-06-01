import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Raving Fans and Verified Client Proof",
  description:
    "Raving Fans page for verified reviews, approved client stories, and future connected review sources without unsupported ratings or review counts.",
  path: "/raving-fans",
});

const sourceAreas = [
  {
    title: "Google reviews",
    body: "Google review links or excerpts can appear once the official public profile and usage context are confirmed.",
  },
  {
    title: "RankMyAgent or RateMyAgent",
    body: "Approved review platform links can be added later if an approved profile, plugin, or public source is available.",
  },
  {
    title: "Client-approved stories",
    body: "Buyer, seller, relocation, or long-term planning stories can appear only after client approval for public use.",
  },
];

const proofRules = [
  "Reviews must come from verified sources.",
  "Review counts must be source-backed.",
  "Star ratings must be source-backed.",
  "No client story without approval.",
];

export default function RavingFansPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Raving Fans</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">
            Verified reviews and client stories will live here.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            This page is prepared for approved public reviews, connected review profiles, and client-approved
            stories. It does not use unverified testimonials, unsupported ratings, or invented claims.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="/contact">Contact Paul and Leilani</CTAButton>
            <CTAButton href="/meet-us" variant="secondary">Meet us</CTAButton>
          </div>
        </div>
      </section>

      <Section title="Review sources to connect later" tone="white">
        <div className="grid gap-4 md:grid-cols-3">
          {sourceAreas.map((source) => (
            <article key={source.title} className="rounded-lg border border-softBorder bg-white p-6">
              <h2 className="font-heading text-2xl text-deepInlet">{source.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slateText">{source.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Trust content rules">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proofRules.map((rule) => (
            <div key={rule} className="rounded-lg border border-softBorder bg-white p-5 text-sm font-semibold text-deepInlet">
              {rule}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <CTAButton href="/contact" variant="secondary">Ask for local guidance</CTAButton>
        </div>
      </Section>
    </>
  );
}
