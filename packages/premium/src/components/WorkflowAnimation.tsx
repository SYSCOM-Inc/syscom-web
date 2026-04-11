import { useState, useEffect, useRef } from 'react';
import type { WorkflowStep } from '@shared/types';

interface WorkflowAnimationProps {
  steps: WorkflowStep[];
  accentColor?: string;
}

export default function WorkflowAnimation({
  steps,
  accentColor = 'copper',
}: WorkflowAnimationProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [isVisible, steps.length]);

  const colorMap: Record<string, { active: string; line: string; label: string }> = {
    copper: {
      active: 'border-copper-500 bg-copper-500/10',
      line: 'bg-copper-500',
      label: 'text-copper-600',
    },
    gold: {
      active: 'border-gold-400 bg-gold-400/10',
      line: 'bg-gold-400',
      label: 'text-gold-500',
    },
  };

  const colors = colorMap[accentColor] || colorMap.copper;

  return (
    <div ref={containerRef} className="flex items-center justify-between gap-1 md:gap-2 overflow-x-auto py-4">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center flex-shrink-0">
          {/* Step */}
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center transition-all duration-700 ${
                i <= activeStep
                  ? colors.active
                  : 'border-warm-400 bg-warm-200'
              }`}
            >
              <span
                className={`text-[10px] md:text-xs font-heading font-semibold transition-colors duration-500 ${
                  i <= activeStep ? colors.label : 'text-charcoal-400'
                }`}
              >
                {i + 1}
              </span>
            </div>
            <span
              className={`mt-2 text-[9px] md:text-[10px] uppercase tracking-[0.15em] transition-colors duration-500 whitespace-nowrap ${
                i <= activeStep ? 'text-charcoal-900' : 'text-charcoal-400'
              }`}
            >
              {step.label}
            </span>
          </div>

          {/* Connector line */}
          {i < steps.length - 1 && (
            <div className="w-6 md:w-10 lg:w-14 h-[2px] bg-warm-400 mx-1 md:mx-2 relative overflow-hidden flex-shrink-0">
              <div
                className={`absolute inset-y-0 left-0 ${colors.line} transition-all duration-700`}
                style={{
                  width: i < activeStep ? '100%' : '0%',
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
