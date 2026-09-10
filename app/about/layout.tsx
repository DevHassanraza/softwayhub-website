import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SoftwayHub, our approach to software engineering, digital products, automation and modern business solutions.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}