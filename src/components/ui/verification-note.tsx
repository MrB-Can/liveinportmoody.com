import { ShieldCheck } from "lucide-react";

type VerificationNoteProps = {
  title?: string;
  note?: string;
  items?: string[];
};

export function VerificationNote({
  title = "Verify before acting",
  note,
  items,
}: VerificationNoteProps) {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 flex-shrink-0 text-amber-700" />
        <p className="text-sm font-semibold text-amber-800">{title}</p>
      </div>
      {note ? <p className="mt-2 text-sm text-amber-700">{note}</p> : null}
      {items && items.length > 0 ? (
        <ul className="mt-3 space-y-1.5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-amber-700">
              <span className="mt-1 h-3.5 w-3.5 flex-shrink-0 rounded border border-amber-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
