import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Clock, MapPin, Compass, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Contact & Location — House of 666 Resto & Cafe Kolhapur",
  description:
    "Get in touch with House of 666 Resto & Cafe in Tarabai Park, Kolhapur. Call 7083560666 or message on WhatsApp for enquiries, large parties, and directions.",
};

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-cream border-b border-gold/25 py-12 sm:py-16 text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-heading uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-gold mb-2">
            Warm Kolhapuri Hospitality
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight">
            CONTACT &amp; VISIT US
          </h1>
          <p className="font-body text-ink/75 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Plan a royal family feast, a breezy cafe date, or visit us in Tarabai Park. We look forward to welcoming you!
          </p>
          <SectionDivider className="my-6" />
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Direct Connect & Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Actions Card */}
            <div className="bg-cream border border-gold/30 rounded-3xl p-6 sm:p-8 shadow-card border-t-4 border-t-gold">
              <h2 className="font-display text-2xl text-ink tracking-wide mb-2">
                INSTANT CONNECT
              </h2>
              <p className="font-body text-xs sm:text-sm text-ink/75 mb-6 leading-relaxed">
                Connect directly with our team for questions, menu inquiries, or large group bookings:
              </p>

              <div className="space-y-3">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1EBE5D] transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${siteConfig.primaryPhone}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-ink text-cream font-semibold text-sm hover:bg-husk transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:scale-95"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call Now (+91 {siteConfig.primaryPhone})</span>
                </a>

                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full border-2 border-gold text-ink font-semibold text-sm hover:bg-gold/15 transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:scale-95"
                >
                  <Compass className="w-4 h-4 text-gold" />
                  <span>Get Directions on Maps</span>
                </a>
              </div>
            </div>

            {/* Timings & Address */}
            <div className="bg-cream border border-gold/30 rounded-3xl p-6 sm:p-8 shadow-card">
              <h3 className="font-display text-xl text-ink tracking-wide mb-4">
                HOURS &amp; LOCATION
              </h3>

              <div className="space-y-4 font-body text-sm text-ink/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <p className="leading-relaxed">
                    House of 666, Near R.T.O. Office, Tarabai Park, Kolhapur, Maharashtra 416003
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-ink">Open 7 Days a Week</p>
                    <p className="text-ink/70">11:00 AM – 11:30 PM (Continuous Service)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div className="space-y-0.5">
                    {siteConfig.phones.map((p) => (
                      <p key={p}>
                        <a href={`tel:${p}`} className="text-gold font-medium hover:underline">
                          +91 {p}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-gold/20">
                <Link
                  href="/menu"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-gold text-cream font-semibold text-sm hover:bg-bronze transition-colors shadow-sm"
                >
                  <span>Explore Full 220+ Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Google Map (7 cols) */}
          <div className="lg:col-span-7 h-[420px] sm:h-[500px] lg:h-full min-h-[420px] rounded-3xl overflow-hidden border-2 border-gold/40 shadow-card relative">
            <iframe
              title="House of 666 Location Map in Tarabai Park, Kolhapur"
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
      </main>
    </div>
  );
}
