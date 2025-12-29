"use client"

import { useGalleryAnimation } from "@/hooks/useGalleryAnimation"
import GalleryImageComponent, {GalleryImage} from "@/components/galleryImage";
import { useEffect, useRef } from "react";

interface SlidingGalleryProps {
    images: GalleryImage[];
    speed?: number;
    columnGap?: number;
    imageHeight?: number;
    imageGap?: number;
}

export default function SlidingGallery({
                                           images = [],
                                           speed = 0.3,
                                           columnGap = 20,
                                           imageHeight = 300,
                                           imageGap = 16,
                                       }: SlidingGalleryProps) {
    const {
        containerRef,
        column1Ref,
        column2Ref,
        leftColumnImages,
        rightColumnImages
    } = useGalleryAnimation({ speed, images })

    const mobileScrollRef1 = useRef<HTMLDivElement>(null);
    const mobileScrollRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer1 = mobileScrollRef1.current;
        const scrollContainer2 = mobileScrollRef2.current;
        if (!scrollContainer1 || !scrollContainer2) return;

        let scrollPos1 = 0;
        let scrollPos2 = scrollContainer2.scrollWidth / 2;
        const scrollSpeed = 0.35;
        let frameId = 0;

        const animate = () => {
            scrollPos1 += scrollSpeed;
            const maxScroll1 = scrollContainer1.scrollWidth / 2;
            if (scrollPos1 >= maxScroll1) scrollPos1 = 0;
            scrollContainer1.scrollLeft = scrollPos1;

            scrollPos2 -= scrollSpeed;
            if (scrollPos2 <= 0) scrollPos2 = scrollContainer2.scrollWidth / 2;
            scrollContainer2.scrollLeft = scrollPos2;

            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, [images]);

    const mobileRow1 = images.filter((_, i) => i % 2 === 0);
    const mobileRow2 = images.filter((_, i) => i % 2 !== 0);

    return (
        <>
            <div className="sm:hidden w-full h-full overflow-hidden relative">
                <div className="flex flex-col h-full justify-center gap-4">
                    <div
                        ref={mobileScrollRef1}
                        className="flex gap-4 overflow-x-hidden items-center"
                        style={{ scrollBehavior: 'auto', height: `${imageHeight}px` }}
                    >
                        {[...mobileRow1, ...mobileRow1].map((image, index) => (
                            <div 
                                key={`mobile-row1-${index}`} 
                                className="flex-shrink-0 overflow-hidden rounded-xl" 
                                style={{ height: `${imageHeight}px`, width: 'auto' }}
                            >
                                <img
                                    src={image.src}
                                    alt={`Gallery image ${index + 1}`}
                                    className="h-full w-auto object-cover rounded-xl"
                                />
                            </div>
                        ))}
                    </div>
                    <div 
                        ref={mobileScrollRef2}
                        className="flex gap-4 overflow-x-hidden items-center"
                        style={{ scrollBehavior: 'auto', height: `${imageHeight}px` }}
                    >
                        {[...mobileRow2, ...mobileRow2].map((image, index) => (
                            <div 
                                key={`mobile-row2-${index}`} 
                                className="flex-shrink-0 overflow-hidden rounded-xl" 
                                style={{ height: `${imageHeight}px`, width: 'auto' }}
                            >
                                <img
                                    src={image.src}
                                    alt={`Gallery image ${index + 1}`}
                                    className="h-full w-auto object-cover rounded-xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="hidden sm:block w-full h-full overflow-hidden relative" aria-label="Sliding image gallery">
                <div
                    ref={containerRef}
                    className="flex h-full absolute inset-0 transition-opacity duration-500"
                    style={{
                        gap: `${columnGap}px`,
                        willChange: "transform, opacity"
                    }}
                >
                    <div className="w-1/2 relative overflow-hidden">
                        <div
                            ref={column1Ref}
                            className="absolute w-full will-change-transform"
                            style={{
                                transform: "translate3d(0, 0, 0)",
                                willChange: "transform",
                                backfaceVisibility: "hidden"
                            }}
                        >
                            {[...leftColumnImages, ...leftColumnImages].map((image, index) => (
                                <GalleryImageComponent
                                    key={`left-${index}`}
                                    image={image}
                                    index={index}
                                    imageHeight={imageHeight}
                                    imageGap={imageGap}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-1/2 relative overflow-hidden">
                        <div
                            ref={column2Ref}
                            className="absolute w-full will-change-transform"
                            style={{
                                transform: "translate3d(0, 0, 0)",
                                willChange: "transform",
                                backfaceVisibility: "hidden"
                            }}
                        >
                            {[...rightColumnImages, ...rightColumnImages].map((image, index) => (
                                <GalleryImageComponent
                                    key={`right-${index}`}
                                    image={image}
                                    index={index}
                                    imageHeight={imageHeight}
                                    imageGap={imageGap}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}