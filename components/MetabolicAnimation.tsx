"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimationStep } from "@/types/animation";
import { ControlType } from "@/types/learning";

interface MetabolicAnimationProps {
  steps: AnimationStep[];
}

const CONTROL_BADGE: Record<ControlType, { label: string; className: string }> = {
  "rate-limiting": { label: "Rate-limiting", className: "bg-amber-100 text-amber-700 border-amber-200" },
  "rate-committing": { label: "Rate-committing", className: "bg-orange-100 text-orange-700 border-orange-200" },
  regulatory: { label: "Regulatory", className: "bg-violet-100 text-violet-700 border-violet-200" },
};

// Visual positions for each node (percentage-based for responsive layout)
const NODE_POSITIONS: Record<string, { x: number; y: number }> = {
  "glucose":              { x: 50, y: 6 },
  "glucose-6-phosphate":  { x: 50, y: 22 },
  "fructose-6-phosphate": { x: 20, y: 40 },
  "glycogen":             { x: 50, y: 40 },
  "g6pd":                 { x: 74, y: 34 },
  "nadph":                { x: 80, y: 50 },
  "glutathione":          { x: 80, y: 66 },
  "oxidative-stress":     { x: 64, y: 80 },
  "hemolytic-anemia":     { x: 82, y: 90 },
  "g6pd-deficiency":      { x: 46, y: 90 },
  "ribose-5-phosphate":   { x: 20, y: 56 },
  "insulin":              { x: 14, y: 72 },
  "glucagon":             { x: 34, y: 72 },
  "diabetes-mellitus":    { x: 20, y: 90 },
};

const NODE_LABELS: Record<string, string> = {
  "glucose":              "Glucose",
  "glucose-6-phosphate":  "G6P",
  "fructose-6-phosphate": "F6P\n(Glycolysis)",
  "glycogen":             "Glycogen\n(Storage)",
  "g6pd":                 "G6PD",
  "nadph":                "NADPH",
  "glutathione":          "Glutathione\n(GSH)",
  "oxidative-stress":     "Oxidative\nStress",
  "hemolytic-anemia":     "Haemolytic\nAnaemia",
  "g6pd-deficiency":      "G6PD\nDeficiency",
  "ribose-5-phosphate":   "Ribose-5P",
  "insulin":              "Insulin",
  "glucagon":             "Glucagon",
  "diabetes-mellitus":    "Diabetes\nMellitus",
};

// Edges as source→target pairs, matching network IDs
const EDGES: { id: string; source: string; target: string }[] = [
  { id: "e-glucose-g6p",               source: "glucose",              target: "glucose-6-phosphate" },
  { id: "e-g6p-f6p",                   source: "glucose-6-phosphate",  target: "fructose-6-phosphate" },
  { id: "e-g6p-glycogen",              source: "glucose-6-phosphate",  target: "glycogen" },
  { id: "e-g6p-nadph",                 source: "glucose-6-phosphate",  target: "g6pd" },
  { id: "e-g6p-ribose",                source: "glucose-6-phosphate",  target: "ribose-5-phosphate" },
  { id: "e-nadph-glutathione",         source: "nadph",                target: "glutathione" },
  { id: "e-glutathione-oxidativestress", source: "glutathione",        target: "oxidative-stress" },
  { id: "e-oxidativestress-hemolytic", source: "oxidative-stress",     target: "hemolytic-anemia" },
  { id: "e-g6pddef-oxidativestress",   source: "g6pd-deficiency",      target: "oxidative-stress" },
  { id: "e-g6pddef-g6pd",              source: "g6pd-deficiency",      target: "g6pd" },
  { id: "e-g6p-glycogen-back",         source: "glycogen",             target: "glucose-6-phosphate" },
  { id: "e-insulin-glucose",           source: "insulin",              target: "glucose" },
  { id: "e-insulin-glycogen",          source: "insulin",              target: "glycogen" },
  { id: "e-glucagon-glycogen",         source: "glucagon",             target: "glycogen" },
  { id: "e-glucagon-glucose",          source: "glucagon",             target: "glucose" },
];

// Nodes visible on-screen (keep diagram uncluttered — focus on G6P hub)
const VISIBLE_NODES = [
  "glucose", "glucose-6-phosphate", "fructose-6-phosphate", "glycogen",
  "g6pd", "nadph", "glutathione", "oxidative-stress", "hemolytic-anemia", "g6pd-deficiency",
];

const VISIBLE_EDGES = [
  "e-glucose-g6p", "e-g6p-f6p", "e-g6p-glycogen", "e-g6p-nadph",
  "e-nadph-glutathione", "e-glutathione-oxidativestress",
  "e-oxidativestress-hemolytic", "e-g6pddef-oxidativestress",
];

const AUTO_PLAY_INTERVAL_MS = 3000;

export default function MetabolicAnimation({ steps }: MetabolicAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const currentStep = steps[currentIndex];

  const goTo = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(steps.length - 1, index)));
  }, [steps.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((i) => {
      if (i >= steps.length - 1) { setPlaying(false); return i; }
      return i + 1;
    });
  }, [steps.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  const handleReset = useCallback(() => {
    setPlaying(false);
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => {
        if (i >= steps.length - 1) { setPlaying(false); return i; }
        return i + 1;
      });
    }, AUTO_PLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [playing, steps.length]);

  const isNodeHighlighted = (nodeId: string) =>
    currentStep.highlightNodes.includes(nodeId);

  const isEdgeHighlighted = (edgeId: string) =>
    currentStep.highlightEdges.includes(edgeId);

  return (
    <div className="flex flex-col h-full">
      {/* SVG diagram */}
      <div className="flex-1 relative bg-slate-50 overflow-hidden" style={{ minHeight: 0 }}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{ maxHeight: "100%" }}
          aria-label="Metabolic pathway diagram"
        >
          {/* Edges */}
          {EDGES.filter((e) => VISIBLE_EDGES.includes(e.id)).map((edge) => {
            const src = NODE_POSITIONS[edge.source];
            const tgt = NODE_POSITIONS[edge.target];
            if (!src || !tgt) return null;
            const highlighted = isEdgeHighlighted(edge.id);
            return (
              <line
                key={edge.id}
                x1={src.x}
                y1={src.y}
                x2={tgt.x}
                y2={tgt.y}
                stroke={highlighted ? "#3b82f6" : "#d1d5db"}
                strokeWidth={highlighted ? 0.6 : 0.3}
                strokeDasharray={highlighted ? undefined : "0.8 0.5"}
                style={{ transition: "stroke 0.4s, stroke-width 0.4s" }}
              />
            );
          })}

          {/* Nodes */}
          {VISIBLE_NODES.map((nodeId) => {
            const pos = NODE_POSITIONS[nodeId];
            const label = NODE_LABELS[nodeId] ?? nodeId;
            const highlighted = isNodeHighlighted(nodeId);
            const lines = label.split("\n");

            return (
              <g key={nodeId} style={{ transition: "opacity 0.4s" }}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={highlighted ? 5.2 : 3.8}
                  fill={highlighted ? "#3b82f6" : "#e5e7eb"}
                  stroke={highlighted ? "#1d4ed8" : "#9ca3af"}
                  strokeWidth={highlighted ? 0.5 : 0.25}
                  style={{ transition: "r 0.35s, fill 0.35s, stroke 0.35s" }}
                />
                {lines.map((line, i) => (
                  <text
                    key={i}
                    x={pos.x}
                    y={pos.y + 7 + i * 3.2}
                    textAnchor="middle"
                    fontSize="2.5"
                    fill={highlighted ? "#1e40af" : "#6b7280"}
                    fontWeight={highlighted ? "600" : "400"}
                    style={{ transition: "fill 0.35s", fontFamily: "sans-serif" }}
                  >
                    {line}
                  </text>
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Step info panel */}
      <div className="flex-shrink-0 bg-white border-t border-gray-200 px-4 py-3 space-y-2">
        {/* Progress dots */}
        <div className="flex items-center justify-center gap-1.5">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to step ${i + 1}`}
              className={`rounded-full transition-all cursor-pointer ${
                i === currentIndex
                  ? "w-5 h-2 bg-blue-500"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Step label + badge */}
        <div className="flex items-start gap-2 flex-wrap">
          <span className="text-sm font-semibold text-gray-900 leading-snug flex-1">
            {currentIndex + 1}. {currentStep.label}
          </span>
          {currentStep.controlType && (
            <span
              className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full border ${
                CONTROL_BADGE[currentStep.controlType].className
              }`}
            >
              {CONTROL_BADGE[currentStep.controlType].label}
            </span>
          )}
        </div>

        {/* Explanation */}
        <p className="text-xs text-gray-600 leading-relaxed">{currentStep.explanation}</p>

        {/* Controls */}
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous step"
            className="px-3 py-1.5 text-xs font-medium rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
          >
            ← Prev
          </button>

          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause" : "Play"}
            className="px-4 py-1.5 text-xs font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 cursor-pointer transition-colors"
          >
            {playing ? "⏸ Pause" : "▶ Play"}
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === steps.length - 1}
            aria-label="Next step"
            className="px-3 py-1.5 text-xs font-medium rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
          >
            Next →
          </button>

          <button
            onClick={handleReset}
            aria-label="Reset to beginning"
            className="ml-auto px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-400 hover:text-gray-600 hover:border-gray-300 cursor-pointer transition-colors"
          >
            Reset
          </button>
        </div>

        <p className="text-xs text-gray-400">
          Step {currentIndex + 1} of {steps.length}
        </p>
      </div>
    </div>
  );
}
