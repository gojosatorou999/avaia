import type { Metadata } from "next";

import SmoothScroll from "@/components/SmoothScroll";

import "./globals.css";

export const metadata: Metadata = {
  title: "Avaia NGO",
  description: "Modern organic NGO experience"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
