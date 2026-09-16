"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, AlertCircle, Loader2, Calendar, Users, Clock, Phone, User, MessageSquare } from "lucide-react";

interface FormState {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  phone: "",
  date: "",
  time: "07:30 PM",
  guests: "2 Guests",
  message: "",
};

export function ReservationForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [reservationResult, setReservationResult] = useState<{
    id: string;
    details: { name: string; date: string; time: string; guests: string };
  } | null>(null);

  // Today's date in YYYY-MM-DD format for datepicker min attribute
  const today = new Date().toISOString().split("T")[0];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) {
      errs.name = "Please enter your full name.";
    }

    const cleanPhone = form.phone.replace(/\D/g, "");
    if (!cleanPhone) {
      errs.phone = "Phone number is required.";
    } else if (cleanPhone.length !== 10) {
      errs.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!form.date) {
      errs.date = "Please select a reservation date.";
    }

    if (!form.guests) {
      errs.guests = "Please select party size.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Could not complete reservation.");
      }

      setReservationResult({
        id: data.reservationId,
        details: {
          name: form.name,
          date: form.date,
          time: form.time,
          guests: form.guests,
        },
      });
      setStatus("success");

      // Celebrate booking with gold and champagne confetti
      try {
        confetti({
          particleCount: 80,
          spread: 75,
          origin: { y: 0.6 },
          colors: ["#B98B3E", "#7A5A22", "#F5EFDD", "#EFE0A0"],
        });
      } catch {
        // Safe fallback
      }

      setForm(initialForm);
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "Failed to reserve table. Please try again or call us.";
      setErrorMessage(message);
    }
  };

  if (status === "success" && reservationResult) {
    return (
      <div className="bg-cream border border-gold/40 rounded-2xl p-6 sm:p-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-green-100 border border-green-300 flex items-center justify-center text-green-700 mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <h3 className="font-display text-2xl sm:text-3xl text-ink">
          RESERVATION REQUEST RECEIVED!
        </h3>

        <p className="font-body text-sm sm:text-base text-ink/80 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-ink font-semibold">{reservationResult.details.name}</strong>! Your booking reference is{" "}
          <span className="font-mono font-bold text-gold bg-gold/10 px-2 py-0.5 rounded">
            {reservationResult.id}
          </span>
          .
        </p>

        <div className="bg-cream/70 border border-gold/25 rounded-xl p-4 max-w-sm mx-auto text-xs sm:text-sm font-body text-ink/80 text-left space-y-1.5">
          <div className="flex justify-between">
            <span className="text-ink/60">Date:</span>
            <span className="font-semibold text-ink">{reservationResult.details.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink/60">Time:</span>
            <span className="font-semibold text-ink">{reservationResult.details.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-ink/60">Guests:</span>
            <span className="font-semibold text-ink">{reservationResult.details.guests}</span>
          </div>
        </div>

        <p className="font-body text-xs text-ink/70 max-w-sm mx-auto">
          Our team in Tarabai Park will call or WhatsApp your number shortly to confirm table availability.
        </p>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setReservationResult(null);
          }}
          className="mt-4 px-6 py-2.5 rounded-full bg-gold text-cream text-xs font-semibold hover:bg-bronze transition-colors shadow-sm"
        >
          Book Another Table
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-start gap-3 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Reservation could not be submitted</p>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Name Input */}
      <div>
        <label htmlFor="res-name" className="block text-xs font-bold uppercase tracking-wider text-husk mb-1.5">
          Full Name <span className="text-gold">*</span>
        </label>
        <div className="relative">
          <User className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="res-name"
            type="text"
            required
            placeholder="e.g. Vikram Patil"
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            className={`w-full bg-cream border rounded-xl pl-10 pr-4 py-3 text-sm text-ink placeholder-husk/40 focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.name ? "border-red-500" : "border-gold/30"
            }`}
          />
        </div>
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
      </div>

      {/* Phone Input */}
      <div>
        <label htmlFor="res-phone" className="block text-xs font-bold uppercase tracking-wider text-husk mb-1.5">
          Phone Number <span className="text-gold">*</span>
        </label>
        <div className="relative">
          <Phone className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="res-phone"
            type="tel"
            required
            placeholder="10-digit mobile number (e.g. 7083560666)"
            value={form.phone}
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            className={`w-full bg-cream border rounded-xl pl-10 pr-4 py-3 text-sm text-ink placeholder-husk/40 focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.phone ? "border-red-500" : "border-gold/30"
            }`}
          />
        </div>
        {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
      </div>

      {/* Date & Time Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="res-date" className="block text-xs font-bold uppercase tracking-wider text-husk mb-1.5">
            Reservation Date <span className="text-gold">*</span>
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="res-date"
              type="date"
              required
              min={today}
              value={form.date}
              onChange={(e) => {
                setForm({ ...form, date: e.target.value });
                if (errors.date) setErrors({ ...errors, date: undefined });
              }}
              className={`w-full bg-cream border rounded-xl pl-10 pr-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-gold ${
                errors.date ? "border-red-500" : "border-gold/30"
              }`}
            />
          </div>
          {errors.date && <p className="text-xs text-red-600 mt-1">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="res-time" className="block text-xs font-bold uppercase tracking-wider text-husk mb-1.5">
            Preferred Time
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              id="res-time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="w-full bg-cream border border-gold/30 rounded-xl pl-10 pr-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="12:00 PM">12:00 PM (Lunch)</option>
              <option value="01:00 PM">01:00 PM (Lunch)</option>
              <option value="02:00 PM">02:00 PM (Lunch)</option>
              <option value="04:00 PM">04:00 PM (Cafe Hours)</option>
              <option value="05:30 PM">05:30 PM (Evening Brew)</option>
              <option value="07:00 PM">07:00 PM (Dinner)</option>
              <option value="07:30 PM">07:30 PM (Dinner)</option>
              <option value="08:30 PM">08:30 PM (Dinner)</option>
              <option value="09:30 PM">09:30 PM (Dinner)</option>
              <option value="10:30 PM">10:30 PM (Late Dinner)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Party Size */}
      <div>
        <label htmlFor="res-guests" className="block text-xs font-bold uppercase tracking-wider text-husk mb-1.5">
          Party Size <span className="text-gold">*</span>
        </label>
        <div className="relative">
          <Users className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            id="res-guests"
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            className="w-full bg-cream border border-gold/30 rounded-xl pl-10 pr-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="1 Guest">1 Guest</option>
            <option value="2 Guests">2 Guests (Table for Two)</option>
            <option value="3-4 Guests">3 – 4 Guests (Small Family / Friends)</option>
            <option value="5-8 Guests">5 – 8 Guests (Family Table)</option>
            <option value="9+ Guests">9+ Guests (Large Party / Celebration)</option>
          </select>
        </div>
      </div>

      {/* Message / Occasion */}
      <div>
        <label htmlFor="res-message" className="block text-xs font-bold uppercase tracking-wider text-husk mb-1.5">
          Special Notes or Occasion (Optional)
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-gold absolute left-3.5 top-3.5 pointer-events-none" />
          <textarea
            id="res-message"
            rows={3}
            placeholder="Birthday celebration, high chair needed, dietary preferences, or specific seating..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-cream border border-gold/30 rounded-xl pl-10 pr-4 py-3 text-sm text-ink placeholder-husk/40 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-gold text-cream font-semibold text-base hover:bg-bronze transition-all duration-150 shadow-gold hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Confirming Availability...</span>
            </>
          ) : (
            <span>Submit Reservation Request</span>
          )}
        </button>
      </div>

      <p className="text-center font-body text-xs text-ink/60">
        🔒 Your phone number is kept private and only used to confirm your reservation.
      </p>
    </form>
  );
}
