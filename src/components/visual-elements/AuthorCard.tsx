import Link from 'next/link';

export function AuthorCard() {
  return (
    <div className="not-prose my-8 rounded-2xl border border-softBorder bg-white p-7 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-deepInlet font-heading text-xl text-white">
          P&amp;L
        </div>
        <div>
          <h3 className="font-heading text-lg text-deepInlet">Paul Bennett &amp; Leilani Fong</h3>
          <p className="mt-1 text-sm leading-relaxed text-slateText">
            Port Moody and Tri-Cities REALTORS® with eXp Realty Canada. We pair on-the-ground local
            expertise with data-driven advice, so you can make the buy-or-sell call with the full
            picture in front of you, not just the headline.
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/get-started"
          className="rounded-full bg-emphasis px-5 py-2.5 font-heading text-sm text-white transition-colors hover:bg-emphasis/90"
        >
          Book a market chat
        </Link>
        <Link
          href="/listings"
          className="rounded-full border border-softBorder px-5 py-2.5 font-heading text-sm text-deepInlet transition-colors hover:border-deepInlet"
        >
          See current listings
        </Link>
      </div>
    </div>
  );
}
