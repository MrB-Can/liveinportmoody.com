import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";
import { MessageSquareCheck, Clock, Verified, Lock } from "lucide-react";

export const metadata = createMetadata({
  title: "Raving Fans and Verified Client Proof",
  description:
    "Raving Fans page for verified reviews, approved client stories, and review-source standards without unsupported ratings or review counts.",
  path: "/raving-fans",
});


export default function RavingFansPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Raving Fans</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">
            Verified reviews and client stories.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            This page explains how Live in Port Moody handles public reviews, review profiles, and client-approved
            stories. It does not use unverified testimonials, unsupported ratings, or invented claims.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="/contact">Contact Paul and Leilani</CTAButton>
            <CTAButton href="/meet-us" variant="secondary">Meet us</CTAButton>
          </div>
        </div>
      </section>

      <Section title="Review sources" tone="white">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
          <article className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Verified className="w-6 h-6 text-forest flex-shrink-0" />
              <h2 className="font-heading text-2xl text-deepInlet">Google reviews</h2>
            </div>
            <p className="text-sm leading-6 text-slateText">Google review links or excerpts are used only when the official public profile and usage context are confirmed.</p>
          </article>
          <article className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquareCheck className="w-6 h-6 text-forest flex-shrink-0" />
              <h2 className="font-heading text-2xl text-deepInlet">RankMyAgent</h2>
            </div>
            <p className="text-sm leading-6 text-slateText">Review platform links are used only with an approved profile, plugin, or public source.</p>
          </article>
          <article className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-forest flex-shrink-0" />
              <h2 className="font-heading text-2xl text-deepInlet">Client-approved stories</h2>
            </div>
            <p className="text-sm leading-6 text-slateText">Buyer, seller, relocation, or long-term planning stories require client approval for public use.</p>
          </article>
        </div>
      </Section>

      <Section title="Trust content rules">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white sm:grid sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          <div className="p-5 flex flex-col items-start gap-3">
            <Verified className="w-6 h-6 text-forest flex-shrink-0" />
            <p className="text-sm font-semibold text-deepInlet">Reviews must come from verified sources.</p>
          </div>
          <div className="p-5 flex flex-col items-start gap-3">
            <MessageSquareCheck className="w-6 h-6 text-forest flex-shrink-0" />
            <p className="text-sm font-semibold text-deepInlet">Review counts must be source-backed.</p>
          </div>
          <div className="p-5 flex flex-col items-start gap-3">
            <Clock className="w-6 h-6 text-forest flex-shrink-0" />
            <p className="text-sm font-semibold text-deepInlet">Star ratings must be source-backed.</p>
          </div>
          <div className="p-5 flex flex-col items-start gap-3">
            <Lock className="w-6 h-6 text-forest flex-shrink-0" />
            <p className="text-sm font-semibold text-deepInlet">No client story without approval.</p>
          </div>
        </div>
        <div className="mt-6">
          <CTAButton href="/contact" variant="secondary">Ask for local guidance</CTAButton>
        </div>
      </Section>
    </>
  );
}
