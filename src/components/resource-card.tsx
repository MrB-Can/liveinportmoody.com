import { CTAButton } from "@/components/cta-button";

type ResourceCardProps = {
  title: string;
  description: string;
  cta: string;
};

export function ResourceCard({ title, description, cta }: ResourceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-softBorder bg-white p-6 shadow-sm">
      <h3 className="font-heading text-2xl text-deepInlet">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slateText">{description}</p>
      <div className="mt-5">
        <CTAButton href="/resources#resource-form" variant="secondary">{cta}</CTAButton>
      </div>
    </article>
  );
}
