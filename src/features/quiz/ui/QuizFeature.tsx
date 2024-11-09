import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { StartScreen } from "../../../widgets/start-screen";
import { QuestionScreen } from "../../../widgets/question-screen";
import { ContactScreen } from "../../../widgets/contact-screen";
import { ResultScreen } from "../../../widgets/result-screen";
import { FailureScreen } from "../../../widgets/failure-screen";
import { questions } from "../../../entities/question";
import { sendQuizResults } from "../../../shared/api";
import type { QuizData, UserAnswer } from "../../../shared/types";
import { useQuiz } from "../../../app/providers/quiz-provider/useQuiz.tsx";

/**
 * Основной компонент квиза
 */
export const QuizFeature: React.FC = () => {
  const { gameState, setGameState, totalRating, setTotalRating, config } =
    useQuiz();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>(
    [],
  );
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const initializeQuiz = () => {
    setCurrentQuestion(0);
    setTotalRating(0);
    setUserAnswers([]);
    /*    setShuffledQuestions(
      [...questions].sort(() => Math.random() - 0.5).slice(0, 10),
    );*/
    setShuffledQuestions([...questions]);
    setGameState("quiz");
  };

  const handleStart = () => {
    initializeQuiz();
  };

  const handleAnswer = (
    isCorrect: boolean,
    rating: number,
    answerText: string,
  ) => {
    const _currentQuestion = shuffledQuestions[currentQuestion];

    // Сохранить ответ пользователя
    setUserAnswers((prev) => [
      ...prev,
      {
        question: _currentQuestion.text,
        answer: answerText,
        rating: rating,
      },
    ]);

    setTotalRating((prev) => prev + rating);
    // TODO убрать вложенность

    if (isCorrect) {
      if (currentQuestion === shuffledQuestions.length - 1) {
        setGameState("contact");
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }
    } else {
      setGameState("failure");
    }
  };

  const handleSubmitContact = async (
    formData: Omit<QuizData, "rating" | "answers">,
  ) => {
    const loadingToast = toast.loading("Отправка анкеты...");

    try {
      const success = await sendQuizResults({
        ...formData,
        rating: totalRating,
        answers: userAnswers,
      });

      toast.dismiss(loadingToast);
      // TODO убрать вложенность
      if (success) {
        toast.success("Анкета успешно отправлена!");
        setGameState(config.showRatingResults ? "rating" : "success");
      } else {
        toast.error("Ошибка при отправке. Пожалуйста, попробуйте снова.");
      }
    } catch {
      toast.dismiss(loadingToast);
      toast.error("Произошла ошибка. Пожалуйста, попробуйте позже.");
    }
  };

  const handleRetry = () => {
    initializeQuiz();
  };

  return (
    <>
      {gameState === "start" && <StartScreen onStart={handleStart} />}

      {gameState === "quiz" && shuffledQuestions.length > 0 && (
        <QuestionScreen
          question={shuffledQuestions[currentQuestion]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestion}
          totalQuestions={shuffledQuestions.length}
        />
      )}

      {gameState === "contact" && (
        <ContactScreen onSubmit={handleSubmitContact} />
      )}

      {(gameState === "success" || gameState === "rating") && (
        <ResultScreen
          rating={totalRating}
          showRatingResults={config.showRatingResults}
        />
      )}

      {gameState === "failure" && <FailureScreen onRetry={handleRetry} />}
    </>
  );
};
