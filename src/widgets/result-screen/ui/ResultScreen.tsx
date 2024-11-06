import React from "react";
import { Heart, Stars } from "lucide-react";
import { ratingResults } from "../../../entities/rating-result";
import type { RatingResult } from "../../../entities/rating-result";

interface ResultScreenProps {
  rating: number;
  showRatingResults: boolean;
}

/**
 * Экран результатов квиза
 */
export const ResultScreen: React.FC<ResultScreenProps> = ({
  rating,
  showRatingResults,
}) => {
  const getResult = (rating: number): RatingResult => {
    return (
      ratingResults.find(
        (result) => rating >= result.range[0] && rating <= result.range[1],
      ) || ratingResults[0]
    );
  };

  if (!showRatingResults) {
    return (
      <div className="text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&auto=format&fit=crop&q=80"
            alt="Cupid"
            className="w-64 h-64 object-cover rounded-full mx-auto shadow-lg"
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-pink-500" />
            Спасибо за внимание!
            <Heart className="w-6 h-6 text-pink-500" />
          </h2>

          <p className="text-gray-600">
            Ваша анкета отправлена. Мы свяжемся с вами в ближайшее время!
          </p>
        </div>
      </div>
    );
  }

  const result = getResult(rating);

  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="relative">
          <img
            src={result.image}
            alt={result.title}
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
          {/* Отображает результат в виде звёзд-рейтинга набранных за заполнение анкеты */}
          <div className="absolute top-4 right-4 bg-white/90 rounded-full px-4 py-2 flex items-center gap-2">
            <Stars className="w-5 h-5 text-yellow-500" />
            <span className="font-bold">{rating} / 100</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
          <Heart className="w-6 h-6 text-pink-500" />
          {result.title}
          <Heart className="w-6 h-6 text-pink-500" />
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          {result.description}
        </p>
      </div>
    </div>
  );
};
