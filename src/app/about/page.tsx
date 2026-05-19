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
      <ImageHero imageSrc="/images/hero/port-moody-hero-original.jpg" imageAlt="Calm view across Burrard Inlet in Port Moody with forested mountains, still water, and tree branches framing the shoreline." title="A local resource built for clearer Port Moody decisions." subtitle="Leilani and Paul are licensed realtors combining transaction strategy, local research, media, and data to help people make better Port Moody decisions." primaryCta={{ label: "Contact us", href: "/contact" }} />
      <Section title="Why we built this site" tone="white" intro="Most realtor websites start and end with listings and calls to action. Live in Port Moody starts with useful local context, then gives people a low-pressure path to ask for help." />
      <Section title="Leilani and Paul" intro="Licensed realtors combining transaction expertise, local research, and data-driven insight.">
        <div className="grid gap-5 md:grid-cols-2">
          <TeamMemberCard name="Leilani Fong, Personal Real Estate Corporation" role="Listing strategy, negotiation, seller confidence" note="Leilani brings nearly two decades of real estate expertise to every client interaction. A top 2% producer with eXp Realty and a 2x ICON Agent, she has successfully guided over $500 million in residential transactions across Vancouver, Coquitlam, Burnaby, and Port Moody. Known for her exceptional negotiation skills and client-centric approach, Leilani specializes in residential properties, luxury homes, and investment opportunities. Her clients consistently praise her market knowledge, responsiveness, and unwavering commitment to finding solutions that genuinely serve their interests." focus={["Listing pricing strategy", "Offer negotiation", "Seller preparation", "Market positioning"]} />
          <TeamMemberCard name="Paul Bennett" role="Licensed realtor, research, media, analytics, buyer education" note="Paul brings a unique blend of investor experience and data-driven insight to real estate. After years as a residential investor and renovation enthusiast, he recently became licensed and discovered his passion for helping others navigate complex decisions with confidence. He specializes in investment analysis, where he leverages data and market trends to uncover opportunity, and pre-sale purchases, where he conducts rigorous unit and building analysis. His approach is straightforward—provide the detailed information and analysis you need to feel confident in your decision, then make it easy and enjoyable to work together." focus={["Investment property analysis", "Pre-sale building evaluation", "Market research and analysis", "Buyer decision clarity"]} photoSrc="/images/team/paul.jpeg" />
        </div>
      </Section>
      <Section title="How we help sellers" tone="white" intro="Seller work focuses on value, timing, preparation, local positioning, media, buyer targeting, and negotiation." />
      <Section title="How we help buyers" intro="Buyer work focuses on lifestyle fit, property type, strata considerations, commute patterns, future context, and resale risk." />
      <Section title="Intro video placeholder" tone="white"><VideoBlock title="Why we built Live in Port Moody" description="Phase 1 reserves space for a 60 to 90 second intro video without requiring final video files." /></Section>
      <Section title="Contact CTA" tone="sand"><CTAButton href="/contact">Ask a Port Moody question</CTAButton></Section>
    </>
  );
}
