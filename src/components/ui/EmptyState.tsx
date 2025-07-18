import React from "react";
import { PLACEHOLDER_MESSAGES, ANIMATION_DURATION } from "@/constants";

interface EmptyStateProps {
  onClearFilters: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onClearFilters }) => {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 px-4">
      <div className="text-center max-w-md">
        <div className="relative mb-8">
          <div className="w-32 h-32 glass rounded-full flex items-center justify-center border-casino-glow relative overflow-hidden mx-auto">
            <div className="text-8xl animate-float">🔍</div>

            <div className="absolute top-2 right-4 text-2xl animate-pulse opacity-60">
              🎰
            </div>
            <div className="absolute bottom-4 left-2 text-2xl animate-pulse delay-500 opacity-60">
              🎲
            </div>
            <div className="absolute top-1/2 left-0 text-xl animate-pulse delay-1000 opacity-40">
              💎
            </div>
          </div>

          <div className="absolute inset-0 casino-glow-purple rounded-full blur-2xl opacity-30"></div>
        </div>

        <h3 className="text-3xl font-bold text-gradient-casino mb-4">
          {PLACEHOLDER_MESSAGES.NO_GAMES_FOUND}
        </h3>

        <div className="glass rounded-2xl p-6 mb-8 border-casino-glow">
          <p className="text-yellow-200/80 text-center leading-relaxed">
            {PLACEHOLDER_MESSAGES.NO_GAMES}
          </p>
        </div>

        <button
          onClick={onClearFilters}
          className="btn-casino-primary px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-110 shadow-2xl casino-glow flex items-center gap-3 mx-auto group"
          style={{ transitionDuration: `${ANIMATION_DURATION.MEDIUM}ms` }}
        >
          <span className="text-2xl group-hover:animate-spin">🔄</span>
          <span className="tracking-wide">
            {PLACEHOLDER_MESSAGES.RESET_FILTERS}
          </span>
          <span className="text-xl">✨</span>
        </button>

        <div className="mt-8 flex justify-center space-x-4 opacity-40">
          <div className="text-2xl animate-pulse">🎯</div>
          <div className="text-2xl animate-pulse delay-300">🏆</div>
          <div className="text-2xl animate-pulse delay-600">💰</div>
        </div>
      </div>
    </div>
  );
};
