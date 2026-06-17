"use client";

import { useState } from "react";
import { PracticeQuestion, AnswerValue } from "@/types/practice";

const TYPE_LABEL: Record<PracticeQuestion["type"], string> = {
  mcq: "Multiple choice",
  "true-false": "True / False",
  ordering: "Ordering",
  "short-answer": "Short answer",
  mechanism: "Mechanism",
};

const DIFFICULTY_STYLE: Record<PracticeQuestion["difficulty"], string> = {
  basic: "bg-green-100 text-green-700",
  intermediate: "bg-amber-100 text-amber-700",
  advanced: "bg-red-100 text-red-700",
};

interface QuestionCardProps {
  question: PracticeQuestion;
  index: number;
  total: number;
  disabled: boolean;
  onSubmit: (answer: AnswerValue) => void;
}

export default function QuestionCard({
  question,
  index,
  total,
  disabled,
  onSubmit,
}: QuestionCardProps) {
  const [mcqSelected, setMcqSelected] = useState<number | null>(null);
  const [tfSelected, setTfSelected] = useState<boolean | null>(null);
  const [orderedIndices, setOrderedIndices] = useState<number[]>([]);
  const [textAnswer, setTextAnswer] = useState("");

  const canSubmit = (): boolean => {
    switch (question.type) {
      case "mcq":          return mcqSelected !== null;
      case "true-false":   return tfSelected !== null;
      case "ordering":     return orderedIndices.length === question.items.length;
      case "short-answer":
      case "mechanism":    return textAnswer.trim().length > 0;
    }
  };

  const handleSubmit = () => {
    if (!canSubmit() || disabled) return;
    switch (question.type) {
      case "mcq":          onSubmit(mcqSelected!); break;
      case "true-false":   onSubmit(tfSelected!); break;
      case "ordering":     onSubmit([...orderedIndices]); break;
      case "short-answer":
      case "mechanism":    onSubmit(textAnswer.trim()); break;
    }
  };

  const handleOrderTap = (itemIndex: number) => {
    if (disabled) return;
    setOrderedIndices((prev) => {
      if (prev.includes(itemIndex)) return prev.filter((i) => i !== itemIndex);
      return [...prev, itemIndex];
    });
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-xs text-gray-400">{index + 1} / {total}</span>
          <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
            {TYPE_LABEL[question.type]}
          </span>
          <span className={`text-xs px-1.5 py-0.5 rounded ${DIFFICULTY_STYLE[question.difficulty]}`}>
            {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
          </span>
        </div>
        <p className="text-sm font-medium text-gray-900 leading-snug">{question.prompt}</p>
      </div>

      {/* Answer input */}
      <div className="px-4 py-3 space-y-2">

        {/* MCQ */}
        {question.type === "mcq" && question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => !disabled && setMcqSelected(i)}
            disabled={disabled}
            className={`w-full text-left px-3 py-2.5 rounded-md border text-sm transition-colors ${
              disabled ? "cursor-default" : "cursor-pointer"
            } ${
              mcqSelected === i
                ? "border-blue-500 bg-blue-50 text-blue-900"
                : disabled
                ? "border-gray-200 bg-white text-gray-400"
                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            <span className="font-medium mr-2 text-gray-400">
              {String.fromCharCode(65 + i)}.
            </span>
            {opt}
          </button>
        ))}

        {/* True / False */}
        {question.type === "true-false" && (
          <div className="flex gap-3">
            {([true, false] as const).map((val) => (
              <button
                key={String(val)}
                onClick={() => !disabled && setTfSelected(val)}
                disabled={disabled}
                className={`flex-1 py-2.5 rounded-md border text-sm font-medium transition-colors ${
                  disabled ? "cursor-default" : "cursor-pointer"
                } ${
                  tfSelected === val
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : disabled
                    ? "border-gray-200 bg-white text-gray-400"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {val ? "True" : "False"}
              </button>
            ))}
          </div>
        )}

        {/* Ordering */}
        {question.type === "ordering" && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-gray-500">Tap a ranked item to remove it.</p>
              <p className="text-xs text-gray-500">Ranked {orderedIndices.length} of {question.items.length}</p>
            </div>
            {question.items.map((item, i) => {
              const rank = orderedIndices.indexOf(i);
              const placed = rank !== -1;
              return (
                <button
                  key={i}
                  onClick={() => handleOrderTap(i)}
                  disabled={disabled}
                  className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-md border text-sm transition-colors ${
                    disabled ? "cursor-default" : "cursor-pointer"
                  } ${
                    placed
                      ? "border-blue-400 bg-blue-50 text-blue-900"
                      : disabled
                      ? "border-gray-200 bg-white text-gray-400"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                    placed ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
                  }`}>
                    {placed ? rank + 1 : "·"}
                  </span>
                  <span className="leading-snug">{item}</span>
                </button>
              );
            })}
            {orderedIndices.length > 0 && !disabled && (
              <button
                onClick={() => setOrderedIndices([])}
                className="text-xs text-gray-400 hover:text-gray-600 underline cursor-pointer mt-0.5"
              >
                Clear
              </button>
            )}
          </div>
        )}

        {/* Short answer / Mechanism */}
        {(question.type === "short-answer" || question.type === "mechanism") && (
          <div>
            <textarea
              value={textAnswer}
              onChange={(e) => setTextAnswer(e.target.value)}
              disabled={disabled}
              placeholder="Write your answer here…"
              rows={5}
              className={`w-full text-sm text-gray-800 border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none placeholder:text-gray-400 ${
                disabled ? "bg-gray-50 text-gray-500 cursor-default" : "bg-white"
              }`}
            />
            {!disabled && (
              <p className="text-xs text-gray-400 mt-1">
                Your answer will be compared against the sample answer and key points.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Submit */}
      {!disabled && (
        <div className="px-4 pb-4">
          <button
            onClick={handleSubmit}
            disabled={!canSubmit()}
            className="w-full py-2.5 px-4 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
          >
            {(question.type === "short-answer" || question.type === "mechanism")
              ? "See sample answer"
              : "Check answer"}
          </button>
        </div>
      )}
    </div>
  );
}
