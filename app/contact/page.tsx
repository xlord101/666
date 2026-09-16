import React from "react";
import { Metadata } from "next";
import { Phone, MessageCircle, Clock, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { SectionDivider } from "@/components/SectionDivider";
import { ReservationForm } from "@/components/ReservationForm";

export const metadata: Metadata = {
  title: "Reserve a Table & Contact Us — House of 666 Kolhapur",
  description:
    "Book your table at House of 666 Resto & Cafe in Tarabai Park, Kolhapur. Call 7083560666 or message on WhatsApp. Quick table reservation for family dinners, birthdays, and cafe dates.",
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
            RESERVE A TABLE &amp; CONTACT
          </h1>
          <p className="font-body text-ink/75 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Plan an intimate cafe date, a royal family celebration, or reserve your table in advance for hassle-free dining.
          </p>
          <SectionDivider className="my-6" />
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Reservation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-cream border border-gold/30 rounded-3xl p-6 sm:p-10 shadow-card">
              <div className="flex items-center gap-2 text-gold mb-2">
                <Sparkles className="w-4 h-4" />
                <span className="font-heading uppercase tracking-widest text-xs font-bold">
                  Online Booking
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl text-ink tracking-wide mb-2">
                BOOK YOUR DINING EXPERIENCE
              </h2>
              <p className="font-body text-xs sm:text-sm text-ink/75 mb-8">
                Fill in your details below. We confirm reservations within 15–30 minutes during open hours.
              </p>

              <ReservationForm />
            </div>
          </div>

          {/* Quick Contact & Mini Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Connect Buttons */}
            <div className="bg-cream border border-gold/30 rounded-3xl p-6 sm:p-8 shadow-card border-t-4 border-t-gold">
              <h3 className="font-display text-xl text-ink tracking-wide mb-3">
                INSTANT CONNECT
              </h3>
              <p className="font-body text-xs sm:text-sm text-ink/75 mb-6">
                Need an immediate table or party booking within the next hour? Connect with our front desk right away:
              </p>

              <div className="space-y-3">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1EBE5D] transition-all duration-200 shadow-sm hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${siteConfig.primaryPhone}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-ink text-cream font-semibold text-sm hover:bg-husk transition-all duration-200 shadow-sm hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call Now (+91 {siteConfig.primaryPhone})</span>
                </a>
              </div>
            </div>

            {/* Address & Hours Snippet */}
            <div className="bg-cream border border-gold/30 rounded-3xl p-6 sm:p-8 shadow-card">
              <h3 className="font-display text-xl text-ink tracking-wide mb-4">
                LOCATION &amp; TIMINGS
              </h3>

              <div className="space-y-4 font-body text-sm text-ink/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <p className="leading-relaxed">
                    House of 666, Near R.T.O. Office, Tarabai Park, Kolhapur, Maharashtra
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-ink">Open 7 Days a Week</p>
                    <p className="text-ink/70">11:00 AM – 11:30 PM Continuous Service</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div className="space-y-0.5">
                    {siteConfig.phones.map((p) => (
                      <p key={p}>
                        <a href={`tel:${p}`} className="text-gold hover:underline">
                          +91 {p}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Repeated Small Map Preview */}
            <div className="h-[220px] rounded-3xl overflow-hidden border-2 border-gold/40 shadow-card">
              <iframe
                title="House of 666 Mini Location Map"
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
        </div>
      </main>
    </div>
  );
}
