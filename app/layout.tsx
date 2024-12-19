import type {Metadata, Viewport} from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

const outfit = localFont({
    src: "./fonts/OutfitVariable.ttf",
    variable: "--font-outfit",
    weight: "100 800",
});

export const metadata: Metadata = {
    title: "Ben Petrillo",
    description: "I'm a software engineer and third-year student at Northeastern University studying Computer Science.",
    openGraph: {
        images: [
            {
                url: "/headshot.png",
                width: 1200,
                height: 627,
                alt: "Ben Petrillo",
            },
        ],
    }
};

export const viewport: Viewport = {
    themeColor: "#0b6db8",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" style={{scrollbarWidth: "none"}}>
            <body className={`dark ${outfit.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
