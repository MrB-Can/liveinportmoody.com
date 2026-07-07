interface BottomLineProps {
  kicker?: string;
  heading: string;
  children: React.ReactNode;
}

export function BottomLine({ kicker = 'The bottom line', heading, children }: BottomLineProps) {
  return (
    <div className="not-prose my-10 rounded-2xl bg-deepInlet px-8 py-10 sm:px-11 sm:py-12">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-seaGlass">{kicker}</div>
      <h2 className="mt-3 font-heading text-2xl text-white sm:text-3xl">{heading}</h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-white/80">{children}</div>
    </div>
  );
}
