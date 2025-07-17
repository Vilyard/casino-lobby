import React from "react";
import { FooterBottomSection } from "./FooterBottomSection";
import { FooterMainContent } from "./FooterMainContent";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-yellow-400/20 bg-casino-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <FooterMainContent />

        <FooterBottomSection />
      </div>
    </footer>
  );
};
