"use client";
import React, {useState} from "react";
import Image from "next/image";

interface ImageItem {
    src: string;
    alt: string;
    width: number;
    height: number;
}

interface ImageGalleryProps {
    images: ImageItem[];
    gap?: number;
    className?: string;
}

export default function ImageGallery({
                                         images,
                                         gap = 4,
                                         className = "",
                                     }: ImageGalleryProps) {
    const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

    const handleImageLoad = (src: string) => {
        setLoadedImages((prev) => ({
            ...prev,
            [src]: true,
        }));
    };

    const leftColumnImages = images.filter((_, i) => i % 2 === 0);
    const rightColumnImages = images.filter((_, i) => i % 2 === 1);

    const gapClass = `gap-${gap}`;

    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gapClass} ${className}`}>
            <div className={`flex flex-col ${gapClass}`}>
                {leftColumnImages.map((image, index) => (
                    <div
                        key={`left-${index}`}
                        className="w-full relative overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800"
                        style={{aspectRatio: `${image.width} / ${image.height}`}}
                    >
                        {!loadedImages[image.src] && (
                            <div className="absolute inset-0 animate-pulse bg-slate-200 dark:bg-slate-700"></div>
                        )}

                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className={`object-cover transition-opacity duration-300 ${
                                loadedImages[image.src] ? "opacity-100" : "opacity-0"
                            }`}
                            onLoad={() => handleImageLoad(image.src)}
                        />
                    </div>
                ))}
            </div>

            <div className={`flex flex-col ${gapClass}`}>
                {rightColumnImages.map((image, index) => (
                    <div
                        key={`right-${index}`}
                        className="w-full relative overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800"
                        style={{aspectRatio: `${image.width} / ${image.height}`}}
                    >
                        {!loadedImages[image.src] && (
                            <div className="absolute inset-0 animate-pulse bg-slate-200 dark:bg-slate-700"></div>
                        )}

                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className={`object-cover transition-opacity duration-300 ${
                                loadedImages[image.src] ? "opacity-100" : "opacity-0"
                            }`}
                            onLoad={() => handleImageLoad(image.src)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
