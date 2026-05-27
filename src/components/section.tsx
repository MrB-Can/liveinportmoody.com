type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: React.ReactNode;
  tone?: "mist" | "sand" | "white" | "inlet";
};

const tones = {
  mist: "bg-mist",
  sand: "bg-warmSand",
  white: "bg-white",
  inlet: "bg-deepInlet text-white",
};

export function Section({ id, eyebrow, title, intro, children, tone = "mist" }: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} py-14 sm:py-18`}>
      <div className="mx-auto w-full max-w-6xl px-5">
        {(eyebrow || title || intro) && (
          <div className="mb-8 max-w-3xl">
            {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-emphasis">{eyebrow}</p> : null}
            {title ? <h2 className="font-heading text-3xl leading-tight text-inherit sm:text-4xl">{title}</h2> : null}
            {intro ? <p className="mt-4 text-base leading-7 text-slateText">{intro}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
