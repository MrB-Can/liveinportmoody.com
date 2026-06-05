import { Check } from 'lucide-react';

interface ChecklistItem {
  label: string;
  description?: string;
  checked?: boolean;
}

interface ChecklistPanelProps {
  title: string;
  items: ChecklistItem[];
  color?: 'forest' | 'blue' | 'sea' | 'sand';
  columns?: 1 | 2 | 3;
}

export function ChecklistPanel({ title, items, color = 'forest', columns = 1 }: ChecklistPanelProps) {
  const colorClasses = {
    forest: { bg: 'bg-forest/5', border: 'border-forest/20', icon: 'text-forest', title: 'text-forest' },
    blue: { bg: 'bg-blue-100/40', border: 'border-blue-200', icon: 'text-blue-600', title: 'text-blue-700' },
    sea: { bg: 'bg-sea/5', border: 'border-sea/20', icon: 'text-sea', title: 'text-sea' },
    sand: { bg: 'bg-warmSand', border: 'border-softBorder', icon: 'text-emphasis', title: 'text-deepInlet' },
  };

  const colors = colorClasses[color];
  const gridClass = columns === 1 ? 'grid-cols-1' : columns === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3';

  return (
    <div className={`rounded-lg border ${colors.border} ${colors.bg} p-6`}>
      <h3 className={`font-heading text-lg ${colors.title} mb-5`}>{title}</h3>
      <div className={`grid ${gridClass} gap-4`}>
        {items.map((item, idx) => (
          <div key={idx} className="flex gap-3">
            <Check className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
            <div>
              <p className="font-semibold text-sm text-slate-900">{item.label}</p>
              {item.description && <p className="text-xs text-slate-600 mt-1">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
