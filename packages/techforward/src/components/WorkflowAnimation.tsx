import { useState, useEffect } from 'react';

interface WorkflowStep {
  icon: string;
  label: string;
}

interface WorkflowAnimationProps {
  steps: WorkflowStep[];
  accentColor: string;
}

const iconMap: Record<string, string> = {
  search: '\u{1F50D}',
  ruler: '\u{1F4CF}',
  link: '\u{1F517}',
  settings: '\u{2699}',
  rocket: '\u{1F680}',
  check: '\u{2705}',
  clipboard: '\u{1F4CB}',
  refresh: '\u{1F504}',
  plug: '\u{1F50C}',
  flask: '\u{1F9EA}',
  shield: '\u{1F6E1}',
  spider: '\u{1F578}',
  eye: '\u{1F441}',
  brain: '\u{1F9E0}',
  folder: '\u{1F4C1}',
  edit: '\u{270F}',
  'bar-chart': '\u{1F4CA}',
};

export default function WorkflowAnimation({ steps, accentColor }: WorkflowAnimationProps) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="flex items-center justify-between gap-1 py-4 overflow-x-auto">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center">
          <div className="flex flex-col items-center gap-2 min-w-[60px]">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-500"
              style={{
                backgroundColor: i <= activeStep ? `${accentColor}15` : 'rgba(241,245,249,0.8)',
                boxShadow: i === activeStep ? `0 0 20px ${accentColor}20` : 'none',
                border: i === activeStep ? `1px solid ${accentColor}40` : '1px solid rgba(226,232,240,0.8)',
              }}
            >
              {iconMap[step.icon] || '\u{2699}'}
            </div>
            <span
              className="text-[10px] font-heading font-bold uppercase tracking-wider transition-colors duration-500"
              style={{ color: i <= activeStep ? accentColor : '#9CA3AF' }}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="flex-1 h-px mx-1 min-w-[16px] relative">
              <div className="absolute inset-0 bg-border" />
              <div
                className="absolute inset-y-0 left-0 transition-all duration-500"
                style={{
                  width: i < activeStep ? '100%' : '0%',
                  backgroundColor: accentColor,
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
