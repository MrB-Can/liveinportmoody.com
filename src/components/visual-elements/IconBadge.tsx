import { LucideIcon } from 'lucide-react';

interface IconBadgeProps {
  icon: LucideIcon;
  label: string;
  color?: 'forest' | 'blue' | 'sea' | 'sand' | 'slate';
  size?: 'sm' | 'md' | 'lg';
}

export function IconBadge({ icon: Icon, label, color = 'forest', size = 'md' }: IconBadgeProps) {
  const sizeClasses = {
    sm: 'gap-2 px-3 py-1.5 text-xs',
    md: 'gap-2 px-4 py-2 text-sm',
    lg: 'gap-3 px-5 py-3 text-base',
  };

  const colorClasses = {
    forest: 'bg-forest/10 text-forest border-forest/20',
    blue: 'bg-blue-100/50 text-blue-700 border-blue-200',
    sea: 'bg-sea/10 text-sea border-sea/20',
    sand: 'bg-sand/20 text-sand-dark border-sand/40',
    slate: 'bg-slate-100/50 text-slate-700 border-slate-200',
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className={`inline-flex items-center ${sizeClasses[size]} rounded-full border ${colorClasses[color]}`}>
      <Icon className={iconSizes[size]} />
      <span className="font-medium">{label}</span>
    </div>
  );
}
