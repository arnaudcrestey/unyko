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
      url: "https://www.arnaudcrestey.com",
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${siteUrl}/#application`,
      name: "UNYKO",
      url: siteUrl,
      image: `${siteUrl}/opengraph-image.jpg`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "fr-FR",
      description:
        "UNYKO mesure la visibilité, la lisibilité, la crédibilité, la présence, l'autorité et la recommandabilité des organisations à l'ère de l'intelligence artificielle.",
      creator: {
        "@type": "Person",
        "@id": "https://www.arnaudcrestey.com/#person",
        name: "Arnaud Crestey",
        url: "https://www.arnaudcrestey.com",
      },
      featureList: [
        "Mesure de la visibilité",
        "Analyse de la lisibilité",
        "Évaluation de la crédibilité",
        "Analyse de la présence numérique",
        "Mesure de l'autorité",
        "Indice de recommandabilité",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "UNYKO",
      description:
        "Indice de recommandabilité organisationnelle à l'ère de l'intelligence artificielle.",
      inLanguage: "fr-FR",
      publisher: {
        "@id": "https://www.arnaudcrestey.com/#person",
      },
      mainEntity: {
        "@id": `${siteUrl}/#application`,
      },
    },
  ],
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
