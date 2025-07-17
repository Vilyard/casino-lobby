import React, { useEffect } from "react";
import { TOAST_DURATION, ANIMATION_DURATION } from "@/constants";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onHide: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  isVisible,
  onHide,
  duration = TOAST_DURATION,
}) => {
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(onHide, duration);
    return () => clearTimeout(timer);
  }, [isVisible, onHide, duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-down">
      <div
        className="glass bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl shadow-lg transition-all"
        style={{ transitionDuration: `${ANIMATION_DURATION.MEDIUM}ms` }}
      >
        <p className="font-medium">{message}</p>
      </div>
    </div>
  );
};
