"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface Logo {
    url: string
    alt: string
}

interface WordmarkScrollProps {
    logos?: Logo[]
    direction?: "left" | "right"
    speed?: number
    gap?: number
    mobileGap?: number
    padding?: string
    height?: number
    mobileHeight?: number
}

const WordmarkScroll: React.FC<WordmarkScrollProps> = ({
                                                           logos = [],
                                                           direction = "left",
                                                           speed = 15,
                                                           gap = 80,
                                                           mobileGap = 32,
                                                           padding = "20px 0",
                                                           height = 60,
                                                           mobileHeight = 32,
                                                       }) => {
    const scrollerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState<boolean>(false)

    const scrollerId = React.useMemo(() => `scroller-${Math.floor(Math.random() * 10000)}`, [])

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)

        return () => {
            window.removeEventListener("resize", checkMobile)
        }
    }, [])

    useEffect(() => {
        if (!trackRef.current || logos.length === 0) return

        if (trackRef.current) {
            trackRef.current.style.opacity = "0"
        }

        const checkImagesLoaded = () => {
            const images = trackRef.current?.querySelectorAll("img") || []
            return Array.from(images).every((img) => img.complete)
        }

        const setupAnimation = () => {
            if (!trackRef.current) return

            trackRef.current.style.opacity = "1"

            trackRef.current.classList.add(`${scrollerId}-animate`)

        }

        if (checkImagesLoaded()) {
            setTimeout(setupAnimation, 100)
        } else {
            const imageLoadTimer = setInterval(() => {
                if (checkImagesLoaded()) {
                    clearInterval(imageLoadTimer)
                    setupAnimation()
                }
            }, 100)

            setTimeout(() => {
                clearInterval(imageLoadTimer)
                setupAnimation()
            }, 2000)
        }

        return () => {
            if (trackRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                trackRef.current.classList.remove(`${scrollerId}-animate`)
            }
        }
    }, [logos, scrollerId, isMobile])

    const getCurrentGap = () => (isMobile ? mobileGap : gap)
    const getCurrentHeight = () => (isMobile ? mobileHeight : height)

    const renderLogo = (logo: Logo, index: number, isClone = false) => (
        <div
            key={`${logo.alt}-${index}${isClone ? "-clone" : ""}`}
            className={`${scrollerId}-logo-item`}
            style={{
                height: `${getCurrentHeight()}px`,
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
            }}
        >
            <Image
                src={logo.url || "/placeholder.svg"}
                alt={logo.alt || "Company logo"}
                style={{
                    height: "100%",
                    width: "auto",
                    objectFit: "contain",
                    maxWidth: "none",
                }}
                width={500}
                height={getCurrentHeight()}
            />
        </div>
    )

    const scrollerStyle = `
    .${scrollerId} {
      display: flex;
      overflow: hidden;
      padding: ${padding};
      width: 100%;
      position: relative;
    }
    
    .${scrollerId}-track {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      will-change: transform;
      transition: opacity 0.5s ease;
    }
    
    .${scrollerId}-logo-item {
      margin-right: ${getCurrentGap()}px;
    }
    
    .${scrollerId}-animate {
      animation: ${scrollerId}-scroll ${speed}s linear infinite;
      animation-direction: ${direction === "right" ? "reverse" : "normal"};
    }
    
    @keyframes ${scrollerId}-scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-100% / 2));
      }
    }
    
    @media (max-width: 768px) {
      .${scrollerId} {
        padding: 10px 0;
      }
      
      .${scrollerId}-logo-item {
        margin-right: ${mobileGap}px;
      }
    }
    
    @media (max-width: 480px) {
      .${scrollerId}-logo-item {
        margin-right: ${Math.max(10, mobileGap - 10)}px;
      }
    }
  `

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: scrollerStyle }} />
            <div className={scrollerId} ref={scrollerRef}>
                <div ref={trackRef} className={`${scrollerId}-track`}>
                    {logos.map((logo, index) => renderLogo(logo, index))}
                    {logos.map((logo, index) => renderLogo(logo, index, true))}
                </div>
            </div>
        </>
    )
}

export default WordmarkScroll