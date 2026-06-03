import Image from "next/image";

export function TeamImagePlaceholder() {
  return (
    <figure className="mb-8 overflow-hidden rounded-lg border border-softBorder bg-white shadow-sm">
      <div className="relative aspect-[5/4] w-full sm:aspect-[5/3]">
        <Image
          src="/images/team/leilani-paul-team.jpeg"
          alt="Leilani Fong and Paul Bennett, Live in Port Moody"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>
      <figcaption className="px-5 py-4 text-sm leading-6 text-slateText">
        Leilani Fong and Paul Bennett combine licensed real estate representation with local research and property intelligence for Port Moody buyers and sellers.
      </figcaption>
    </figure>
  );
}
