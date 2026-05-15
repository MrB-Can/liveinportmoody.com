import { CTAButton } from "@/components/cta-button";
import Image from "next/image";

type ImageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
  homeSizing?: boolean;
};

export function ImageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageSrc = "/hero-home.webp",
  imageAlt = "",
  homeSizing = false,
}: ImageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-deepInlet text-white">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={homeSizing}
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,48,47,0.88)_0%,rgba(18,48,47,0.62)_48%,rgba(18,48,47,0.12)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(18,48,47,0.42)_0%,rgba(18,48,47,0)_44%)]" />
      <div className={`mx-auto grid max-w-6xl content-center px-5 py-20 ${homeSizing ? "min-h-[560px] h-[72vh] max-h-[860px] lg:min-h-[680px] lg:h-[82vh]" : "min-h-[70vh] sm:min-h-[620px]"}`}>
        <div className="max-w-3xl">
          {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-seaGlass">{eyebrow}</p> : null}
          <h1 className="font-heading text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist sm:text-xl">{subtitle}</p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? <CTAButton href={primaryCta.href}>{primaryCta.label}</CTAButton> : null}
              {secondaryCta ? (
                <CTAButton href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </CTAButton>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
