import Image from "next/image";

type GalleryImage = { src: string; alt: string; caption?: string; primary?: boolean };

type ListingPhotoGalleryProps = {
  images: GalleryImage[];
  heading?: string;
};

export function ListingPhotoGallery({ images, heading }: ListingPhotoGalleryProps) {
  if (images.length === 0) return null;

  const hasExplicitPrimary = images.some((image) => image.primary);

  return (
    <div>
      {heading ? <h2 className="mb-8 font-heading text-3xl text-deepInlet">{heading}</h2> : null}
      {images.length === 1 ? (
        <div className="relative h-96 w-full overflow-hidden rounded-lg border border-softBorder bg-white shadow-sm md:h-[32rem]">
          <Image src={images[0].src} alt={images[0].alt} fill sizes="(min-width: 1024px) 1152px, 100vw" className="object-cover" />
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
          {images.map((image, index) => {
            const isPrimary = hasExplicitPrimary ? Boolean(image.primary) : index === 0;
            return (
              <article
                key={image.src}
                className={`overflow-hidden rounded-lg border border-softBorder bg-white shadow-sm ${isPrimary ? "lg:row-span-2" : ""}`}
              >
                <div className={`relative w-full ${isPrimary ? "h-72 md:h-96 lg:h-full lg:min-h-[32rem]" : "h-64"}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={isPrimary ? "(min-width: 1024px) 760px, 100vw" : "(min-width: 1024px) 360px, 100vw"}
                    className="object-cover"
                  />
                </div>
                {image.caption ? (
                  <div className="p-4">
                    <p className="text-sm text-slateText">{image.caption}</p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
