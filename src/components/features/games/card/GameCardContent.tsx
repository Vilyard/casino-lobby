import React from "react";

import { Game } from "@/types/game";
import { GAME_CARD_CONTEXT } from "@/constants";

interface GameCardContentProps {
  game: Game;
  formattedRating: string;
  starRating: React.ReactNode[];
  onPlay: (gameId: string) => void;
}

export const GameCardContent: React.FC<GameCardContentProps> = ({
  game,
  formattedRating,
  starRating,
  onPlay,
}) => {
  const handlePlayClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onPlay(game.id);
  };

  return (
    <div className="p-6 bg-casino-card border-t border-yellow-400/10">
      <header className="mb-4">
        <h3 className="font-bold text-xl text-white mb-2 group-hover:text-gradient-casino transition-all duration-500">
          {game.name}
        </h3>
        <p className="text-yellow-200 text-sm font-medium group-hover:text-yellow-100 transition-colors duration-300">
          {GAME_CARD_CONTEXT.BY} {game.provider}
        </p>
      </header>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="flex">{starRating}</div>
          <span className="text-yellow-400 text-sm font-bold">
            {formattedRating}
          </span>
        </div>
        <div className="text-xs text-yellow-400/60 font-medium">
          {GAME_CARD_CONTEXT.PREMIUM}
        </div>
      </div>

      <button
        onClick={handlePlayClick}
        className="w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform active:scale-95 hover:scale-105 btn-casino-primary flex items-center justify-center gap-3 shadow-xl casino-glow touch-manipulation"
        type="button"
      >
        <span className="text-2xl">🎯</span>
        <span className="tracking-wide">{GAME_CARD_CONTEXT.PLAY_NOW}</span>
        <span className="text-xl">💰</span>
      </button>
    </div>
  );
};
