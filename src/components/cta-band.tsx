import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";

type CTABandProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  cta: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
};

/**
 * Full-width dark break band: the visual contrast anchor and the page's
 * primary conversion moment. On the deepInlet background only the white
 * `secondary` CTAButton variant is visible; never use `primary` or `ghost` here.
 */
export function CTABand({ eyebrow, title, body, cta, secondaryLink }: CTABandProps) {
  return (
    <Section tone="inlet">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-seaGlass">{eyebrow}</p>
        ) : null}
        <h2 className="font-heading text-3xl leading-tight text-white sm:text-4xl">{title}</h2>
        {body ? <p className="mt-4 text-base leading-7 text-mist">{body}</p> : null}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <CTAButton href={cta.href} variant="secondary">
            {cta.label}
          </CTAButton>
          {secondaryLink ? (
            <Link href={secondaryLink.href} className="text-sm font-semibold text-white underline underline-offset-4">
              {secondaryLink.label}
            </Link>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
