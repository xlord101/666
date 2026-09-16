import React from "react";
import { Metadata } from "next";
import { GalleryContent } from "@/components/GalleryContent";

export const metadata: Metadata = {
  title: "Photo & Food Gallery — House of 666 Resto & Cafe",
  description:
    "Browse photos of our authentic Kolhapuri royal dishes, artisan coffees, signature cocktails & coolers, handcrafted cheesecakes, and cozy cafe ambience in Tarabai Park.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
