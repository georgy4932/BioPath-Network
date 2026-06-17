export type NodeType =
  | "metabolite"
  | "enzyme"
  | "pathway"
  | "disease"
  | "hormone"
  | "mechanism";

export type EvidenceLevel = "textbook" | "review" | "primary" | "hypothesis";

export interface NetworkNode {
  id: string;
  label: string;
  type: NodeType;
  explanation: string;
  connectedPathways: string[];
  diseaseRelevance: string;
  evidenceNote: string;
  evidenceLevel: EvidenceLevel;
  sourceNote: string;
  position: { x: number; y: number };
}

export interface NetworkEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
  animated?: boolean;
  evidenceLevel: EvidenceLevel;
  sourceNote: string;
}

export interface NetworkData {
  nodes: NetworkNode[];
  edges: NetworkEdge[];
}
