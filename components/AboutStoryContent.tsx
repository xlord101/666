"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScooterSvg } from "./Motifs";

export function AboutStoryContent() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="space-y-12">
      {/* Brand Narrative Block */}
      <div className="bg-cream border border-gold/40 rounded-3xl p-8 sm:p-12 shadow-card">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink tracking-wide mb-6">
          TWO WORLDS, ONE EXTRAORDINARY TABLE
        </h2>

        <div className="space-y-5 font-body text-ink/80 text-base sm:text-lg leading-relaxed">
          <p>
            Kolhapur has never been a city of compromises. From the regal corridors of the New Palace to the crackling charcoal sigris that scent the historic streets, food here is a cultural legacy crafted with fierce pride, unyielding warmth, and centuries of mastery.
          </p>

          <p>
            Yet in our fast-paced modern lives, we often find ourselves caught between two moods: the deep craving for slow-simmered, spice-infused regional dishes that satisfy the soul, and the longing for a sunlit, breezy cafe table where one can nurse an artisan iced espresso and savor handmade pastry without rushing.
          </p>

          <p className="font-medium text-ink">
            <strong>House of 666 — Resto &amp; Cafe</strong> was founded right here in Tarabai Park to bridge these worlds.
          </p>

          <p>
            We set out to curate an atmosphere where a guest can start the afternoon with a sparkling Virgin Mojito or Lotus Biscoff shake, order crispy Tomato Ocean Bruschetta, transition into a feast of Murgh Sikandar Kebabs and Mutton Ghee Roast, and finish with live table-side Tiramisu or Portuguese Serradura.
          </p>
        </div>
      </div>

      {/* Scooter Illustration with ONE-TIME Scroll-triggered Drive-in Animation */}
      <div className="py-8 overflow-hidden relative border-y border-gold/20 bg-cream/40 rounded-2xl px-4 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center">
          <p className="font-accent text-gold text-xl sm:text-2xl italic mb-3">
            Riding through the streets of Tarabai Park &bull; Fresh flavours arriving daily
          </p>

          <motion.div
            initial={reducedMotion ? { x: 0, opacity: 1 } : { x: -180, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1.1,
              ease: [0.25, 1, 0.5, 1], // smooth deceleration curve
            }}
            className="flex items-center justify-center text-gold py-2"
          >
            <ScooterSvg className="w-28 sm:w-36 h-20 sm:h-24 text-gold" />
          </motion.div>

          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent rounded-full mt-1" />
        </div>
      </div>

      {/* Culinary Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-cream border border-gold/25 rounded-2xl p-7 shadow-card">
          <h3 className="font-heading uppercase tracking-widest text-sm font-bold text-gold mb-3">
            The Royal Kitchen
          </h3>
          <p className="font-body text-sm sm:text-base text-ink/80 leading-relaxed">
            Our tandoor and curry masters guard age-old recipes: mutton simmered in copper lagans, hand-rolled laccha parathas, and spice rubs infused with authentic Byadagi and Kolhapuri lavangi chillies that deliver warmth without losing nuance.
          </p>
        </div>

        <div className="bg-cream border border-gold/25 rounded-2xl p-7 shadow-card">
          <h3 className="font-heading uppercase tracking-widest text-sm font-bold text-gold mb-3">
            The Coastal Cafe Counter
          </h3>
          <p className="font-body text-sm sm:text-base text-ink/80 leading-relaxed">
            Behind our beverage bar, espresso beans are ground to order, milkshakes are whipped thick with genuine Lotus Biscoff and Nutella, and signature coolers balance muddled fresh mint and sparkling citrus soda.
          </p>
        </div>
      </div>
    </div>
  );
}
