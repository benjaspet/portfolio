"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import DotGrid from "@/components/dot-grid";
import Footer from "@/components/footer";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const ContentSkeleton = ({ isMobile = false }: { isMobile?: boolean }) => {

    const ParagraphBlock = ({ lines = 4, lastLineWidth = "w-5/6" }) => (
        <div className="space-y-2 my-4">
            {Array(lines - 1)
                .fill(0)
                .map((_, i) => (
                    <div key={i} className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full animate-pulse"></div>
                ))}
            <div className={`h-4 bg-slate-200 dark:bg-slate-700 rounded ${lastLineWidth} animate-pulse`}></div>
        </div>
    );

    const NavSkeleton = () => (
        <div className="flex gap-4 mb-6">
            <div className="h-10 w-20 bg-slate-200 dark:bg-slate-700 rounded-md animate-pulse"></div>
            <div className="h-10 w-32 bg-slate-200 dark:bg-slate-700 rounded-md animate-pulse"></div>
            <div className="h-10 w-24 bg-slate-200 dark:bg-slate-700 rounded-md animate-pulse"></div>
        </div>
    );

    return (
        <div className={isMobile ? "px-8 py-8" : "px-12 py-8"}>

            <NavSkeleton />

            <div className="space-y-4">

                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-md w-1/2 animate-pulse"></div>

                <ParagraphBlock lines={5} />

                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-md w-2/5 animate-pulse mt-4"></div>
                <ParagraphBlock lines={5} />

                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-md w-2/5 animate-pulse mt-4"></div>
                <ParagraphBlock lines={5} />

                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-md w-2/5 animate-pulse mt-4"></div>
                <ParagraphBlock lines={5} />

                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-md w-2/5 animate-pulse mt-4"></div>
                <ParagraphBlock lines={5} />

                {/* Footer */}
                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-36 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

const DotGridPlaceholder = () => (
    <div className="w-full h-full bg-slate-900"></div>
);

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {

    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth < 868);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, []);

    const fadeInStyle = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out;
        }
    `;

    if (isMobile === null) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="h-12 w-12 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="min-h-screen">
                {isMobile ? (

                    <ContentSkeleton isMobile={true} />
                ) : (

                    <div className="flex h-screen">

                        <div className="w-1/2 overflow-hidden">
                            <ContentSkeleton isMobile={false} />
                        </div>

                        <div className="fixed top-0 right-0 w-1/2 h-screen">
                            <DotGridPlaceholder />
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="min-h-screen animate-fadeIn">

            <style jsx global>{fadeInStyle}</style>

            {!isMobile ? (
                <div className="flex h-screen">
                    <div className="w-1/2 overflow-y-auto hide-scrollbar px-12 py-8">
                        <div className="w-full pb-8 top-0 z-30 bg-background">
                            <NavigationMenu>
                                <NavigationMenuList className={"gap-1"}>
                                    <NavigationMenuItem>
                                        <Link href="/" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link href="/projects/platemate" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>PlateMate</NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link href="/projects/nightlife" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Nightlife</NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                        <main>{children}</main>
                        <Footer />
                    </div>

                    <div className="fixed top-0 right-0 w-1/2 h-screen bg-slate-900">
                        <DotGrid
                            dotSize={8}
                            spacing={25}
                            patternSpeed={0.75}
                            padding={0}
                        />
                    </div>
                </div>
            ) : (
                <div className="min-h-screen">
                    <div className="w-full px-4 py-4">
                        <div className="w-full px-4 py-4 pb-4">
                            <NavigationMenu>
                                <NavigationMenuList className={"gap-1"}>
                                    <NavigationMenuItem>
                                        <Link href="/" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link href="/projects/platemate" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>PlateMate</NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link href="/projects/nightlife" legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Nightlife</NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                        <main>{children}</main>
                        <Footer />
                    </div>
                </div>
            )}
        </div>
    );
}