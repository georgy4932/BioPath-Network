"use client";

import { useState, useEffect, useCallback } from "react";
import { Journey, BiologicalScale } from "@/types/journey";
import JourneyMap from "./JourneyMap";
import JourneyStepDetail from "./JourneyStepDetail";

interface JourneyViewProps {
  journey: Journey;
  onNavigateToModule?: (moduleId: string) => void;
  onNavigateToCrossJourneyStep?: (journeyId: string, stepId: string) => void;
  requestedStepId?: string | null;
  onStepRequested?: () => void;
}

const SCALE_LABEL: Record<BiologicalScale, string> = {
  organism: "Organism",
  "organ-system": "Organ System",
  organ: "Organ",
  cell: "Cell",
  organelle: "Organelle",
  "molecular-process": "Molecular Process",
};

const AUTO_PLAY_MS = 4000;

export default function JourneyView({
  journey,
  onNavigateToModule,
  onNavigateToCrossJourneyStep,
  requestedStepId,
  onStepRequested,
}: JourneyViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const total = journey.steps.length;
  const safeIndex = Math.min(currentIndex, total - 1);
  const step = journey.steps[safeIndex];

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

  // Reset to step 0 when the active journey changes
  useEffect(() => {
    setCurrentIndex(0);
    setPlaying(false);
  }, [journey.id]);

  useEffect(() => {
    if (!requestedStepId) return;
    const idx = journey.steps.findIndex((s) => s.id === requestedStepId);
    if (idx !== -1) goTo(idx);
    onStepRequested?.();
  }, [requestedStepId, journey.steps, goTo, onStepRequested]);

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

      {/* ── Route map ── */}
      <aside
        className="flex-shrink-0 bg-white border-b md:border-b-0 md:border-r border-gray-200 md:w-56 flex flex-col max-h-[280px] md:max-h-full"
        aria-label="Journey navigation"
      >
        <div className="px-4 pt-4 pb-3 border-b border-gray-100 flex-shrink-0">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest leading-tight">
            {journey.title}
          </p>
        </div>
        <div className="flex-1 overflow-y-auto">
          <JourneyMap
            steps={journey.steps}
            currentIndex={safeIndex}
            onSelectStep={goTo}
          />
        </div>
      </aside>

      {/* ── Detail panel + controls ── */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">

        <div className="flex-1 overflow-y-auto">
          <JourneyStepDetail
            step={step}
            stepNumber={safeIndex + 1}
            onNavigateToModule={onNavigateToModule}
            onNavigateToCrossJourneyStep={onNavigateToCrossJourneyStep}
          />
        </div>

        {/* Controls */}
        <div className="flex-shrink-0 bg-white border-t border-gray-200 px-4 py-3">
          <div className="flex items-center gap-2 max-w-2xl">
            <button
              onClick={handlePrev}
              disabled={safeIndex === 0}
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
              disabled={safeIndex === total - 1}
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
            Step {safeIndex + 1} of {total} · {SCALE_LABEL[step.scale]}
          </p>
        </div>
      </div>
    </div>
  );
}
