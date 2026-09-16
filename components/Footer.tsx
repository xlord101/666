import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { SectionDivider } from "./SectionDivider";
import { InstagramIcon, XIcon } from "./Motifs";
import { ReplayIntroButton } from "./ReplayIntroButton";

export function Footer() {
  return (
    <footer className="bg-ink text-cream relative border-t-2 border-gold/40 mt-16">
      {/* Top Gold Accent Border */}
      <div className="h-1 bg-gradient-to-r from-bronze via-gold to-bronze w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand & Story Snippet */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/50 bg-cream">
                <Image
                  src="/logo.png"
                  alt="House of 666 Emblem"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-brand font-bold text-xl sm:text-2xl tracking-[0.16em] text-cream block uppercase">
                  HOUSE OF <span className="text-gold">666</span>
                </span>
                <span className="font-heading uppercase tracking-[0.25em] text-[10px] text-cream/70 block">
                  Resto &amp; Cafe
                </span>
              </div>
            </div>

            <p className="font-body text-cream/70 text-sm leading-relaxed">
              {siteConfig.tagline} Kolhapur’s royal culinary pride crafted alongside artisan coffees, handmade desserts, and vibrant cafe coolers.
            </p>

            <p className="font-accent text-gold text-lg italic">
              Come for the feast, stay for the soul ✨
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-heading uppercase tracking-widest text-gold text-base font-semibold border-b border-gold/20 pb-2">
              Explore
            </h3>
            <ul className="space-y-2.5 font-body text-sm text-cream/80">
              <li>
                <Link href="/" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <span>Full Food &amp; Brew Menu</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <span>Our Heritage &amp; Story</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <span>Photo &amp; Food Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <span>Find Us &amp; Hours</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  <span>Contact &amp; Directions</span>
                </Link>
              </li>
              <li>
                <ReplayIntroButton variant="text" />
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-4">
            <h3 className="font-heading uppercase tracking-widest text-gold text-base font-semibold border-b border-gold/20 pb-2">
              Hours &amp; Location
            </h3>

            <div className="space-y-3 font-body text-sm text-cream/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <address className="not-italic leading-relaxed text-cream/75">
                  {siteConfig.address.full}
                </address>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-cream">Mon – Sat: 10:00 AM – 11:00 PM</p>
                  <p className="text-cream/70 text-xs">Sunday: 10:00 AM – 10:00 PM</p>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-cream transition-colors font-medium underline underline-offset-4"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Call & Social Connect */}
          <div className="space-y-4">
            <h3 className="font-heading uppercase tracking-widest text-gold text-base font-semibold border-b border-gold/20 pb-2">
              Connect With Us
            </h3>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wider text-cream/60 font-medium">Direct Phone Lines</p>
              {siteConfig.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 font-body text-sm text-cream/85 hover:text-gold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>+91 {phone}</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 text-cream text-xs hover:bg-gold hover:text-ink transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4 text-gold" />
                <span>Follow {siteConfig.instagramHandle}</span>
              </a>

              {siteConfig.xUrl && (
                <a
                  href={siteConfig.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 text-cream text-xs hover:bg-gold hover:text-ink transition-all duration-200"
                >
                  <XIcon className="w-3.5 h-3.5 text-gold" />
                  <span>Follow {siteConfig.xHandle}</span>
                </a>
              )}

              <a
                href={siteConfig.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-gold/10 text-cream text-xs hover:bg-gold hover:text-ink transition-all duration-200"
              >
                <span className="text-[#FBBC04] text-xs">★★★★★</span>
                <span className="font-semibold text-gold group-hover:text-ink">5.0 on Google</span>
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-cream text-xs hover:bg-[#25D366] hover:text-ink transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <SectionDivider className="my-10" />

        {/* Bottom Copyright & Notes */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-cream/60">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-accent text-gold text-sm italic">
            Tarabai Park, Kolhapur, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
}
