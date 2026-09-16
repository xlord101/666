"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  Flame,
  Star,
  Coffee,
  Sparkles,
  GlassWater,
  Utensils,
  Crown,
  CakeSlice,
  Filter,
} from "lucide-react";
import { menuCategories, MenuCategory, MenuItem } from "@/data/menu";
import { SectionDivider } from "./SectionDivider";

// Map slugs to category icons
const categoryIcons: Record<string, React.ElementType> = {
  brew: Coffee,
  "shakes-smoothies": Sparkles,
  "mojitos-coolers": GlassWater,
  food: Utensils,
  "royal-delight": Crown,
  desserts: CakeSlice,
  mocktails: GlassWater,
};

export function MenuContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabParam = searchParams.get("tab");

  // Determine initial active category from query param or default to "brew"
  const defaultCategory = useMemo(() => {
    if (tabParam) {
      const match = menuCategories.find((c) => c.slug === tabParam);
      if (match) return match.id;
    }
    return "brew";
  }, [tabParam]);

  const [activeTab, setActiveTab] = useState<string>(defaultCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dietFilter, setDietFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    soups: true,
    "chinese-starters": true,
    "tandoor-starters": true,
    "indian-main-nonveg": true,
    "indian-main-veg": true,
  });
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync state if URL query param changes
  useEffect(() => {
    if (tabParam) {
      const found = menuCategories.find((c) => c.slug === tabParam);
      if (found && found.id !== activeTab) {
        setActiveTab(found.id);
      }
    }
  }, [tabParam, activeTab]);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabChange = (categoryId: string) => {
    setActiveTab(categoryId);
    const cat = menuCategories.find((c) => c.id === categoryId);
    if (cat) {
      router.push(`/menu?tab=${cat.slug}`, { scroll: false });
    }
  };

  const toggleAccordion = (subSectionId: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [subSectionId]: !prev[subSectionId],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentCategory = useMemo(
    () => menuCategories.find((c) => c.id === activeTab) || menuCategories[0],
    [activeTab]
  );

  // Filter items within the current category based on search & diet
  const filteredSubSections = useMemo(() => {
    return currentCategory.subSections.map((sub) => {
      const items = sub.items.filter((item) => {
        // Dietary filter
        if (dietFilter === "veg" && !item.veg) return false;
        if (dietFilter === "non-veg" && item.veg) return false;

        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = item.name.toLowerCase().includes(q);
          const matchDesc = item.description.toLowerCase().includes(q);
          return matchName || matchDesc;
        }

        return true;
      });
      return { ...sub, items };
    });
  }, [currentCategory, searchQuery, dietFilter]);

  const totalVisibleItems = useMemo(
    () => filteredSubSections.reduce((acc, sub) => acc + sub.items.length, 0),
    [filteredSubSections]
  );

  return (
    <div className="bg-cream min-h-screen">
      {/* =========================================================================
          PAGE HEADER
         ========================================================================= */}
      <section className="bg-cream border-b border-gold/25 py-12 sm:py-16 text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-heading uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-gold mb-2">
            House of 666 Gastronomy
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight">
            OUR COMPLETE MENU
          </h1>
          <p className="font-body text-ink/75 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Handcrafted beverages, seaside cafe specials, and royal charcoal-roasted Mughlai &amp; Kolhapuri delicacies.
          </p>
          <SectionDivider className="my-6" />
        </div>
      </section>

      {/* =========================================================================
          STICKY CATEGORY TAB BAR + CONTROLS
         ========================================================================= */}
      <div className="sticky top-[69px] z-30 bg-cream/95 backdrop-blur-md border-b border-gold/25 shadow-sm py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Category Quick-Jump Select */}
          <div className="block lg:hidden mb-3">
            <label htmlFor="category-select" className="sr-only">
              Select Menu Category
            </label>
            <div className="relative">
              <select
                id="category-select"
                value={activeTab}
                onChange={(e) => handleTabChange(e.target.value)}
                className="w-full appearance-none bg-cream border-2 border-gold/60 rounded-xl px-4 py-2.5 font-display text-base text-ink focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {menuCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name} ({cat.subSections.reduce((a, s) => a + s.items.length, 0)} items)
                  </option>
                ))}
              </select>
              <ChevronDown className="w-5 h-5 text-gold absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Desktop & Tablet Horizontally Scrollable Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            {menuCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              const Icon = categoryIcons[cat.slug] || Utensils;
              const itemCount = cat.subSections.reduce((a, s) => a + s.items.length, 0);

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleTabChange(cat.id)}
                  className={`flex-shrink-0 inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold ${
                    isActive
                      ? "shadow-sm scale-[1.02]"
                      : "bg-cream/60 border border-gold/30 text-ink/70 hover:bg-gold/10 hover:text-ink"
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: cat.accentHex,
                          color:
                            cat.accentColor === "mocktail-navy" ||
                            cat.accentColor === "gold" ||
                            cat.accentColor === "mojito-coral"
                              ? "#F5EFDD"
                              : "#1A1710",
                          border: `1.5px solid ${cat.accentHex}`,
                        }
                      : undefined
                  }
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{cat.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-black/15 font-bold" : "bg-gold/15 text-husk"
                    }`}
                  >
                    {itemCount}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Filters & Search Row */}
          <div className="mt-3 pt-3 border-t border-gold/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-husk/60 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={`Search dishes in ${currentCategory.name}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-cream border border-gold/40 rounded-full pl-9 pr-4 py-1.5 text-xs sm:text-sm text-ink placeholder-husk/50 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-husk/60 hover:text-ink"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Toggles (All / Veg / Non-Veg) */}
            <div className="inline-flex items-center gap-1 self-start sm:self-auto bg-cream border border-gold/30 p-1 rounded-full text-xs font-medium">
              <button
                type="button"
                onClick={() => setDietFilter("all")}
                className={`px-3 py-1 rounded-full transition-colors ${
                  dietFilter === "all" ? "bg-gold text-cream font-semibold" : "text-ink/75 hover:text-ink"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setDietFilter("veg")}
                className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-colors ${
                  dietFilter === "veg"
                    ? "bg-green-700 text-cream font-semibold"
                    : "text-ink/75 hover:text-ink"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Veg</span>
              </button>
              <button
                type="button"
                onClick={() => setDietFilter("non-veg")}
                className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-colors ${
                  dietFilter === "non-veg"
                    ? "bg-red-700 text-cream font-semibold"
                    : "text-ink/75 hover:text-ink"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>Non-Veg</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN MENU ITEMS CONTENT (With AnimatePresence 180ms crossfade)
         ========================================================================= */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
          >
            {/* Category Header Banner */}
            <div
              className="p-6 sm:p-8 rounded-3xl mb-10 border border-gold/30 shadow-card"
              style={{
                backgroundColor: `${currentCategory.accentHex}18`, // 10% opacity tint
                borderTop: `5px solid ${currentCategory.accentHex}`,
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-widest text-gold block mb-1">
                    Category Focus
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl text-ink tracking-wide">
                    {currentCategory.name}
                  </h2>
                  <p className="font-body text-sm sm:text-base text-ink/80 mt-1">
                    {currentCategory.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-cream border border-gold/40 text-husk">
                    Showing {totalVisibleItems} dishes
                  </span>
                </div>
              </div>
            </div>

            {/* Zero Results State */}
            {totalVisibleItems === 0 && (
              <div className="text-center py-16 bg-cream/70 border border-gold/25 rounded-2xl p-8">
                <Filter className="w-10 h-10 text-gold/60 mx-auto mb-3" />
                <h3 className="font-display text-2xl text-ink">No Dishes Found</h3>
                <p className="font-body text-sm text-ink/70 mt-1 max-w-md mx-auto">
                  No items match your filter criteria ({dietFilter} &bull; &ldquo;{searchQuery}&rdquo;). Try adjusting your search query or dietary filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setDietFilter("all");
                  }}
                  className="mt-4 px-5 py-2 rounded-full bg-gold text-cream text-xs font-semibold hover:bg-bronze transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* ===================================================================
                RENDER SUB-SECTIONS
                Royal Delight = Accordions
                Other Categories = Stacked Headers
               =================================================================== */}
            <div className="space-y-8">
              {filteredSubSections.map((subSection) => {
                if (subSection.items.length === 0) return null;

                const isRoyalDelight = currentCategory.id === "royal-delight";
                const isOpen = openAccordions[subSection.id] ?? true;

                if (isRoyalDelight) {
                  return (
                    <div
                      key={subSection.id}
                      className="bg-cream rounded-2xl border border-gold/30 shadow-card overflow-hidden transition-all"
                    >
                      {/* Accordion Trigger */}
                      <button
                        type="button"
                        onClick={() => toggleAccordion(subSection.id)}
                        className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gold/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                        aria-expanded={isOpen}
                      >
                        <div>
                          <div className="flex items-center gap-2.5">
                            <h3 className="font-display text-xl sm:text-2xl text-ink tracking-wide">
                              {subSection.title}
                            </h3>
                            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-gold/15 text-gold">
                              {subSection.items.length}
                            </span>
                          </div>
                          {subSection.description && (
                            <p className="font-body text-xs sm:text-sm text-ink/70 mt-1">
                              {subSection.description}
                            </p>
                          )}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center text-gold ml-3 flex-shrink-0">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </div>
                      </button>

                      {/* Accordion Content */}
                      {isOpen && (
                        <div className="border-t border-gold/20 p-5 sm:p-6 divide-y divide-gold/15">
                          {subSection.items.map((item) => (
                            <MenuItemRow key={item.id} item={item} />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // Non-Royal Delight categories render as stacked headers
                return (
                  <div
                    key={subSection.id}
                    className="bg-cream rounded-2xl border border-gold/30 shadow-card p-6 sm:p-8"
                  >
                    <div className="border-b border-gold/20 pb-4 mb-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-2xl sm:text-3xl text-ink tracking-wide">
                          {subSection.title}
                        </h3>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-gold/15 text-gold">
                          {subSection.items.length} items
                        </span>
                      </div>
                      {subSection.description && (
                        <p className="font-body text-xs sm:text-sm text-ink/70 mt-1">
                          {subSection.description}
                        </p>
                      )}
                    </div>

                    <div className="divide-y divide-gold/15">
                      {subSection.items.map((item) => (
                        <MenuItemRow key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* =========================================================================
          FLOATING BACK TO TOP BUTTON
         ========================================================================= */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-24 right-5 sm:bottom-8 sm:right-8 z-30 p-3 rounded-full bg-gold text-cream hover:bg-bronze shadow-gold transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Scroll back to top of menu"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

// Single Menu Item Row Component
function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="py-4 first:pt-1 last:pb-1 flex items-start justify-between gap-4 group">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          {/* Veg / Non-Veg square dot */}
          <span
            className={`w-3.5 h-3.5 border flex items-center justify-center rounded-[2px] p-[1px] flex-shrink-0 ${
              item.veg ? "border-green-600" : "border-red-600"
            }`}
            title={item.veg ? "Vegetarian" : "Non-Vegetarian"}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                item.veg ? "bg-green-600" : "bg-red-600"
              }`}
            />
          </span>

          <h4 className="font-body font-bold text-base sm:text-lg text-ink tracking-tight group-hover:text-gold transition-colors">
            {item.name}
          </h4>

          {item.popular && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 px-2 py-0.5 rounded-full">
              <Star className="w-2.5 h-2.5 fill-gold text-gold" />
              Popular
            </span>
          )}

          {item.spicy && (
            <span className="inline-flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-wider text-mojito-coral bg-mojito-coral/10 px-2 py-0.5 rounded-full">
              <Flame className="w-2.5 h-2.5 text-mojito-coral" />
              Spicy
            </span>
          )}
        </div>

        <p className="font-body text-xs sm:text-sm text-ink/70 leading-relaxed max-w-xl">
          {item.description}
        </p>
      </div>

      {/* Right-aligned Bold Gold Price */}
      <div className="text-right flex-shrink-0 pt-0.5">
        <span className="font-display text-lg sm:text-xl text-gold font-normal tracking-wide">
          ₹{item.price}
        </span>
      </div>
    </div>
  );
}
