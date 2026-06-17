"use client";

import { useEffect, useRef } from "react";
import { JourneyStep, BiologicalScale } from "@/types/journey";

const SCALE_SHORT: Record<BiologicalScale, string> = {
  organism: "Organism",
  "organ-system": "Org. Sys.",
  organ: "Organ",
  cell: "Cell",
  organelle: "Organelle",
  "molecular-process": "Mol.",
};

interface JourneyMapProps {
  steps: JourneyStep[];
  currentIndex: number;
  onSelectStep: (i: number) => void;
}

export default function JourneyMap({ steps, currentIndex, onSelectStep }: JourneyMapProps) {
  const activeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [currentIndex]);

  return (
    <nav className="relative py-3 px-3" aria-label="Journey route">
      {/* Vertical connector line — positioned behind nodes */}
      <div
        className="absolute top-3 bottom-3 w-px bg-gray-200"
        style={{ left: "1.75rem" }}
        aria-hidden="true"
      />
      {steps.map((step, i) => {
        const done = i < currentIndex;
        const active = i === currentIndex;
        return (
          <button
            key={step.id}
            ref={active ? activeRef : null}
            onClick={() => onSelectStep(i)}
            aria-current={active ? "step" : undefined}
            className="relative flex items-center gap-3 w-full text-left py-1 cursor-pointer group"
          >
            {/* Fixed-width wrapper keeps all nodes horizontally centred on the connector line */}
            <div className="flex-shrink-0 z-10 w-8 flex items-center justify-center">
              <div
                className={`flex items-center justify-center rounded-full border-2 transition-all ${
                  active
                    ? "w-8 h-8 bg-blue-600 border-blue-600 text-white ring-2 ring-amber-400 ring-offset-1"
                    : done
                    ? "w-5 h-5 bg-blue-200 border-blue-300"
                    : "w-5 h-5 bg-white border-gray-300 group-hover:border-gray-400"
                }`}
              >
                {active && (
                  <span className="text-sm leading-none" aria-hidden="true">
                    {step.icon ?? String(i + 1)}
                  </span>
                )}
              </div>
            </div>

            {/* Label */}
            <div className="min-w-0 flex-1">
              <p
                className={`text-xs leading-snug truncate transition-colors ${
                  active
                    ? "font-semibold text-blue-800"
                    : done
                    ? "text-gray-500"
                    : "text-gray-400 group-hover:text-gray-600"
                }`}
              >
                {step.title}
              </p>
              {active && (
                <p className="text-[10px] text-blue-500 mt-0.5">
                  {SCALE_SHORT[step.scale]}
                </p>
              )}
            </div>
          </button>
        );
      })}
    </nav>
  );
}
