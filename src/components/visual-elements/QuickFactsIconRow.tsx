import { LucideIcon } from 'lucide-react';

interface QuickFact {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface QuickFactsIconRowProps {
  facts: QuickFact[];
  color?: 'forest' | 'blue' | 'sea' | 'sand';
}

export function QuickFactsIconRow({ facts, color = 'forest' }: QuickFactsIconRowProps) {
  const colorClasses = {
    forest: { icon: 'text-forest', label: 'text-forest', bg: 'bg-forest/5' },
    blue: { icon: 'text-blue-600', label: 'text-blue-700', bg: 'bg-blue-50' },
    sea: { icon: 'text-sea', label: 'text-sea', bg: 'bg-sea/5' },
    sand: { icon: 'text-sand-dark', label: 'text-sand-dark', bg: 'bg-sand/5' },
  };

  const colors = colorClasses[color];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {facts.map((fact, idx) => {
        const Icon = fact.icon;
        return (
          <div key={idx} className={`rounded-lg ${colors.bg} p-4 border border-slate-200/50 flex flex-col items-center text-center`}>
            <Icon className={`w-6 h-6 ${colors.icon} mb-2`} />
            <p className={`text-xs font-semibold ${colors.label}`}>{fact.label}</p>
            <p className="text-sm font-bold text-slate-900 mt-1">{fact.value}</p>
          </div>
        );
      })}
    </div>
  );
}
