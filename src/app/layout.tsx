import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "La Sirba — Restaurant & Traiteur à Ouagadougou",
    template: "%s | La Sirba",
  },
  description:
    "La Sirba — Restaurant à Ouagadougou. Spécialités africaines, grillades et cuisine classique. Service traiteur pour vos événements. Médaille d'or au Mondial de la Gastronomie 2025.",
  keywords: [
    "restaurant Ouagadougou",
    "cuisine africaine",
    "grillades",
    "traiteur Ouaga 2000",
    "La Sirba",
    "gastronomie africaine",
    "restaurant Burkina Faso",
  ],
  openGraph: {
    title: "La Sirba — Nos racines dans l'assiette",
    description:
      "Spécialités africaines, grillades & cuisine classique. Service traiteur disponible.",
    type: "website",
    locale: "fr_BF",
    siteName: "La Sirba",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
