import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useROICalculator } from '@shared/hooks/useROICalculator';

function AnimatedCounter({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [current, setCurrent] = useState(0);
  const prevTarget = useRef(target);

  useEffect(() => {
    const start = prevTarget.current !== target ? current : 0;
    prevTarget.current = target;
    const duration = 800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(start + (target - start) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target]);

  return (
    <span>
      {prefix}{current.toLocaleString()}{suffix}
    </span>
  );
}

const formatSliderValue = (val: number): string => {
  if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
  if (val >= 1000) return `${(val / 1000).toFixed(0)}K`;
  return val.toString();
};

export default function ROICalculator() {
  const { inputs, results, updateInput } = useROICalculator();
  const maxSavings = results.asmSavings + results.ibigSavings + results.captureSavings;
  const asmPct = maxSavings > 0 ? (results.asmSavings / maxSavings) * 100 : 0;
  const ibigPct = maxSavings > 0 ? (results.ibigSavings / maxSavings) * 100 : 0;
  const capturePct = maxSavings > 0 ? (results.captureSavings / maxSavings) * 100 : 0;

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 opacity-0 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald/10 border border-emerald/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
            <span className="text-xs font-heading font-bold text-emerald uppercase tracking-wider">
              Interactive Tool
            </span>
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-2px] mb-4">
            Content Management{' '}
            <span className="gradient-text">ROI Calculator</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            See how SYSCOM's platform can reduce costs across migration, content intelligence,
            and document capture operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Inputs */}
          <div className="space-y-8 opacity-0 animate-fade-up-1">
            {/* Documents */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">Total Documents</label>
                <span className="font-heading font-bold text-cyan text-sm">
                  {formatSliderValue(inputs.documents)}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="10000000"
                step="10000"
                value={inputs.documents}
                onChange={(e) => updateInput('documents', Number(e.target.value))}
                aria-label="Total documents"
              />
              <div className="flex justify-between text-xs text-muted/60 mt-1.5">
                <span>10K</span>
                <span>10M</span>
              </div>
            </div>

            {/* Repositories */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">Repositories</label>
                <span className="font-heading font-bold text-cyan text-sm">
                  {inputs.repositories}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={inputs.repositories}
                onChange={(e) => updateInput('repositories', Number(e.target.value))}
                aria-label="Number of repositories"
              />
              <div className="flex justify-between text-xs text-muted/60 mt-1.5">
                <span>1</span>
                <span>20</span>
              </div>
            </div>

            {/* Weekly Manual Hours */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">Weekly Manual Hours</label>
                <span className="font-heading font-bold text-cyan text-sm">
                  {inputs.manualHoursPerWeek} hrs
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="5"
                value={inputs.manualHoursPerWeek}
                onChange={(e) => updateInput('manualHoursPerWeek', Number(e.target.value))}
                aria-label="Weekly manual hours"
              />
              <div className="flex justify-between text-xs text-muted/60 mt-1.5">
                <span>5 hrs</span>
                <span>200 hrs</span>
              </div>
            </div>

            {/* Hourly Rate */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">Avg. Hourly Rate</label>
                <span className="font-heading font-bold text-cyan text-sm">
                  ${inputs.hourlyRate}
                </span>
              </div>
              <input
                type="range"
                min="40"
                max="200"
                step="5"
                value={inputs.hourlyRate}
                onChange={(e) => updateInput('hourlyRate', Number(e.target.value))}
                aria-label="Average hourly rate"
              />
              <div className="flex justify-between text-xs text-muted/60 mt-1.5">
                <span>$40</span>
                <span>$200</span>
              </div>
            </div>

            {/* Current annual cost */}
            <div className="rounded-2xl bg-card border border-border p-5">
              <p className="text-xs font-heading uppercase tracking-wider text-muted mb-1">
                Current Annual Manual Cost
              </p>
              <p className="font-heading font-bold text-2xl text-rose">
                <AnimatedCounter target={results.annualManualCost} prefix="$" />
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6 opacity-0 animate-fade-up-2" aria-live="polite">
            {/* Savings bars */}
            <div className="rounded-2xl bg-card border border-border p-6 space-y-6">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-muted">
                Projected Savings
              </h3>

              {/* ASM */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">AnySource Migrator</span>
                  <span className="font-heading font-bold text-cyan text-sm">
                    <AnimatedCounter target={results.asmSavings} prefix="$" />
                  </span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${Math.min(asmPct, 100)}%` }}
                  />
                </div>
              </div>

              {/* IBIG */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">IBIG 2.0</span>
                  <span className="font-heading font-bold text-purple text-sm">
                    <AnimatedCounter target={results.ibigSavings} prefix="$" />
                  </span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${Math.min(ibigPct, 100)}%` }}
                  />
                </div>
              </div>

              {/* Capture */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Enterprise Capture</span>
                  <span className="font-heading font-bold text-emerald text-sm">
                    <AnimatedCounter target={results.captureSavings} prefix="$" />
                  </span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${Math.min(capturePct, 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="rounded-2xl bg-card border border-border p-6 text-center">
              <p className="text-xs font-heading uppercase tracking-wider text-muted mb-2">
                Total Annual Savings
              </p>
              <p className="font-heading font-bold text-4xl sm:text-5xl gradient-text">
                <AnimatedCounter target={results.totalSavings} prefix="$" />
              </p>
              <p className="text-sm text-muted mt-2">
                <span className="font-heading font-bold text-emerald">
                  {results.roiPercent}%
                </span>{' '}
                return on investment
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="block w-full py-4 rounded-xl text-center text-sm font-semibold bg-gradient-to-r from-cyan to-purple hover:opacity-90 transition-opacity"
              style={{ color: '#ffffff' }}
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
