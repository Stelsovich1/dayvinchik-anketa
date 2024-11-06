import React from "react";
import { HeartCrack, RefreshCw } from "lucide-react";

interface FailureScreenProps {
  onRetry: () => void;
}

/**
 * Экран неудачного прохождения квиза
 */
export const FailureScreen: React.FC<FailureScreenProps> = ({ onRetry }) => {
  return (
    <div className="text-center">
      <div className="mb-8">
        <HeartCrack className="w-24 h-24 mx-auto text-pink-500 animate-pulse" />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          К сожалению, коннект не произошел
        </h2>

        <p className="text-gray-600 mb-8">
          Возможно, у нас разные взгляды на отношения. Но не расстраивайся -
          можно попробовать снова, и, возможно, в этот раз мы найдем больше
          общего!
        </p>

        <button
          onClick={onRetry}
          className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg flex items-center justify-center gap-2 hover:from-pink-600 hover:to-red-600 transition-all"
        >
          <RefreshCw className="w-5 h-5" />
          Попробовать снова
        </button>
      </div>
    </div>
  );
};
