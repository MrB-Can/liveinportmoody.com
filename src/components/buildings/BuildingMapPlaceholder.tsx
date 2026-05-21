import { Building2, MapPin } from "@/lib/icons";

const mapPins = [
  { label: "Suter Brook", top: "34%", left: "53%" },
  { label: "Newport Village", top: "45%", left: "58%" },
  { label: "Klahanie", top: "58%", left: "63%" },
  { label: "Moody Centre", top: "63%", left: "39%" },
  { label: "The Grande", top: "28%", left: "50%" },
  { label: "50 Electronic Ave", top: "65%", left: "34%" },
  { label: "Aria 1", top: "38%", left: "50%" },
  { label: "Aria 2", top: "31%", left: "57%" },
  { label: "Platform", top: "57%", left: "35%" },
  { label: "George", top: "69%", left: "42%" },
  { label: "Sonrisa", top: "72%", left: "48%" },
  { label: "The Tides", top: "54%", left: "68%" },
  { label: "Nahanni", top: "63%", left: "70%" },
  { label: "Libra", top: "43%", left: "54%" },
  { label: "Future additions", top: "18%", left: "74%" },
];

export function BuildingMapPlaceholder() {
  return (
    <div className="rounded-lg border border-softBorder bg-white p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl text-deepInlet">Port Moody condo building map</h2>
          <p className="mt-2 text-sm leading-6 text-slateText">
            Map locations are approximate and intended for orientation.
          </p>
        </div>
        <Building2 className="h-8 w-8 shrink-0 text-forest" aria-hidden="true" />
      </div>
      <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-softBorder bg-[linear-gradient(135deg,#e8f1ed_0%,#f7f5ef_45%,#d6e7e3_100%)]">
        <div className="absolute left-[8%] top-[18%] h-[66%] w-[82%] rounded-[48%] border-2 border-seaGlass/50" />
        <div className="absolute left-0 top-[60%] h-24 w-full bg-deepInlet/10" />
        <div className="absolute left-[10%] top-[70%] h-2 w-[80%] rotate-[-8deg] rounded-full bg-forest/25" />
        <div className="absolute left-[22%] top-[20%] h-[68%] w-2 rotate-[18deg] rounded-full bg-white/70" />
        {mapPins.map((pin) => (
          <div
            key={pin.label}
            className="absolute max-w-[9rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-deepInlet px-3 py-1 text-[0.68rem] font-semibold leading-tight text-white shadow-sm"
            style={{ top: pin.top, left: pin.left }}
          >
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
              {pin.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
