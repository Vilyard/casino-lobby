import React, { memo } from "react";

import { GameCardContent } from "./GameCardContent";
import { GameCardHeader } from "./GameCardHeader";
import { GameCardProps } from "@/types/game";
import { getCategoryIcon, getCategoryColor } from "@/utils/helpers";

export const GameCard = memo<GameCardProps>(
  ({ game, isFavorite, onToggleFavorite, onPlay }) => {
    const categoryIcon = getCategoryIcon(game.category);
    const categoryColor = getCategoryColor(game.category);
    const formattedRating = game.rating.toFixed(1);

    const starRating = Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < Math.floor(game.rating)
            ? "text-yellow-400 drop-shadow-lg"
            : "text-gray-600"
        }`}
      >
        ⭐
      </span>
    ));

    return (
      <article className="casino-card group touch-manipulation relative">
        <GameCardHeader
          game={game}
          categoryIcon={categoryIcon}
          categoryColor={categoryColor}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          onPlay={onPlay}
        />

        <GameCardContent
          game={game}
          formattedRating={formattedRating}
          starRating={starRating}
          onPlay={onPlay}
        />

        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-yellow-400/30 rounded-tl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-yellow-400/30 rounded-br-2xl"></div>
      </article>
    );
  }
);

GameCard.displayName = "GameCard";
