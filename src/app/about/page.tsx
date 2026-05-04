import { CTAButton } from "@/components/cta-button";
import { ImageHero } from "@/components/image-hero";
import { Section } from "@/components/section";
import { TeamMemberCard } from "@/components/team-member-card";
import { VideoBlock } from "@/components/video-block";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Leilani Fong and Paul Bennett",
  description: "Why Leilani Fong, Personal Real Estate Corporation and Paul Bennett built Live in Port Moody as a serious local real estate and lifestyle resource.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <ImageHero imageSrc="/hero-about.png" title="A local resource built for clearer Port Moody decisions." subtitle="Leilani and Paul are licensed realtors combining transaction strategy, local research, media, and data to help people make better Port Moody decisions." primaryCta={{ label: "Contact us", href: "/contact" }} />
      <Section title="Why we built this site" tone="white" intro="Most realtor websites start and end with listings and calls to action. Live in Port Moody starts with useful local context, then gives people a low-pressure path to ask for help." />
      <Section title="Leilani and Paul">
        <div className="grid gap-5 md:grid-cols-2">
          <TeamMemberCard name="Leilani Fong, Personal Real Estate Corporation" role="Listing strategy, negotiation, seller confidence" note="TODO: final Leilani bio, stats, brokerage details, and approved credibility items required before launch." focus={["Pricing judgment", "Transaction experience", "Offer situations", "Listing strategy"]} />
          <TeamMemberCard name="Paul Bennett" role="Licensed realtor, research, media, analytics, buyer education" note="TODO: final Paul bio, licence/public profile details, local resident wording, and approved credibility items required before launch." focus={["Photography and video strategy", "Property storytelling", "Neighbourhood intelligence", "CRM intelligence"]} />
        </div>
      </Section>
      <Section title="How we help sellers" tone="white" intro="Seller work focuses on value, timing, preparation, local positioning, media, buyer targeting, and negotiation." />
      <Section title="How we help buyers" intro="Buyer work focuses on lifestyle fit, property type, strata considerations, commute patterns, future context, and resale risk." />
      <Section title="Intro video placeholder" tone="white"><VideoBlock title="Why we built Live in Port Moody" description="Phase 1 reserves space for a 60 to 90 second intro video without requiring final video files." /></Section>
      <Section title="Contact CTA" tone="sand"><CTAButton href="/contact">Ask a Port Moody question</CTAButton></Section>
    </>
  );
}
