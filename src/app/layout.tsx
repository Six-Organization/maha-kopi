import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { site } from "@/data/site";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Hidden Gem Café in the Rice Fields of Tabanan, Bali`,
    template: `%s | ${site.name}`,
  },
  description:
    "MAHA Kopi Bali — a hidden-gem café & restaurant tucked in the rice fields of Kelating, Tabanan. Fresh coffee, Indonesian & Western cuisine, and sunset views. Kafe tersembunyi di tengah sawah dengan pemandangan sunset.",
  keywords: [
    "MAHA Kopi Bali",
    "cafe Tabanan",
    "coffee shop Bali",
    "restaurant Kelating",
    "kafe sawah Bali",
    "sunset cafe Tabanan",
  ],
  openGraph: {
    title: `${site.name} — Hidden Gem Café in Tabanan, Bali`,
    description:
      "Fresh coffee, Indonesian & Western cuisine, and sunset views over the rice fields of Kelating, Tabanan.",
    url: site.url,
    siteName: site.name,
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${display.variable} ${body.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
