import { CTAButton } from "@/components/cta-button";
import Image from "next/image";

type ResourceCardProps = {
  title: string;
  description: string;
  cta: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function ResourceCard({ title, description, cta, imageSrc, imageAlt = "" }: ResourceCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-softBorder bg-white shadow-sm">
      {imageSrc ? (
        <div className="relative aspect-[4/3] bg-mist">
          <Image src={imageSrc} alt={imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-center" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-2xl text-deepInlet">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slateText">{description}</p>
        <div className="mt-5">
        <CTAButton href="/resources#resource-form" variant="secondary">{cta}</CTAButton>
        </div>
      </div>
    </article>
  );
}
