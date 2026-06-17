"use client";

import { useState, useEffect, useCallback } from "react";
import { Journey, BiologicalScale } from "@/types/journey";
import { ControlType } from "@/types/learning";
import SceneOrganism from "./journey-scenes/SceneOrganism";
import SceneOrganSystem from "./journey-scenes/SceneOrganSystem";
import SceneOrgan from "./journey-scenes/SceneOrgan";
import SceneCell from "./journey-scenes/SceneCell";
import SceneOrganelle from "./journey-scenes/SceneOrganelle";
import SceneMolecularProcess from "./journey-scenes/SceneMolecularProcess";

interface JourneyViewProps {
  journey: Journey;
  onNavigateToModule?: (moduleId: string) => void;
}

const SCALE_LABEL: Record<BiologicalScale, string> = {
  organism: "Organism",
  "organ-system": "Organ System",
  organ: "Organ",
  cell: "Cell",
  organelle: "Organelle",
  "molecular-process": "Molecular Process",
};

const SCALE_COLOUR: Record<BiologicalScale, string> = {
  organism:           "bg-green-100 text-green-800 border-green-200",
  "organ-system":     "bg-blue-100 text-blue-800 border-blue-200",
  organ:              "bg-violet-100 text-violet-800 border-violet-200",
  cell:               "bg-orange-100 text-orange-800 border-orange-200",
  organelle:          "bg-rose-100 text-rose-800 border-rose-200",
  "molecular-process":"bg-amber-100 text-amber-800 border-amber-200",
};

const CONTROL_BADGE: Record<ControlType, { label: string; className: string }> = {
  "rate-limiting":   { label: "Rate-limiting",   className: "bg-amber-100 text-amber-700 border-amber-200" },
  "rate-committing": { label: "Rate-committing",  className: "bg-orange-100 text-orange-700 border-orange-200" },
  regulatory:        { label: "Regulatory",       className: "bg-violet-100 text-violet-700 border-violet-200" },
};

const AUTO_PLAY_MS = 4000;

function SceneDisplay({
  scale,
  location,
  active,
}: {
  scale: BiologicalScale;
  location: string;
  active: boolean;
}) {
  const props = { active, location };
  switch (scale) {
    case "organism":          return <SceneOrganism active={active} />;
    case "organ-system":      return <SceneOrganSystem {...props} />;
    case "organ":             return <SceneOrgan {...props} />;
    case "cell":              return <SceneCell {...props} />;
    case "organelle":         return <SceneOrganelle {...props} />;
    case "molecular-process": return <SceneMolecularProcess active={active} />;
  }
}

export default function JourneyView({ journey, onNavigateToModule }: JourneyViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const step = journey.steps[currentIndex];
  const total = journey.steps.length;

  const goTo = useCallback((i: number) => {
    setCurrentIndex(Math.max(0, Math.min(total - 1, i)));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((i) => {
      if (i >= total - 1) { setPlaying(false); return i; }
      return i + 1;
    });
  }, [total]);

  const handlePrev = useCallback(() => setCurrentIndex((i) => Math.max(0, i - 1)), []);

  const handleReset = useCallback(() => {
    setPlaying(false);
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => {
        if (i >= total - 1) { setPlaying(false); return i; }
        return i + 1;
      });
    }, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, [playing, total]);

  return (
    <div className="flex flex-col md:flex-row h-full overflow-hidden">

      {/* ── Left: Journey track (desktop/tablet only) ── */}
      <aside className="hidden md:flex flex-col w-52 flex-shrink-0 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="px-4 pt-4 pb-3 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest leading-tight">
            {journey.title}
          </p>
        </div>
        <div className="flex-1 py-4 px-3 relative">
          {/* Connecting line */}
          <div className="absolute left-[1.85rem] top-4 bottom-4 w-px bg-gray-200" aria-hidden="true" />
          {journey.steps.map((s, i) => {
            const done = i < currentIndex;
            const active = i === currentIndex;
            return (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className="relative flex items-start gap-3 mb-3 w-full text-left cursor-pointer group"
                aria-current={active ? "step" : undefined}
              >
                {/* Stop indicator */}
                <div className={`flex-shrink-0 z-10 flex items-center justify-center rounded-full border-2 transition-all ${
                  active
                    ? "w-7 h-7 bg-blue-600 border-blue-600 text-white text-sm"
                    : done
                    ? "w-5 h-5 mt-1 bg-blue-200 border-blue-300"
                    : "w-5 h-5 mt-1 bg-white border-gray-300 group-hover:border-gray-400"
                }`}>
                  {active && <span className="text-xs">{s.icon ?? (i + 1)}</span>}
                </div>
                {/* Label */}
                <span className={`text-xs leading-snug mt-0.5 transition-colors ${
                  active ? "text-blue-800 font-semibold" : done ? "text-gray-500" : "text-gray-400 group-hover:text-gray-600"
                }`}>
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* ── Right: Main content ── */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">

        {/* Scale badge row */}
        <div className="flex-shrink-0 bg-white border-b border-gray-100 px-4 py-2 flex items-center gap-3 flex-wrap">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${SCALE_COLOUR[step.scale]}`}>
            {SCALE_LABEL[step.scale]}
          </span>
          <span className="text-xs text-gray-500 font-medium">{step.location}</span>
        </div>

        {/* SVG scene */}
        <div className="flex-shrink-0 bg-slate-50 border-b border-gray-100 flex items-center justify-center"
          style={{ height: "clamp(140px, 28vh, 220px)" }}>
          <svg
            viewBox="0 0 100 100"
            className="h-full"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            aria-label={`Biological scale: ${SCALE_LABEL[step.scale]}, location: ${step.location}`}
          >
            <SceneDisplay scale={step.scale} location={step.location} active={true} />
          </svg>
        </div>

        {/* Step info — scrollable on mobile */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 py-4 space-y-3 max-w-2xl">

            {/* Mobile progress dots */}
            <div className="flex md:hidden items-center justify-center gap-1.5 pb-1">
              {journey.steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to step ${i + 1}`}
                  className={`rounded-full transition-all cursor-pointer ${
                    i === currentIndex ? "w-5 h-2 bg-blue-500" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Title row */}
            <div className="flex items-start gap-2 flex-wrap">
              {step.icon && (
                <span className="text-xl leading-none flex-shrink-0 mt-0.5" aria-hidden="true">
                  {step.icon}
                </span>
              )}
              <h2 className="text-base font-semibold text-gray-900 leading-snug flex-1">
                {currentIndex + 1}. {step.title}
              </h2>
              {step.controlType && (
                <span className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full border ${CONTROL_BADGE[step.controlType].className}`}>
                  {CONTROL_BADGE[step.controlType].label}
                </span>
              )}
            </div>

            {/* Explanation */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Explore in Learning View
              </button>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex-shrink-0 bg-white border-t border-gray-200 px-4 py-3">
          <div className="flex items-center gap-2 max-w-2xl">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous step"
              className="px-3 py-2 text-xs font-medium rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              ← Prev
            </button>

            <button
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause" : "Play"}
              className="px-4 py-2 text-xs font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 cursor-pointer transition-colors"
            >
              {playing ? "⏸ Pause" : "▶ Play"}
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === total - 1}
              aria-label="Next step"
              className="px-3 py-2 text-xs font-medium rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              Next →
            </button>

            <button
              onClick={handleReset}
              aria-label="Reset to beginning"
              className="ml-auto px-3 py-2 text-xs font-medium rounded-md border border-gray-200 text-gray-400 hover:text-gray-600 hover:border-gray-300 cursor-pointer transition-colors"
            >
              Reset
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-1.5">
            Step {currentIndex + 1} of {total} · {SCALE_LABEL[step.scale]}
          </p>
        </div>
      </div>
    </div>
  );
}
