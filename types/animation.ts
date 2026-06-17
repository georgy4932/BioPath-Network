import { ControlType } from "./learning";

export interface AnimationStep {
  id: string;
  label: string;
  explanation: string;
  /** IDs of nodes to highlight in this step */
  highlightNodes: string[];
  /** IDs of edges to highlight in this step */
  highlightEdges: string[];
  controlType?: ControlType;
}
