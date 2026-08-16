export const site = {
  name: "MAHA Kopi Bali",
  shortName: "MAHA Kopi",
  url: "https://mahakopibali.com",
  tagline: {
    en: "A Hidden Gem in the Rice Fields",
    id: "Permata Tersembunyi di Tengah Sawah",
  },
  rating: 4.9,
  reviewCount: 91,
  priceRange: "Rp 75.000–100.000",
  address: {
    line: "Jl. Uma Taman, Kelating, Kec. Kerambitan, Kabupaten Tabanan, Bali 80361",
    plusCode: "C3P6+4W Kelating, Tabanan",
    lat: -8.5646609,
    lng: 115.0622569,
  },
  phone: {
    display: "0821-3141-006",
    tel: "+6282131410006",
    whatsapp: "6282131410006",
  },
  hours: {
    // Google shows open until 21.30; single daily schedule
    open: "08:00",
    close: "21:30",
    note: { en: "Open daily", id: "Buka setiap hari" },
  },
  services: {
    dineIn: true,
    takeaway: true,
    delivery: false,
  },
  social: {
    instagram: "https://instagram.com/mahakopibali",
    instagramHandle: "@mahakopibali",
    maps: "https://maps.app.goo.gl/WkMv5zEJLiibcjDm9",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=-8.5646609,115.0622569",
  },
  taxNote: {
    en: "All prices are in IDR and subject to a 16% Tax & Service Charge.",
    id: "Seluruh harga dalam Rupiah dan dikenakan Pajak & Biaya Layanan 16%.",
  },
} as const;

export type Site = typeof site;
