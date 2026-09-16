"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown,
  Coffee,
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  Flame,
  UtensilsCrossed,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Quote,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface CourseStep {
  stepNumber: string;
  stage: string;
  shortStage: string;
  dishName: string;
  price: string;
  veg: boolean;
  accentColor: string;
  description: string;
  pairingNote: string;
  menuTab: string;
}

interface CulinaryJourney {
  id: "royal" | "coastal" | "sweet";
  title: string;
  tabLabel: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  themeColor: string;
  duration: string;
  idealFor: string;
  styleBadge: string;
  courses: CourseStep[];
}

const culinaryJourneys: Record<string, CulinaryJourney> = {
  royal: {
    id: "royal",
    title: "The Royal Kolhapuri Banquet",
    tabLabel: "Royal Kolhapuri Banquet",
    subtitle:
      "An authentic progression of warrior-spiced tandoor appetizers, rich desi ghee mutton, slow charcoal dum biryani, and heritage rabadi.",
    icon: Crown,
    themeColor: "#B98B3E",
    duration: "75–90 Mins",
    idealFor: "2–4 Guests • Celebrations",
    styleBadge: "Royal Feast Sequence",
    courses: [
      {
        stepNumber: "01",
        stage: "The Charcoal Prelude",
        shortStage: "Starter",
        dishName: "Murgh Sikandar Kebab",
        price: "449",
        veg: false,
        accentColor: "#B98B3E",
        description:
          "Boneless chicken marinated overnight in warrior spices and roasted over red-hot charcoal embers in the clay tandoor.",
        pairingNote: "Smoky char primes the palate for the rich ghee roast to follow.",
        menuTab: "royal-delight",
      },
      {
        stepNumber: "02",
        stage: "The Royal Heart",
        shortStage: "Main Curry",
        dishName: "Mutton Ghee Roast",
        price: "529",
        veg: false,
        accentColor: "#B98B3E",
        description:
          "Tender local goat mutton slow-roasted in pure desi ghee with coastal Byadagi chillies and freshly ground garam masala.",
        pairingNote: "Best enjoyed with steaming butter naan or tandoori roti.",
        menuTab: "royal-delight",
      },
      {
        stepNumber: "03",
        stage: "The Heritage Grain",
        shortStage: "Slow Dum",
        dishName: "Chicken Dum Biryani in Handi",
        price: "429",
        veg: false,
        accentColor: "#B98B3E",
        description:
          "Aged long-grain basmati rice layered with saffron, brown onions, and tender braised cuts cooked on slow charcoal dum.",
        pairingNote: "Served with spiced chilled raita and Kolhapuri salan gravy.",
        menuTab: "royal-delight",
      },
      {
        stepNumber: "04",
        stage: "The Sweet Crown",
        shortStage: "Dessert",
        dishName: "Rabadi with Gulab Jamun",
        price: "180",
        veg: true,
        accentColor: "#B98B3E",
        description:
          "Warm, syrup-soaked golden jamuns cradled in thick, chilled saffron-pistachio malai rabadi.",
        pairingNote: "The timeless royal crescendo to conclude your feast.",
        menuTab: "desserts",
      },
    ],
  },
  coastal: {
    id: "coastal",
    title: "Coastal Cafe & Seafood Odyssey",
    tabLabel: "Coastal Cafe & Seafood",
    subtitle:
      "A breezy seaside sequence pairing chilled artisan espresso, molten cheese cigars, garlic butter prawns, and Lotus Biscoff cheesecake.",
    icon: Coffee,
    themeColor: "#4A6FA5",
    duration: "60 Mins",
    idealFor: "Pairs & Casual Diners",
    styleBadge: "Coastal Soul Sequence",
    courses: [
      {
        stepNumber: "01",
        stage: "The Chilled Lift",
        shortStage: "Artisan Brew",
        dishName: "Classic Cold Coffee",
        price: "160",
        veg: true,
        accentColor: "#4A6FA5",
        description:
          "Bold, freshly pulled espresso blended with frozen milk and a rich, velvety chocolate crown.",
        pairingNote: "Invigorating caffeine and smooth chill to set a relaxed lounge mood.",
        menuTab: "brew",
      },
      {
        stepNumber: "02",
        stage: "The Golden Crunch",
        shortStage: "Crispy Starter",
        dishName: "Golden Coast Cheese Rolls",
        price: "180",
        veg: true,
        accentColor: "#DDA74F",
        description:
          "Flaky, golden pastry rolled around gooey melted cheese, sweet capsicum, and herb seasonings.",
        pairingNote: "A crispy savory contrast that pairs naturally with cold drinks.",
        menuTab: "food",
      },
      {
        stepNumber: "03",
        stage: "The Seafood Star",
        shortStage: "Seafood Main",
        dishName: "Butter Garlic Prawns",
        price: "320",
        veg: false,
        accentColor: "#E4572E",
        description:
          "Fresh succulently cooked prawns simmering in silky garlic herb butter with a dash of crushed black pepper.",
        pairingNote: "Rich coastal indulgence with deep garlicky comfort.",
        menuTab: "food",
      },
      {
        stepNumber: "04",
        stage: "The Artisanal Finish",
        shortStage: "Pastry Finish",
        dishName: "Lotus Biscoff Cheesecake",
        price: "180",
        veg: true,
        accentColor: "#C96D85",
        description:
          "Handmade European cream cheese atop crushed buttery crust, topped with warm spiced Lotus Biscoff glaze.",
        pairingNote: "Caramel spice note bringing a delightful cafe finale.",
        menuTab: "desserts",
      },
    ],
  },
  sweet: {
    id: "sweet",
    title: "Artisanal Dessert & Craft Shakes",
    tabLabel: "Handmade Desserts & Shakes",
    subtitle:
      "An indulgent journey through thick shakes, velvety hot chocolate, berry cheesecakes, and live table-side tiramisu theatre.",
    icon: Sparkles,
    themeColor: "#8A3751",
    duration: "45–60 Mins",
    idealFor: "Dessert Lovers & Dates",
    styleBadge: "Sweet Escape Sequence",
    courses: [
      {
        stepNumber: "01",
        stage: "The Shake Indulgence",
        shortStage: "Thick Shake",
        dishName: "Lotus Biscoff Thick Shake",
        price: "230",
        veg: true,
        accentColor: "#5DBBAF",
        description:
          "Whipped frozen milk, crushed Biscoff speculoos biscuits, and creamy caramel sauce blended dense and luscious.",
        pairingNote: "Thick, decadent opening that immediately satisfies the sweet tooth.",
        menuTab: "shakes-smoothies",
      },
      {
        stepNumber: "02",
        stage: "The Warm Cocoa",
        shortStage: "Warm Sipper",
        dishName: "Special French Hot Chocolate",
        price: "180",
        veg: true,
        accentColor: "#6FA8DC",
        description:
          "Pure melted dark cocoa whisked slowly with whole milk and aromatic Madagascar vanilla.",
        pairingNote: "Silky, bittersweet warmth that balances the cold shakes.",
        menuTab: "brew",
      },
      {
        stepNumber: "03",
        stage: "The Berry Delicacy",
        shortStage: "Baked Pastry",
        dishName: "Blueberry Cheesecake Slice",
        price: "160",
        veg: true,
        accentColor: "#B65E7D",
        description:
          "Dense, baked vanilla bean cheesecake topped with generous tart wild blueberry compote.",
        pairingNote: "Bright fruity tartness cutting through rich cream cheese.",
        menuTab: "desserts",
      },
      {
        stepNumber: "04",
        stage: "The Live Finale",
        shortStage: "Showstopper",
        dishName: "Live Table-Side Tiramisu",
        price: "220",
        veg: true,
        accentColor: "#B98B3E",
        description:
          "Traditional Italian Savoiardi ladyfingers soaked in fresh espresso and layered with mascarpone cream before your eyes.",
        pairingNote: "Spectacular table-side dessert theatre with pure European elegance.",
        menuTab: "desserts",
      },
    ],
  },
};

export function FlavourJourneyFlow() {
  const [selectedKey, setSelectedKey] = useState<"royal" | "coastal" | "sweet">("royal");
  const currentJourney = culinaryJourneys[selectedKey];

  return (
    <div className="w-full">
      {/* Journey Selector Tabs with Liquid Pill Indicator */}
      <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto no-scrollbar py-2 px-1 -mx-2 sm:mx-0">
        {(Object.keys(culinaryJourneys) as Array<"royal" | "coastal" | "sweet">).map((key) => {
          const j = culinaryJourneys[key];
          const Icon = j.icon;
          const isActive = selectedKey === key;

          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedKey(key)}
              className={`relative inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 flex-shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold ${
                isActive ? "text-cream" : "text-ink/80 hover:text-ink hover:bg-gold/10"
              }`}
            >
              {/* Animated Liquid Background Pill */}
              {isActive && (
                <motion.div
                  layoutId="activeJourneyPill"
                  className="absolute inset-0 bg-gold rounded-full shadow-gold -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {!isActive && (
                <div className="absolute inset-0 rounded-full border border-gold/35 bg-cream/70 -z-10" />
              )}
              <Icon className={`w-4 h-4 ${isActive ? "text-cream" : "text-gold"}`} />
              <span className="whitespace-nowrap">{j.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Main Journey Container: Pure Static, Luxury Parchment Presentation */}
      <div className="bg-cream border-2 border-gold/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-card relative overflow-hidden">
        {/* Top Header & Experience Metadata */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 pb-6 mb-6 border-b border-gold/25">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-gold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-ink">
                {currentJourney.styleBadge}
              </span>
              <span className="text-[11px] sm:text-xs text-ink/60 font-body">Chef-Curated Pairing</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink tracking-wide">
              {currentJourney.title}
            </h3>
            <p className="font-body text-xs sm:text-sm md:text-base text-ink/75 max-w-2xl mt-1.5 leading-relaxed">
              {currentJourney.subtitle}
            </p>
          </div>

          {/* Quick Meta Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 font-body text-[11px] sm:text-xs text-ink/80 pt-1 lg:pt-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream border border-gold/30 shadow-xs">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>{currentJourney.duration}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream border border-gold/30 shadow-xs">
              <Users className="w-3.5 h-3.5 text-gold" />
              <span>{currentJourney.idealFor}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream border border-gold/30 shadow-xs">
              <Flame className="w-3.5 h-3.5 text-gold" />
              <span>Dine-in Signature</span>
            </div>
          </div>
        </div>

        {/* Desktop Progress Road-Map Ribbon */}
        <div className="hidden lg:flex items-center justify-between mb-8 px-5 py-3 rounded-2xl bg-gold/10 border border-gold/25">
          {currentJourney.courses.map((course, idx) => (
            <React.Fragment key={`roadmap-${course.stepNumber}`}>
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-gold text-cream font-display text-xs flex items-center justify-center font-bold shadow-xs">
                  {idx + 1}
                </span>
                <div>
                  <span className="text-[10px] font-heading uppercase tracking-wider text-ink/50 block font-semibold">
                    Course {course.stepNumber}
                  </span>
                  <span className="text-xs font-semibold text-ink">
                    {course.shortStage}
                  </span>
                </div>
              </div>
              {idx < currentJourney.courses.length - 1 && (
                <div className="flex items-center gap-1 text-gold/60">
                  <span className="w-12 h-[1px] bg-gold/35" />
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Course Step Flow Bar */}
        <div className="lg:hidden flex items-center justify-between gap-1 mb-6 px-3 py-2 rounded-xl bg-gold/10 border border-gold/25 overflow-x-auto no-scrollbar">
          {currentJourney.courses.map((course, idx) => (
            <div key={`mob-step-${course.stepNumber}`} className="flex items-center gap-1.5 flex-shrink-0">
              <span className="w-5 h-5 rounded-full bg-gold text-cream font-display text-[10px] flex items-center justify-center font-bold">
                {idx + 1}
              </span>
              <span className="text-[11px] font-semibold text-ink whitespace-nowrap">
                {course.shortStage}
              </span>
              {idx < currentJourney.courses.length - 1 && (
                <ChevronRight className="w-3 h-3 text-gold/60 mx-0.5" />
              )}
            </div>
          ))}
        </div>

        {/* 4-Step Course Flow Grid with Flow Connector Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedKey}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative"
          >
            {currentJourney.courses.map((course, idx) => (
              <React.Fragment key={course.stepNumber}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group relative bg-cream border border-gold/30 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-card hover:border-gold transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  style={{
                    borderTop: `4px solid ${course.accentColor}`,
                  }}
                >
                  {/* Subtle Anton Watermark Number in Background */}
                  <span className="absolute right-3 top-2 font-display text-5xl sm:text-6xl text-gold/10 select-none pointer-events-none group-hover:text-gold/25 transition-colors">
                    {course.stepNumber}
                  </span>

                  <div className="relative z-10">
                    {/* Step Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-heading uppercase tracking-widest text-[10px] font-bold text-husk bg-cream/90 px-2.5 py-0.5 rounded-full border border-gold/25">
                        Course {course.stepNumber} &bull; {course.shortStage}
                      </span>

                      <div className="flex items-center gap-1.5">
                        {/* Veg / Non-Veg Dot */}
                        <span
                          className={`w-3.5 h-3.5 border flex items-center justify-center rounded-[3px] p-[1.5px] ${
                            course.veg ? "border-green-600" : "border-red-600"
                          }`}
                          title={course.veg ? "Pure Vegetarian" : "Non-Vegetarian"}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              course.veg ? "bg-green-600" : "bg-red-600"
                            }`}
                          />
                        </span>

                        {/* Price */}
                        <span className="font-display text-sm font-bold text-gold">
                          ₹{course.price}/-
                        </span>
                      </div>
                    </div>

                    {/* Stage Name */}
                    <p className="font-heading uppercase tracking-wider text-[11px] font-semibold text-gold mb-1">
                      {course.stage}
                    </p>

                    {/* Dish Title */}
                    <h4 className="font-display text-lg sm:text-xl text-ink tracking-wide mb-2 group-hover:text-gold transition-colors">
                      {course.dishName}
                    </h4>

                    {/* Description */}
                    <p className="font-body text-xs sm:text-sm text-ink/75 leading-relaxed mb-4">
                      {course.description}
                    </p>
                  </div>

                  {/* Sommelier / Chef Pairing Note */}
                  <div className="relative z-10 pt-3 border-t border-gold/15 mt-auto">
                    <div className="border-l-2 border-gold/50 pl-2.5 py-0.5">
                      <p className="font-body italic text-[11px] text-ink/70 leading-relaxed flex items-start gap-1">
                        <Quote className="w-3 h-3 text-gold/60 flex-shrink-0 mt-0.5 rotate-180" />
                        <span>{course.pairingNote}</span>
                      </p>
                    </div>

                    <Link
                      href={`/menu?tab=${course.menuTab}`}
                      className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-bold uppercase tracking-wider text-gold hover:text-bronze transition-colors group-hover:translate-x-0.5"
                    >
                      <span>View in Menu</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.div>

                {/* Mobile Downward Flow Indicator between Course Cards */}
                {idx < currentJourney.courses.length - 1 && (
                  <div className="md:hidden flex items-center justify-center py-1 text-gold/80">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-[10px] uppercase font-bold tracking-widest text-gold shadow-xs">
                      <span>Next Course Progression</span>
                      <ChevronDown className="w-3 h-3 animate-bounce" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Booking & Exploration Action Ribbon */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-gold/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-body text-ink/80 text-center sm:text-left">
            <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
            <span>
              All tasting sequence dishes are prepared fresh upon order at our Tarabai Park kitchen.
            </span>
          </div>

          <div className="w-full sm:w-auto flex justify-center">
            <Link
              href="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gold text-cream font-semibold text-sm hover:bg-bronze transition-all duration-200 shadow-gold hover:-translate-y-0.5 active:scale-95"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>Explore Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
