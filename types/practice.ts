export type QuestionType =
  | "mcq"
  | "true-false"
  | "ordering"
  | "short-answer"
  | "mechanism";

export type Difficulty = "basic" | "intermediate" | "advanced";

interface QuestionBase {
  id: string;
  type: QuestionType;
  prompt: string;
  explanation: string;
  difficulty: Difficulty;
  relatedJourneyStepId?: string;
  relatedLearningModuleId?: string;
}

export interface MCQQuestion extends QuestionBase {
  type: "mcq";
  options: string[];
  correctIndex: number;
}

export interface TrueFalseQuestion extends QuestionBase {
  type: "true-false";
  correct: boolean;
}

export interface OrderingQuestion extends QuestionBase {
  type: "ordering";
  /** Labels shown to the user in initial (shuffled) order */
  items: string[];
  /** Indices into items[] listed in the correct sequence */
  correctOrder: number[];
}

export interface ShortAnswerQuestion extends QuestionBase {
  type: "short-answer";
  sampleAnswer: string;
  keyPoints: string[];
}

export interface MechanismQuestion extends QuestionBase {
  type: "mechanism";
  sampleAnswer: string;
  keyPoints: string[];
}

export type PracticeQuestion =
  | MCQQuestion
  | TrueFalseQuestion
  | OrderingQuestion
  | ShortAnswerQuestion
  | MechanismQuestion;

export interface QuestionSet {
  id: string;
  title: string;
  description: string;
  questions: PracticeQuestion[];
}
