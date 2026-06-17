import { Fragment } from "react";

interface Waypoint {
  shortLabel: string;
  stepIds: string[];
}

const WAYPOINTS: Waypoint[] = [
  { shortLabel: "Mouth",  stepIds: ["jny-meal"] },
  { shortLabel: "Gut",    stepIds: ["jny-digestion"] },
  { shortLabel: "SI",     stepIds: ["jny-absorption"] },
  { shortLabel: "Portal", stepIds: ["jny-portal"] },
  { shortLabel: "Liver",  stepIds: ["jny-liver"] },
  { shortLabel: "Cell",   stepIds: ["jny-cell-entry", "jny-glycolysis"] },
  { shortLabel: "Mito",   stepIds: ["jny-mito-entry", "jny-krebs", "jny-etc"] },
  { shortLabel: "ATP",    stepIds: ["jny-atp"] },
];

function getActiveWaypointIndex(stepId: string): number {
  const idx = WAYPOINTS.findIndex((w) => w.stepIds.includes(stepId));
  return idx === -1 ? 0 : idx;
}

interface SpatialAnchorProps {
  currentStepId: string;
}

export default function SpatialAnchor({ currentStepId }: SpatialAnchorProps) {
  const activeIdx = getActiveWaypointIndex(currentStepId);

  return (
    <div
      className="flex-shrink-0 bg-white border-b border-gray-100 px-4 pt-2 pb-2.5"
      aria-label="Journey route"
      role="navigation"
    >
      <div className="flex items-start w-full">
        {WAYPOINTS.map((wp, i) => {
          const isActive = i === activeIdx;
          const isDone = i < activeIdx;
          return (
            <Fragment key={wp.shortLabel}>
              {/* Waypoint: dot stacked over label */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`w-2.5 h-2.5 rounded-full border-2 transition-colors duration-300 ${
                    isActive
                      ? "bg-blue-600 border-blue-600"
                      : isDone
                      ? "bg-blue-200 border-blue-300"
                      : "bg-white border-gray-300"
                  }`}
                  aria-current={isActive ? "location" : undefined}
                />
                <span
                  className={`mt-0.5 text-[9px] leading-none text-center whitespace-nowrap select-none transition-colors duration-300 ${
                    isActive
                      ? "text-blue-700 font-semibold"
                      : isDone
                      ? "text-gray-400"
                      : "text-gray-300"
                  }`}
                >
                  {wp.shortLabel}
                </span>
              </div>
              {/* Connector line between waypoints */}
              {i < WAYPOINTS.length - 1 && (
                <div
                  className={`flex-1 h-px self-start mt-[5px] min-w-[4px] transition-colors duration-300 ${
                    isDone ? "bg-blue-200" : "bg-gray-200"
                  }`}
                />
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
