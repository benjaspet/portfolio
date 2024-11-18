import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const outfit = localFont({
  src: "./fonts/OutfitVariable.ttf",
  variable: "--font-outfit",
  weight: "100 800",
});

export const metadata: Metadata = {
  title: "Ben Petrillo",
  description: "Aspiring Software Engineer",
};

export const viewport: Viewport = {
  themeColor: "#0b6db8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
