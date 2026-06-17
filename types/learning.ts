import { EvidenceLevel } from "./network";

export type LearningSection =
  | "Glucose Metabolism"
  | "Redox Protection"
  | "Hormonal Regulation";

export interface StepDetail {
  whatHappens: string;
  keyMolecule: string;
  whyItMatters: string;
  diseaseRelevance: string;
  evidenceLevel: EvidenceLevel;
  sourceNote: string;
}

export interface LearningStep {
  id: string;
  label: string;
  isControlStep?: boolean;
  detail: StepDetail;
}

export interface LearningModule {
  id: string;
  title: string;
  section: LearningSection;
  explanation: string;
  steps: LearningStep[];
}
