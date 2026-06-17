import { Fragment } from "react";
import { BiologicalScale } from "@/types/journey";

interface ScaleStep {
  value: BiologicalScale;
  label: string;
}

const SCALE_STEPS: ScaleStep[] = [
  { value: "organism",          label: "Organism"  },
  { value: "organ-system",      label: "Org. Sys." },
  { value: "organ",             label: "Organ"     },
  { value: "cell",              label: "Cell"      },
  { value: "organelle",         label: "Organelle" },
  { value: "molecular-process", label: "Mol."      },
];

interface ScaleDepthLadderProps {
  scale: BiologicalScale;
  location: string;
}

export default function ScaleDepthLadder({ scale, location }: ScaleDepthLadderProps) {
  return (
    <div
      className="flex-shrink-0 bg-white border-b border-gray-100 px-4 pt-2 pb-2.5"
      aria-label={`Biological scale: ${scale}, location: ${location}`}
    >
      {/* Depth ladder */}
      <div className="flex items-baseline flex-wrap gap-y-0.5">
        {SCALE_STEPS.map((s, i) => {
          const isActive = s.value === scale;
          return (
            <Fragment key={s.value}>
              <span
                className={`text-[9px] leading-none transition-colors duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white px-1.5 py-0.5 rounded font-semibold"
                    : "text-gray-300"
                }`}
                aria-current={isActive ? "step" : undefined}
              >
                {s.label}
              </span>
              {i < SCALE_STEPS.length - 1 && (
                <span
                  className="text-[8px] text-gray-200 leading-none mx-0.5 select-none"
                  aria-hidden="true"
                >
                  ›
                </span>
              )}
            </Fragment>
          );
        })}
      </div>
      {/* Current location */}
      <p className="mt-1 text-xs text-gray-500 font-medium leading-none">{location}</p>
    </div>
  );
}
