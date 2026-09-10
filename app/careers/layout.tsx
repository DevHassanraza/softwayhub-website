import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career and internship opportunities at SoftwayHub in software development, digital operations and technology.",
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}