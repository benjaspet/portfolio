"use client"

import React, {useEffect, useRef, useState} from "react"
import Image from "next/image";

interface Logo {
    url: string;
    alt: string;
}

interface WordmarkScrollProps {
    logos?: Logo[];
    direction?: "left" | "right";
    speed?: number;
    gap?: number;
    padding?: string;
    height?: number;
}

const WordmarkScroll: React.FC<WordmarkScrollProps> = ({
                                                           logos = [],
                                                           direction = "left",
                                                           speed = 15,
                                                           gap = 80,
                                                           padding = "20px 0",
                                                           height = 60,
                                                       }) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [trackWidth, setTrackWidth] = useState<number>(0);
    const [animationReady, setAnimationReady] = useState<boolean>(false);

    const scrollerId = React.useMemo(() => `scroller-${Math.floor(Math.random() * 10000)}`, []);

    useEffect(() => {
        if (!trackRef.current) return;

        const measureTrack = () => {
            if (!trackRef.current) return;

            const singleSetWidth = trackRef.current.scrollWidth / 2;
            if (singleSetWidth > 0) {
                setTrackWidth(singleSetWidth);
                setAnimationReady(true);
            }
        };

        const resizeObserver = new ResizeObserver(() => {
            measureTrack();
        });

        resizeObserver.observe(trackRef.current);
        measureTrack();

        const currTrackRef = trackRef.current;

        return () => {
            resizeObserver.unobserve(currTrackRef);
        };
    }, [logos, gap]);

    const renderLogo = (logo: Logo, index: number, isClone = false) => (
        <div
            key={`${logo.alt}-${index}${isClone ? "-clone" : ""}`}
            style={{
                marginRight: `${gap}px`,
                height: `${height}px`,
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
                height={height}
            />
        </div>
    );

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
      white-space: nowrap;
      align-items: center;
      will-change: transform;
      gap: 0;
    }
    
    @keyframes scroll-left-${scrollerId} {
      0% { transform: translateX(0); }
      100% { transform: translateX(${-trackWidth}px); }
    }
    
    @keyframes scroll-right-${scrollerId} {
      0% { transform: translateX(${-trackWidth}px); }
      100% { transform: translateX(0); }
    }
    
    .${scrollerId}-animate {
      animation: ${trackWidth > 0 ?
        (direction === "left" ? `scroll-left-${scrollerId}` : `scroll-right-${scrollerId}`) + ` ${speed}s linear infinite`
        : 'none'};
    }
  `;

    return (
        <>
            <style dangerouslySetInnerHTML={{__html: scrollerStyle}}/>
            <div className={scrollerId} ref={scrollerRef}>
                <div
                    ref={trackRef}
                    className={`${scrollerId}-track ${animationReady ? `${scrollerId}-animate` : ""}`}
                    style={{
                        opacity: animationReady ? 1 : 0,
                        transition: "opacity 0.5s ease",
                    }}
                >
                    {logos.map((logo, index) => renderLogo(logo, index))}
                    {logos.map((logo, index) => renderLogo(logo, index, true))}
                </div>
            </div>
        </>
    );
};

export default WordmarkScroll;