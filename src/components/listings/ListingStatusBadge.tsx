type ListingStatusBadgeProps = {
  status: "active" | "coming-soon";
  className?: string;
};

export function ListingStatusBadge({ status, className = "" }: ListingStatusBadgeProps) {
  const isActive = status === "active";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-bold uppercase tracking-[0.05em] shadow-md ring-2 ring-white/80 ${
        isActive ? "bg-forest text-white" : "bg-amber-500 text-white"
      } ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-white" />
      {isActive ? "For Sale" : "Coming soon"}
    </span>
  );
}
