"use client";
import Footer from "@/components/footer";
import React from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="mx-4 sm:mx-16 md:mx-24 lg:mx-36 xl:max-w-[1080px] xl:justify-self-center my-6 sm:my-16">
            <NavigationMenu>
                <NavigationMenuList className={"gap-1"}>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/projects/platemate" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                PlateMate
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/projects/nightlife" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Nightlife
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}