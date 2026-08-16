export type Lang = "id" | "en";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "id", label: "Indonesia", flag: "🇮🇩" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

type Dict = Record<string, { id: string; en: string }>;

export const t: Dict = {
  // Nav
  "nav.about": { id: "Tentang", en: "About" },
  "nav.why": { id: "Keunggulan", en: "Why Us" },
  "nav.menu": { id: "Menu", en: "Menu" },
  "nav.gallery": { id: "Galeri", en: "Gallery" },
  "nav.visit": { id: "Kunjungi", en: "Visit" },
  "nav.contact": { id: "Kontak", en: "Contact" },
  "nav.reserve": { id: "Hubungi Kami", en: "Contact Us" },

  // Hero
  "hero.badge": { id: "Kafe Tersembunyi · Tabanan, Bali", en: "Hidden Gem Café · Tabanan, Bali" },
  "hero.title": { id: "Secangkir kopi, sepiring cerita — di tengah sawah.", en: "A cup of coffee, a plate of stories — in the rice fields." },
  "hero.subtitle": {
    id: "MAHA Kopi Bali menyajikan kopi segar, hidangan Indonesia & Western, dan pemandangan sunset dari tengah persawahan Kelating, Tabanan.",
    en: "MAHA Kopi Bali serves fresh coffee, Indonesian & Western cuisine, and sunset views from the rice fields of Kelating, Tabanan.",
  },
  "hero.cta.menu": { id: "Lihat Menu", en: "View Menu" },
  "hero.cta.directions": { id: "Petunjuk Arah", en: "Get Directions" },
  "hero.stat.rating": { id: "Rating Google", en: "Google Rating" },
  "hero.stat.reviews": { id: "Ulasan", en: "Reviews" },
  "hero.stat.menu": { id: "Menu Pilihan", en: "Menu Items" },

  // About
  "about.kicker": { id: "Tentang Kami", en: "About Us" },
  "about.title": { id: "Permata tersembunyi di Kelating", en: "A hidden gem in Kelating" },
  "about.p1": {
    id: "MAHA Kopi Bali adalah kafe & restoran yang bersembunyi di tengah hamparan sawah hijau Kelating, Kerambitan — tak jauh dari garis pantai Tabanan. Tempat untuk melambat, menikmati kopi yang diseduh segar, dan menyaksikan langit berubah warna saat senja.",
    en: "MAHA Kopi Bali is a café & restaurant tucked amid the green rice fields of Kelating, Kerambitan — a short drive from the Tabanan coastline. A place to slow down, enjoy freshly brewed coffee, and watch the sky turn gold at dusk.",
  },
  "about.p2": {
    id: "Dari sarapan ala English hingga Ayam Bakar Madu yang juicy, dapur kami memadukan cita rasa Indonesia dan Western dengan bahan segar. Naik ke lantai tiga untuk menikmati panorama sawah dan sunset terbaik di Tabanan.",
    en: "From English breakfast to juicy Honey Roasted Chicken, our kitchen blends Indonesian and Western flavors with fresh ingredients. Head to the third floor for the best rice-field panorama and sunset in Tabanan.",
  },
  "about.feature.rice.title": { id: "View Sawah", en: "Rice-Field View" },
  "about.feature.rice.desc": { id: "Dikelilingi hijaunya persawahan", en: "Surrounded by lush green paddies" },
  "about.feature.sunset.title": { id: "Sunset Lantai 3", en: "3rd-Floor Sunset" },
  "about.feature.sunset.desc": { id: "Panorama terbaik saat senja", en: "The best panorama at dusk" },
  "about.feature.coffee.title": { id: "Kopi Fresh", en: "Fresh Coffee" },
  "about.feature.coffee.desc": { id: "Diseduh segar & berkualitas", en: "Freshly brewed & quality beans" },

  // Why / Highlights
  "why.kicker": { id: "Kenapa MAHA", en: "Why MAHA" },
  "why.title": { id: "Alasan tamu jatuh cinta", en: "Why guests fall in love" },
  "why.subtitle": {
    id: "Diambil dari 91 ulasan bintang 4,9 di Google.",
    en: "Drawn from 91 five-star-leaning reviews on Google (4.9★).",
  },
  "why.spacious.title": { id: "Luas & Nyaman", en: "Spacious & Comfy" },
  "why.spacious.desc": { id: "Tempat lega, sejuk, dan bersih untuk bersantai.", en: "Roomy, cool, and clean space to relax." },
  "why.friendly.title": { id: "Pelayanan Ramah", en: "Friendly Service" },
  "why.friendly.desc": { id: "Staf yang hangat dan siap membantu.", en: "Warm, helpful staff who greet you with a smile." },
  "why.value.title": { id: "Porsi Pas, Harga Bersahabat", en: "Great Portions & Value" },
  "why.value.desc": { id: "Rasa dan porsi sepadan dengan harganya.", en: "Flavor and portions worth every rupiah." },
  "why.access.title": { id: "Mudah Diakses", en: "Easy to Reach" },
  "why.access.desc": { id: "Lokasi mudah dijangkau, parkir luas.", en: "Easy access with plenty of parking." },

  // Menu
  "menu.kicker": { id: "Katalog", en: "Catalog" },
  "menu.title": { id: "Menu Kami", en: "Our Menu" },
  "menu.subtitle": {
    id: "Dari sarapan, hidangan Indonesia & Western, hingga kopi signature.",
    en: "From breakfast to Indonesian & Western mains, to signature coffee.",
  },
  "menu.all": { id: "Semua", en: "All" },
  "menu.search": { id: "Cari menu…", en: "Search the menu…" },
  "menu.empty": { id: "Menu tidak ditemukan.", en: "No items found." },
  "menu.download": { id: "Unduh Menu (PDF)", en: "Download Menu (PDF)" },

  // Tags
  "tag.popular": { id: "Favorit", en: "Popular" },
  "tag.signature": { id: "Signature", en: "Signature" },
  "tag.spicy": { id: "Pedas", en: "Spicy" },
  "tag.veg": { id: "Vegetarian", en: "Veggie" },

  // Signatures strip
  "sig.kicker": { id: "Wajib Coba", en: "Must Try" },
  "sig.title": { id: "Menu Andalan", en: "House Signatures" },

  // Gallery
  "gallery.kicker": { id: "Suasana", en: "Atmosphere" },
  "gallery.title": { id: "Galeri", en: "Gallery" },
  "gallery.subtitle": { id: "Cita rasa yang siap memanjakan Anda.", en: "A taste of what awaits you." },
  "gallery.note": { id: "Foto hidangan dari menu resmi MAHA Kopi Bali. Foto suasana bisa ditambahkan kapan saja.", en: "Dish photos from the official MAHA Kopi Bali menu. Ambience photos can be added anytime." },

  // Visit / Location
  "visit.kicker": { id: "Kunjungi Kami", en: "Visit Us" },
  "visit.title": { id: "Mampir & Bersantai", en: "Come By & Relax" },
  "visit.address": { id: "Alamat", en: "Address" },
  "visit.hours": { id: "Jam Buka", en: "Opening Hours" },
  "visit.phone": { id: "Telepon", en: "Phone" },
  "visit.services": { id: "Layanan", en: "Services" },
  "visit.dinein": { id: "Makan di tempat", en: "Dine-in" },
  "visit.takeaway": { id: "Bawa pulang", en: "Takeaway" },
  "visit.delivery": { id: "Pesan antar", en: "Delivery" },
  "visit.directions": { id: "Buka di Google Maps", en: "Open in Google Maps" },
  "visit.everyday": { id: "Setiap hari", en: "Every day" },

  // Contact / CTA
  "contact.kicker": { id: "Kontak", en: "Get in Touch" },
  "contact.title": { id: "Sampai jumpa di MAHA", en: "See you at MAHA" },
  "contact.subtitle": {
    id: "Reservasi, tanya menu, atau acara khusus — hubungi kami langsung.",
    en: "Reservations, menu questions, or special events — reach us directly.",
  },
  "contact.whatsapp": { id: "Chat WhatsApp", en: "Chat on WhatsApp" },
  "contact.call": { id: "Telepon", en: "Call Now" },
  "contact.instagram": { id: "Instagram", en: "Instagram" },

  // Footer
  "footer.rights": { id: "Semua hak dilindungi.", en: "All rights reserved." },
  "footer.built": { id: "Kafe di tengah sawah, Tabanan, Bali.", en: "A café in the rice fields, Tabanan, Bali." },
};

export function translate(key: string, lang: Lang): string {
  return t[key]?.[lang] ?? key;
}
