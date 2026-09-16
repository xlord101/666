import React, { Suspense } from "react";
import { Metadata } from "next";
import { MenuContent } from "@/components/MenuContent";

export const metadata: Metadata = {
  title: "Food & Brew Menu — House of 666 Resto & Cafe",
  description:
    "Explore the complete menu of House of 666 in Tarabai Park, Kolhapur. Authentic Kolhapuri tandoor kebabs, mutton curries, Chinese starters, fresh coffees, shakes, coolers, and handmade desserts.",
};

export default function MenuPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center bg-cream">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-3 border-gold border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="font-heading uppercase tracking-widest text-sm text-gold font-medium">
              Loading Royal Menu...
            </p>
          </div>
        </div>
      }
    >
      <MenuContent />
    </Suspense>
  );
}
