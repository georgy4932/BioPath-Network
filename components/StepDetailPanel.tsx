"use client";

import { LearningStep } from "@/types/learning";
import { EvidenceLevel } from "@/types/network";

interface StepDetailPanelProps {
  step: LearningStep | null;
  onClose: () => void;
}

const evidenceLevelColors: Record<EvidenceLevel, string> = {
  textbook: "bg-emerald-100 text-emerald-800",
  review: "bg-sky-100 text-sky-800",
  primary: "bg-violet-100 text-violet-800",
  hypothesis: "bg-gray-100 text-gray-600",
};

const evidenceLevelLabels: Record<EvidenceLevel, string> = {
  textbook: "Textbook",
  review: "Review",
  primary: "Primary",
  hypothesis: "Hypothesis",
};

const evidenceLevelDescriptions: Record<EvidenceLevel, string> = {
  textbook: "Established in standard biochemistry textbooks.",
  review: "Described in peer-reviewed literature and clinical reviews.",
  primary: "Supported by primary research studies.",
  hypothesis: "Proposed relationship; not yet broadly established.",
};

export default function StepDetailPanel({ step, onClose }: StepDetailPanelProps) {
  if (!step) return null;

  const { detail } = step;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className="fixed top-0 right-0 h-full w-full sm:w-80 bg-white border-l border-gray-200 shadow-lg z-50 flex flex-col overflow-y-auto">
        <div className="flex items-start justify-between p-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-900 leading-tight pr-4">
            {step.label}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close panel"
            className="text-gray-400 hover:text-gray-600 flex-shrink-0 mt-0.5 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 space-y-5 flex-1">
          {step.isControlStep && (
            <div>
              <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 uppercase tracking-wide">
                Control step
              </span>
            </div>
          )}

          <section>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              What happens here
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{detail.whatHappens}</p>
          </section>

          <section>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              Key enzyme or molecule
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{detail.keyMolecule}</p>
          </section>

          <section>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              Why it matters
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{detail.whyItMatters}</p>
          </section>

          <section>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
              Disease relevance
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{detail.diseaseRelevance}</p>
          </section>

          <section>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Evidence
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${evidenceLevelColors[detail.evidenceLevel]}`}
                >
                  {evidenceLevelLabels[detail.evidenceLevel]}
                </span>
                <span className="text-xs text-gray-400">
                  {evidenceLevelDescriptions[detail.evidenceLevel]}
                </span>
              </div>
              <p className="text-xs text-gray-500 italic leading-relaxed">
                {detail.sourceNote}
              </p>
            </div>
          </section>
        </div>

        <div className="p-4 border-t border-gray-200">
          <p className="text-xs text-gray-400 leading-relaxed">
            Educational content only. Not for clinical use.
          </p>
        </div>
      </aside>
    </>
  );
}
