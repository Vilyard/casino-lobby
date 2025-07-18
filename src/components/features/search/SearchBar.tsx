import React from "react";
import { PLACEHOLDER_MESSAGES } from "@/constants";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  placeholder = PLACEHOLDER_MESSAGES.SEARCH,
}) => {
  return (
    <div className="relative group max-w-2xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-yellow-400/30 to-yellow-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"></div>
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-lg">
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
          <span className="text-yellow-400 text-2xl">🔍</span>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-16 pr-16 py-6 bg-transparent text-white text-lg font-medium placeholder-yellow-200/60 border-none outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 relative z-20"
          style={{
            backgroundColor: "transparent",
            WebkitAppearance: "none",
            MozAppearance: "textfield",
          }}
          aria-label="Search games by name or provider"
          autoComplete="off"
          spellCheck="false"
        />

        {searchTerm && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-red-500/20 hover:bg-red-500/40 text-red-400 hover:text-red-300 transition-all duration-300 border border-red-500/30 hover:border-red-400/50"
            aria-label="Clear search"
            type="button"
          >
            <span className="text-lg font-bold">✕</span>
          </button>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent pointer-events-none"></div>
      </div>

      <div className="absolute -top-2 left-8 w-4 h-4 bg-yellow-400/20 rounded-full blur-sm animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-2 right-8 w-3 h-3 bg-purple-400/20 rounded-full blur-sm animate-pulse delay-1000 pointer-events-none"></div>
    </div>
  );
};
