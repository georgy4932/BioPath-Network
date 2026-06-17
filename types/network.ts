export type NodeType =
  | "metabolite"
  | "enzyme"
  | "pathway"
  | "disease"
  | "hormone"
  | "mechanism";

export interface NetworkNode {
  id: string;
  label: string;
  type: NodeType;
  explanation: string;
  connectedPathways: string[];
  diseaseRelevance: string;
  evidenceNote: string;
  position: { x: number; y: number };
}

export interface NetworkEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
  animated?: boolean;
}

export interface NetworkData {
  nodes: NetworkNode[];
  edges: NetworkEdge[];
}
