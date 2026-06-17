"use client";

import { useCallback, useMemo } from "react";
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  NodeTypes,
  useNodesState,
  useEdgesState,
  NodeMouseHandler,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";

import { NetworkData, NetworkNode, NodeType } from "@/types/network";

interface BiochemGraphProps {
  data: NetworkData;
  onNodeSelect: (node: NetworkNode) => void;
}

const typeNodeStyle: Record<NodeType, React.CSSProperties> = {
  metabolite: {
    background: "#dbeafe",
    border: "1px solid #93c5fd",
    color: "#1e3a5f",
  },
  enzyme: {
    background: "#dcfce7",
    border: "1px solid #86efac",
    color: "#14532d",
  },
  pathway: {
    background: "#f3e8ff",
    border: "1px solid #d8b4fe",
    color: "#4a1d96",
  },
  disease: {
    background: "#fee2e2",
    border: "1px solid #fca5a5",
    color: "#7f1d1d",
  },
  hormone: {
    background: "#fef9c3",
    border: "1px solid #fde047",
    color: "#713f12",
  },
  mechanism: {
    background: "#ffedd5",
    border: "1px solid #fdba74",
    color: "#7c2d12",
  },
};

function buildFlowNodes(nodes: NetworkNode[]): Node[] {
  return nodes.map((n) => ({
    id: n.id,
    position: n.position,
    data: { label: n.label, nodeType: n.type },
    style: {
      ...typeNodeStyle[n.type],
      borderRadius: "8px",
      padding: "8px 14px",
      fontSize: "12px",
      fontWeight: 500,
      cursor: "pointer",
      maxWidth: "160px",
      textAlign: "center" as const,
      boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    },
  }));
}

function buildFlowEdges(edges: NetworkData["edges"]): Edge[] {
  return edges.map((e) => ({
    id: e.id,
    source: e.source,
    target: e.target,
    label: e.label,
    animated: e.animated ?? false,
    markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16, color: "#94a3b8" },
    style: { stroke: "#94a3b8", strokeWidth: 1.5 },
    labelStyle: { fontSize: 10, fill: "#64748b" },
    labelBgStyle: { fill: "white", fillOpacity: 0.85 },
    type: "smoothstep",
  }));
}

export default function BiochemGraph({ data, onNodeSelect }: BiochemGraphProps) {
  const initialNodes = useMemo(() => buildFlowNodes(data.nodes), [data.nodes]);
  const initialEdges = useMemo(() => buildFlowEdges(data.edges), [data.edges]);

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = useMemo<NodeTypes>(() => ({}), []);

  const handleNodeClick: NodeMouseHandler = useCallback(
    (_event, flowNode) => {
      const match = data.nodes.find((n) => n.id === flowNode.id);
      if (match) onNodeSelect(match);
    },
    [data.nodes, onNodeSelect]
  );

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.3}
        maxZoom={2}
        attributionPosition="bottom-left"
      >
        <Background color="#e2e8f0" gap={20} />
        <Controls showInteractive={false} />
        <MiniMap
          nodeColor={(n) => {
            const nodeType = (n.data as { nodeType: NodeType }).nodeType;
            const style = typeNodeStyle[nodeType];
            return (style?.background as string) ?? "#e2e8f0";
          }}
          maskColor="rgba(241,245,249,0.7)"
        />
      </ReactFlow>
    </div>
  );
}
