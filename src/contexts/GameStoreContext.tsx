"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  ReactNode,
  useCallback,
} from "react";
import { Game, Category } from "../types/game";
import { mockGames } from "../data/mockGames";

interface GameState {
  games: Game[];
  searchTerm: string;
  selectedCategory: Category;
  showFavoritesOnly: boolean;
  isLoading: boolean;
}

type GameAction =
  | { type: "SET_SEARCH_TERM"; payload: string }
  | { type: "SET_CATEGORY"; payload: Category }
  | { type: "TOGGLE_FAVORITES_ONLY" }
  | { type: "CLEAR_FILTERS" }
  | { type: "SET_LOADING"; payload: boolean };

interface GameStoreContextType {
  state: GameState;
  hasActiveFilters: boolean;
  dispatch: React.Dispatch<GameAction>;
  setSearchTerm: (term: string) => void;
  setCategory: (category: Category) => void;
  toggleFavoritesOnly: () => void;
  clearFilters: () => void;
  setLoading: (loading: boolean) => void;
}

const initialState: GameState = {
  games: mockGames,
  searchTerm: "",
  selectedCategory: "all",
  showFavoritesOnly: false,
  isLoading: false,
};

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "TOGGLE_FAVORITES_ONLY":
      return { ...state, showFavoritesOnly: !state.showFavoritesOnly };
    case "CLEAR_FILTERS":
      return {
        ...state,
        searchTerm: "",
        selectedCategory: "all",
        showFavoritesOnly: false,
      };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

const GameStoreContext = createContext<GameStoreContextType | undefined>(
  undefined
);

interface GameStoreProviderProps {
  children: ReactNode;
}

export const GameStoreProvider: React.FC<GameStoreProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const setSearchTerm = useCallback((term: string) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: term });
  }, []);

  const setCategory = useCallback((category: Category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
  }, []);

  const toggleFavoritesOnly = useCallback(() => {
    dispatch({ type: "TOGGLE_FAVORITES_ONLY" });
  }, []);

  const clearFilters = useCallback(() => {
    dispatch({ type: "CLEAR_FILTERS" });
  }, []);

  const setLoading = useCallback((loading: boolean) => {
    dispatch({ type: "SET_LOADING", payload: loading });
  }, []);

  const hasActiveFilters = useMemo(() => {
    return (
      state.searchTerm !== "" ||
      state.selectedCategory !== "all" ||
      state.showFavoritesOnly
    );
  }, [state.searchTerm, state.selectedCategory, state.showFavoritesOnly]);

  const value = useMemo<GameStoreContextType>(
    () => ({
      state,
      hasActiveFilters,
      dispatch,
      setSearchTerm,
      setCategory,
      toggleFavoritesOnly,
      clearFilters,
      setLoading,
    }),
    [
      state,
      hasActiveFilters,
      setSearchTerm,
      setCategory,
      toggleFavoritesOnly,
      clearFilters,
      setLoading,
    ]
  );

  return (
    <GameStoreContext.Provider value={value}>
      {children}
    </GameStoreContext.Provider>
  );
};

export const useGameStore = () => {
  const context = useContext(GameStoreContext);
  if (context === undefined) {
    throw new Error("useGameStore must be used within a GameStoreProvider");
  }
  return context;
};
