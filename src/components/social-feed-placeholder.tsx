import Link from "next/link";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function SocialFeedPlaceholder() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12">
      <div className="rounded-lg border border-softBorder bg-white p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Social</p>
            <h2 className="mt-3 font-heading text-3xl text-deepInlet">Follow Live in Port Moody</h2>
          </div>
          <div>
            <p className="text-sm leading-6 text-slateText">
              Follow Live in Port Moody on Instagram and Facebook for local real estate context, neighbourhood updates,
              and Port Moody community coverage.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                href="https://www.instagram.com/liveinportmoody/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-softBorder bg-mist px-4 py-3 text-sm font-semibold text-deepInlet hover:bg-seaGlass/15 inline-flex items-center gap-2"
              >
                <InstagramIcon className="h-5 w-5" />
                Instagram
              </Link>
              <Link
                href="https://www.facebook.com/liveinportmoody"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-softBorder bg-mist px-4 py-3 text-sm font-semibold text-deepInlet hover:bg-seaGlass/15 inline-flex items-center gap-2"
              >
                <FacebookIcon className="h-5 w-5" />
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
