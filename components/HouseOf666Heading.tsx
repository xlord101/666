import React from "react";
import Image from "next/image";

interface HouseOf666HeadingProps {
  /** Size variant */
  size?: "hero" | "compact" | "navbar";
  /** Optional layout: inline (HOUSE OF 666 side-by-side) or stacked */
  layout?: "inline" | "stacked" | "responsive";
  /** Additional wrapper classes */
  className?: string;
  /** Whether to use authentic gold foil image texture or vector gradient */
  useFoilTexture?: boolean;
}

/**
 * Authentic vector path for a single '6' stencil digit.
 * dx is the horizontal offset for each digit (0, 259, 518).
 */
const singleSixPath = (dx: number) => `
  M ${dx} 0
  L ${dx + 234} 0
  L ${dx + 234} 260
  L ${dx + 130} 206
  L ${dx + 130} 32
  L ${dx + 106} 32
  L ${dx + 106} 218
  L ${dx + 234} 286
  L ${dx + 234} 489
  L ${dx} 489
  Z
  M ${dx + 103} 288
  L ${dx + 127} 300
  L ${dx + 127} 443
  L ${dx + 103} 443
  Z
`;

/**
 * Authentic '666' Vector SVG glyph matching the House of 666 logo stencil.
 */
export function Brand666Glyphs({
  className = "h-12 sm:h-16 md:h-20 lg:h-24 w-auto",
  useFoil = true,
}: {
  className?: string;
  useFoil?: boolean;
}) {
  if (useFoil) {
    return (
      <span className={`relative inline-block ${className} aspect-[752/489]`}>
        <Image
          src="/brand-666-foil.png"
          alt="666"
          fill
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 240px, 340px"
          className="object-contain filter drop-shadow-[0_4px_12px_rgba(185,139,62,0.35)]"
          priority
        />
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 752 489"
      className={`${className} filter drop-shadow-[0_4px_12px_rgba(185,139,62,0.3)]`}
      fillRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="brandGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F6DF9C" />
          <stop offset="25%" stopColor="#D4AF37" />
          <stop offset="60%" stopColor="#B98B3E" />
          <stop offset="100%" stopColor="#7A5A22" />
        </linearGradient>
      </defs>
      <path fill="url(#brandGoldGradient)" d={singleSixPath(0)} />
      <path fill="url(#brandGoldGradient)" d={singleSixPath(259)} />
      <path fill="url(#brandGoldGradient)" d={singleSixPath(518)} />
    </svg>
  );
}

/**
 * Main Logo-Accurate Heading:
 * - "HOUSE OF" in clean, geometric, luxury sans-serif font (Montserrat) in black (text-ink) with wide tracking.
 * - "666" in the authentic block stencil glyphs in gold leaf foil / gradient.
 */
export function HouseOf666Heading({
  size = "hero",
  layout = "responsive",
  className = "",
  useFoilTexture = true,
}: HouseOf666HeadingProps) {
  if (size === "navbar") {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        <span className="font-brand font-bold text-base sm:text-lg tracking-[0.2em] text-ink uppercase">
          HOUSE OF
        </span>
        <Brand666Glyphs className="h-6 sm:h-7 w-auto" useFoil={useFoilTexture} />
        <span className="sr-only">House of 666</span>
      </div>
    );
  }

  if (size === "compact") {
    return (
      <div className={`flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 ${className}`}>
        <span className="font-brand font-bold text-2xl sm:text-3xl md:text-4xl tracking-[0.22em] text-ink uppercase">
          HOUSE OF
        </span>
        <Brand666Glyphs className="h-8 sm:h-10 md:h-12 w-auto" useFoil={useFoilTexture} />
        <span className="sr-only">House of 666</span>
      </div>
    );
  }

  // Hero size
  return (
    <h1
      className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 md:gap-7 ${className}`}
      aria-label="House of 666"
    >
      <span className="font-brand font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.22em] text-ink uppercase select-none drop-shadow-sm">
        HOUSE OF
      </span>
      <span className="inline-flex items-center justify-center">
        <Brand666Glyphs
          className="h-14 sm:h-18 md:h-22 lg:h-26 xl:h-28 w-auto"
          useFoil={useFoilTexture}
        />
      </span>
      <span className="sr-only">House of 666</span>
    </h1>
  );
}
