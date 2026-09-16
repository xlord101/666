"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { MenuItem } from "@/data/menu";

export function SignatureCarousel({ items }: { items: MenuItem[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const offset = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Desktop Navigation Arrows */}
      <div className="hidden md:flex items-center justify-end gap-2 mb-4">
        <button
          type="button"
          onClick={() => scroll("left")}
          className="p-2.5 rounded-full border border-gold/40 text-ink hover:bg-gold hover:text-cream transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Previous signature dishes"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          className="p-2.5 rounded-full border border-gold/40 text-ink hover:bg-gold hover:text-cream transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Next signature dishes"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Horizontally scrollable track */}
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((dish) => (
          <div
            key={dish.id}
            className="flex-shrink-0 w-[290px] sm:w-[320px] bg-cream rounded-2xl border border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col justify-between border-t-4 border-t-gold"
            style={{ scrollSnapAlign: "start" }}
          >
            <div>
              {/* Veg / Non-Veg Indicator & Badges */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-4 h-4 border flex items-center justify-center rounded-[3px] p-[1px] ${
                      dish.veg ? "border-green-600" : "border-red-600"
                    }`}
                    title={dish.veg ? "Vegetarian" : "Non-Vegetarian"}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        dish.veg ? "bg-green-600" : "bg-red-600"
                      }`}
                    />
                  </span>
                  <span className="text-[11px] font-medium text-husk uppercase tracking-wider">
                    {dish.veg ? "Vegetarian" : "Non-Veg"}
                  </span>
                </div>

                {dish.spicy && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-mojito-coral bg-mojito-coral/10 px-2 py-0.5 rounded-full">
                    <Flame className="w-3 h-3 text-mojito-coral" />
                    Spicy
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-xl text-ink tracking-wide mb-2">
                {dish.name}
              </h3>
              <p className="font-body text-xs sm:text-sm text-ink/75 leading-relaxed">
                {dish.description}
              </p>
            </div>

            {/* Price & Action Link */}
            <div className="pt-5 mt-4 border-t border-gold/15 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-semibold text-husk tracking-wider block">
                  Price
                </span>
                <span className="font-display text-xl text-gold tracking-wide">
                  ₹{dish.price}
                </span>
              </div>

                <Link
                href={`/menu`}
                className="text-xs font-semibold px-4 py-2 rounded-full bg-gold/15 text-husk hover:bg-gold hover:text-cream active:scale-95 transition-all duration-200"
              >
                Order in Menu
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Swipe Hint */}
      <div className="md:hidden flex items-center justify-center gap-2 text-[11px] font-medium text-ink/50 mt-2">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
        <span>Swipe horizontally to browse chef specials</span>
      </div>
    </div>
  );
}
