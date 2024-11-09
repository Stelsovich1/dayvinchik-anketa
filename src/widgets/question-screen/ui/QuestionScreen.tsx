import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { Question } from "../../../entities/question";

interface QuestionScreenProps {
  question: Question;
  onAnswer: (isCorrect: boolean, rating: number, answerText: string) => void;
  currentQuestion: number;
  totalQuestions: number;
}

/**
 * Экран с вопросом квиза
 */
export const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  onAnswer,
  currentQuestion,
  totalQuestions,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSubmit = () => {
    if (selectedOption === null) return;
    const option = question.options[selectedOption];
    onAnswer(option.correct ?? true, option.rating, option.text);
  };

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl">
      <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all mb-4">
        {question.image && (
          <div className="mb-6">
            <img
              src={question.image}
              alt="Question"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {question.text}
        </h2>

        <div className="space-y-4 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(index)}
              className={`w-full p-4 flex-col text-left rounded-lg transition-all ${
                selectedOption === index
                  ? "bg-pink-100 border-2 border-pink-500"
                  : "bg-gray-50 border-2 border-transparent hover:bg-pink-50"
              }`}
            >
              {option.text}
              {option.musicSrc && (
                <audio src={option.musicSrc} controls className="mt-2 w-full" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all ${
            selectedOption === null
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600"
          }`}
        >
          Далее
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Прогресс бар - только на десктопе */}
      <div className="hidden md:block w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-pink-500 to-red-500 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
