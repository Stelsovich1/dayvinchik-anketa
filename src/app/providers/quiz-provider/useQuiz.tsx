import { useContext } from "react";
import { QuizContext } from "./quizProvider.tsx";

/**
 * Контекст QuizProvider
 */
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz может использоваться только внутри QuizProvider");
  }
  return context;
};
