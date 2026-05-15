import Image from "next/image";

type ContextImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function ContextImage({ src, alt, priority = false }: ContextImageProps) {
  return (
    <div className="relative min-h-[280px] overflow-hidden rounded-lg border border-softBorder bg-deepInlet shadow-sm sm:min-h-[360px]">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-center"
      />
    </div>
  );
}
