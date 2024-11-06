export interface RatingResult {
  image: string;
  title: string;
  description: string;
  range: [number, number];
}

export interface QuizData {
  name: string;
  telegram: string;
  photo: File | null;
  rating: number;
}

export interface AppConfig {
  showRatingResults: boolean;
}