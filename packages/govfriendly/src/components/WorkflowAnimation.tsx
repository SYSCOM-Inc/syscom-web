import { useState, useEffect } from 'react';

interface WorkflowStep {
  icon: string;
  label: string;
}

interface WorkflowAnimationProps {
  steps: WorkflowStep[];
  accentColor?: string;
}

const STEP_ICONS: Record<string, string> = {
  search: '\u{1F50D}',
  ruler: '\u{1F4D0}',
  link: '\u{1F517}',
  settings: '\u{2699}\u{FE0F}',
  rocket: '\u{1F680}',
  check: '\u{2705}',
  clipboard: '\u{1F4CB}',
  refresh: '\u{1F504}',
  plug: '\u{1F50C}',
  flask: '\u{1F9EA}',
  shield: '\u{1F6E1}\u{FE0F}',
  spider: '\u{1F578}\u{FE0F}',
  eye: '\u{1F441}\u{FE0F}',
  brain: '\u{1F9E0}',
  folder: '\u{1F4C1}',
  edit: '\u{270F}\u{FE0F}',
  'bar-chart': '\u{1F4CA}',
};

export default function WorkflowAnimation({ steps, accentColor = 'teal' }: WorkflowAnimationProps) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [steps.length]);

  const colorMap: Record<string, { activeBorder: string; activeBg: string; activeText: string }> = {
    teal: { activeBorder: 'border-teal', activeBg: 'bg-teal/10', activeText: 'text-teal' },
    terracotta: { activeBorder: 'border-terracotta', activeBg: 'bg-terracotta/10', activeText: 'text-terracotta' },
    navy: { activeBorder: 'border-navy', activeBg: 'bg-navy/10', activeText: 'text-navy' },
    sage: { activeBorder: 'border-sage', activeBg: 'bg-sage/10', activeText: 'text-sage' },
    gold: { activeBorder: 'border-gold', activeBg: 'bg-gold/10', activeText: 'text-gold' },
  };

  const colors = colorMap[accentColor] || colorMap.teal;

  return (
    <div className="flex flex-wrap justify-center gap-3" role="list" aria-label="Workflow steps">
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isPast = index < activeStep;
        return (
          <div key={step.label} className="flex items-center gap-2" role="listitem">
            <button
              type="button"
              onClick={() => setActiveStep(index)}
              className={`flex flex-col items-center px-4 py-3 rounded-warm border-2 transition-all duration-300 min-w-[80px] ${
                isActive
                  ? `${colors.activeBorder} ${colors.activeBg} shadow-sm`
                  : isPast
                  ? 'border-warm-border bg-white'
                  : 'border-warm-border bg-warm-cream'
              }`}
              aria-label={`Step ${index + 1}: ${step.label}`}
              aria-current={isActive ? 'step' : undefined}
            >
              <span className="text-xl" aria-hidden="true">
                {STEP_ICONS[step.icon] || '\u{1F4E6}'}
              </span>
              <span
                className={`text-xs font-medium mt-1 font-heading ${
                  isActive ? colors.activeText : 'text-muted'
                }`}
              >
                {step.label}
              </span>
            </button>
            {index < steps.length - 1 && (
              <svg className="w-4 h-4 text-warm-border shrink-0 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}
