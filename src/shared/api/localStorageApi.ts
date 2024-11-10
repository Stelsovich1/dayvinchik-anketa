import type { GameState, QuizData, UserAnswer } from "../types";

const STORAGE_KEY = "quiz_state";

interface StorageState {
  gameState: GameState;
  currentQuestion: number;
  totalRating: number;
  userAnswers: UserAnswer[];
  formData?: Partial<QuizData>;
}

/**
 * API для работы с локальным хранилищем
 */
export const storage = {
  save: (state: StorageState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  },

  load: (): StorageState | null => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error loading from localStorage:", error);
      return null;
    }
  },

  clear: () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  },
};
