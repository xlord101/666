"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyAddressButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/40 text-xs font-semibold text-gold hover:bg-gold hover:text-cream transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
      aria-label="Copy full address to clipboard"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-green-600" />
          <span className="text-green-700">Copied</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}
