"use client";

import React from "react";
import { Play } from "lucide-react";

interface ReplayIntroButtonProps {
  className?: string;
  variant?: "pill" | "text" | "icon";
}

export function ReplayIntroButton({
  className = "",
  variant = "pill",
}: ReplayIntroButtonProps) {
  const handleReplay = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("replay-intro"));
    }
  };

  if (variant === "text") {
    return (
      <button
        type="button"
        onClick={handleReplay}
        className={`hover:text-gold transition-colors inline-flex items-center gap-1.5 cursor-pointer ${className}`}
      >
        <Play className="w-3.5 h-3.5 text-gold" />
        <span>Watch Opening Film</span>
      </button>
    );
  }

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={handleReplay}
        className={`p-2 rounded-full border border-gold/40 text-gold hover:bg-gold/15 transition-all cursor-pointer ${className}`}
        title="Play Opening Film"
        aria-label="Play Opening Film"
      >
        <Play className="w-4 h-4 fill-current" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleReplay}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gold/50 bg-cream/70 text-ink text-sm font-semibold hover:bg-gold/15 hover:border-gold transition-all duration-200 cursor-pointer shadow-sm ${className}`}
    >
      <Play className="w-4 h-4 text-gold fill-gold" />
      <span>Play Opening Film</span>
    </button>
  );
}
