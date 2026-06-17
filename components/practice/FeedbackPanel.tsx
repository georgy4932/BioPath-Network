"use client";

import { PracticeQuestion, AnswerValue } from "@/types/practice";

function getResult(question: PracticeQuestion, answer: AnswerValue): boolean | null {
  if (question.type === "mcq")        return answer === question.correctIndex;
  if (question.type === "true-false") return answer === question.correct;
  if (question.type === "ordering")   return JSON.stringify(answer) === JSON.stringify(question.correctOrder);
  return null;
}

interface FeedbackPanelProps {
  question: PracticeQuestion;
  answer: AnswerValue;
  onNext: () => void;
  isLast: boolean;
  onNavigateToJourneyStep?: (stepId: string) => void;
  onNavigateToModule?: (moduleId: string) => void;
}

export default function FeedbackPanel({
  question,
  answer,
  onNext,
  isLast,
  onNavigateToJourneyStep,
  onNavigateToModule,
}: FeedbackPanelProps) {
  const result = getResult(question, answer);
  const isSelfAssess = question.type === "short-answer" || question.type === "mechanism";

  return (
    <div className="border-t border-gray-100 bg-gray-50 px-4 py-4 space-y-3">

      {/* Correct / Incorrect indicator */}
      {!isSelfAssess && (
        <div className={`flex items-center gap-2 text-sm font-semibold ${
          result ? "text-green-700" : "text-red-600"
        }`}>
          <span className="text-base leading-none">{result ? "✓" : "✗"}</span>
          {result ? "Correct" : "Incorrect"}
        </div>
      )}

      {/* Correct answer reveal — T/F wrong */}
      {question.type === "true-false" && !result && (
        <p className="text-sm text-gray-600">
          The correct answer is{" "}
          <span className="font-medium">{question.correct ? "True" : "False"}</span>.
        </p>
      )}

      {/* Correct answer reveal — MCQ wrong */}
      {question.type === "mcq" && !result && (
        <p className="text-sm text-gray-600">
          The correct answer is:{" "}
          <span className="font-medium">{question.options[question.correctIndex]}</span>
        </p>
      )}

      {/* Correct sequence reveal — ordering wrong */}
      {question.type === "ordering" && !result && (
        <div className="text-sm text-gray-600">
          <p className="font-medium mb-1">Correct order:</p>
          <ol className="list-decimal list-inside space-y-0.5 pl-1">
            {question.correctOrder.map((idx, i) => (
              <li key={i} className="leading-snug">{question.items[idx]}</li>
            ))}
          </ol>
        </div>
      )}

      {/* Self-assessment — short answer / mechanism */}
      {isSelfAssess && (
        <div className="space-y-3">
          {/* User's answer */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Your answer
            </p>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
              {answer as string}
            </p>
          </div>

          {/* Sample answer */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Sample answer
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {(question.type === "short-answer" || question.type === "mechanism")
                ? question.sampleAnswer
                : ""}
            </p>
          </div>

          {/* Key points */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Key points
            </p>
            <ul className="space-y-1">
              {(question.type === "short-answer" || question.type === "mechanism"
                ? question.keyPoints
                : []
              ).map((pt, i) => (
                <li key={i} className="flex items-start gap-1.5 text-sm text-gray-700">
                  <span className="flex-shrink-0 text-gray-400 mt-0.5">•</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Explanation — always shown */}
      <div className="bg-blue-50 rounded-lg px-3 py-2.5 border border-blue-100">
        <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
          Explanation
        </p>
        <p className="text-sm text-blue-900 leading-relaxed">{question.explanation}</p>
      </div>

      {/* Concept links */}
      {(question.relatedJourneyStepId || question.relatedLearningModuleId) && (
        <div className="flex flex-col md:flex-row gap-2">
          {question.relatedJourneyStepId && onNavigateToJourneyStep && (
            <button
              onClick={() => onNavigateToJourneyStep(question.relatedJourneyStepId!)}
              className="flex-1 py-2 px-3 text-sm font-medium rounded-md border border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100 cursor-pointer transition-colors"
            >
              Open Journey Step →
            </button>
          )}
          {question.relatedLearningModuleId && onNavigateToModule && (
            <button
              onClick={() => onNavigateToModule(question.relatedLearningModuleId!)}
              className="flex-1 py-2 px-3 text-sm font-medium rounded-md border border-blue-200 bg-white text-blue-700 hover:bg-blue-50 cursor-pointer transition-colors"
            >
              Open Learning Module →
            </button>
          )}
        </div>
      )}

      {/* Next / Finish */}
      <button
        onClick={onNext}
        className="w-full py-2.5 px-4 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 cursor-pointer transition-colors"
      >
        {isLast ? "See summary →" : "Next question →"}
      </button>
    </div>
  );
}
