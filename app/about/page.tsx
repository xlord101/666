import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Utensils, Cake, Crown, Palmtree } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";
import { AboutStoryContent } from "@/components/AboutStoryContent";

export const metadata: Metadata = {
  title: "Our Story & Heritage — House of 666 Resto & Cafe",
  description:
    "Discover the story of House of 666 in Tarabai Park, Kolhapur. The union of Kolhapur's royal culinary heritage with relaxed coastal cafe vibes.",
};

const valuePillars = [
  {
    title: "Fresh Farm Ingredients",
    subtitle: "Locally sourced spices & farm-fresh produce",
    desc: "Every spice blend, from our signature Kolhapuri thecha to fragrant garam masalas, is pounded freshly in-house to preserve intense essential oils and aroma.",
    icon: Utensils,
    borderTop: "border-t-gold",
    iconBg: "bg-gold/15 text-gold",
  },
  {
    title: "Handmade Artisanal Desserts",
    subtitle: "Crafted daily by master pastry chefs",
    desc: "No premixes. From our famous Portuguese Serradura to Lotus Biscoff cheesecakes and live espresso Tiramisu, every dessert is baked from scratch.",
    icon: Cake,
    borderTop: "border-t-dessert-pink",
    iconBg: "bg-dessert-pink/30 text-[#8A3751]",
  },
  {
    title: "Royal Recipe Heritage",
    subtitle: "Centuries of Maratha culinary grandeur",
    desc: "Slow-cooked earthen pot curries, tender mutton ghee roasts, and charcoal tandoor kebabs prepared following historic regional culinary techniques.",
    icon: Crown,
    borderTop: "border-t-bronze",
    iconBg: "bg-bronze/15 text-bronze",
  },
  {
    title: "Coastal Cafe Vibes",
    subtitle: "Breezy afternoons & chilled refreshments",
    desc: "A laid-back sanctuary in Tarabai Park where friends gather over iced caramels, tropical coolers, crispy sea sides, and effortless conversations.",
    icon: Palmtree,
    borderTop: "border-t-shake-teal",
    iconBg: "bg-shake-teal/20 text-[#1C695B]",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* =========================================================================
          HERO HEADER
         ========================================================================= */}
      <section className="bg-transparent border-b border-gold/25 py-14 sm:py-20 text-center px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="font-heading uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold text-gold mb-3">
            Born in Tarabai Park, Kolhapur
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-ink tracking-tight">
            OUR STORY &amp; HERITAGE
          </h1>
          <p className="font-body text-ink/80 text-base sm:text-xl max-w-2xl mx-auto mt-4 leading-relaxed">
            Where Kolhapur&apos;s royal flavours meet a coastal cafe soul.
          </p>
          <SectionDivider className="my-8" />
        </div>
      </section>

      {/* =========================================================================
          STORY COPY BLOCK + ANIMATED SCOOTER SECTION
         ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutStoryContent />
      </section>

      {/* =========================================================================
          4-ICON VALUE GRID
         ========================================================================= */}
      <section className="py-16 sm:py-24 border-t border-gold/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-heading uppercase tracking-widest text-xs sm:text-sm font-semibold text-gold mb-2">
              Our Guiding Principles
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink tracking-wide">
              THE 4 PILLARS OF 666
            </h2>
            <p className="font-body text-ink/75 text-sm sm:text-base mt-2">
              What sets every plate, cup, and moment at House of 666 apart.
            </p>
            <SectionDivider className="my-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`bg-cream p-7 rounded-2xl border border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between border-t-4 ${pillar.borderTop}`}
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${pillar.iconBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-xl text-ink tracking-wide mb-1">
                      {pillar.title}
                    </h3>
                    <p className="font-heading uppercase tracking-wider text-[11px] font-semibold text-gold mb-3">
                      {pillar.subtitle}
                    </p>
                    <p className="font-body text-xs sm:text-sm text-ink/75 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-gold/15 flex items-center text-xs font-semibold text-gold">
                    <Sparkles className="w-3.5 h-3.5 mr-1" />
                    <span>Uncompromising Quality</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          HERITAGE EMBLEM CALLOUT
         ========================================================================= */}
      <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-ink text-cream p-8 sm:p-14 rounded-3xl border-2 border-gold/40 shadow-xl relative overflow-hidden">
          <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gold bg-cream">
            <Image
              src="/logo.png"
              alt="House of 666 Logo"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-cream tracking-wide mb-4">
            EXPERIENCE THE HOUSE OF 666
          </h2>
          <p className="font-body text-cream/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
            Whether you are joining us for a quiet afternoon with your favorite iced latte or gathering the whole family for an unforgettable Kolhapuri banquet, we are honored to serve you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gold text-cream font-semibold text-sm hover:bg-bronze transition-colors shadow-gold"
            >
              <span>Explore The Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-gold/50 text-cream font-semibold text-sm hover:bg-gold hover:text-ink transition-colors"
            >
              <span>Reserve Your Table</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
