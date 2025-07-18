import React from "react";
import { FilterButtonProps } from "@/types/game";
import { ANIMATION_DURATION } from "@/constants";

export const FilterButton: React.FC<FilterButtonProps> = ({
  active,
  onClick,
  children,
  count,
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative px-6 py-3 rounded-2xl text-sm font-bold transition-all transform hover:scale-105 border ${
        active
          ? "btn-casino-primary casino-glow shadow-2xl scale-105"
          : "glass border-yellow-400/20 text-yellow-200/80 hover:text-yellow-100 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/20"
      }`}
      style={{ transitionDuration: `${ANIMATION_DURATION.MEDIUM}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative flex items-center space-x-3">
        <span className="text-xl drop-shadow-lg">{children}</span>

        {count !== undefined && (
          <span
            className={`text-xs px-3 py-1 rounded-full font-black border shadow-lg ${
              active
                ? "bg-black/30 text-yellow-200 border-yellow-400/50"
                : "bg-yellow-400/10 text-yellow-400 border-yellow-400/30 group-hover:bg-yellow-400/20 group-hover:border-yellow-400/50"
            }`}
          >
            {count}
          </span>
        )}
      </div>

      {active && (
        <>
          <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-yellow-300/50 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-yellow-300/50 rounded-br-2xl"></div>
        </>
      )}
    </button>
  );
};
