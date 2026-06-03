export function MarketSnapshot() {
  const rows = [
    ["Detached homes", "Detached-home notes are included only when source-backed market context is available."],
    ["Townhomes", "Townhome context focuses on supply, condition, and buyer competition."],
    ["Condos", "Condo notes separate walkable village areas from broader Port Moody inventory."],
    ["Direction", "No fake market numbers are shown."],
  ];

  return (
    <div className="grid gap-3 rounded-lg border border-softBorder bg-white p-4 shadow-sm sm:grid-cols-2">
      {rows.map(([label, copy]) => (
        <div key={label} className="rounded-md bg-mist p-4">
          <p className="font-semibold text-deepInlet">{label}</p>
          <p className="mt-2 text-sm leading-6 text-slateText">{copy}</p>
        </div>
      ))}
    </div>
  );
}
