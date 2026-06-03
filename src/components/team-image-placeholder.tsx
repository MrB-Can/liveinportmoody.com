import Image from "next/image";

export function TeamImagePlaceholder() {
  return (
    <figure className="mb-8 overflow-hidden rounded-lg border border-softBorder bg-white shadow-sm">
      <Image
        src="/images/team/leilani-paul-team.jpeg"
        alt="Leilani Fong and Paul Bennett, Live in Port Moody"
        width={700}
        height={560}
        className="w-full h-auto object-cover object-top"
        sizes="(max-width: 768px) 100vw, 700px"
      />
      <figcaption className="px-5 py-4 text-sm leading-6 text-slateText">
        Leilani Fong and Paul Bennett combine licensed real estate representation with local research and property intelligence for Port Moody buyers and sellers.
      </figcaption>
    </figure>
  );
}
