/**
 * Общие типы данных приложения
 */

/** Возможные состояния игры */
export type GameState =
  | "start"
  | "quiz"
  | "contact"
  | "success"
  | "failure"
  | "rating";

/** Ответ пользователя на вопрос */
export interface UserAnswer {
  /** Текст вопроса */
  question: string;
  /** Выбранный ответ */
  answer: string;
  /** Полученные баллы */
  rating: number;
}

/** Данные пользователя для отправки */
export interface QuizData {
  /** Имя пользователя */
  name: string;
  /** Telegram пользователя */
  telegram: string;
  /** Фотография пользователя */
  photo: File | null;
  /** Набранные баллы */
  rating: number;
  /** История ответов */
  answers: UserAnswer[];
  /** О себе */
  about?: string;
}
