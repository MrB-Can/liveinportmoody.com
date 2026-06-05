import { LucideIcon } from 'lucide-react';

interface TimelineItem {
  label: string;
  description?: string;
  icon?: LucideIcon;
}

interface TimelineStripProps {
  items: TimelineItem[];
  color?: 'forest' | 'blue' | 'sea';
}

export function TimelineStrip({ items, color = 'forest' }: TimelineStripProps) {
  const colorClasses = {
    forest: { dot: 'bg-forest', line: 'bg-forest/20', text: 'text-forest' },
    blue: { dot: 'bg-blue-600', line: 'bg-blue-300/20', text: 'text-blue-600' },
    sea: { dot: 'bg-sea', line: 'bg-sea/20', text: 'text-sea' },
  };

  const colors = colorClasses[color];

  return (
    <div className="relative">
      <div className="flex items-start justify-between">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex flex-col items-center flex-1">
              <div className={`w-10 h-10 rounded-full ${colors.dot} flex items-center justify-center text-white flex-shrink-0`}>
                {Icon ? <Icon className="w-5 h-5" /> : <span className="text-xs font-bold">{idx + 1}</span>}
              </div>
              <h4 className={`font-semibold text-sm mt-3 text-center ${colors.text}`}>{item.label}</h4>
              {item.description && <p className="text-xs text-slate-600 mt-1 text-center">{item.description}</p>}
            </div>
          );
        })}
      </div>
      <div className={`absolute top-5 left-5 right-5 h-0.5 ${colors.line} -z-10`}></div>
    </div>
  );
}
