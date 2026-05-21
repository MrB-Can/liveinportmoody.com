type ChipProps = {
  children: React.ReactNode;
};

export function Chip({ children }: ChipProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-softBorder px-3 py-1 text-xs text-slateText">
      {children}
    </span>
  );
}
