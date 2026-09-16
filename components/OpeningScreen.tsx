"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Brand666Glyphs } from "./HouseOf666Heading";

interface OpeningScreenProps {
  /** Video source path in /public, defaults to /intro-video.mp4 */
  defaultVideoSrc?: string;
  /** Force open screen for testing or replay */
  forceOpen?: boolean;
}

export function OpeningScreen({
  defaultVideoSrc = "/intro-video.mp4",
  forceOpen = false,
}: OpeningScreenProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoSrc, setVideoSrc] = useState(defaultVideoSrc);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Check if intro has already been seen in this session
  useEffect(() => {
    const hasSeen = typeof window !== "undefined" ? sessionStorage.getItem("house666_intro_seen") : null;
    const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
    const forceParam = urlParams?.get("intro") === "1" || urlParams?.get("intro") === "true";

    if (!hasSeen || forceParam || forceOpen) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }

    // Listen for custom replay event from Navbar or Footer
    const handleReplay = () => {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    };

    window.addEventListener("replay-intro", handleReplay);
    return () => {
      window.removeEventListener("replay-intro", handleReplay);
      document.body.style.overflow = "";
    };
  }, [forceOpen]);

  // Handle skip / enter
  const handleDismiss = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
    if (typeof window !== "undefined") {
      sessionStorage.setItem("house666_intro_seen", "true");
    }
  };

  // Keyboard shortcut listener (Enter or Esc to skip)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.code === "Space") {
        e.preventDefault();
        handleDismiss();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Ambient luxury canvas animation (fallback when video is loading or before user adds intro-video.mp4)
  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Glowing golden embers & atmospheric light orbs
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 0.8,
      speedY: -(Math.random() * 0.45 + 0.15),
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * 0.02 + 0.008,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep luxury warm radial glow in background
      const grad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        50,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      grad.addColorStop(0, "#1f1810");
      grad.addColorStop(0.5, "#14100b");
      grad.addColorStop(1, "#0a0805");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Draw and float particles
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * p.pulse) * 0.005;

        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(185, 139, 62, ${Math.max(0.1, Math.min(0.8, p.opacity))})`;
        ctx.shadowColor = "#B98B3E";
        ctx.shadowBlur = 10;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  // Luxury dark translucent veil overlay over video background
  const sheetClass = "bg-black/70 backdrop-blur-[2px]";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="opening-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(12px)",
            transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 overflow-hidden bg-black flex flex-col justify-between select-none"
        >
          {/* =================================================================
              1. BACKGROUND VIDEO (OR ATMOSPHERIC CANVAS FALLBACK)
             ================================================================= */}
          <div className="absolute inset-0 z-0">
            {/* Ambient Canvas Fallback */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

            {/* Video element */}
            <video
              ref={videoRef}
              src={videoSrc}
              poster="/hero-ambient-poster.jpg"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="metadata"
              onCanPlay={() => {
                setVideoLoaded(true);
                setVideoError(false);
              }}
              onError={() => {
                setVideoError(true);
                setVideoLoaded(false);
              }}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                videoLoaded && !videoError ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* =================================================================
              2. BLACK OPAQUE / SEMI-TRANSPARENT SHEET OVERLAY
             ================================================================= */}
          <div className={`absolute inset-0 z-10 transition-colors duration-500 ${sheetClass}`} />

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />

          {/* Subtle Golden Ambient Border Rim */}
          <div className="absolute inset-4 sm:inset-6 z-10 pointer-events-none border border-gold/25 rounded-3xl" />

          {/* =================================================================
              3. TOP BAR (BRAND WATERMARK, AUDIO TOGGLE & SKIP BUTTON)
             ================================================================= */}
          <header className="relative z-20 w-full px-5 py-4 sm:px-8 sm:py-6 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
              <span className="font-heading uppercase tracking-[0.25em] text-[10px] sm:text-xs text-cream/80 font-semibold">
                House of 666 &bull; Tarabai Park
              </span>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Discrete Sound Toggle */}
              <button
                type="button"
                onClick={() => {
                  setIsMuted(!isMuted);
                  if (videoRef.current) videoRef.current.muted = !isMuted;
                }}
                className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cream/10 hover:bg-cream/20 text-cream/90 border border-gold/30 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                title={isMuted ? "Unmute Background Film" : "Mute Background Film"}
                aria-label={isMuted ? "Unmute background audio" : "Mute background audio"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-cream/70" />
                ) : (
                  <Volume2 className="w-4 h-4 text-gold animate-pulse" />
                )}
              </button>

              {/* Skip Button */}
              <button
                type="button"
                onClick={handleDismiss}
                className="group inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-cream/10 hover:bg-gold hover:text-cream text-cream border border-gold/40 backdrop-blur-md text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
              >
                <span>Skip Intro</span>
                <span className="text-gold group-hover:text-cream group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </button>
            </div>
          </header>

          {/* =================================================================
              4. CENTER BRANDING (LOGO, NAME, TAGLINE, ENTER CTA)
             ================================================================= */}
          <main className="relative z-20 max-w-3xl mx-auto px-4 text-center my-auto py-4 sm:py-8 flex flex-col items-center justify-center">
            {/* Royal Gold Emblem */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center justify-center mb-4 sm:mb-6 relative"
            >
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-gold shadow-[0_0_45px_rgba(185,139,62,0.45)] bg-cream">
                <Image
                  src="/logo.png"
                  alt="House of 666 Official Emblem"
                  fill
                  sizes="(max-width: 640px) 80px, 112px"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Brand Title: Logo-accurate Montserrat + Brand666Glyphs foil */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              className="flex flex-col items-center justify-center text-center mb-3 sm:mb-4"
            >
              <span className="font-brand font-medium text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.08em] text-cream uppercase select-none mb-1 sm:mb-2 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                HOUSE OF
              </span>
              <span className="inline-flex items-center justify-center">
                <Brand666Glyphs
                  className="h-16 sm:h-22 md:h-28 lg:h-32 w-auto"
                  useFoil={true}
                />
              </span>
            </motion.div>

            {/* Cormorant Garamond Tracked Subtitle */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="font-heading uppercase tracking-[0.3em] sm:tracking-[0.45em] text-[11px] sm:text-sm md:text-base text-gold font-bold mb-3 sm:mb-4"
            >
              RESTO &bull; CAFE &bull; TARABAI PARK
            </motion.p>

            {/* Caveat Handwritten Accent */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
              className="font-accent text-cream/95 text-base sm:text-xl md:text-2xl italic max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed drop-shadow-md px-2"
            >
              &ldquo;Where Royal Kolhapuri Heritage Meets Seaside Cafe Vibes&rdquo;
            </motion.p>

            {/* Primary ENTER EXPERIENCE Button */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center gap-2.5 w-full max-w-xs sm:max-w-none"
            >
              <button
                type="button"
                onClick={handleDismiss}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gold text-cream font-semibold text-sm sm:text-base hover:bg-bronze transition-all duration-300 shadow-[0_0_35px_rgba(185,139,62,0.5)] hover:shadow-[0_0_50px_rgba(185,139,62,0.8)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cream/90 group-hover:rotate-12 transition-transform" />
                <span className="tracking-wide uppercase">Enter Experience</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
