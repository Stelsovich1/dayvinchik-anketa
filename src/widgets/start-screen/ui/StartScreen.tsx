/**
 * Экран начала квиза
 */
import React from 'react';
import { Heart } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80"
          alt="Profile"
          className="w-48 h-48 object-cover rounded-full mx-auto shadow-xl border-4 border-white"
        />
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Привет! Я Алиса 👋</h1>
        <p className="text-gray-600 mb-6">
          Мне 25 лет, я творческая личность, обожаю путешествия и новые впечатления. 
          Ищу человека, с которым можно разделить яркие моменты жизни. Верю в искренность, 
          честность и глубокие чувства. Если ты разделяешь эти ценности - давай познакомимся!
        </p>
      </div>

      <button
        onClick={onStart}
        className="group relative px-8 py-4 text-xl font-bold text-white rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 animate-gradient" />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
        <div className="relative flex items-center gap-2">
          <Heart className="w-6 h-6 animate-pulse" />
          Начать знакомство
          <Heart className="w-6 h-6 animate-pulse" />
        </div>
      </button>
    </div>
  );
};