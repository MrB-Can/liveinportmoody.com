import Image from "next/image";

type TeamMemberCardProps = {
  name: string;
  role: string;
  focus: string[];
  note: string;
  photoSrc?: string;
};

export function TeamMemberCard({ name, role, focus, note, photoSrc }: TeamMemberCardProps) {
  return (
    <article className="rounded-lg border border-softBorder bg-white p-6 shadow-sm">
      <div className="mb-5 relative aspect-[4/5] overflow-hidden rounded-md bg-[linear-gradient(135deg,#F3EFE7,#D9DED8)]" aria-label={`${name} portrait${photoSrc ? "" : " placeholder"}`}>
        {photoSrc ? (
          <Image
            src={photoSrc}
            alt={`${name} portrait`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">Photo</div>
            <div className="mt-1 text-xs text-forest">coming soon</div>
          </div>
        )}
      </div>
      <h3 className="font-heading text-2xl text-deepInlet">{name}</h3>
      <p className="mt-1 text-sm font-semibold text-emphasis">{role}</p>
      <p className="mt-3 text-sm leading-6 text-slateText">{note}</p>
      <ul className="mt-4 grid gap-2 text-sm text-charcoal">
        {focus.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </article>
  );
}
