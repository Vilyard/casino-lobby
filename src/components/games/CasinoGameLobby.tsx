"use client";

import React, { useCallback, useState } from "react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/footer/Footer";
import { Toast } from "@/components/ui/Toast";
import { mockGames } from "@/data/mockGames";
import { TOAST_DURATION } from "@/constants";

export const CasinoGameLobby: React.FC = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const showToastMessage = useCallback((message: string) => {
    setToastMessage(message);
    setShowToast(true);
  }, []);

  const hideToast = useCallback(() => {
    setShowToast(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header favoritesCount={0} totalGames={mockGames.length} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8"></main>

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
