import React from "react";

import { FilterButton } from "@/components/ui/FilterButtons";
import { getCategoryIcon, getCategoryLabel } from "@/utils/helpers";
import { Category, Game } from "@/types/game";
import { FILTER_CONTROLS } from "@/constants";

interface FilterControlsProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  showFavoritesOnly: boolean;
  onToggleFavoritesOnly: () => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  games: Game[];
  favoritesCount: number;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  selectedCategory,
  onCategoryChange,
  showFavoritesOnly,
  onToggleFavoritesOnly,
  onClearFilters,
  hasActiveFilters,
  games,
  favoritesCount,
}) => {
  const categories: Category[] = ["all", "slots", "table", "live"];

  const getCount = (category: Category): number =>
    category === "all"
      ? games.length
      : games.filter((g) => g.category === category).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <span className="text-lg">🔽</span>
        <span className="text-white font-medium">
          {FILTER_CONTROLS.FILTER_GAMES}
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <FilterButton
            key={category}
            active={selectedCategory === category}
            onClick={() => onCategoryChange(category)}
            count={getCount(category)}
          >
            <span className="text-lg">{getCategoryIcon(category)}</span>
            <span>{getCategoryLabel(category)}</span>
          </FilterButton>
        ))}

        <FilterButton
          active={showFavoritesOnly}
          onClick={onToggleFavoritesOnly}
          count={favoritesCount}
        >
          <span className="text-lg">{showFavoritesOnly ? "❤️" : "🤍"}</span>
          <span>{FILTER_CONTROLS.FAVORITES_ONLY}</span>
        </FilterButton>

        {hasActiveFilters && (
          <FilterButton active={false} onClick={onClearFilters}>
            <span className="text-lg">🔄</span>
            <span>{FILTER_CONTROLS.CLEAR_ALL}</span>
          </FilterButton>
        )}
      </div>
    </div>
  );
};
