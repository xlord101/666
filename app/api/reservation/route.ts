import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, date, time, guests, message } = body;

    // Basic server-side validation
    if (!name || !phone || !date || !guests) {
      return NextResponse.json(
        { error: "Please provide all required fields: name, phone, date, and party size." },
        { status: 400 }
      );
    }

    // Phone validation (accepts 10-digit Indian mobile or formatted)
    const cleanPhone = String(phone).replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { error: "Please provide a valid 10-digit phone number." },
        { status: 400 }
      );
    }

    // Generate reference code
    const reservationId = `666-${Date.now().toString(36).toUpperCase()}-${Math.floor(
      100 + Math.random() * 900
    )}`;

    // =========================================================================
    // TODO: Connect this endpoint to external persistence or notifications:
    // 1. Send Email Notification (e.g. via Resend or Nodemailer to houseof666kolhapur@gmail.com)
    // 2. Append row to Google Sheets via Google Sheets API (Date, Name, Phone, Guests, Time, Message)
    // 3. Trigger WhatsApp Business message via Twilio / Meta Cloud API to +917083560666
    // 4. Save to database (e.g. Supabase, PostgreSQL, or MongoDB)
    // =========================================================================
    console.log("[House of 666 Reservation Received]:", {
      reservationId,
      name,
      phone: cleanPhone,
      date,
      time: time || "Not specified",
      guests,
      message: message || "None",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your table reservation request has been received! Our host team will call or WhatsApp you shortly to confirm.",
        reservationId,
        details: {
          name,
          phone: cleanPhone,
          date,
          time: time || "Regular Seating",
          guests,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reservation API Error:", error);
    return NextResponse.json(
      { error: "Failed to process reservation. Please try again or call us directly at 7083560666." },
      { status: 500 }
    );
  }
}
