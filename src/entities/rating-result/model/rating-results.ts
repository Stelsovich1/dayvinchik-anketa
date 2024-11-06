import type { RatingResult } from "./types";

/**
 * База результатов по рейтингу на основе ответов
 */
export const ratingResults: RatingResult[] = [
  {
    range: [0, 10],
    image:
      "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800&auto=format&fit=crop&q=80",
    title: "Болотная Баба",
    description:
      "По моему мнению, вы - Болотная баба... Мы с вами никак не сопоставимы и не сможем существовать вместе.",
  },
  {
    range: [91, 100],
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80",
    title: "Само Совершенство",
    description:
      "Вы само совершенство! Мы во всём идеально подходим друг другу, и нас ждет большое будущее.",
  },
  // остальные результаты
];
