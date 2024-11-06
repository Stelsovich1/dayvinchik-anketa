/**
 * Провайдер состояния квиза
 */
import React, { createContext, useContext, useState } from 'react';
import type { GameState } from '../../../shared/types';
import { config } from '../../config';

interface QuizContextType {
  gameState: GameState;
  setGameState: (state: GameState) => void;
  totalRating: number;
  setTotalRating: (rating: number) => void;
  config: typeof config;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [totalRating, setTotalRating] = useState(0);

  return (
    <QuizContext.Provider 
      value={{ 
        gameState, 
        setGameState, 
        totalRating, 
        setTotalRating,
        config 
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};