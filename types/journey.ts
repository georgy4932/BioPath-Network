import { ControlType } from "./learning";

export type BiologicalScale =
  | "organism"
  | "organ-system"
  | "organ"
  | "cell"
  | "organelle"
  | "molecular-process";

export interface JourneyStep {
  id: string;
  title: string;
  /** Display name for the current biological location */
  location: string;
  scale: BiologicalScale;
  explanation: string;
  whyItMatters: string;
  icon?: string;
  /** Disease relevance in Journey View must remain high-level and must pass scientific review before adding specific named disorders. */
  diseaseRelevance?: string;
  controlType?: ControlType;
  /** ID of a LearningModule in learning-modules.ts */
  relatedLearningModuleId?: string;
}

export interface Journey {
  id: string;
  title: string;
  molecule: string;
  description: string;
  steps: JourneyStep[];
}
