"use client"

import {useEffect, useRef} from 'react'

interface UseGalleryAnimationProps {
    speed: number
    images: Array<{ src: string; height?: number }>
}

export function useGalleryAnimation({speed, images}: UseGalleryAnimationProps) {

    const column1Ref = useRef<HTMLDivElement>(null)
    const column2Ref = useRef<HTMLDivElement>(null)
    const animationRef = useRef<number>(0)
    const lastTimeRef = useRef<number>(0)
    const containerRef = useRef<HTMLDivElement>(null)

    const leftColumnImages = images.filter((_, index) => index % 2 === 0)
    const rightColumnImages = images.filter((_, index) => index % 2 !== 0)

    useEffect(() => {
        if (!column1Ref.current || !column2Ref.current) return

        if (containerRef.current) {
            containerRef.current.style.opacity = '0'
            setTimeout(() => {
                if (containerRef.current) containerRef.current.style.opacity = '1'
            }, 100)
        }

        const column1Height = column1Ref.current.scrollHeight / 2
        const column2Height = column2Ref.current.scrollHeight / 2

        let pos1 = 0
        let pos2 = -column2Height

        column1Ref.current.style.transform = `translate3d(0, ${pos1}px, 0)`
        column2Ref.current.style.transform = `translate3d(0, ${pos2}px, 0)`

        const animate = (time: number) => {
            if (!lastTimeRef.current) lastTimeRef.current = time

            const delta = time - lastTimeRef.current
            lastTimeRef.current = time

            if (delta > 100) {
                animationRef.current = requestAnimationFrame(animate)
                return
            }

            if (column1Ref.current && column2Ref.current) {

                const moveAmount = speed * (delta / 16.666)
                pos1 -= moveAmount

                if (pos1 <= -column1Height) {
                    pos1 += column1Height
                }

                pos2 += moveAmount

                if (pos2 >= 0) {
                    pos2 -= column2Height
                }

                column1Ref.current.style.transform = `translate3d(0, ${pos1}px, 0)`
                column2Ref.current.style.transform = `translate3d(0, ${pos2}px, 0)`
            }

            animationRef.current = window.requestAnimationFrame(animate)
        }

        animationRef.current = window.requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) window.cancelAnimationFrame(animationRef.current)
        }
    }, [images, speed])

    return {
        containerRef,
        column1Ref,
        column2Ref,
        leftColumnImages,
        rightColumnImages
    }
}