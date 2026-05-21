type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  centered?: boolean;
};

export function SectionHeader({ eyebrow, title, intro, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-8 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-emphasis">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-3xl leading-tight text-deepInlet sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-base leading-7 text-slateText">{intro}</p> : null}
    </div>
  );
}
