"use client";

import { useState, useCallback } from "react";
import Sidebar from "@/components/Sidebar";
import LearningModuleView from "@/components/LearningModuleView";
import StepDetailPanel from "@/components/StepDetailPanel";
import MetabolicAnimation from "@/components/MetabolicAnimation";
import { learningModules } from "@/data/learning-modules";
import { g6pAnimationSteps } from "@/data/animation-steps";
import { LearningStep } from "@/types/learning";

type ActiveTab = "learning" | "animation";

export default function HomePage() {
  const [activeModuleId, setActiveModuleId] = useState(learningModules[0].id);
  const [activeTab, setActiveTab] = useState<ActiveTab>("learning");
  const [selectedStep, setSelectedStep] = useState<LearningStep | null>(null);

  const activeModule = learningModules.find((m) => m.id === activeModuleId)!;

  const handleSelectModule = useCallback((id: string) => {
    setActiveModuleId(id);
    setSelectedStep(null);
  }, []);

  const handleSelectStep = useCallback((step: LearningStep) => {
    setSelectedStep(step);
  }, []);

  const handleCloseStep = useCallback(() => setSelectedStep(null), []);

  const handleTabChange = useCallback((tab: ActiveTab) => {
    setActiveTab(tab);
    setSelectedStep(null);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="flex-shrink-0 border-b border-gray-200 bg-white px-6 py-3">
        <div className="flex items-baseline gap-3">
          <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
            BioPath Network
          </h1>
          <span className="text-sm text-gray-400">
            Explore biochemical pathways as disease-linked networks.
          </span>
        </div>
      </header>

      {/* Disclaimer */}
      <div className="flex-shrink-0 bg-amber-50 border-b border-amber-200 px-6 py-1.5">
        <p className="text-xs text-amber-800 text-center">
          <span className="font-medium">Educational tool only.</span> Not for
          diagnosis, treatment, or clinical decision-making.
        </p>
      </div>

      {/* Body: sidebar + main */}
      <div className="flex flex-1 overflow-hidden" style={{ minHeight: 0 }}>
        <Sidebar
          modules={learningModules}
          activeModuleId={activeModuleId}
          onSelectModule={handleSelectModule}
        />

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          {/* Tab bar */}
          <div className="flex-shrink-0 flex items-center gap-1 px-4 pt-3 pb-0 bg-white border-b border-gray-200">
            {(["learning", "animation"] as ActiveTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors cursor-pointer -mb-px ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-700"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab === "learning" ? "Learning View" : "Animation View"}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "learning" ? (
            <div className="flex-1 flex flex-col overflow-hidden min-w-0">
              {/* Mobile module selector — hidden on md+ where sidebar is visible */}
              <div className="md:hidden flex-shrink-0 bg-white border-b border-gray-200 px-4 py-2">
                <label htmlFor="mobile-module-select" className="sr-only">
                  Select module
                </label>
                <select
                  id="mobile-module-select"
                  value={activeModuleId}
                  onChange={(e) => handleSelectModule(e.target.value)}
                  className="w-full text-sm text-gray-800 bg-white border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {learningModules.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 overflow-y-auto">
                <LearningModuleView
                  module={activeModule}
                  selectedStepId={selectedStep?.id ?? null}
                  onSelectStep={handleSelectStep}
                />
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col overflow-hidden" style={{ minHeight: 0 }}>
              <MetabolicAnimation steps={g6pAnimationSteps} />
            </div>
          )}
        </div>
      </div>

      {/* Panels — rendered outside the scrollable area so they overlay correctly */}
      <StepDetailPanel step={selectedStep} onClose={handleCloseStep} />
    </div>
  );
}
