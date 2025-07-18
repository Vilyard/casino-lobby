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
  favoriteAriaLabel: string;
  playAriaLabel: string;
}

export const GameCardHeader: React.FC<GameCardHeaderProps> = ({
  game,
  categoryIcon,
  categoryColor,
  isFavorite,
  onToggleFavorite,
  onPlay,
  favoriteAriaLabel,
  playAriaLabel,
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
        role="img"
        aria-label={`${game.name} ${game.category} game icon`}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20"
          aria-hidden="true"
        ></div>
        <div className="relative z-10 drop-shadow-2xl" aria-hidden="true">
          {categoryIcon}
        </div>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        aria-hidden="true"
      ></div>

      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <span
          className={`px-3 py-1.5 rounded-full text-xs font-bold border backdrop-blur-md ${categoryColor} shadow-lg`}
          role="badge"
          aria-label={`Category: ${game.category}`}
        >
          {game.category.charAt(0).toUpperCase() + game.category.slice(1)}
        </span>

        {game.isNew && (
          <span
            className="px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-black border border-yellow-300 backdrop-blur-md flex items-center gap-1.5 shadow-lg casino-glow"
            role="badge"
            aria-label="New game"
          >
            <span className="text-sm" aria-hidden="true">
              ✨
            </span>
            <span>{GAME_CARD_HEADER.NEW}</span>
          </span>
        )}

        {game.isPopular && (
          <span
            className="px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white border border-orange-400 backdrop-blur-md flex items-center gap-1.5 shadow-lg casino-glow-red"
            role="badge"
            aria-label="Popular game"
          >
            <span className="text-sm" aria-hidden="true">
              🔥
            </span>
            <span>{GAME_CARD_HEADER.HOT}</span>
          </span>
        )}
      </div>

      <button
        onClick={handleFavoriteClick}
        className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all duration-300 text-xl z-20 touch-manipulation border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
          isFavorite
            ? "bg-gradient-to-r from-red-500 to-pink-500 border-red-400 shadow-lg shadow-red-500/30 scale-110 casino-glow-red"
            : "bg-gradient-to-r from-white/20 to-white/10 border-white/30 hover:bg-gradient-to-r hover:from-white/30 hover:to-white/20 hover:scale-110 hover:shadow-lg"
        }`}
        aria-label={favoriteAriaLabel}
        aria-pressed={isFavorite}
        type="button"
      >
        <span className="drop-shadow-lg" aria-hidden="true">
          {isFavorite ? "❤️" : "🤍"}
        </span>
        <span className="sr-only">
          {isFavorite
            ? `Remove ${game.name} from favorites`
            : `Add ${game.name} to favorites`}
        </span>
      </button>

      <div className="absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 hidden md:flex">
        <button
          onClick={handlePlayClick}
          className="btn-casino-primary p-6 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl text-3xl casino-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-yellow-400"
          aria-label={playAriaLabel}
          type="button"
        >
          <span className="drop-shadow-lg" aria-hidden="true">
            ▶️
          </span>
          <span className="sr-only">
            {GAME_CARD_HEADER.PLAY} {game.name}
          </span>
        </button>
      </div>

      <div
        className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-yellow-400/20 to-transparent rounded-tl-full"
        aria-hidden="true"
      ></div>
    </div>
  );
};
