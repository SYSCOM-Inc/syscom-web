import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useROICalculator } from '@shared/hooks/useROICalculator';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

export default function ROICalculator() {
  const { inputs, results, updateInput } = useROICalculator();

  const maxSaving = Math.max(
    results.asmSavings,
    results.ibigSavings,
    results.captureSavings,
    1
  );

  return (
    <div className="glass-card rounded-lg p-8 md:p-12">
      <div className="text-center mb-14">
        <p className="text-[10px] uppercase tracking-[0.3em] text-copper-500 mb-4">
          Calculate Your Impact
        </p>
        <h3 className="font-heading text-3xl md:text-4xl text-charcoal-900 mb-3">
          Return on Investment
        </h3>
        <p className="text-charcoal-500 text-sm max-w-md mx-auto font-light">
          Estimate the impact of automating your document processes with SYSCOM
          solutions.
        </p>
      </div>

      {/* Inputs */}
      <div className="grid md:grid-cols-4 gap-8 md:gap-10 mb-14">
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-charcoal-500 mb-3">
            Document Volume
          </label>
          <input
            type="range"
            min={10000}
            max={5000000}
            step={10000}
            value={inputs.documents}
            onChange={(e) => updateInput('documents', Number(e.target.value))}
            aria-label="Document volume"
          />
          <p className="font-heading text-2xl text-charcoal-900 mt-3">
            {formatNumber(inputs.documents)}
          </p>
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-charcoal-500 mb-3">
            Repositories
          </label>
          <input
            type="range"
            min={1}
            max={20}
            step={1}
            value={inputs.repositories}
            onChange={(e) => updateInput('repositories', Number(e.target.value))}
            aria-label="Number of repositories"
          />
          <p className="font-heading text-2xl text-charcoal-900 mt-3">
            {inputs.repositories}
          </p>
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-charcoal-500 mb-3">
            Manual Hours / Week
          </label>
          <input
            type="range"
            min={5}
            max={200}
            step={5}
            value={inputs.manualHoursPerWeek}
            onChange={(e) =>
              updateInput('manualHoursPerWeek', Number(e.target.value))
            }
            aria-label="Manual hours per week"
          />
          <p className="font-heading text-2xl text-charcoal-900 mt-3">
            {inputs.manualHoursPerWeek}h
          </p>
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-charcoal-500 mb-3">
            Hourly Rate
          </label>
          <input
            type="range"
            min={25}
            max={250}
            step={5}
            value={inputs.hourlyRate}
            onChange={(e) => updateInput('hourlyRate', Number(e.target.value))}
            aria-label="Hourly rate"
          />
          <p className="font-heading text-2xl text-charcoal-900 mt-3">
            ${inputs.hourlyRate}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-copper-500/15 mb-14" />

      {/* Savings Breakdown */}
      <div className="space-y-6 mb-14" aria-live="polite">
        {[
          {
            label: 'Migration Savings (ASM)',
            value: results.asmSavings,
            color: 'bg-copper-500',
          },
          {
            label: 'Discovery Savings (IBIG)',
            value: results.ibigSavings,
            color: 'bg-gold-400',
          },
          {
            label: 'Capture Savings',
            value: results.captureSavings,
            color: 'bg-copper-700',
          },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-charcoal-500 font-light">{item.label}</span>
              <span className="text-charcoal-900 font-heading text-lg">
                {formatCurrency(item.value)}
              </span>
            </div>
            <div className="w-full h-1.5 bg-warm-400 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color} rounded-full transition-all duration-700`}
                style={{
                  width: `${Math.max((item.value / maxSaving) * 100, 2)}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="text-center mb-10">
        <p className="text-[10px] uppercase tracking-[0.3em] text-charcoal-500 mb-3">
          Estimated Annual Savings
        </p>
        <p className="font-heading text-5xl md:text-6xl text-gradient-copper">
          {formatCurrency(results.totalSavings)}
        </p>
        <p className="text-charcoal-500 text-sm mt-3 font-light">
          {results.roiPercent}% projected return on current manual costs
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-copper-600 border border-copper-500/30 px-8 py-3.5 hover:bg-copper-500/10 hover:border-copper-500/60 transition-all duration-500 group"
        >
          Schedule a Consultation
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  );
}
