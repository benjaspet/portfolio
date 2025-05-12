"use client";

import {notFound, useParams} from "next/navigation";
import config from "@/app/config";
import {useGetPost} from "@/hooks/useGetPost";
import React from "react";
import {FormatText} from "@/components/format-text";

export default function PlateMateDetailsPage() {

    const {identifier} = useParams<{ identifier: string }>();
    const post = useGetPost(identifier, config);

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