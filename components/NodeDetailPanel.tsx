"use client";

import { NetworkNode, NodeType, EvidenceLevel } from "@/types/network";

interface NodeDetailPanelProps {
  node: NetworkNode | null;
  onClose: () => void;
}

const typeColors: Record<NodeType, string> = {
  metabolite: "bg-blue-100 text-blue-800",
  enzyme: "bg-green-100 text-green-800",
  pathway: "bg-purple-100 text-purple-800",
  disease: "bg-red-100 text-red-800",
  hormone: "bg-yellow-100 text-yellow-800",
  mechanism: "bg-orange-100 text-orange-800",
};

const typeLabels: Record<NodeType, string> = {
  metabolite: "Metabolite",
  enzyme: "Enzyme",
  pathway: "Pathway",
  disease: "Disease",
  hormone: "Hormone",
  mechanism: "Mechanism",
};

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

export default function NodeDetailPanel({ node, onClose }: NodeDetailPanelProps) {
  if (!node) return null;

  return (
    <>
      {/* Translucent backdrop — visible on all sizes, closes panel on click */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className="fixed top-0 right-0 h-full w-full sm:w-80 bg-white border-l border-gray-200 shadow-lg z-50 flex flex-col overflow-y-auto">
      <div className="flex items-start justify-between p-4 border-b border-gray-200">
        <h2 className="text-base font-semibold text-gray-900 leading-tight pr-4">
          {node.label}
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
        <div>
          <span
            className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full uppercase tracking-wide ${typeColors[node.type]}`}
          >
            {typeLabels[node.type]}
          </span>
        </div>

        <section>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Overview
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">{node.explanation}</p>
        </section>

        <section>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Connected Pathways
          </h3>
          {node.connectedPathways.length > 0 ? (
            <ul className="space-y-1">
              {node.connectedPathways.map((pathway) => (
                <li key={pathway} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  {pathway}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">None specified.</p>
          )}
        </section>

        <section>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            Disease Relevance
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">{node.diseaseRelevance}</p>
        </section>

        <section>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Evidence
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span
                className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${evidenceLevelColors[node.evidenceLevel]}`}
              >
                {evidenceLevelLabels[node.evidenceLevel]}
              </span>
              <span className="text-xs text-gray-400">
                {evidenceLevelDescriptions[node.evidenceLevel]}
              </span>
            </div>
            <p className="text-xs text-gray-500 italic leading-relaxed">
              {node.sourceNote}
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
