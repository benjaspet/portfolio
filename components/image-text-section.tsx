"use client";
import React from "react";
import Image from "next/image";

type ImageTextSectionProps = {
    imageSrc: string;
    paragraphs: string[];
    imagePosition?: string;
    className?: string;
}

const ImageTextSection = ({imageSrc, paragraphs, imagePosition = "right", className}: ImageTextSectionProps) => {
    return (
        <div className={`mb-4 md:mb-4 ${className}`}>
            <div className="block md:hidden w-full mb-4">
                <Image
                    src={imageSrc}
                    alt={"alt"}
                    className="rounded-lg shadow-md w-full"
                    width={500}
                    height={320}
                />
            </div>
            <Image
                src={imageSrc}
                alt={"alt"}
                className={`hidden md:block float-${imagePosition} m${imagePosition === "right" ? "l" : "r"}-6 mb-4 rounded-lg shadow-md`}
                width={500}
                height={320}
            />
            {paragraphs.map((paragraph: string, index: number) => (
                <p key={index} className="mb-4">
                    {paragraph}
                </p>
            ))}
            <div className="clear-both"></div>
        </div>
    );
};

export default ImageTextSection;