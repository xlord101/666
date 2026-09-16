import React from "react";
import { Metadata } from "next";
import { MapPin, Phone, Clock, Compass, ExternalLink, Car, Navigation, ShieldCheck, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { SectionDivider } from "@/components/SectionDivider";
import { RestaurantJsonLd } from "@/components/RestaurantJsonLd";
import { CopyAddressButton } from "@/components/CopyAddressButton";
import { InstagramIcon, XIcon } from "@/components/Motifs";

export const metadata: Metadata = {
  title: "Location, Hours & Directions — House of 666 Tarabai Park, Kolhapur",
  description:
    "Find House of 666 Resto & Cafe near R.T.O. Office in Tarabai Park, Kolhapur. Open Mon–Sat 10:00 AM – 11:00 PM, Sun 10:00 AM – 10:00 PM. Get driving directions, view map, and call directly.",
};

export default function LocationPage() {
  return (
    <>
      <RestaurantJsonLd />

      <div className="bg-cream min-h-screen">
        {/* Header */}
        <section className="bg-cream border-b border-gold/25 py-12 sm:py-16 text-center px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="font-heading uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-gold mb-2">
              Visit Us in Kolhapur
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight">
              LOCATION &amp; HOURS
            </h1>
            <p className="font-body text-ink/75 text-sm sm:text-base max-w-xl mx-auto mt-3">
              Situated in the leafy, prestigious Tarabai Park neighborhood, easily accessible from all corners of Kolhapur.
            </p>
            <SectionDivider className="my-6" />
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Details Cards */}
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

                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gold text-cream font-semibold text-sm hover:bg-bronze transition-all duration-200 shadow-gold hover:-translate-y-0.5"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Opening Hours Table */}
              <div className="bg-cream border border-gold/30 rounded-3xl p-7 sm:p-8 shadow-card border-t-4 border-t-shake-teal">
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
                    <span className="text-ink font-medium">Kitchen Lunch Hours</span>
                    <span className="text-ink/75">12:00 PM – 3:30 PM</span>
                  </div>
                  <div className="py-2.5 flex items-center justify-between">
                    <span className="text-ink font-medium">Kitchen Dinner Hours</span>
                    <span className="text-ink/75">7:00 PM – 11:00 PM</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gold/15 flex items-center gap-2 text-xs text-husk">
                  <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Dine-in, curbside takeaway, live music &amp; free Wi-Fi available</span>
                </div>
              </div>

              {/* Direct Phone Lines Card */}
              <div className="bg-cream border border-gold/30 rounded-3xl p-7 sm:p-8 shadow-card border-t-4 border-t-mojito-coral">
                <div className="flex items-center gap-2 text-[#B03714] mb-4">
                  <Phone className="w-5 h-5" />
                  <span className="font-heading uppercase tracking-widest text-xs font-bold">
                    Direct Phone Lines
                  </span>
                </div>

                <p className="font-body text-xs sm:text-sm text-ink/75 mb-4">
                  Click any number to dial our reception host directly:
                </p>

                <div className="space-y-2.5">
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
              </div>

              {/* Social & Reviews Card */}
              <div className="bg-cream border border-gold/30 rounded-3xl p-7 sm:p-8 shadow-card border-t-4 border-t-gold">
                <span className="font-heading uppercase tracking-widest text-xs font-bold text-gold block mb-2">
                  Social &amp; Ratings
                </span>
                <h3 className="font-display text-xl text-ink tracking-wide mb-4">
                  Connect &amp; Review
                </h3>
                <div className="space-y-2.5">
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
                    <span className="text-xs text-gold font-semibold">Follow &rarr;</span>
                  </a>

                  {siteConfig.xUrl && (
                    <a
                      href={siteConfig.xUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-cream border border-gold/30 hover:border-gold hover:bg-gold/10 transition-colors text-ink text-sm font-medium"
                    >
                      <span className="flex items-center gap-2">
                        <XIcon className="w-4 h-4 text-gold" />
                        <span>{siteConfig.xHandle}</span>
                      </span>
                      <span className="text-xs text-gold font-semibold">Follow &rarr;</span>
                    </a>
                  )}

                  <a
                    href={siteConfig.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-cream border border-gold/30 hover:border-gold hover:bg-gold/10 transition-colors text-ink text-sm font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#FBBC04]">★★★★★</span>
                      <span>Google Reviews</span>
                    </span>
                    <span className="text-xs font-bold text-gold">5.0 Star &rarr;</span>
                  </a>

                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors text-ink text-sm font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>WhatsApp Reservation</span>
                    </span>
                    <span className="text-xs font-semibold text-[#1B8A44]">Chat &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Map + Neighborhood Guide */}
            <div className="lg:col-span-7 space-y-6">
              {/* Google Maps iFrame */}
              <div className="h-[420px] sm:h-[500px] lg:h-[540px] rounded-3xl overflow-hidden border-2 border-gold/40 shadow-card relative">
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
                      <strong>Prominent Landmark:</strong> Located directly near the Regional Transport Office (R.T.O.) in Tarabai Park.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span>
                      <strong>Valet &amp; Parking:</strong> Ample parking space available for both two-wheelers and cars along the tree-lined avenue.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span>
                      <strong>From Central Kolhapur:</strong> Approximately 8–10 minutes drive from Rankala Lake and Kolhapur Central Bus Stand (CBS).
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
