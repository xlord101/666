import type { Metadata, Viewport } from "next";
import { Anton, Cormorant_Garamond, Jost, Caveat, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { SandyBreeze } from "@/components/SandyBreeze";
import { siteConfig } from "@/data/site-config";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const caveat = Caveat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://houseof666.com"),
  title: {
    default: "House of 666 — Resto & Cafe | Tarabai Park, Kolhapur",
    template: "%s | House of 666 Resto & Cafe",
  },
  description: siteConfig.description,
  keywords: [
    "House of 666",
    "Resto & Cafe Kolhapur",
    "Tarabai Park Restaurant",
    "Kolhapuri Mutton",
    "Tandoori Kebabs Kolhapur",
    "Cafe in Kolhapur",
    "Handmade Cheesecake Kolhapur",
    "Artisan Coffee Kolhapur",
    "Best restaurant near RTO Kolhapur",
  ],
  authors: [{ name: "House of 666 Resto & Cafe" }],
  creator: "House of 666",
  publisher: "House of 666",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://houseof666.com",
    siteName: "House of 666 — Resto & Cafe",
    title: "House of 666 — Resto & Cafe | Tarabai Park, Kolhapur",
    description: siteConfig.description,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "House of 666 Resto & Cafe Emblem",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#F5EFDD",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${montserrat.variable} ${cormorant.variable} ${jost.variable} ${caveat.variable}`}
    >
      <body className="bg-cream text-ink font-body antialiased min-h-screen flex flex-col selection:bg-gold selection:text-cream relative">
        {/* Global ambient fine desert sand drifting across all pages */}
        <SandyBreeze
          particleCount={220}
          intensity="vibrant"
          interactive={true}
          className="fixed inset-0 pointer-events-none z-20 overflow-hidden opacity-80"
        />
        <Navbar />
        {/* pb-20 on mobile ensures fixed bottom action bar never obscures content */}
        <main className="flex-1 w-full pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
