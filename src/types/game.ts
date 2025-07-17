export interface Game {
  id: string;
  name: string;
  provider: string;
  category: "slots" | "table" | "live";
  rating: number;
  isNew?: boolean;
  isPopular?: boolean;
}

export type Category = "all" | "slots" | "table" | "live";

export interface FilterState {
  searchTerm: string;
  selectedCategory: Category;
  showFavoritesOnly: boolean;
}

export interface GameCardProps {
  game: Game;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onPlay: (id: string) => void;
}

export interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  count?: number;
}
