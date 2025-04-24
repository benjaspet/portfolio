"use client"

import { useGalleryAnimation } from "@/hooks/useGalleryAnimation"
import GalleryImageComponent, {GalleryImage} from "@/components/galleryImage";

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

    return (
        <div
            className="w-full h-full overflow-hidden relative"
            aria-label="Sliding image gallery"
        >

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
    )
}