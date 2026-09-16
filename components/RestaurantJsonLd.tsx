import React from "react";
import { siteConfig } from "@/data/site-config";

export function RestaurantJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    image: "https://houseof666.com/logo.png",
    "@id": "https://houseof666.com",
    url: "https://houseof666.com",
    telephone: `+91${siteConfig.primaryPhone}`,
    priceRange: "₹₹",
    servesCuisine: ["Indian", "Chinese", "Mughlai", "Coastal", "Cafe", "Desserts"],
    menu: "https://houseof666.com/menu",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street + ", " + siteConfig.address.landmark,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 16.702958,
      longitude: 74.237243,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "22:00",
      },
    ],
    sameAs: [
      siteConfig.instagramUrl,
      siteConfig.googleMapsUrl,
    ].filter(Boolean) as string[],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
