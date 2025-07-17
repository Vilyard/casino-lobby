import React, { useState, useEffect } from "react";
import { FOOTER_BOTTOM_MESSAGES } from "@/constants";

export const FooterBottomSection: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Fair Play",
  ];

  return (
    <>
      <div className="border-t border-yellow-400/20 pt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
          <div className="text-center sm:text-left">
            <p className="text-yellow-200/60 font-medium">
              © <span id="copyright-year">{currentYear}</span>
              {FOOTER_BOTTOM_MESSAGES.ROYAL_CASINO_CRAFTED}
            </p>
            <p className="text-yellow-400/40 text-xs mt-1">
              {FOOTER_BOTTOM_MESSAGES.PREMIUM_GAMING_EXPERIENCE}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs">
            {legalLinks.map((legal) => (
              <a
                key={legal}
                href="#"
                className="text-yellow-300/50 hover:text-yellow-200 transition-colors duration-300 font-medium hover:underline"
              >
                {legal}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 glass rounded-2xl p-6 border-yellow-400/20 casino-glow-red bg-gradient-to-r from-red-500/5 to-orange-500/5">
          <div className="text-center">
            <div className="text-2xl mb-2">⚠️</div>
            <p className="text-yellow-200/90 text-sm font-medium leading-relaxed">
              <strong>{FOOTER_BOTTOM_MESSAGES.PLAY_RESPONSIBLY}:</strong>
              {FOOTER_BOTTOM_MESSAGES.PLAY_RESPONSIBLY_DETAILS}
            </p>
            <div className="mt-3 flex justify-center space-x-4 text-xs">
              <span className="text-yellow-400/70">
                {FOOTER_BOTTOM_MESSAGES.OVER18_ONLY}
              </span>
              <span className="text-yellow-400/70">•</span>
              <span className="text-yellow-400/70">
                {FOOTER_BOTTOM_MESSAGES.LICENSED_REGULATED}
              </span>
              <span className="text-yellow-400/70">•</span>
              <span className="text-yellow-400/70">
                {FOOTER_BOTTOM_MESSAGES.SECURE_GAMING}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
