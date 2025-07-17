import React from "react";

import { Game } from "@/types/game";
import { GAME_CARD_HEADER } from "@/constants";

interface GameCardHeaderProps {
  game: Game;
  categoryIcon: string;
  categoryColor: string;
  isFavorite: boolean;
  onToggleFavorite: (gameId: string) => void;
  onPlay: (gameId: string) => void;
}

export const GameCardHeader: React.FC<GameCardHeaderProps> = ({
  game,
  categoryIcon,
  categoryColor,
  isFavorite,
  onToggleFavorite,
  onPlay,
}) => {
  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onToggleFavorite(game.id);
  };

  const handlePlayClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onPlay(game.id);
  };

  return (
    <div className="relative h-52 overflow-hidden rounded-t-2xl">
      <div
        className={`w-full h-full flex items-center justify-center text-7xl transition-all duration-700 group-hover:scale-110 relative ${
          game.category === "slots"
            ? "bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800"
            : game.category === "table"
            ? "bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-800"
            : "bg-gradient-to-br from-red-600 via-pink-600 to-red-800"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20"></div>
        <div className="relative z-10 drop-shadow-2xl">{categoryIcon}</div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <span
          className={`px-3 py-1.5 rounded-full text-xs font-bold border backdrop-blur-md ${categoryColor} shadow-lg`}
        >
          {game.category.charAt(0).toUpperCase() + game.category.slice(1)}
        </span>

        {game.isNew && (
          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-black border border-yellow-300 backdrop-blur-md flex items-center gap-1.5 shadow-lg casino-glow">
            <span className="text-sm">✨</span>
            <span>{GAME_CARD_HEADER.NEW}</span>
          </span>
        )}

        {game.isPopular && (
          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white border border-orange-400 backdrop-blur-md flex items-center gap-1.5 shadow-lg casino-glow-red">
            <span className="text-sm">🔥</span>
            <span>{GAME_CARD_HEADER.HOT}</span>
          </span>
        )}
      </div>

      <button
        onClick={handleFavoriteClick}
        className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all duration-300 text-xl z-20 touch-manipulation border ${
          isFavorite
            ? "bg-gradient-to-r from-red-500 to-pink-500 border-red-400 shadow-lg shadow-red-500/30 scale-110 casino-glow-red"
            : "bg-gradient-to-r from-white/20 to-white/10 border-white/30 hover:bg-gradient-to-r hover:from-white/30 hover:to-white/20 hover:scale-110 hover:shadow-lg"
        }`}
        type="button"
      >
        <span className="drop-shadow-lg">{isFavorite ? "❤️" : "🤍"}</span>
      </button>

      <div className="absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 hidden md:flex">
        <button
          onClick={handlePlayClick}
          className="btn-casino-primary p-6 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl text-3xl casino-glow"
          type="button"
        >
          <span className="drop-shadow-lg">▶️</span>
        </button>
      </div>

      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-yellow-400/20 to-transparent rounded-tl-full"></div>
    </div>
  );
};
