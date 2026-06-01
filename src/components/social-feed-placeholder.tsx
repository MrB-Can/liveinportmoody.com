import { Camera, Video } from "lucide-react";

export function SocialFeedPlaceholder() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12">
      <div className="rounded-lg border border-softBorder bg-white p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Social</p>
            <h2 className="mt-3 font-heading text-3xl text-deepInlet">Instagram and YouTube connection coming soon</h2>
          </div>
          <div>
            <p className="text-sm leading-6 text-slateText">
              Instagram and YouTube connection is coming soon. This block does not use fake posts, scraped content,
              or unapproved social media embeds. Official follow links can be added when the correct URLs are confirmed.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-softBorder bg-mist px-4 py-3 text-sm font-semibold text-deepInlet">
                <span className="inline-flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  Instagram link pending
                </span>
              </div>
              <div className="rounded-md border border-softBorder bg-mist px-4 py-3 text-sm font-semibold text-deepInlet">
                <span className="inline-flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  YouTube link pending
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
