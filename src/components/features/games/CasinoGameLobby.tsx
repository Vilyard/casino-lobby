"use client";

import React, { useEffect, useCallback, useState } from "react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/footer/Footer";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Toast } from "@/components/ui/Toast";
import { useFavoritesContext } from "@/contexts/FavoritesContext";
import { useGameStore } from "@/contexts/GameStoreContext";
import { mockGames } from "@/data/mockGames";
import { useFilteredGames } from "@/hooks/useFilteredGames";
import { FilterControls } from "../filters/FilterControls";
import { SearchBar } from "../search/SearchBar";
import { GameGrid } from "./GameGrid";
import { LOADING_DELAY, TOAST_DURATION } from "@/constants";
import { createPlayMessage, createFavoriteMessage } from "@/utils/helpers";

const CasinoGameLobby: React.FC = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const {
    state,
    hasActiveFilters,
    setSearchTerm,
    setCategory,
    toggleFavoritesOnly,
    clearFilters,
    setLoading,
  } = useGameStore();

  const { favorites, favoritesCount, toggleFavorite } = useFavoritesContext();
  const filteredGames = useFilteredGames();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), LOADING_DELAY);
    return () => clearTimeout(timer);
  }, [setLoading]);

  const showToastMessage = useCallback((message: string) => {
    setToastMessage(message);
    setShowToast(true);
  }, []);

  const hideToast = useCallback(() => {
    setShowToast(false);
  }, []);

  const handlePlay = useCallback(
    (gameId: string) => {
      const game = mockGames.find((g) => g.id === gameId);
      if (game) {
        showToastMessage(createPlayMessage(game.name));
      }
    },
    [showToastMessage]
  );

  const handleToggleFavorite = useCallback(
    (gameId: string) => {
      const game = mockGames.find((g) => g.id === gameId);
      const wasFavorite = favorites.includes(gameId);

      toggleFavorite(gameId);

      if (game) {
        showToastMessage(createFavoriteMessage(game.name, !wasFavorite));
      }
    },
    [toggleFavorite, favorites, showToastMessage]
  );

  if (state.isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header favoritesCount={favoritesCount} totalGames={mockGames.length} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <SearchBar
          searchTerm={state.searchTerm}
          onSearchChange={setSearchTerm}
        />

        <FilterControls
          selectedCategory={state.selectedCategory}
          onCategoryChange={setCategory}
          showFavoritesOnly={state.showFavoritesOnly}
          onToggleFavoritesOnly={toggleFavoritesOnly}
          onClearFilters={clearFilters}
          hasActiveFilters={hasActiveFilters}
          games={mockGames}
          favoritesCount={favoritesCount}
        />

        <GameGrid
          games={filteredGames}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onPlay={handlePlay}
          onClearFilters={clearFilters}
          totalGames={mockGames.length}
        />
      </main>

      <Footer />

      <Toast
        message={toastMessage}
        isVisible={showToast}
        onHide={hideToast}
        duration={TOAST_DURATION}
      />
    </div>
  );
};

export default CasinoGameLobby;
