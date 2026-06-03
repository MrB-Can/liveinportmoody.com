import { Camera, ExternalLink } from "lucide-react";
import Link from "next/link";

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
                <Camera className="h-4 w-4" />
                Instagram
              </Link>
              <Link
                href="https://www.facebook.com/liveinportmoody"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-softBorder bg-mist px-4 py-3 text-sm font-semibold text-deepInlet hover:bg-seaGlass/15 inline-flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
