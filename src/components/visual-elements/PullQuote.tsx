interface PullQuoteProps {
  children: React.ReactNode;
}

export function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className="not-prose my-9 border-l-[3px] border-emphasis pl-6 font-heading text-2xl italic leading-snug text-deepInlet">
      {children}
    </blockquote>
  );
}
