/**
 * Конфигурация приложения
 */
export const config = {
  /** Показывать ли экран с результатами рейтинга вместо стандартного экрана успеха */
  showRatingResults: true
} as const;

export type AppConfig = typeof config;