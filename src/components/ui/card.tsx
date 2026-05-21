type CardTone = "white" | "mist" | "sand";
type CardPadding = "sm" | "md" | "lg";

type CardProps = {
  children: React.ReactNode;
  tone?: CardTone;
  padding?: CardPadding;
  className?: string;
};

const tones: Record<CardTone, string> = {
  white: "bg-white",
  mist: "bg-mist",
  sand: "bg-warmSand",
};

const paddings: Record<CardPadding, string> = {
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

export function Card({ children, tone = "white", padding = "md", className = "" }: CardProps) {
  return (
    <div className={`rounded-lg border border-softBorder ${tones[tone]} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
}
