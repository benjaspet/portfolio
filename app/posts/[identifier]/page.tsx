"use client";

import {notFound, useParams} from "next/navigation";
import config from "@/app/config";
import {useGetPost} from "@/hooks/useGetPost";
import WordmarkScroll from "@/components/wordmark-scroll";
import React from "react";
import {useIsMobile} from "@/hooks/useIsMobile";
import Image from "next/image";
import {FormatText} from "@/components/format-text";

const techLogos = [
    {url: "/wordmarks/zoominfo.png", alt: "Google"},
    {url: "/wordmarks/wayfair.png", alt: "Microsoft"},
    {url: "/wordmarks/gevernova.png", alt: "Microsoft"},
    {url: "/wordmarks/chewy.png", alt: "Microsoft"},
    {url: "/wordmarks/citizens.png", alt: "Microsoft"},
    {url: "/wordmarks/gd.png", alt: "Microsoft"},
    {url: "/wordmarks/morse.png", alt: "Microsoft"},
    {url: "/wordmarks/crio.png", alt: "Microsoft"},
];

const techLogos2 = [
    {url: "/wordmarks/prudential.png", alt: "Microsoft"},
    {url: "/wordmarks/schneider.png", alt: "Microsoft"},
    {url: "/wordmarks/draftkings.png", alt: "Microsoft"},
    {url: "/wordmarks/cmegroup.png", alt: "Microsoft"},
    {url: "/wordmarks/barracuda.png", alt: "Microsoft"},
    {url: "/wordmarks/granite.png", alt: "Microsoft"},
    {url: "/wordmarks/wolterskluwer.png", alt: "Microsoft"},
]

export default function PlateMateDetailsPage() {

    const {identifier} = useParams<{ identifier: string }>();
    const post = useGetPost(identifier, config);
    const isMobile = useIsMobile(768);

    if (!post) return notFound();

    const {title, author, sections, timestamp} = post;

    return (
        <div className="p-4 md:p-0">
            <div className={"pb-4"}>
                <h1 className="text-2xl md:text-3xl font-bold pb-2 md:pb-0 text-[#0b6db8]">
                    {title}
                </h1>
                <p className={"py-2"}>
                    <span className={"text-gray-300"}>{author}, on {timestamp}</span>
                </p>
            </div>
            {identifier === "how-to-get-swe-interviews" && !isMobile && (
                <div className={"pb-4"}>
                    <WordmarkScroll logos={techLogos} direction={"right"} speed={50} height={60} gap={32}/>
                    <WordmarkScroll logos={techLogos2} direction={"left"} speed={50} height={60} gap={32}/>
                </div>
            )}
            {identifier === "how-to-get-swe-interviews" && isMobile && (
                <div className={"pb-4 flex"}>
                    <Image
                        src={"/wordmarks/placeholder.png"}
                        alt={"wordmark placeholder"}
                        width={300}
                        height={80}
                        priority
                        style={{
                            height: "80px",
                            width: "100%",
                            objectFit: "contain",
                            maxWidth: "none",
                        }}
                    />
                </div>
            )}
            {sections.map(section => {
                return (
                    <div key={section.name} className="mb-4">
                        <h2 className="text-2xl font-semibold mb-4">
                            {section.name}
                        </h2>
                        {section.paragraphs.map((paragraph, index) => (
                            <FormatText text={paragraph} className={"mb-4"} key={index}/>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}