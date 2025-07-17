"use client";

import React, { useCallback, useEffect, useState } from "react";

import GameGrid from "./GameGrid";
import { mockGames } from "@/data/mockGames";
import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/Header";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Toast } from "@/components/ui/Toast";
import { TOAST_DURATION } from "@/constants";

const CasinoGameLobby: React.FC = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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
        showToastMessage(`🎮 Starting ${game.name}! Good luck!`);
      }
    },
    [showToastMessage]
  );

  const handleToggleFavorite = useCallback(
    (gameId: string) => {
      const game = mockGames.find((g) => g.id === gameId);
      const wasFavorite = favorites.includes(gameId);

      if (wasFavorite) {
        setFavorites(favorites.filter((id) => id !== gameId));
      } else {
        setFavorites([...favorites, gameId]);
      }

      if (game) {
        const action = wasFavorite ? "removed from" : "added to";
        showToastMessage(`${game.name} ${action} favorites!`);
      }
    },
    [favorites, showToastMessage]
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-black">
      <Header favoritesCount={favorites.length} totalGames={mockGames.length} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <GameGrid
          games={mockGames}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onPlay={handlePlay}
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
