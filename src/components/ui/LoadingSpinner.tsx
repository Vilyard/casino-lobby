import React from "react";
import { PLACEHOLDER_MESSAGES, SPINNER_MESSAGES } from "@/constants";

interface LoadingSpinnerProps {
  message?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = PLACEHOLDER_MESSAGES.LOADING,
}) => {
  return (
    <div className="min-h-screen bg-casino-dark flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="text-center relative z-10">
        <div className="relative mb-8">
          <div className="casino-spinner w-20 h-20 mx-auto mb-4 shadow-2xl casino-glow"></div>

          <div className="absolute -top-4 -left-4 text-3xl animate-float">
            🎰
          </div>
          <div className="absolute -top-4 -right-4 text-3xl animate-float delay-1000">
            🎲
          </div>
          <div className="absolute -bottom-4 -left-4 text-3xl animate-float delay-500">
            🃏
          </div>
          <div className="absolute -bottom-4 -right-4 text-3xl animate-float delay-1500">
            💎
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gradient-casino mb-2 animate-pulse-glow">
          {SPINNER_MESSAGES.ROYAL_CASINO}
        </h2>
        <p className="text-lg font-medium text-gradient mb-6">{message}</p>

        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-bounce shadow-lg casino-glow"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-bounce-delay-75 shadow-lg casino-glow"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-bounce-delay-150 shadow-lg casino-glow"></div>
        </div>

        <div className="mt-8 glass rounded-2xl px-6 py-3 border-casino-glow">
          <p className="text-yellow-200/80 text-sm font-medium">
            ✨ {SPINNER_MESSAGES.PREPARING_VIP} ✨
          </p>
        </div>
      </div>
    </div>
  );
};
