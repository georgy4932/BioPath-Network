"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import NodeDetailPanel from "@/components/NodeDetailPanel";
import { glucoseNetwork } from "@/data/glucose6phosphate-network";
import { NetworkNode } from "@/types/network";

// React Flow uses browser APIs; load it client-side only.
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

export default function HomePage() {
  const [selectedNode, setSelectedNode] = useState<NetworkNode | null>(null);

  const handleNodeSelect = useCallback((node: NetworkNode) => {
    setSelectedNode(node);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedNode(null);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="flex-shrink-0 border-b border-gray-200 bg-white px-6 py-4">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
            BioPath Network
          </h1>
          <p className="mt-0.5 text-sm text-gray-500">
            Explore biochemical pathways as disease-linked networks.
          </p>
        </div>
      </header>

      {/* Disclaimer */}
      <div className="flex-shrink-0 bg-amber-50 border-b border-amber-200 px-6 py-2">
        <p className="text-xs text-amber-800 text-center max-w-screen-xl mx-auto">
          <span className="font-medium">Educational tool only.</span> Not for
          diagnosis, treatment, or clinical decision-making.
        </p>
      </div>

      {/* Toolbar: legend + instructions */}
      <div className="flex-shrink-0 bg-white border-b border-gray-200 px-6 py-2">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
              Legend
            </span>
            {NODE_TYPE_LEGEND.map((item) => (
              <span key={item.type} className="flex items-center gap-1.5 text-xs text-gray-600">
                <span className={`w-3 h-3 rounded-sm ${item.color} border border-gray-300`} />
                {item.label}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400">
            Tap or click a node · Scroll or pinch to zoom · Drag to pan
          </p>
        </div>
      </div>

      {/* Graph area */}
      <main
        className="flex-1 relative overflow-hidden"
        style={{ minHeight: 0 }}
      >
        <BiochemGraph data={glucoseNetwork} onNodeSelect={handleNodeSelect} />

        {/* Hub badge — label derived from data */}
        <div className="absolute top-3 left-3 bg-white border border-gray-200 rounded-md px-3 py-1.5 shadow-sm pointer-events-none">
          <p className="text-xs text-gray-500">
            Hub:{" "}
            <span className="font-medium text-gray-800">
              {glucoseNetwork.nodes.find((n) => n.id === "glucose-6-phosphate")?.label}
            </span>
          </p>
        </div>

        {/* Node/edge count badge */}
        <div className="absolute bottom-10 left-3 bg-white border border-gray-200 rounded-md px-3 py-1.5 shadow-sm pointer-events-none">
          <p className="text-xs text-gray-400">
            {glucoseNetwork.nodes.length} nodes &middot;{" "}
            {glucoseNetwork.edges.length} edges
          </p>
        </div>
      </main>

      {/* Side panel */}
      <NodeDetailPanel node={selectedNode} onClose={handleClose} />
    </div>
  );
}
