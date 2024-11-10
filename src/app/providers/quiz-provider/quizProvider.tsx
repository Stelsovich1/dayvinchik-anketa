import React, { createContext, Dispatch, useState } from "react";
import type { GameState } from "../../../shared/types";
import { config } from "../../config";

interface QuizContextType {
  gameState: GameState;
  setGameState: Dispatch<React.SetStateAction<GameState>>;
  totalRating: number;
  setTotalRating: Dispatch<React.SetStateAction<number>>;
  config: typeof config;
}

export const QuizContext = createContext<QuizContextType | undefined>(
  undefined,
);

/**
 * Провайдер состояния квиза
 */
export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [gameState, setGameState] = useState<GameState>("start");
  const [totalRating, setTotalRating] = useState(0);

  return (
    <QuizContext.Provider
      value={{
        gameState,
        setGameState,
        totalRating,
        setTotalRating,
        config,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
