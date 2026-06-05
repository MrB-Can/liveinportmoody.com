import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ProcessStep {
  number: number;
  title: string;
}

interface CTAProcessPanelProps {
  title: string;
  steps: ProcessStep[];
  ctaLabel?: string;
  ctaHref?: string;
  color?: 'forest' | 'blue' | 'sea';
  children?: ReactNode;
}

export function CTAProcessPanel({ title, steps, ctaLabel = 'Get started', ctaHref = '#', color = 'forest', children }: CTAProcessPanelProps) {
  const colorClasses = {
    forest: { bg: 'bg-forest', text: 'text-white', number: 'bg-white text-forest' },
    blue: { bg: 'bg-blue-600', text: 'text-white', number: 'bg-white text-blue-600' },
    sea: { bg: 'bg-sea', text: 'text-white', number: 'bg-white text-sea' },
  };

  const colors = colorClasses[color];

  return (
    <div className={`${colors.bg} ${colors.text} rounded-lg p-8`}>
      <h3 className="font-heading text-2xl mb-6">{title}</h3>

      <div className="flex flex-wrap items-center gap-4 mb-8">
        {steps.map((step, idx) => (
          <div key={step.number} className="flex items-center gap-3">
            <div className={`${colors.number} w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>
              {step.number}
            </div>
            <span className="font-semibold">{step.title}</span>
            {idx < steps.length - 1 && <ArrowRight className="w-4 h-4 opacity-60 flex-shrink-0" />}
          </div>
        ))}
      </div>

      {children && <div className="mb-6 text-sm opacity-90">{children}</div>}

      <a
        href={ctaHref}
        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold transition ${colors.number} hover:opacity-90`}
      >
        {ctaLabel}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
