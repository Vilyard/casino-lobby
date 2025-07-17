import React from "react";

import { Game } from "@/types/game";
import { GameCard } from "./card/GameCard";
import { PLACEHOLDER_MESSAGES } from "@/constants";

interface GameGridProps {
  games: Game[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onPlay: (id: string) => void;
  totalGames: number;
}

const GameGrid: React.FC<GameGridProps> = ({
  games,
  favorites,
  onToggleFavorite,
  onPlay,
  totalGames,
}) => {
  const isFavorite = (gameId: string): boolean => {
    return favorites.includes(gameId);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <div className="flex items-center space-x-3">
          <span className="text-lg">🎮</span>
          <span className="text-white font-medium">
            {totalGames} {PLACEHOLDER_MESSAGES.PREMIUM_CASINO_GAMES}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            isFavorite={isFavorite(game.id)}
            onToggleFavorite={onToggleFavorite}
            onPlay={onPlay}
          />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
