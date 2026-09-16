"use client";

import React from "react";
import Link from "next/link";
import { Phone, Navigation, BookOpen } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function MobileActionBar() {
  return (
    <aside
      aria-label="Quick mobile actions"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-cream/95 backdrop-blur-md border-t border-gold/30 shadow-[0_-4px_16px_rgba(26,23,16,0.08)] px-3 py-2"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${siteConfig.primaryPhone}`}
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-ink hover:text-gold active:bg-gold/15 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Call House of 666 directly"
        >
          <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold mb-1">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-medium tracking-wide">Call Us</span>
        </a>

        {/* Get Directions Button */}
        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-ink hover:text-gold active:bg-gold/15 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Get directions to House of 666 in Google Maps"
        >
          <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold mb-1">
            <Navigation className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-medium tracking-wide">Directions</span>
        </a>

        {/* View Menu Button */}
        <Link
          href="/menu"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl bg-gold text-cream hover:bg-bronze active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="View House of 666 Food and Drink Menu"
        >
          <div className="w-8 h-8 rounded-full bg-cream/20 flex items-center justify-center text-cream mb-1">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-wide">View Menu</span>
        </Link>
      </div>
    </aside>
  );
}
