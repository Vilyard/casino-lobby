import React from "react";

import { Game } from "@/types/game";
import { GameCard } from "./card/GameCard";
import { GAME_GRID_MESSAGES } from "@/constants";
import { EmptyState } from "../../ui/EmptyState";
import { formatMessage } from "@/utils/helpers";

interface GameGridProps {
  games: Game[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onPlay: (id: string) => void;
  onClearFilters: () => void;
  totalGames: number;
}

export const GameGrid: React.FC<GameGridProps> = ({
  games,
  favorites,
  onToggleFavorite,
  onPlay,
  onClearFilters,
  totalGames,
}) => {
  const isFavorite = (gameId: string): boolean => {
    return favorites.includes(gameId);
  };

  return (
    <div className="space-y-6">
      {games.length > 0 && (
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-lg">🎮</span>
              <span className="text-white font-medium">
                {formatMessage(GAME_GRID_MESSAGES.SHOWING_GAMES, {
                  gamesLength: games.length,
                  totalGames: totalGames,
                })}
              </span>
            </div>
            {games.length !== totalGames && (
              <button
                onClick={onClearFilters}
                className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
              >
                {GAME_GRID_MESSAGES.SHOW_ALL_GAMES}
              </button>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.length === 0 ? (
          <EmptyState onClearFilters={onClearFilters} />
        ) : (
          games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              isFavorite={isFavorite(game.id)}
              onToggleFavorite={onToggleFavorite}
              onPlay={onPlay}
            />
          ))
        )}
      </div>
    </div>
  );
};
