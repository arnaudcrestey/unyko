import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://unyko.arnaudcrestey.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "UNYKO | Indice de recommandabilité organisationnelle",
    template: "%s — UNYKO",
  },

  description:
    "UNYKO mesure la visibilité, la lisibilité, la crédibilité, la présence, l'autorité et la recommandabilité des organisations à l'ère de l'intelligence artificielle.",

  applicationName: "UNYKO",

  authors: [
    {
      name: "Arnaud Crestey",
      url: siteUrl,
    },
  ],

  creator: "Arnaud Crestey",
  publisher: "Arnaud Crestey",

  category: "Technologie",

  keywords: [
    "UNYKO",
    "indice de recommandabilité",
    "intelligence artificielle",
    "visibilité",
    "crédibilité",
    "autorité",
    "présence numérique",
    "référencement IA",
    "Arnaud Crestey",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "UNYKO",
    title: "UNYKO | Indice de recommandabilité organisationnelle",
    description:
      "Mesurez la visibilité, la lisibilité, la crédibilité, la présence, l'autorité et la recommandabilité de votre organisation à l'ère de l'intelligence artificielle.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "UNYKO — Indice de recommandabilité organisationnelle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "UNYKO | Indice de recommandabilité organisationnelle",
    description:
      "Mesurez la visibilité, la lisibilité, la crédibilité, la présence, l'autorité et la recommandabilité de votre organisation.",
    images: ["/opengraph-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        type: "image/png",
      },
    ],
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
