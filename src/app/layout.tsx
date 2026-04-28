import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import DemoBanner from "@/components/DemoBanner";
import { SITE_INDEXED } from "@/lib/constants";

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
  title: "Pilates Canal — Centro de Pilates y Fisioterapia en Chamberí, Madrid",
  description:
    "Centro especializado en Pilates con máquinas y Fisioterapia en Chamberí, Madrid. Equipo de 8 fisioterapeutas certificados. Reserva tu primera sesión.",
  openGraph: {
    title: "Pilates Canal — Centro de Pilates y Fisioterapia en Chamberí, Madrid",
    description:
      "Centro especializado en Pilates con máquinas y Fisioterapia en Chamberí, Madrid. Equipo de 8 fisioterapeutas certificados.",
    type: "website",
  },
  robots: {
    index: SITE_INDEXED,
    follow: SITE_INDEXED,
    googleBot: {
      index: SITE_INDEXED,
      follow: SITE_INDEXED,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-full antialiased">
        {children}
        <DemoBanner />
      </body>
    </html>
  );
}
