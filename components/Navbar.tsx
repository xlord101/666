"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, UtensilsCrossed } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { ReplayIntroButton } from "./ReplayIntroButton";
import { InstagramIcon, XIcon } from "./Motifs";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Our Story", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Location & Hours", href: "/location" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "glass-nav border-b border-gold/30 shadow-card py-2.5"
          : "bg-cream/95 border-b border-gold/15 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold rounded-lg"
          aria-label="House of 666 - Return to Homepage"
        >
          <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-gold/60 shadow-sm bg-cream flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="House of 666 Emblem"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl sm:text-2xl text-ink tracking-wider leading-none">
              HOUSE OF <span className="text-gold">666</span>
            </span>
            <span className="font-heading uppercase tracking-[0.2em] text-[10px] sm:text-xs text-husk font-medium">
              Resto &amp; Cafe
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm lg:text-base font-medium transition-colors relative py-1 hover:text-gold ${
                  isActive ? "text-gold font-semibold" : "text-ink/80"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-ink/70 hover:text-gold hover:bg-gold/15 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="House of 666 on Instagram"
            title="Follow on Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          {siteConfig.xUrl && (
            <a
              href={siteConfig.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-ink/70 hover:text-gold hover:bg-gold/15 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="House of 666 on X"
              title="Follow on X"
            >
              <XIcon className="w-4 h-4" />
            </a>
          )}
          <ReplayIntroButton variant="icon" />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full bg-gold text-cream hover:bg-bronze transition-all duration-200 shadow-gold hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream"
          >
            Reserve a Table
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-ink/80 hover:text-gold"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <ReplayIntroButton variant="icon" className="p-1.5" />
          <Link
            href="/contact"
            className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gold text-cream hover:bg-bronze transition-colors shadow-sm"
          >
            Reserve
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink hover:text-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gold/20 bg-cream px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                    isActive
                      ? "bg-gold/15 text-gold font-semibold"
                      : "text-ink hover:bg-gold/10 hover:text-gold"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-gold/15 flex flex-col gap-2">
            <div className="flex items-center justify-center gap-4 py-1 text-ink/70">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-gold"
              >
                <InstagramIcon className="w-4 h-4 text-gold" />
                <span>Instagram ({siteConfig.instagramHandle})</span>
              </a>
              {siteConfig.xUrl && (
                <a
                  href={siteConfig.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-gold"
                >
                  <XIcon className="w-3.5 h-3.5 text-gold" />
                  <span>X ({siteConfig.xHandle})</span>
                </a>
              )}
            </div>
            <ReplayIntroButton
              variant="pill"
              className="w-full justify-center"
            />
            <Link
              href="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-gold text-ink font-medium text-sm hover:bg-gold/10"
            >
              <UtensilsCrossed className="w-4 h-4 text-gold" />
              <span>Browse Full Menu</span>
            </Link>
            <a
              href={`tel:${siteConfig.primaryPhone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-ink text-cream font-medium text-sm hover:bg-ink/90"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call Us ({siteConfig.primaryPhone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
