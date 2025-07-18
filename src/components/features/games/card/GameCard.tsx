import React, { memo, useMemo } from "react";

import { GameCardProps } from "@/types/game";
import {
  getCategoryIcon,
  getCategoryColor,
  formatRating,
  createAriaLabel,
} from "@/utils/helpers";
import { ARIA_LABELS } from "@/constants";
import { GameCardHeader } from "./GameCardHeader";
import { GameCardContent } from "./GameCardContent";

export const GameCard = memo<GameCardProps>(
  ({ game, isFavorite, onToggleFavorite, onPlay }) => {
    const categoryColor = useMemo(
      () => getCategoryColor(game.category),
      [game.category]
    );
    const categoryIcon = useMemo(
      () => getCategoryIcon(game.category),
      [game.category]
    );
    const formattedRating = useMemo(
      () => formatRating(game.rating),
      [game.rating]
    );

    const playAriaLabel = useMemo(
      () => createAriaLabel(ARIA_LABELS.PLAY_GAME, game.name),
      [game.name]
    );
    const favoriteAriaLabel = useMemo(
      () =>
        isFavorite ? ARIA_LABELS.REMOVE_FAVORITE : ARIA_LABELS.ADD_FAVORITE,
      [isFavorite]
    );

    const starRating = useMemo(() => {
      return Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`text-lg ${
            i < Math.floor(game.rating)
              ? "text-yellow-400 drop-shadow-lg"
              : "text-gray-600"
          }`}
          aria-hidden="true"
        >
          ⭐
        </span>
      ));
    }, [game.rating]);

    return (
      <article className="casino-card group touch-manipulation relative">
        <GameCardHeader
          game={game}
          categoryIcon={categoryIcon}
          categoryColor={categoryColor}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          onPlay={onPlay}
          favoriteAriaLabel={favoriteAriaLabel}
          playAriaLabel={playAriaLabel}
        />

        <GameCardContent
          game={game}
          formattedRating={formattedRating}
          starRating={starRating}
          onPlay={onPlay}
          playAriaLabel={playAriaLabel}
        />

        <div
          className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-yellow-400/30 rounded-tl-2xl"
          aria-hidden="true"
        ></div>
        <div
          className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-yellow-400/30 rounded-br-2xl"
          aria-hidden="true"
        ></div>
      </article>
    );
  }
);

GameCard.displayName = "GameCard";
