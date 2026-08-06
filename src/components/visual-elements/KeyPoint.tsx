interface KeyPointProps {
  children: React.ReactNode;
}

// A lighter-weight callout than PullQuote  -  for a single sentence worth
// pulling out of the surrounding prose without the larger italic treatment.
export function KeyPoint({ children }: KeyPointProps) {
  return (
    <p className="not-prose my-6 border-l-[3px] border-forest py-0.5 pl-4 text-lg leading-snug text-charcoal">
      {children}
    </p>
  );
}
