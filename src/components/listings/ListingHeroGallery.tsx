"use client";

import { useState } from "react";
import Image from "next/image";
import type { OurListingGalleryImage } from "@/data/ourListings";
import { ListingLightbox } from "@/components/listings/ListingLightbox";

type ListingHeroGalleryProps = {
  images: OurListingGalleryImage[];
  initialCount?: number;
};

export function ListingHeroGallery({ images, initialCount = 5 }: ListingHeroGalleryProps) {
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <>
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="relative block aspect-[3/2] w-full overflow-hidden rounded-lg border border-softBorder bg-white shadow-sm"
        >
          <Image src={images[0].src} alt={images[0].alt} fill sizes="(min-width: 1024px) 1152px, 100vw" className="object-cover" />
        </button>
        {lightboxIndex !== null ? (
          <ListingLightbox images={images} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
        ) : null}
      </>
    );
  }

  const visible = images.slice(0, initialCount);
  const hero = visible[0];
  const thumbs = visible.slice(1);
  const rest = images.slice(initialCount);
  const hasMore = rest.length > 0;

  return (
    <div>
      <div className="grid gap-2 lg:grid-cols-[minmax(0,3fr)_minmax(220px,1fr)] lg:items-stretch">
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="relative block aspect-[3/2] w-full overflow-hidden rounded-lg border border-softBorder bg-white shadow-sm"
        >
          <Image src={hero.src} alt={hero.alt} fill sizes="(min-width: 1024px) 860px, 100vw" className="object-cover" />
        </button>
        <div className="grid grid-cols-2 gap-2 lg:h-full lg:grid-rows-2">
          {thumbs.map((image, index) => {
            const isLastVisible = hasMore && index === thumbs.length - 1;
            const imageIndex = index + 1;
            return (
              <div key={image.src} className="relative h-28 overflow-hidden rounded-lg border border-softBorder bg-white shadow-sm md:h-32 lg:h-full">
                {isLastVisible ? (
                  <>
                    <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 180px, 45vw" className="object-cover" />
                    <button
                      type="button"
                      onClick={() => setShowAll(true)}
                      className="absolute inset-0 flex items-center justify-center bg-charcoal/60 text-sm font-semibold text-white transition-colors hover:bg-charcoal/70"
                    >
                      +{rest.length} photos
                    </button>
                  </>
                ) : (
                  <button type="button" onClick={() => setLightboxIndex(imageIndex)} className="relative block h-full w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 180px, 45vw"
                      className="object-cover"
                    />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {hasMore && !showAll ? (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="mt-3 text-sm font-semibold text-forest hover:text-deepInlet"
        >
          View all {images.length} photos →
        </button>
      ) : null}

      {showAll ? (
        <>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {rest.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setLightboxIndex(initialCount + index)}
                className="relative block h-40 overflow-hidden rounded-lg border border-softBorder bg-white shadow-sm sm:h-48"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setShowAll(false)}
            className="mt-3 text-sm font-semibold text-forest hover:text-deepInlet"
          >
            Show fewer photos
          </button>
        </>
      ) : null}

      {lightboxIndex !== null ? (
        <ListingLightbox images={images} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      ) : null}
    </div>
  );
}
