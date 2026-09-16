import React from "react";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  Car,
  Navigation,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { SectionDivider } from "@/components/SectionDivider";
import { RestaurantJsonLd } from "@/components/RestaurantJsonLd";
import { CopyAddressButton } from "@/components/CopyAddressButton";
import { InstagramIcon } from "@/components/Motifs";

export const metadata: Metadata = {
  title: "Location, Hours & Contact — House of 666 Resto & Cafe Kolhapur",
  description:
    "Find House of 666 Resto & Cafe near R.T.O. Office in Tarabai Park, Kolhapur. Open Mon–Sat 10:00 AM – 11:00 PM, Sun 10:00 AM – 10:00 PM. Get driving directions, view map, WhatsApp reservation, and call directly.",
};

export default function ContactPage() {
  return (
    <>
      <RestaurantJsonLd />

      <div className="bg-cream min-h-screen">
        {/* Header */}
        <section className="bg-cream border-b border-gold/25 py-12 sm:py-16 text-center px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="font-heading uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-gold mb-2">
              Visit &amp; Connect &bull; Tarabai Park, Kolhapur
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight">
              LOCATION, HOURS &amp; CONTACT
            </h1>
            <p className="font-body text-ink/75 text-sm sm:text-base max-w-xl mx-auto mt-3">
              Situated near the R.T.O. Office in Tarabai Park. Join us for a royal family feast, breezy cafe coolers, or get in touch directly.
            </p>
            <SectionDivider className="my-6" />
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Details & Instant Connect Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Address Card */}
              <div className="bg-cream border border-gold/30 rounded-3xl p-7 sm:p-8 shadow-card border-t-4 border-t-gold">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gold">
                    <MapPin className="w-5 h-5" />
                    <span className="font-heading uppercase tracking-widest text-xs font-bold">
                      Our Address
                    </span>
                  </div>
                  <CopyAddressButton text={siteConfig.address.full} />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4285F4]/10 border border-[#4285F4]/30 text-xs font-medium text-[#1A73E8] mb-3">
                  <span>Google Verified</span>
                  <span className="text-[#FBBC04] font-bold">★★★★★ 5.0</span>
                </div>

                <h2 className="font-display text-2xl text-ink tracking-wide mb-2">
                  House of 666 — Resto &amp; Cafe
                </h2>
                <p className="font-body text-ink/80 text-base leading-relaxed mb-3">
                  Near R.T.O. Office, Tarabai Park,<br />
                  Kolhapur, Maharashtra 416003, India
                </p>
                <p className="font-body text-xs text-husk/80 mb-6">
                  Plus Code: <span className="font-semibold text-gold">{siteConfig.address.plusCode}</span>
                </p>

                {/* Direct Google Maps Navigation / App link */}
                <a
                  href={siteConfig.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gold text-cream font-semibold text-sm hover:bg-bronze transition-all duration-200 shadow-gold hover:-translate-y-0.5 active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions (Open Maps App)</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Opening Hours Schedule */}
              <div className="bg-cream border border-gold/30 rounded-3xl p-7 sm:p-8 shadow-card border-t-4 border-t-[#1C695B]">
                <div className="flex items-center gap-2 text-[#1C695B] mb-4">
                  <Clock className="w-5 h-5" />
                  <span className="font-heading uppercase tracking-widest text-xs font-bold">
                    Opening Hours
                  </span>
                </div>

                <h3 className="font-display text-xl text-ink tracking-wide mb-4">
                  Daily Service Schedule
                </h3>

                <div className="divide-y divide-gold/15 text-sm font-body">
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="text-ink font-medium">Monday – Saturday</span>
                    <span className="text-gold font-bold">10:00 AM – 11:00 PM</span>
                  </div>
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="text-ink font-medium">Sunday</span>
                    <span className="text-gold font-bold">10:00 AM – 10:00 PM</span>
                  </div>
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="text-ink font-medium">Resto Kitchen Lunch</span>
                    <span className="text-ink/75">12:00 PM – 3:30 PM</span>
                  </div>
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="text-ink font-medium">Resto Kitchen Dinner</span>
                    <span className="text-ink/75">7:00 PM – 11:00 PM</span>
                  </div>
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="text-ink font-medium">Cafe &amp; Beverages</span>
                    <span className="text-ink/75">Continuous All Day</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gold/15 flex items-center gap-2 text-xs text-husk">
                  <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Dine-in, curbside takeaway, family seating &amp; free Wi-Fi</span>
                </div>
              </div>

              {/* Direct Connect & Socials Card */}
              <div className="bg-cream border border-gold/30 rounded-3xl p-7 sm:p-8 shadow-card border-t-4 border-t-[#B03714]">
                <div className="flex items-center gap-2 text-[#B03714] mb-3">
                  <Phone className="w-5 h-5" />
                  <span className="font-heading uppercase tracking-widest text-xs font-bold">
                    Call &amp; WhatsApp
                  </span>
                </div>

                <p className="font-body text-xs sm:text-sm text-ink/75 mb-4">
                  Reach our team directly for table inquiries, party bookings, or takeaway orders:
                </p>

                {/* Instant WhatsApp Action */}
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1EBE5D] transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:scale-95 mb-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp (+91 {siteConfig.primaryPhone})</span>
                </a>

                {/* Clickable Phone Numbers */}
                <div className="space-y-2 mb-5">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-cream border border-gold/30 hover:border-gold hover:bg-gold/10 transition-colors group"
                    >
                      <span className="font-body font-bold text-sm sm:text-base text-ink group-hover:text-gold">
                        +91 {phone}
                      </span>
                      <span className="text-xs font-medium text-gold flex items-center gap-1">
                        <span>Call Host</span>
                        <Phone className="w-3.5 h-3.5" />
                      </span>
                    </a>
                  ))}
                </div>

                {/* Instagram & Google Reviews */}
                <div className="pt-3 border-t border-gold/20 flex flex-col gap-2">
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-cream border border-gold/30 hover:border-gold hover:bg-gold/10 transition-colors text-ink text-sm font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <InstagramIcon className="w-4 h-4 text-gold" />
                      <span>{siteConfig.instagramHandle}</span>
                    </span>
                    <span className="text-xs text-gold font-semibold">Follow on Instagram &rarr;</span>
                  </a>

                  <a
                    href={siteConfig.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-cream border border-gold/30 hover:border-gold hover:bg-gold/10 transition-colors text-ink text-sm font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#FBBC04]">★★★★★</span>
                      <span>Google Reviews (5.0 Stars)</span>
                    </span>
                    <span className="text-xs font-bold text-gold">Write Review &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Google Maps iFrame + Neighborhood Guide (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Google Maps iFrame Card with Direct Navigation Header */}
              <div className="bg-cream border-2 border-gold/40 rounded-3xl overflow-hidden shadow-card">
                <div className="p-4 sm:p-5 bg-gold/10 border-b border-gold/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg text-ink font-bold">
                      Interactive Location Map
                    </h3>
                    <p className="text-xs text-ink/75">
                      Tarabai Park &bull; Near Regional Transport Office
                    </p>
                  </div>
                  <a
                    href={siteConfig.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold text-cream text-xs font-semibold hover:bg-bronze transition-colors shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open Navigation in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="h-[420px] sm:h-[500px] lg:h-[560px] w-full">
                  <iframe
                    title="Google Maps Location for House of 666, Tarabai Park, Kolhapur"
                    src={siteConfig.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Nearby Landmarks & Parking Guide */}
              <div className="bg-cream border border-gold/30 rounded-3xl p-7 sm:p-8 shadow-card">
                <h3 className="font-display text-xl text-ink tracking-wide mb-3 flex items-center gap-2">
                  <Car className="w-5 h-5 text-gold" />
                  <span>How to Reach &amp; Parking</span>
                </h3>

                <ul className="space-y-3 font-body text-sm text-ink/80">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span>
                      <strong>Prominent Landmark:</strong> Located directly near the Regional Transport Office (R.T.O.) in Tarabai Park, Kolhapur.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span>
                      <strong>Parking Convenience:</strong> Dedicated open parking available for both four-wheelers and two-wheelers on the broad, tree-shaded avenue.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span>
                      <strong>From Central Kolhapur:</strong> Only an 8–10 minute drive from Kolhapur Railway Station and Central Bus Stand (CBS).
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
