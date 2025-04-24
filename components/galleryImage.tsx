"use client"

import Image from 'next/image'

interface GalleryImageProps {
    image: GalleryImage
    index: number
    imageHeight: number
    imageGap: number
}

export interface GalleryImage {
    src: string;
    height?: number;
}

export default function GalleryImageComponent({
                                                  image,
                                                  index,
                                                  imageHeight,
                                                  imageGap
                                              }: GalleryImageProps) {
    return (
        <div
            className="w-full overflow-hidden"
            style={{
                height: `${image.height || imageHeight}px`,
                marginBottom: `${imageGap}px`
            }}
        >
            <Image
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                width={500}
                height={image.height || imageHeight}
                className="w-full h-full object-cover rounded-lg"
                priority={index < 4}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden"
                }}
            />
        </div>
    )
}