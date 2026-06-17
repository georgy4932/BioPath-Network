"use client";

import { LearningModule, LearningStep, ControlType } from "@/types/learning";

interface LearningModuleViewProps {
  module: LearningModule;
  selectedStepId: string | null;
  onSelectStep: (step: LearningStep) => void;
}

const CONTROL_TYPE_BADGE: Record<ControlType, { label: string; className: string }> = {
  "rate-limiting": {
    label: "Rate-limiting",
    className: "bg-amber-100 text-amber-700",
  },
  "rate-committing": {
    label: "Rate-committing",
    className: "bg-orange-100 text-orange-700",
  },
  regulatory: {
    label: "Regulatory",
    className: "bg-violet-100 text-violet-700",
  },
};

export default function LearningModuleView({
  module,
  selectedStepId,
  onSelectStep,
}: LearningModuleViewProps) {
  return (
    <div className="max-w-2xl mx-auto px-6 py-6">
      <div className="mb-1">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          {module.section}
        </span>
      </div>
      <h2 className="text-lg font-semibold text-gray-900 mb-3">{module.title}</h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-8">{module.explanation}</p>

      <div className="relative">
        {module.steps.map((step, index) => {
          const isSelected = step.id === selectedStepId;
          const isLast = index === module.steps.length - 1;
          const badge = step.controlType ? CONTROL_TYPE_BADGE[step.controlType] : null;

          return (
            <div key={step.id} className="relative flex gap-4">
              {/* Connector line */}
              {!isLast && (
                <div
                  className="absolute left-4 top-8 bottom-0 w-px bg-gray-200"
                  aria-hidden="true"
                />
              )}

              {/* Step number */}
              <div className="flex-shrink-0 z-10">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border-2 ${
                    isSelected
                      ? "bg-blue-600 border-blue-600 text-white"
                      : step.controlType
                      ? "bg-amber-50 border-amber-400 text-amber-700"
                      : "bg-white border-gray-300 text-gray-500"
                  }`}
                >
                  {index + 1}
                </div>
              </div>

              {/* Step card */}
              <button
                onClick={() => onSelectStep(step)}
                className={`flex-1 mb-4 text-left rounded-lg border px-4 py-3 transition-all cursor-pointer ${
                  isSelected
                    ? "border-blue-300 bg-blue-50 shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={`text-sm font-medium leading-snug ${
                      isSelected ? "text-blue-900" : "text-gray-800"
                    }`}
                  >
                    {step.label}
                  </span>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {badge && (
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                    )}
                    <svg
                      className={`w-4 h-4 flex-shrink-0 ${
                        isSelected ? "text-blue-500" : "text-gray-300"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="mt-1 text-xs text-gray-600 leading-snug">
                  {step.summary}
                </p>
              </button>
            </div>
          );
        })}
      </div>

      <p className="mt-2 text-xs text-gray-400">
        Tap a step to view details.
      </p>
    </div>
  );
}
