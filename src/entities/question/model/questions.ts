import type { Question } from "./types";

/**
 * База вопросов для квиза
 */
export const questions: Question[] = [
  {
    text: "Что для вас значит настоящая любовь?",
    image:
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800&auto=format&fit=crop&q=80",
    options: [
      { text: "Взаимопонимание и поддержка", correct: true, rating: 10 },
      { text: "Материальные ценности", correct: false, rating: 2 },
      { text: "Только физическое влечение", correct: false, rating: 4 },
    ],
  },
  {
    text: "Как вы представляете идеальное свидание?",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop&q=80",
    options: [
      {
        text: "Романтический ужин и долгие разговоры",
        correct: true,
        rating: 10,
      },
      { text: "Поход в ночной клуб", correct: false, rating: 5 },
      { text: "Просто Netflix and chill", correct: false, rating: 3 },
    ],
  },
  // остальные вопросы здесь
];
