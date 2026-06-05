import { LucideIcon } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description?: string;
  icon?: LucideIcon;
}

interface StepFlowProps {
  steps: Step[];
  orientation?: 'horizontal' | 'vertical';
  showConnectors?: boolean;
  color?: 'forest' | 'blue' | 'sea';
}

export function StepFlow({ steps, orientation = 'horizontal', showConnectors = true, color = 'forest' }: StepFlowProps) {
  const colorClasses = {
    forest: { circle: 'bg-forest text-white', text: 'text-forest' },
    blue: { circle: 'bg-blue-600 text-white', text: 'text-blue-600' },
    sea: { circle: 'bg-sea text-white', text: 'text-sea' },
  };

  const colors = colorClasses[color];

  if (orientation === 'vertical') {
    return (
      <div className="space-y-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full ${colors.circle} flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                  {Icon ? <Icon className="w-5 h-5" /> : step.number}
                </div>
                {idx < steps.length - 1 && showConnectors && (
                  <div className={`w-0.5 h-12 ${color === 'forest' ? 'bg-forest/30' : color === 'blue' ? 'bg-blue-300/30' : 'bg-sea/30'} my-1`}></div>
                )}
              </div>
              <div className="pt-1">
                <h3 className={`font-semibold ${colors.text}`}>{step.title}</h3>
                {step.description && <p className="text-sm text-slate-600 mt-1">{step.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        return (
          <div key={step.number} className="flex-1 flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full ${colors.circle} flex items-center justify-center font-bold flex-shrink-0`}>
              {Icon ? <Icon className="w-6 h-6" /> : step.number}
            </div>
            <h3 className={`font-semibold text-sm mt-3 text-center ${colors.text}`}>{step.title}</h3>
            {step.description && <p className="text-xs text-slate-600 mt-1 text-center">{step.description}</p>}
            {idx < steps.length - 1 && showConnectors && (
              <div className={`absolute h-0.5 w-[calc(100%/len-1)] ml-6 ${color === 'forest' ? 'bg-forest/30' : color === 'blue' ? 'bg-blue-300/30' : 'bg-sea/30'}`}></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
