import type {Metadata, Viewport} from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

const outfit = localFont({
    src: "./fonts/OutfitVariable.ttf",
    variable: "--font-outfit",
    weight: "100 800",
});

const nunito = localFont({
    src: "./fonts/NunitoVariable.ttf",
    variable: "--font-nunito",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Ben Petrillo",
    description: "I'm a software engineer and third-year student at Northeastern University studying Computer Science.",
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: dark)",
                url: "/favicons/light.png",
                href: "/favicons/light.png",
            },
            {
                media: "(prefers-color-scheme: light)",
                url: "/favicons/dark.png",
                href: "/favicons/dark.png",
            }
        ]
    },
    openGraph: {
        images: [
            {
                url: "/headshot.jpg",
                width: 1200,
                height: 627,
                alt: "Ben Petrillo",
            },
        ],
    },
    metadataBase: new URL("https://benpetrillo.dev")
};

export const viewport: Viewport = {
    themeColor: "#0b6db8",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" style={{scrollbarWidth: "none"}}>
            <body className={`dark ${outfit.variable} ${nunito.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
