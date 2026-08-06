import Link from 'next/link';

interface InlineCTAProps {
  heading: string;
  children: React.ReactNode;
  ctaLabel: string;
  ctaHref: string;
}

// Mid-article CTA box, styled to match the site's own end-of-post CTA
// (rounded-lg border-softBorder bg-mist)  -  a link out, not an embedded form,
// since the post template already appends a full LeadForm after the body.
export function InlineCTA({ heading, children, ctaLabel, ctaHref }: InlineCTAProps) {
  return (
    <div className="not-prose my-10 rounded-lg border border-softBorder bg-mist p-6 sm:p-7">
      <p className="font-heading text-xl text-deepInlet">{heading}</p>
      <div className="mt-2 text-sm leading-relaxed text-slateText [&>p]:m-0">{children}</div>
      <Link href={ctaHref} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-deepInlet">
        {ctaLabel} →
      </Link>
    </div>
  );
}
