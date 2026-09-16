export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    plusCode: string;
    full: string;
  };
  phones: string[];
  primaryPhone: string;
  whatsappUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  xUrl?: string;
  xHandle?: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  googleRating: number;
  googleReviewsUrl: string;
  openingHours: {
    days: string;
    hours: string;
  }[];
  mealTimings: {
    resto: string;
    cafe: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "House of 666 — Resto & Cafe",
  tagline: "Where Kolhapur's royal flavours meet a coastal cafe soul.",
  description:
    "House of 666 Resto & Cafe brings Kolhapur a unique mix of royal Indian flavours and a laid-back coastal cafe vibe. Tandoor kebabs, Mughlai curries, Chinese starters, biryanis, fresh coffee, milkshakes, mojitos and handmade desserts, near the R.T.O. Office in Tarabai Park.",
  address: {
    street: "House of 666",
    landmark: "Near R.T.O. Office",
    area: "Tarabai Park",
    city: "Kolhapur",
    state: "Maharashtra",
    country: "India",
    pincode: "416003",
    plusCode: "P68R+58Q, Kolhapur",
    full: "House of 666, Near R.T.O. Office, Tarabai Park, Kolhapur, Maharashtra 416003, India",
  },
  phones: ["7083560666", "8956502492", "9356815755", "9511910666"],
  primaryPhone: "7083560666",
  whatsappUrl: "https://wa.me/917083560666?text=Hi%20House%20of%20666!%20I%20would%20like%20to%20reserve%20a%20table.",
  instagramUrl: "https://www.instagram.com/houseof_666/",
  instagramHandle: "@houseof_666",
  xUrl: "https://x.com/houseof_666",
  xHandle: "@houseof_666",
  googleMapsUrl: "https://share.google/tdbWEq0pHdgfJlf2X",
  googleReviewsUrl: "https://share.google/tdbWEq0pHdgfJlf2X",
  googleRating: 5.0,
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5794557999714!2d74.2372439751493!3d16.70295878407421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1001a1c900693%3A0xe54d245037d2f95b!2sRegional%20Transport%20Office%2C%20Kolhapur!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  openingHours: [
    { days: "Monday – Saturday", hours: "10:00 AM – 11:00 PM" },
    { days: "Sunday", hours: "10:00 AM – 10:00 PM" },
  ],
  mealTimings: {
    resto: "12:00 PM – 3:30 PM / 7:00 PM – 10:30 PM",
    cafe: "12:00 PM – 10:00 PM",
  },
};
