import { CTAButton } from "@/components/cta-button";
import { ImageHero } from "@/components/image-hero";
import { Section } from "@/components/section";
import { TeamSection } from "@/components/team-section";
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
      <TeamSection />
      <Section title="How we help sellers" tone="white" intro="Seller work focuses on value, timing, preparation, local positioning, media, buyer targeting, and negotiation." />
      <Section title="How we help buyers" intro="Buyer work focuses on lifestyle fit, property type, strata considerations, commute patterns, future context, and resale risk." />
      <Section title="Intro video" tone="white"><VideoBlock title="Why we built Live in Port Moody" description="A short local introduction video is planned for this section." /></Section>
      <Section title="Contact CTA" tone="sand"><CTAButton href="/contact">Ask a Port Moody question</CTAButton></Section>
    </>
  );
}
