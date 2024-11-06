/**
 * Типы данных для результатов рейтинга
 */

/** Структура результата рейтинга */
export interface RatingResult {
  /** URL изображения для результата */
  image: string;
  /** Заголовок результата */
  title: string;
  /** Описание результата */
  description: string;
  /** Диапазон баллов [мин, макс] */
  range: [number, number];
}