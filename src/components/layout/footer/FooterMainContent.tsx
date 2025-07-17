import React, { useEffect, useState } from "react";
import { FOOTER_MAIN_MESSAGES } from "@/constants";

export const FooterMainContent: React.FC = () => {
  const [estYear, setEstYear] = useState(2024);
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setEstYear(currentYear - 1);
  }, []);

  const navigationLinks = [
    "Casino Games",
    "Live Dealers",
    "Tournaments",
    "VIP Club",
  ];
  const socialLinks = [
    { icon: "🐦", label: "Twitter", glow: "hover:casino-glow" },
    { icon: "📘", label: "Facebook", glow: "hover:casino-glow-purple" },
    { icon: "📷", label: "Instagram", glow: "hover:casino-glow-red" },
  ];
  const supportLinks = ["24/7 Support", "Responsible Gaming", "Security"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div className="text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
          <div className="text-4xl animate-pulse-glow">🎰</div>
          <div>
            <h3 className="text-2xl font-bold text-gradient-casino">
              {FOOTER_MAIN_MESSAGES.ROYAL_CASINO}
            </h3>
            <p className="text-yellow-400/80 text-sm font-medium">
              {FOOTER_MAIN_MESSAGES.PREMIUM_GAMING_EXCELLENCE}
            </p>
          </div>
        </div>
        <div className="vip-badge inline-block">
          <span className="text-xs font-black tracking-wider">
            {FOOTER_MAIN_MESSAGES.EST} {estYear}
          </span>
        </div>
      </div>

      <div className="text-center">
        <h4 className="text-yellow-400 font-bold mb-4 text-lg">
          {FOOTER_MAIN_MESSAGES.GAMING_HUB}
        </h4>
        <div className="space-y-3">
          {navigationLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block text-yellow-200/70 hover:text-yellow-100 transition-colors duration-300 font-medium hover:scale-105 transform"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="text-center md:text-right">
        <h4 className="text-yellow-400 font-bold mb-4 text-lg">
          {FOOTER_MAIN_MESSAGES.CONNECT}
        </h4>
        <div className="flex justify-center md:justify-end space-x-4 mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href="#"
              className={`glass p-3 rounded-full text-2xl transition-all duration-300 transform hover:scale-110 border-yellow-400/20 hover:border-yellow-400/50 ${social.glow}`}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="space-y-2">
          {supportLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="block text-yellow-200/70 hover:text-yellow-100 transition-colors duration-300 font-medium text-sm"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
