"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Sidebar from "@/components/Sidebar";
import LearningModuleView from "@/components/LearningModuleView";
import StepDetailPanel from "@/components/StepDetailPanel";
import NodeDetailPanel from "@/components/NodeDetailPanel";
import { learningModules } from "@/data/learning-modules";
import { glucoseNetwork } from "@/data/glucose6phosphate-network";
import { LearningStep } from "@/types/learning";
import { NetworkNode } from "@/types/network";

const BiochemGraph = dynamic(() => import("@/components/BiochemGraph"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
      Loading graph…
    </div>
  ),
});

const NODE_TYPE_LEGEND: { type: string; label: string; color: string }[] = [
  { type: "metabolite", label: "Metabolite", color: "bg-blue-200" },
  { type: "enzyme", label: "Enzyme", color: "bg-green-200" },
  { type: "disease", label: "Disease", color: "bg-red-200" },
  { type: "hormone", label: "Hormone", color: "bg-yellow-200" },
  { type: "mechanism", label: "Mechanism", color: "bg-orange-200" },
  { type: "pathway", label: "Pathway", color: "bg-purple-200" },
];

type ActiveTab = "learning" | "network";

export default function HomePage() {
  const [activeModuleId, setActiveModuleId] = useState(learningModules[0].id);
  const [activeTab, setActiveTab] = useState<ActiveTab>("learning");
  const [selectedStep, setSelectedStep] = useState<LearningStep | null>(null);
  const [selectedNode, setSelectedNode] = useState<NetworkNode | null>(null);

  const activeModule = learningModules.find((m) => m.id === activeModuleId)!;

  const handleSelectModule = useCallback((id: string) => {
    setActiveModuleId(id);
    setSelectedStep(null);
  }, []);

  const handleSelectStep = useCallback((step: LearningStep) => {
    setSelectedStep(step);
  }, []);

  const handleCloseStep = useCallback(() => setSelectedStep(null), []);

  const handleNodeSelect = useCallback((node: NetworkNode) => {
    setSelectedNode(node);
  }, []);

  const handleCloseNode = useCallback(() => setSelectedNode(null), []);

  const handleTabChange = useCallback((tab: ActiveTab) => {
    setActiveTab(tab);
    setSelectedStep(null);
    setSelectedNode(null);
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
            {(["learning", "network"] as ActiveTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors cursor-pointer -mb-px ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-700"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab === "learning" ? "Learning View" : "Network View"}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "learning" ? (
            <div className="flex-1 overflow-y-auto">
              <LearningModuleView
                module={activeModule}
                selectedStepId={selectedStep?.id ?? null}
                onSelectStep={handleSelectStep}
              />
            </div>
          ) : (
            <div className="flex-1 flex flex-col overflow-hidden" style={{ minHeight: 0 }}>
              {/* Network legend toolbar */}
              <div className="flex-shrink-0 bg-white border-b border-gray-200 px-4 py-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                      Legend
                    </span>
                    {NODE_TYPE_LEGEND.map((item) => (
                      <span
                        key={item.type}
                        className="flex items-center gap-1.5 text-xs text-gray-600"
                      >
                        <span
                          className={`w-3 h-3 rounded-sm ${item.color} border border-gray-300`}
                        />
                        {item.label}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">
                    Tap or click a node · Scroll or pinch to zoom · Drag to pan
                  </p>
                </div>
              </div>

              {/* Graph */}
              <div className="flex-1 relative overflow-hidden" style={{ minHeight: 0 }}>
                <BiochemGraph
                  data={glucoseNetwork}
                  onNodeSelect={handleNodeSelect}
                />
                <div className="absolute top-3 left-3 bg-white border border-gray-200 rounded-md px-3 py-1.5 shadow-sm pointer-events-none">
                  <p className="text-xs text-gray-500">
                    Hub:{" "}
                    <span className="font-medium text-gray-800">
                      {glucoseNetwork.nodes.find((n) => n.id === "glucose-6-phosphate")?.label}
                    </span>
                  </p>
                </div>
                <div className="absolute bottom-10 left-3 bg-white border border-gray-200 rounded-md px-3 py-1.5 shadow-sm pointer-events-none">
                  <p className="text-xs text-gray-400">
                    {glucoseNetwork.nodes.length} nodes &middot;{" "}
                    {glucoseNetwork.edges.length} edges
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Panels — rendered outside the scrollable area so they overlay correctly */}
      <StepDetailPanel step={selectedStep} onClose={handleCloseStep} />
      <NodeDetailPanel node={selectedNode} onClose={handleCloseNode} />
    </div>
  );
}
