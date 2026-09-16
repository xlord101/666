"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X, Sparkles, Utensils, Coffee, Cake, Home } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { SectionDivider } from "./SectionDivider";
import { InstagramIcon, XIcon } from "./Motifs";

type GalleryCategory = "all" | "food" | "drinks" | "desserts" | "ambience";

interface GalleryItem {
  id: string;
  title: string;
  category: "food" | "drinks" | "desserts" | "ambience";
  categoryLabel: string;
  description: string;
  accentColor: string;
  badge: string;
  image?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "Chef's Signature Tandoor Starter",
    category: "food",
    categoryLabel: "Royal Kitchen",
    description: "Tender, marinated boneless tandoor cuts glazed with house spices and garnished with herbs and pickled onions.",
    accentColor: "#B98B3E",
    badge: "House Specialty",
    image: "/gallery/food-starter.jpg",
  },
  {
    id: "g-2",
    title: "The Brew Bar & Espresso Counter",
    category: "drinks",
    categoryLabel: "Brew Bar",
    description: "Specialty barista bar crafting bold iced lattes, thick frappes, and signature coolers with artisanal syrups.",
    accentColor: "#AEDCEF",
    badge: "Barista Counter",
    image: "/gallery/cafe-bar.jpg",
  },
  {
    id: "g-3",
    title: "Lotus Biscoff Cheesecake",
    category: "desserts",
    categoryLabel: "Artisanal Dessert",
    description: "Handmade cream cheesecake topped with warm spiced Lotus Biscoff spread.",
    accentColor: "#F6C9D6",
    badge: "Fresh Baked Daily",
  },
  {
    id: "g-4",
    title: "The Tarabai Park Dining Lounge",
    category: "ambience",
    categoryLabel: "Atmosphere",
    description: "Warm golden lighting, brass pendant chandeliers, wood-paneled walls, and spacious seating for family celebrations.",
    accentColor: "#B98B3E",
    badge: "Royal Lounge",
    image: "/gallery/dining-hall.jpg",
  },
  {
    id: "g-5",
    title: "Butter Garlic Prawns",
    category: "food",
    categoryLabel: "Seaside Appetizer",
    description: "Fresh succulently cooked prawns swimming in rich herb garlic butter.",
    accentColor: "#EFE0A0",
    badge: "Coastal Soul",
  },
  {
    id: "g-6",
    title: "Evening Cafe Vibe & Music",
    category: "ambience",
    categoryLabel: "Atmosphere",
    description: "Lively, soulful evening atmosphere with ambient track playlists, tropical thatch roof, and cheerful guests.",
    accentColor: "#7FD8C8",
    badge: "Evening Vibe",
    image: "/gallery/evening-ambience.jpg",
  },
  {
    id: "g-7",
    title: "Live Table-Side Tiramisu",
    category: "desserts",
    categoryLabel: "Handmade Dessert",
    description: "Traditional Italian ladyfingers soaked in fresh espresso with mascarpone cream.",
    accentColor: "#F6C9D6",
    badge: "Chef Special",
  },
  {
    id: "g-8",
    title: "Family Feasts & Fresh Hot Naans",
    category: "food",
    categoryLabel: "Tandoor Kebabs",
    description: "Clay oven tandoori rotis, buttery naans, and bubbling gravies served steaming hot table-side.",
    accentColor: "#B98B3E",
    badge: "Clay Oven Grandeur",
    image: "/gallery/table-service.jpg",
  },
  {
    id: "g-9",
    title: "House of 666 Glowing Entrance Facade",
    category: "ambience",
    categoryLabel: "Atmosphere",
    description: "Our signature backlit palm trees and 666 glowing numbers set against natural bamboo walling and lush planters.",
    accentColor: "#B98B3E",
    badge: "Iconic Facade",
    image: "/gallery/neon-facade.jpg",
  },
  {
    id: "g-10",
    title: "Nutella & Oreo Thick Shakes",
    category: "drinks",
    categoryLabel: "Thick Shakes",
    description: "Whipping frozen milk, rich Nutella swirl, and cookie crumble into pure bliss.",
    accentColor: "#7FD8C8",
    badge: "Sweet Escape",
  },
  {
    id: "g-11",
    title: "Portuguese Serradura Pudding",
    category: "desserts",
    categoryLabel: "Special Dessert",
    description: "Layers of sweetened vanilla cream and fine crushed tea biscuit crumbs.",
    accentColor: "#F6C9D6",
    badge: "Heritage Sweet",
  },
  {
    id: "g-12",
    title: "Royal Dum Biryani in Clay Pot",
    category: "food",
    categoryLabel: "Royal Delight",
    description: "Aged long-grain basmati layered with saffron and overnight marinated spices.",
    accentColor: "#B98B3E",
    badge: "Slow Dum Feasting",
  },
];

const filterTabs = [
  { id: "all", label: "All Moments", icon: Sparkles },
  { id: "food", label: "Royal & Cafe Food", icon: Utensils },
  { id: "drinks", label: "Brews & Coolers", icon: Coffee },
  { id: "desserts", label: "Handmade Desserts", icon: Cake },
  { id: "ambience", label: "Cafe Ambience", icon: Home },
];

export function GalleryContent() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-cream border-b border-gold/25 py-12 sm:py-16 text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-heading uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-gold mb-2">
            A Feast for the Eyes
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight">
            PHOTO &amp; FOOD GALLERY
          </h1>
          <p className="font-body text-ink/75 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Glimpses of our vibrant cafe plates, artisan coffee brewing, tandoor smoke, and Tarabai Park hospitality.
          </p>
          <SectionDivider className="my-6" />
        </div>
      </section>

      {/* Filter Pills Bar */}
      <div className="sticky top-[69px] z-30 bg-cream/95 backdrop-blur-md border-b border-gold/25 shadow-sm py-3 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as GalleryCategory)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-gold ${
                  isActive
                    ? "bg-gold text-cream shadow-sm scale-[1.02]"
                    : "bg-cream border border-gold/30 text-ink/75 hover:bg-gold/15 hover:text-ink"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-cream border border-gold/30 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:border-gold flex flex-col justify-between"
            >
              {/* Card visual frame */}
              <div
                className="relative h-60 sm:h-72 p-5 flex flex-col justify-between overflow-hidden"
                style={{
                  background: item.image
                    ? undefined
                    : `linear-gradient(135deg, ${item.accentColor}22 0%, ${item.accentColor}08 100%)`,
                  borderBottom: `2px solid ${item.accentColor}33`,
                }}
              >
                {/* Real photo if available */}
                {item.image && (
                  <>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60 pointer-events-none" />
                  </>
                )}

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-husk bg-cream/95 px-3 py-1 rounded-full border border-gold/40 shadow-sm backdrop-blur-xs">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[10px] font-semibold text-gold bg-ink/90 border border-gold/40 px-2.5 py-1 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                </div>

                {/* If no image, render artistic decorative motif */}
                {!item.image && (
                  <div className="self-center my-auto text-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-2 shadow-inner border border-gold/30 bg-cream/80">
                      <Sparkles className="w-7 h-7 text-gold" />
                    </div>
                    <span className="font-heading italic text-xs text-ink/70">
                      House of 666 Collection
                    </span>
                  </div>
                )}

                <div className={`relative z-10 text-[11px] font-semibold flex items-center gap-1 group-hover:underline ${item.image ? "text-gold drop-shadow" : "text-gold"}`}>
                  <span>Click to expand</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Card Metadata */}
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-xl text-ink tracking-wide mb-1 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-ink/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox / Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-ink/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-cream border-2 border-gold rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header if available */}
            {selectedItem.image && (
              <div className="relative w-full h-64 sm:h-72 bg-black">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
              </div>
            )}

            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className={`absolute right-4 top-4 z-20 p-2 rounded-full transition-colors ${
                selectedItem.image
                  ? "bg-black/60 text-cream hover:bg-black/80"
                  : "text-ink hover:bg-gold/20"
              }`}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              <span className="text-xs uppercase font-bold tracking-widest text-gold block mb-1">
                {selectedItem.categoryLabel} &bull; {selectedItem.badge}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-ink mb-3">
                {selectedItem.title}
              </h3>
              <p className="font-body text-sm sm:text-base text-ink/80 leading-relaxed mb-6">
                {selectedItem.description}
              </p>

              <div className="pt-4 border-t border-gold/25 flex items-center justify-between">
                <Link
                  href="/menu"
                  onClick={() => setSelectedItem(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-bronze underline uppercase tracking-wider"
                >
                  <span>Find in Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2 rounded-full bg-gold text-cream text-xs font-semibold hover:bg-bronze transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          INSTAGRAM EMBED / PROFILE GRID BANNER
         ========================================================================= */}
      <section className="py-16 sm:py-20 bg-ink text-cream border-t-2 border-gold/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <InstagramIcon className="w-10 h-10 text-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl text-cream tracking-wide mb-3">
            SEE MORE STORIES &amp; REELS
          </h2>
          <p className="font-body text-cream/75 text-sm sm:text-base max-w-lg mx-auto mb-6">
            We post daily dish specials, live tandoor action, coffee brewing reels, and guest celebrations on our official Instagram feed.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-gold text-cream font-semibold text-sm hover:bg-bronze transition-all duration-200 shadow-gold"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow {siteConfig.instagramHandle}</span>
            </a>

            {siteConfig.xUrl && (
              <a
                href={siteConfig.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gold/40 text-cream font-semibold text-sm hover:bg-gold hover:text-ink transition-all duration-200"
              >
                <XIcon className="w-4 h-4" />
                <span>Follow {siteConfig.xHandle} on X</span>
              </a>
            )}

            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gold/40 bg-gold/10 text-cream font-semibold text-sm hover:bg-gold hover:text-ink transition-all duration-200"
            >
              <span className="text-[#FBBC04]">★★★★★</span>
              <span>5.0 on Google Maps</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

