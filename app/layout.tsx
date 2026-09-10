import type { Metadata } from "next";
import {
  Inter,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";

import Chatbot from "@/components/ui/Chatbot";
import StructuredData from "@/components/seo/StructuredData";
import ThemeProvider from "@/components/ui/ThemeProvider";
import Footer from "@/components/layout/Footer";
import IntroLoader from "@/components/effects/IntroLoader";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://softwayhub.com"),

  title: {
    default: "SoftwayHub | Software Development & Digital Solutions",
    template: "%s | SoftwayHub",
  },

  description:
    "SoftwayHub builds modern websites, custom software, AI solutions, automation and digital products for growing businesses.",

  keywords: [
    "SoftwayHub",
    "software development company",
    "web development company",
    "custom software development",
    "AI chatbot development",
    "business automation",
    "WordPress development",
    "eCommerce development",
    "API integration",
    "software company Islamabad",
    "web development Islamabad",
  ],

  authors: [{ name: "SoftwayHub" }],
  creator: "SoftwayHub",
  publisher: "SoftwayHub",

  alternates: {
    canonical: "/",
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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "SoftwayHub",

    title: "SoftwayHub | Software Development & Digital Solutions",

    description:
      "Modern websites, custom software, AI solutions and digital systems engineered for growing businesses.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SoftwayHub - Software Development & Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "SoftwayHub | Software Development & Digital Solutions",

    description:
      "Modern websites, custom software, AI solutions and digital systems engineered for growing businesses.",

    images: ["/og-image.png"],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
      >
        <StructuredData />
        <ThemeProvider>
          <IntroLoader />
          {children}
          <Chatbot />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}