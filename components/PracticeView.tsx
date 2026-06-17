"use client";

import { useState } from "react";
import { QuestionSet, AnswerValue } from "@/types/practice";
import { carbohydratePractice } from "@/data/carbohydrate-practice";
import QuestionCard from "./practice/QuestionCard";
import FeedbackPanel from "./practice/FeedbackPanel";

const QUESTION_SETS: QuestionSet[] = [carbohydratePractice];

interface PracticeViewProps {
  onNavigateToJourneyStep?: (stepId: string) => void;
  onNavigateToModule?: (moduleId: string) => void;
}

export default function PracticeView({ onNavigateToJourneyStep, onNavigateToModule }: PracticeViewProps) {
  const [activeSet, setActiveSet] = useState<QuestionSet | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<AnswerValue | null>(null);
  const [completed, setCompleted] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const handleStartSet = (set: QuestionSet) => {
    setActiveSet(set);
    setCurrentIndex(0);
    setSubmitted(false);
    setLastAnswer(null);
    setCompleted(0);
    setAttempts(0);
    setShowSummary(false);
  };

  const handleSubmit = (answer: AnswerValue) => {
    setLastAnswer(answer);
    setSubmitted(true);
    setAttempts((a) => a + 1);
    setCompleted((c) => c + 1);
  };

  const handleNext = () => {
    if (!activeSet) return;
    if (currentIndex >= activeSet.questions.length - 1) {
      setShowSummary(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSubmitted(false);
      setLastAnswer(null);
    }
  };

  // ── Set selector ─────────────────────────────────────────────────────────────
  if (!activeSet) {
    return (
      <div className="flex flex-col h-full overflow-y-auto bg-white">
        <div className="px-5 py-5 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-800">Practice</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Choose a question set to begin.
          </p>
        </div>
        <div className="px-4 py-4 space-y-2">
          {QUESTION_SETS.map((set) => (
            <button
              key={set.id}
              onClick={() => handleStartSet(set)}
              className="w-full text-left px-4 py-3.5 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer group"
            >
              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-800">
                {set.title}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                {set.description}
              </p>
              <p className="text-xs text-blue-600 font-medium mt-2">
                {set.questions.length} questions →
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── Session summary ───────────────────────────────────────────────────────────
  if (showSummary) {
    return (
      <div className="flex flex-col h-full overflow-y-auto bg-white">
        <div className="px-5 py-5 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-800">Session complete</h2>
          <p className="text-xs text-gray-500 mt-0.5">{activeSet.title}</p>
        </div>
        <div className="px-5 py-6 space-y-4 max-w-md">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
              <p className="text-2xl font-bold text-gray-900">{completed}</p>
              <p className="text-xs text-gray-500 mt-0.5">Questions completed</p>
            </div>
            <div className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
              <p className="text-2xl font-bold text-gray-900">{attempts}</p>
              <p className="text-xs text-gray-500 mt-0.5">Attempts made</p>
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <button
              onClick={() => handleStartSet(activeSet)}
              className="flex-1 py-2.5 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 cursor-pointer transition-colors"
            >
              Try again
            </button>
            <button
              onClick={() => setActiveSet(null)}
              className="flex-1 py-2.5 text-sm font-medium rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              Back to sets
            </button>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed">
            Explanations are shown after every answer. Review them to reinforce understanding.
          </p>
        </div>
      </div>
    );
  }

  // ── Active question ───────────────────────────────────────────────────────────
  const question = activeSet.questions[currentIndex];
  const isLast = currentIndex === activeSet.questions.length - 1;

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-white">
      <QuestionCard
        key={question.id}
        question={question}
        index={currentIndex}
        total={activeSet.questions.length}
        disabled={submitted}
        onSubmit={handleSubmit}
      />
      {submitted && lastAnswer !== null && (
        <FeedbackPanel
          question={question}
          answer={lastAnswer}
          onNext={handleNext}
          isLast={isLast}
          onNavigateToJourneyStep={onNavigateToJourneyStep}
          onNavigateToModule={onNavigateToModule}
        />
      )}
    </div>
  );
}
