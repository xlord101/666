import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  ArrowRight,
  Coffee,
  Sparkles,
  GlassWater,
  Utensils,
  Crown,
  CakeSlice,
  MapPin,
  Clock,
  Phone,
  ChevronRight,
  Compass,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { menuCategories, signaturePicks } from "@/data/menu";
import { PalmTreeSway, PalmTreeMenuLeft, PalmTreeMenuRight, InstagramIcon, XIcon } from "@/components/Motifs";
import { SectionDivider } from "@/components/SectionDivider";
import { RestaurantJsonLd } from "@/components/RestaurantJsonLd";
import { SignatureCarousel } from "@/components/SignatureCarousel";
import { FlavourJourneyFlow } from "@/components/FlavourJourneyFlow";
import { OpeningScreen } from "@/components/OpeningScreen";
import { ReplayIntroButton } from "@/components/ReplayIntroButton";
import { HouseOf666Heading } from "@/components/HouseOf666Heading";
import { SandyBreeze } from "@/components/SandyBreeze";

export const metadata: Metadata = {
  title: "House of 666 — Resto & Cafe | Tarabai Park, Kolhapur",
  description: siteConfig.description,
};

// 6 Category Tiles configuration putting Resto Dining first
const categoryTiles = [
  {
    title: "Royal Resto Dining",
    subtitle: "Kebabs, Tandoor, Curries & Biryanis",
    slug: "royal-delight",
    hub: "restro",
    icon: Crown,
    bgClass: "bg-[#B98B3E]/15 hover:bg-[#B98B3E]/25 border-[#B98B3E]/50",
    textClass: "text-[#7A5A22]",
    badgeClass: "bg-gold text-cream",
    badge: "Resto Feasts",
  },
  {
    title: "Food & Cafe Bites",
    subtitle: "Bruschetta, Cigar Rolls & Seafood",
    slug: "food",
    hub: "cafe",
    icon: Utensils,
    bgClass: "bg-[#EFE0A0]/30 hover:bg-[#EFE0A0]/45 border-[#EFE0A0]/80",
    textClass: "text-[#69571C]",
    badgeClass: "bg-[#EFE0A0] text-ink",
    badge: "Crispy Bites",
  },
  {
    title: "Brew Bar",
    subtitle: "Espressos, Iced Lattes & Mochas",
    slug: "brew",
    hub: "cafe",
    icon: Coffee,
    bgClass: "bg-[#AEDCEF]/20 hover:bg-[#AEDCEF]/30 border-[#AEDCEF]/50",
    textClass: "text-[#2A657D]",
    badgeClass: "bg-[#AEDCEF] text-ink",
    badge: "Hot & Iced",
  },
  {
    title: "Shakes & Smoothies",
    subtitle: "Biscoff, Nutella & Protein Blends",
    slug: "shakes-smoothies",
    hub: "cafe",
    icon: Sparkles,
    bgClass: "bg-[#7FD8C8]/20 hover:bg-[#7FD8C8]/30 border-[#7FD8C8]/50",
    textClass: "text-[#1C695B]",
    badgeClass: "bg-[#7FD8C8] text-ink",
    badge: "Thick & Indulgent",
  },
  {
    title: "Mojitos & Coolers",
    subtitle: "Virgin Mojitos & Tropical Coolers",
    slug: "mojitos-coolers",
    hub: "cafe",
    icon: GlassWater,
    bgClass: "bg-[#E4572E]/15 hover:bg-[#E4572E]/25 border-[#E4572E]/40",
    textClass: "text-[#B03714]",
    badgeClass: "bg-[#E4572E] text-cream",
    badge: "Refreshing",
  },
  {
    title: "Handmade Desserts",
    subtitle: "Cheesecakes, Live Tiramisu & Custard",
    slug: "desserts",
    hub: "cafe",
    icon: CakeSlice,
    bgClass: "bg-[#F6C9D6]/30 hover:bg-[#F6C9D6]/45 border-[#F6C9D6]/70",
    textClass: "text-[#8A3751]",
    badgeClass: "bg-[#F6C9D6] text-ink",
    badge: "Artisanal",
  },
];

// Curated Instagram showcase with real House of 666 reel photos
const instagramPhotos = [
  {
    id: 1,
    title: "Chef's Signature Tandoor Starter",
    category: "Royal Kitchen",
    caption: "Slow-roasted tender cuts in aromatic spices with fresh herbs and pickled onions.",
    image: "/gallery/food-starter.jpg",
  },
  {
    id: 2,
    title: "The Tarabai Park Dining Lounge",
    category: "Royal Ambience",
    caption: "Warm golden lighting, brass chandeliers, and inviting family banquet tables.",
    image: "/gallery/dining-hall.jpg",
  },
  {
    id: 3,
    title: "The Brew Bar & Espresso Counter",
    category: "Barista Brews",
    caption: "Handcrafted espresso drinks, iced lattes, and tropical coolers.",
    image: "/gallery/cafe-bar.jpg",
  },
  {
    id: 4,
    title: "Fresh Tandoor Breads & Feasts",
    category: "Clay Oven Grandeur",
    caption: "Piping hot tandoori rotis, buttery naans, and rich Mughlai gravies.",
    image: "/gallery/table-service.jpg",
  },
  {
    id: 5,
    title: "Evening Cafe Vibe & Music",
    category: "Evening Vibe",
    caption: "Soulful evening cafe dining surrounded by thatch roof and lively music.",
    image: "/gallery/evening-ambience.jpg",
  },
  {
    id: 6,
    title: "House of 666 Backlit Facade",
    category: "Iconic Entrance",
    caption: "Our signature glowing palms and 666 emblem set against natural bamboo.",
    image: "/gallery/neon-facade.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      <RestaurantJsonLd />
      <OpeningScreen defaultVideoSrc="/intro-video.mp4" />

      {/* =========================================================================
          HERO SECTION
          Full-bleed cream/ink, faint mirrored swaying palm trees, Anton typography
         ========================================================================= */}
      <section className="relative overflow-hidden bg-cream pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-24 lg:pb-28 border-b border-gold/25">
        {/* Desert/Beach ambient sandy breeze drifting gently in the background from sides */}
        <SandyBreeze particleCount={44} className="absolute inset-0 pointer-events-none z-0 opacity-70" />

        {/* Subtle background gradient and patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none" />

        {/* Authentic House of 666 Palm Trees - Golden Highlights framing the Emblem & Hero */}
        <div className="absolute left-[-14px] sm:left-0 md:left-4 lg:left-10 xl:left-20 2xl:left-32 top-3 sm:top-6 md:top-10 lg:top-14 pointer-events-none z-0">
          <PalmTreeSway
            variant="left"
            theme="gold"
            className="w-28 sm:w-36 md:w-48 lg:w-60 xl:w-72 2xl:w-80 h-auto filter drop-shadow-[0_6px_16px_rgba(185,139,62,0.35)]"
            opacity="opacity-90 sm:opacity-95 lg:opacity-100"
            enableSway={true}
            priority={true}
          />
        </div>
        <div className="absolute right-[-14px] sm:right-0 md:right-4 lg:right-10 xl:right-20 2xl:right-32 top-3 sm:top-6 md:top-10 lg:top-14 pointer-events-none z-0">
          <PalmTreeSway
            variant="right"
            theme="gold"
            className="w-28 sm:w-36 md:w-48 lg:w-60 xl:w-72 2xl:w-80 h-auto filter drop-shadow-[0_6px_16px_rgba(185,139,62,0.35)]"
            opacity="opacity-90 sm:opacity-95 lg:opacity-100"
            enableSway={true}
            priority={true}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Royal Crest / Emblem */}
          <div className="inline-flex items-center justify-center mb-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-gold shadow-gold bg-cream transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo.png"
                alt="House of 666 Crest"
                fill
                sizes="(max-width: 640px) 80px, 96px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Google Verified 5.0 Rating Badge */}
          <div className="mb-4">
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/90 border border-gold/40 text-xs font-semibold text-ink shadow-sm hover:border-gold hover:bg-gold/15 transition-all hover:scale-105"
            >
              <span className="flex items-center gap-0.5 text-[#FBBC04]">
                {"★".repeat(5)}
              </span>
              <span className="text-gold font-bold">5.0</span>
              <span className="text-ink/60">&bull;</span>
              <span className="text-ink/75">Verified on Google</span>
            </a>
          </div>

          {/* Logo-Accurate Main Heading: Montserrat geometric black + authentic 666 stencil glyphs */}
          <div className="mb-3 sm:mb-4">
            <HouseOf666Heading size="hero" />
          </div>

          {/* Cormorant Garamond Tracked Subtitle */}
          <p className="font-heading uppercase tracking-[0.16em] sm:tracking-[0.3em] md:tracking-[0.4em] text-xs sm:text-base md:text-xl text-husk font-semibold mb-4 sm:mb-6 max-w-xs sm:max-w-none mx-auto">
            Resto &amp; Cafe &bull; Tarabai Park
          </p>

          {/* Tagline */}
          <p className="font-body text-sm sm:text-lg md:text-2xl text-ink/85 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal px-2">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-xs sm:max-w-none mx-auto">
            <Link
              href="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gold text-cream font-semibold text-sm sm:text-lg hover:bg-bronze transition-all duration-200 shadow-gold hover:-translate-y-1 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full border-2 border-gold text-ink font-semibold text-sm sm:text-lg hover:bg-gold/15 transition-all duration-200 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              <span>Get Directions</span>
            </a>

            <ReplayIntroButton className="w-full sm:w-auto" />
          </div>

          {/* Quick Micro-Highlight */}
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-6 lg:gap-10 text-[11px] sm:text-sm text-husk/80 font-medium">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/80 border border-gold/25 sm:border-none sm:bg-transparent">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Authentic Kolhapuri Recipes
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/80 border border-gold/25 sm:border-none sm:bg-transparent">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Smoky Tandoor &amp; Kebabs
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/80 border border-gold/25 sm:border-none sm:bg-transparent">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Chilled Specialty Coffees
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/80 border border-gold/25 sm:border-none sm:bg-transparent">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Handmade Cheesecakes
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          RESTRO VS CAFE DUAL PILLARS + CATEGORY TILES
          Deep-linking to /menu?hub=<hub>&tab=<slug>
         ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="font-heading uppercase tracking-widest text-xs sm:text-sm font-semibold text-gold mb-2">
            Two Culinary Worlds, One Destination
          </p>
          <h2 className="font-brand font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight uppercase">
            RESTRO &amp; CAFE EXPERIENCES
          </h2>
          <p className="font-body text-ink/75 text-sm sm:text-base mt-2">
            Whether you desire a lavish Kolhapuri family feast or a slow artisan coffee, explore our menus.
          </p>
          <SectionDivider className="my-6" />
        </div>

        {/* TWO GRAND EXPERIENCE CARDS: RESTRO VS CAFE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: The Royal Restro */}
          <Link
            href="/menu?hub=restro&tab=royal-delight"
            className="group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#B98B3E]/15 via-cream to-[#7A5A22]/10 border-2 border-gold/50 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center text-gold border border-gold/40 shadow-sm group-hover:scale-110 transition-transform">
                  <Crown className="w-7 h-7 text-gold" />
                </div>
                <span className="text-xs uppercase font-bold px-3 py-1 rounded-full bg-gold text-cream shadow-sm">
                  Grand Resto
                </span>
              </div>
              <h3 className="font-brand font-extrabold text-2xl sm:text-3xl text-ink uppercase tracking-wide group-hover:text-gold transition-colors">
                Royal Resto Dining
              </h3>
              <p className="font-body text-sm sm:text-base text-ink/80 mt-2 leading-relaxed">
                Charcoal-roasted tandoor kebabs, slow-cooked authentic Kolhapuri mutton gravies, aromatic dum biryanis, and piping-hot butter naans for unforgettable dining.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-gold/30 flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider text-gold">
              <span>Explore Resto Dining Menu</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* Card 2: The Artisan Cafe */}
          <Link
            href="/menu?hub=cafe&tab=food"
            className="group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#AEDCEF]/20 via-cream to-[#7FD8C8]/15 border-2 border-[#2A657D]/30 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#AEDCEF]/20 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#AEDCEF]/30 flex items-center justify-center text-[#2A657D] border border-[#AEDCEF]/60 shadow-sm group-hover:scale-110 transition-transform">
                  <Coffee className="w-7 h-7 text-[#2A657D]" />
                </div>
                <span className="text-xs uppercase font-bold px-3 py-1 rounded-full bg-[#2A657D] text-cream shadow-sm">
                  Brews &amp; Bites
                </span>
              </div>
              <h3 className="font-brand font-extrabold text-2xl sm:text-3xl text-ink uppercase tracking-wide group-hover:text-[#2A657D] transition-colors">
                The Artisan Cafe
              </h3>
              <p className="font-body text-sm sm:text-base text-ink/80 mt-2 leading-relaxed">
                Freshly pulled espresso brews, chilled caramel lattes, thick Biscoff shakes, coastal seafood bites, crispy cigar rolls, and decadent handmade cheesecakes.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#2A657D]/20 flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2A657D]">
              <span>Explore Cafe &amp; Brews Menu</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>

        {/* 6 Quick Category Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryTiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <Link
                key={tile.slug}
                href={`/menu?hub=${tile.hub}&tab=${tile.slug}`}
                className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover flex flex-col justify-between ${tile.bgClass}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cream/90 flex items-center justify-center shadow-sm text-ink group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <span
                      className={`text-[11px] uppercase font-semibold px-2.5 py-1 rounded-full ${tile.badgeClass}`}
                    >
                      {tile.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-ink tracking-wide mb-1 group-hover:text-gold transition-colors">
                    {tile.title}
                  </h3>
                  <p className="font-body text-sm text-ink/75 leading-relaxed">
                    {tile.subtitle}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-ink/10 flex items-center justify-between text-xs font-semibold tracking-wide uppercase">
                  <span className={tile.textClass}>View Category Items</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SIGNATURE PICKS CAROUSEL
          Swipeable cards on mobile, arrow controls on desktop
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-cream/60 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <p className="font-heading uppercase tracking-widest text-xs sm:text-sm font-semibold text-gold mb-2">
                House Favorites
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink tracking-wide">
                SIGNATURE PICKS
              </h2>
              <p className="font-body text-ink/75 text-sm sm:text-base mt-1">
                The most beloved delicacies our guests keep coming back for.
              </p>
            </div>
            <Link
              href="/menu"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-bronze transition-colors underline underline-offset-4"
            >
              <span>See Full 220+ Item Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <SignatureCarousel items={signaturePicks} />
        </div>
      </section>

      {/* =========================================================================
          CHEF'S CULINARY TASTING JOURNEY
          Curated course progressions & flavor pairings
         ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="font-heading uppercase tracking-widest text-xs sm:text-sm font-semibold text-gold mb-2">
            Curated Tasting Sequences
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink tracking-wide">
            THE 666 CULINARY JOURNEY
          </h2>
          <p className="font-body text-ink/75 text-sm sm:text-base mt-2">
            Experience our chef-crafted course progressions: from smoky tandoor starters and royal ghee roasts to breezy cafe coolers and handmade desserts.
          </p>
          <SectionDivider className="my-6" />
        </div>

        <FlavourJourneyFlow />
      </section>

      {/* =========================================================================
          OUR STORY TEASER BLOCK
          Connecting Kolhapur royalty with coastal cafe soul
         ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream border border-gold/40 rounded-3xl p-8 sm:p-12 md:p-16 shadow-card relative overflow-hidden">
          {/* Authentic Gold Corner Palm Tree from Menu Cards */}
          <div className="absolute -right-4 -bottom-6 opacity-30 pointer-events-none">
            <PalmTreeSway variant="right" theme="gold" className="w-36 sm:w-56 h-auto drop-shadow-sm" enableSway={false} />
          </div>

          <div className="max-w-3xl">
            <span className="font-heading uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-gold block mb-3">
              The Heritage Behind House of 666
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ink tracking-wide leading-tight mb-6">
              WHERE ROYAL FLAVOURS MEET A COASTAL CAFE SOUL
            </h2>
            <p className="font-body text-ink/80 text-base sm:text-lg leading-relaxed mb-6">
              Born in the heart of Tarabai Park, House of 666 is an homage to Kolhapur’s legendary hospitality. We believe grand food doesn’t have to feel stiff, and chilled cafe afternoons deserve dishes prepared with royal precision.
            </p>
            <p className="font-body text-ink/75 text-sm sm:text-base leading-relaxed mb-8">
              Whether you crave a fiery Kolhapuri Mutton Ghee Roast slow-cooked over burning coals, or a handcrafted Lotus Biscoff cheesecake with fresh iced espresso, every recipe is prepared by masters of their craft.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gold text-cream font-semibold text-sm hover:bg-bronze transition-colors shadow-gold hover:-translate-y-0.5"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-gold/60 text-ink font-medium text-sm hover:bg-gold/10 transition-colors"
              >
                <span>View Ambience &amp; Food</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INSTAGRAM STRIP
          6-image grid linking out to @houseof_666
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-ink text-cream border-t-2 border-gold/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-heading uppercase tracking-widest text-xs sm:text-sm font-semibold text-gold mb-2">
              Follow Our Daily Feasts
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-wide text-cream">
              @HOUSEOF_666 ON INSTAGRAM
            </h2>
            <p className="font-accent text-gold text-lg sm:text-xl italic mt-2">
              Tag us in your photos to get featured on our royal feed ✨
            </p>
            <SectionDivider className="my-6" />
          </div>

          {/* 6-Photo Grid with authentic House of 666 reel frames */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {instagramPhotos.map((photo) => (
              <a
                key={photo.id}
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden bg-husk/50 border border-gold/30 block shadow-sm hover:border-gold transition-all duration-300"
                aria-label={`View ${photo.title} on Instagram`}
              >
                {/* Real photo from House of 666 reel */}
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3 z-10 transition-opacity duration-200">
                  <span className="text-[10px] uppercase font-semibold text-gold tracking-wider">
                    {photo.category}
                  </span>
                  <p className="text-xs font-medium text-cream line-clamp-2 leading-tight">
                    {photo.title}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gold/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-cream text-ink flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-200">
                    <InstagramIcon className="w-5 h-5 text-gold" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-10">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-cream hover:bg-bronze transition-all duration-200 text-sm font-semibold shadow-gold"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow @houseof_666 on Instagram</span>
            </a>

            {siteConfig.xUrl && (
              <a
                href={siteConfig.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gold/50 text-cream hover:bg-gold hover:text-ink transition-all duration-200 text-sm font-semibold"
              >
                <XIcon className="w-4 h-4" />
                <span>Follow {siteConfig.xHandle} on X</span>
              </a>
            )}

            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gold/40 bg-gold/10 text-cream hover:bg-gold hover:text-ink transition-all duration-200 text-sm font-semibold"
            >
              <span className="text-[#FBBC04]">★★★★★</span>
              <span>5.0 on Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LOCATION & HOURS SUMMARY BLOCK
          Embedded Google Maps + address summary
         ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Details Card */}
          <div className="lg:col-span-5 bg-cream border border-gold/30 rounded-3xl p-8 sm:p-10 shadow-card">
            <span className="font-heading uppercase tracking-widest text-xs sm:text-sm font-semibold text-gold block mb-2">
              Visit Us Today
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-ink tracking-wide mb-6">
              TARABAI PARK, KOLHAPUR
            </h2>

            <div className="space-y-5 font-body text-sm sm:text-base text-ink/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-ink">House of 666 — Resto &amp; Cafe</p>
                  <p className="text-ink/75">Near R.T.O. Office, Tarabai Park</p>
                  <p className="text-ink/75">Kolhapur, Maharashtra 416003, India</p>
                  <p className="text-xs text-gold font-medium mt-0.5">Plus Code: {siteConfig.address.plusCode}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-ink">Operating Hours</p>
                  <p className="text-ink/80 font-medium">Mon – Sat: 10:00 AM – 11:00 PM</p>
                  <p className="text-ink/80 font-medium">Sunday: 10:00 AM – 10:00 PM</p>
                  <p className="text-xs text-gold font-medium mt-1">
                    Resto: 12:00 PM – 3:30 PM &amp; 7:00 PM – 10:30 PM | Cafe: 12:00 PM – 10:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-ink">Table Reservations &amp; Inquiries</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-sm">
                    {siteConfig.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="text-gold hover:text-bronze font-medium underline underline-offset-2"
                      >
                        +91 {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gold/20 flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-gold text-cream font-semibold text-sm hover:bg-bronze transition-colors shadow-sm"
              >
                <Compass className="w-4 h-4" />
                <span>Navigate via Maps</span>
              </a>
              <Link
                href="/contact"
                className="flex-1 inline-flex items-center justify-center py-3 px-5 rounded-full border border-gold text-ink font-semibold text-sm hover:bg-gold/15 transition-colors"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Embedded Google Maps iFrame */}
          <div className="lg:col-span-7 h-[360px] sm:h-[420px] lg:h-[460px] rounded-3xl overflow-hidden border-2 border-gold/40 shadow-card relative">
            <iframe
              title="House of 666 Location Map in Tarabai Park, Kolhapur"
              src={siteConfig.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[15%] contrast-[105%]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
