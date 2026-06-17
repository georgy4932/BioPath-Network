"use client";

import { JourneyStep } from "@/types/journey";
import { ControlType } from "@/types/learning";

const CONTROL_BADGE: Record<ControlType, { label: string; className: string }> = {
  "rate-limiting":   { label: "Rate-limiting",   className: "bg-amber-100 text-amber-700 border-amber-200" },
  "rate-committing": { label: "Rate-committing",  className: "bg-orange-100 text-orange-700 border-orange-200" },
  regulatory:        { label: "Regulatory",       className: "bg-violet-100 text-violet-700 border-violet-200" },
};

interface JourneyStepDetailProps {
  step: JourneyStep;
  stepNumber: number;
  onNavigateToModule?: (moduleId: string) => void;
}

export default function JourneyStepDetail({
  step,
  stepNumber,
  onNavigateToModule,
}: JourneyStepDetailProps) {
  return (
    <div className="px-4 py-4 space-y-3 max-w-2xl">

      {/* Title row */}
      <div className="flex items-start gap-2 flex-wrap">
        {step.icon && (
          <span className="text-xl leading-none flex-shrink-0 mt-0.5" aria-hidden="true">
            {step.icon}
          </span>
        )}
        <h2 className="text-base font-semibold text-gray-900 leading-snug flex-1">
          {stepNumber}. {step.title}
        </h2>
        {step.controlType && (
          <span
            className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full border ${CONTROL_BADGE[step.controlType].className}`}
          >
            {CONTROL_BADGE[step.controlType].label}
          </span>
        )}
      </div>

      {/* What is happening */}
      <section>
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
          What is happening
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">{step.explanation}</p>
      </section>

      {/* Why it matters */}
      <section className="bg-blue-50 rounded-lg px-3 py-2.5 border border-blue-100">
        <h3 className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
          Why it matters
        </h3>
        <p className="text-sm text-blue-900 leading-relaxed">{step.whyItMatters}</p>
      </section>

      {/* Disease relevance */}
      {step.diseaseRelevance && (
        <section className="bg-amber-50 rounded-lg px-3 py-2.5 border border-amber-100">
          <h3 className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
            Disease relevance
          </h3>
          <p className="text-sm text-amber-900 leading-relaxed">{step.diseaseRelevance}</p>
        </section>
      )}

      {/* Learning View link */}
      {step.relatedLearningModuleId && onNavigateToModule && (
        <button
          onClick={() => onNavigateToModule(step.relatedLearningModuleId!)}
          className="flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors cursor-pointer"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Explore in Learning View
        </button>
      )}
    </div>
  );
}
