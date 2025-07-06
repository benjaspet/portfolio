"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ImageFaderProps {
    images: string[]
    alt: string
    width: number
    height: number
    className?: string
    interval?: number
}

export function HeadshotSlideshow({
                                      images,
                                      alt,
                                      width,
                                      height,
                                      className = "",
                                      interval = 10000,
                                  }: ImageFaderProps) {
    const [current, setCurrent] = useState(0)
    const [isFading, setIsFading] = useState(false)

    useEffect(() => {
        if (images.length <= 1) return

        const fadeInterval = setInterval(() => {
            setIsFading(true)

            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % images.length)
                setIsFading(false)
            }, 1000) // Match this to the CSS fade duration
        }, interval)

        return () => clearInterval(fadeInterval)
    }, [images.length, interval])

    if (images.length === 0) {
        return (
            <Image
                src="/placeholder.svg"
                alt={alt}
                width={width}
                height={height}
                className={className}
            />
        )
    }

    if (images.length === 1) {
        return (
            <Image
                src={images[0]}
                alt={alt}
                width={width}
                height={height}
                className={className}
            />
        )
    }

    const next = (current + 1) % images.length

    return (
        <div className="relative overflow-hidden" style={{ width, height }}>
            {/* Current Image (always visible) */}
            <Image
                key={images[current]}
                src={images[current]}
                alt={alt}
                width={width}
                height={height}
                className={`absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${className} ${
                    isFading ? "opacity-0" : "opacity-100"
                } z-10`}
            />

            {/* Next Image (fades in over current) */}
            <Image
                key={images[next]}
                src={images[next]}
                alt={alt}
                width={width}
                height={height}
                className={`absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${className} ${
                    isFading ? "opacity-100" : "opacity-0"
                } z-20`}
            />
        </div>
    )
}
