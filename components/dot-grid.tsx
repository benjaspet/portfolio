"use client"

import { useEffect, useRef, useState } from "react"

type PatternType =
    | "ripple"
    | "wave"
    | "random"
    | "checkerboard"
    | "spiral"
    | "pulse"
    | "rain"
    | "binary"
    | "concentric"
    | "matrix"
    | "fireworks"
    | "swirl"
    | "heartbeat"
    | "zigzag"
    | "noise"
    | "gradient"
    | "crosshatch"
    | "starfield"
    | "constantStars"
    | "bounce"
    | "cellular"

// type PatternCategory = "waves" | "geometric" | "dynamic" | "algorithmic" | "interactive"

// interface PatternInfo {
//     name: string
//     type: PatternType
//     category: PatternCategory
// }

interface DotGridProps {
    dotSize?: number
    spacing?: number
    baseColor?: string
    activeColor?: string
    patternSpeed?: number
    padding?: number
}

export default function DotGrid({
                                    dotSize = 8,
                                    spacing = 25,
                                    baseColor = "rgba(180, 220, 255, 0.2)",
                                    activeColor = "rgba(80, 200, 255, 0.9)",
                                    patternSpeed = 1,
                                    padding = 0,
                                }: DotGridProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const [pattern] = useState<PatternType>("constantStars")
    const animationRef = useRef<number>(0)
    const frameCountRef = useRef(0)
    const dotsRef = useRef<{ x: number; y: number; active: number; row: number; col: number }[]>([])
    const fireworksRef = useRef<{ x: number; y: number; time: number; size: number }[]>([])
    const noiseRef = useRef<number[][]>([])
    const cellularRef = useRef<boolean[][]>([])
    const bounceRef = useRef({ x: 0, y: 0, vx: 3, vy: 2 })
    const isInitializedRef = useRef(false)
    const [isReady, setIsReady] = useState(false)
    const starSeedsRef = useRef<{ x: number; y: number; twinkleSpeed: number; twinkleOffset: number; size: number }[]>([])

    // const patterns: PatternInfo[] = [
    //     { name: "Ripple", type: "ripple", category: "waves" },
    //     { name: "Wave", type: "wave", category: "waves" },
    //     { name: "Pulse", type: "pulse", category: "waves" },
    //     { name: "Gradient", type: "gradient", category: "waves" },
    //     { name: "Swirl", type: "swirl", category: "waves" },
    //     { name: "Checkerboard", type: "checkerboard", category: "geometric" },
    //     { name: "Spiral", type: "spiral", category: "geometric" },
    //     { name: "Concentric", type: "concentric", category: "geometric" },
    //     { name: "Zigzag", type: "zigzag", category: "geometric" },
    //     { name: "Crosshatch", type: "crosshatch", category: "geometric" },
    //     { name: "Rain", type: "rain", category: "dynamic" },
    //     { name: "Matrix", type: "matrix", category: "dynamic" },
    //     { name: "Fireworks", type: "fireworks", category: "dynamic" },
    //     { name: "Starfield", type: "starfield", category: "dynamic" },
    //     { name: "Constant Stars", type: "constantStars", category: "dynamic" },
    //     { name: "Bounce", type: "bounce", category: "dynamic" },
    //     { name: "Binary", type: "binary", category: "algorithmic" },
    //     { name: "Random", type: "random", category: "algorithmic" },
    //     { name: "Noise", type: "noise", category: "algorithmic" },
    //     { name: "Cellular", type: "cellular", category: "algorithmic" },
    //     { name: "Heartbeat", type: "heartbeat", category: "algorithmic" },
    // ]

    const initDots = (width: number, height: number) => {
        const dots: { x: number; y: number; active: number; row: number; col: number }[] = []
        const cols = Math.ceil(width / spacing) + 2
        const rows = Math.ceil(height / spacing) + 2
        const startX = -spacing
        const startY = -spacing

        for (let col = 0; col < cols; col++) {
            for (let row = 0; row < rows; row++) {
                dots.push({
                    x: startX + col * spacing,
                    y: startY + row * spacing,
                    active: 0,
                    row,
                    col,
                })
            }
        }

        dotsRef.current = dots

        const noiseGrid: number[][] = []
        for (let i = 0; i < cols; i++) {
            noiseGrid[i] = []
            for (let j = 0; j < rows; j++) {
                noiseGrid[i][j] = Math.random()
            }
        }
        noiseRef.current = noiseGrid

        const cellGrid: boolean[][] = []
        for (let i = 0; i < cols; i++) {
            cellGrid[i] = []
            for (let j = 0; j < rows; j++) {
                cellGrid[i][j] = Math.random() > 0.8
            }
        }
        cellularRef.current = cellGrid

        const stars: { x: number; y: number; twinkleSpeed: number; twinkleOffset: number; size: number }[] = []
        const totalDots = dots.length
        const numStars = Math.floor(totalDots * 0.12)

        for (let i = 0; i < numStars; i++) {
            const starX = Math.random() * width
            const starY = Math.random() * height

            stars.push({
                x: starX,
                y: starY,
                twinkleSpeed: 0.5 + Math.random() * 2,
                twinkleOffset: Math.random() * Math.PI * 2,
                size: Math.random() > 0.95 ? 1.5 : 1
            })
        }
        starSeedsRef.current = stars
    }

    useEffect(() => {
        const initTimeout = setTimeout(() => {
            const handleResize = () => {
                if (canvasRef.current && containerRef.current) {
                    const canvas = canvasRef.current
                    const container = containerRef.current
                    const { width, height } = container.getBoundingClientRect()

                    const pixelRatio = window.devicePixelRatio || 1
                    canvas.width = width * pixelRatio
                    canvas.height = height * pixelRatio
                    canvas.style.width = `${width}px`
                    canvas.style.height = `${height}px`

                    const ctx = canvas.getContext("2d")
                    if (ctx) {
                        ctx.scale(pixelRatio, pixelRatio)
                    }

                    setDimensions({ width, height })
                    initDots(width, height)
                    isInitializedRef.current = true

                    setTimeout(() => {
                        setIsReady(true)
                    }, 100)
                }
            }

            handleResize()

            const resizeObserver = new ResizeObserver(() => {
                if (isInitializedRef.current) {
                    handleResize()
                }
            })
            if (containerRef.current) {
                resizeObserver.observe(containerRef.current)
            }

            window.addEventListener("resize", handleResize)

            return () => {
                if (containerRef.current) {
                    resizeObserver.unobserve(containerRef.current)
                }
                window.removeEventListener("resize", handleResize)
            }
        }, 50)

        return () => clearTimeout(initTimeout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [spacing, padding])

    useEffect(() => {
        if (!canvasRef.current || dimensions.width === 0 || !isReady) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const throttledDraw = () => {
            ctx.clearRect(0, 0, dimensions.width, dimensions.height)
            frameCountRef.current += patternSpeed

            updateDotActivation(pattern, frameCountRef.current)

            dotsRef.current.forEach((dot) => {
                if (
                    dot.x >= -dotSize &&
                    dot.x <= dimensions.width + dotSize &&
                    dot.y >= -dotSize &&
                    dot.y <= dimensions.height + dotSize
                ) {
                    const color =
                        dot.active > 0
                            ? `rgba(${80 + Math.floor(dot.active * 100)}, ${200 + Math.floor(dot.active * 55)}, 255, ${0.2 + dot.active * 0.7})`
                            : baseColor

                    ctx.beginPath()
                    ctx.arc(dot.x, dot.y, dotSize * (dot.active > 0.5 ? dot.active : 1), 0, Math.PI * 2)
                    ctx.fillStyle = color
                    ctx.fill()
                }
            })

            animationRef.current = requestAnimationFrame(throttledDraw)
        }

        throttledDraw()

        return () => {
            cancelAnimationFrame(animationRef.current)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dimensions, pattern, dotSize, baseColor, activeColor, patternSpeed, isReady])

    const noise = (x: number, y: number, time: number) => {
        return (
            Math.sin(x * 0.1 + time * 0.1) * Math.cos(y * 0.1 - time * 0.05) * 0.5 +
            Math.sin(x * 0.05 - time * 0.05) * Math.cos(y * 0.05 + time * 0.1) * 0.5
        )
    }

    const updateCellular = () => {
        if (frameCountRef.current % 15 !== 0) return

        const cols = cellularRef.current.length
        const rows = cellularRef.current[0]?.length || 0
        if (cols === 0 || rows === 0) return

        const newGrid: boolean[][] = []

        for (let i = 0; i < cols; i++) {
            newGrid[i] = []
            for (let j = 0; j < rows; j++) {
                let neighbors = 0
                for (let dx = -1; dx <= 1; dx++) {
                    for (let dy = -1; dy <= 1; dy++) {
                        if (dx === 0 && dy === 0) continue
                        const ni = (i + dx + cols) % cols
                        const nj = (j + dy + rows) % rows
                        if (cellularRef.current[ni]?.[nj]) neighbors++
                    }
                }

                if (cellularRef.current[i]?.[j]) {
                    newGrid[i][j] = neighbors === 2 || neighbors === 3
                } else {
                    newGrid[i][j] = neighbors === 3
                }
            }
        }

        cellularRef.current = newGrid
    }

    const updateBounce = () => {
        const bounce = bounceRef.current
        bounce.x += bounce.vx
        bounce.y += bounce.vy

        if (bounce.x < 0 || bounce.x > dimensions.width) {
            bounce.vx *= -1
            bounce.x = Math.max(0, Math.min(dimensions.width, bounce.x))
        }
        if (bounce.y < 0 || bounce.y > dimensions.height) {
            bounce.vy *= -1
            bounce.y = Math.max(0, Math.min(dimensions.height, bounce.y))
        }
    }

    const updateDotActivation = (patternType: PatternType, frame: number) => {
        const centerX = dimensions.width / 2
        const centerY = dimensions.height / 2

        const maxRows = Math.max(...dotsRef.current.map((d) => d.row), 0) + 1
        const maxCols = Math.max(...dotsRef.current.map((d) => d.col), 0) + 1

        if (patternType === "cellular") {
            updateCellular()
        }

        if (patternType === "bounce") {
            updateBounce()
        }

        if (patternType === "fireworks" && Math.random() < 0.02) {
            fireworksRef.current.push({
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                time: 0,
                size: Math.random() * 100 + 50,
            })
        }

        fireworksRef.current = fireworksRef.current.map((fw) => ({ ...fw, time: fw.time + 1 })).filter((fw) => fw.time < 60)

        if (patternType === "constantStars") {
            dotsRef.current.forEach(dot => {
                dot.active = 0;
            });
        } else {
            dotsRef.current.forEach(dot => {
                dot.active = Math.max(0, dot.active - 0.02);
            });
        }

        if (patternType === "constantStars") {
            const stars = starSeedsRef.current;

            stars.forEach(star => {
                let closestDot = dotsRef.current[0];
                let minDistance = Number.MAX_VALUE;

                dotsRef.current.forEach(dot => {
                    const dx = dot.x - star.x;
                    const dy = dot.y - star.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < minDistance) {
                        minDistance = distance;
                        closestDot = dot;
                    }
                });

                const twinkle = Math.sin(frame / 30 * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;

                if (closestDot) {
                    closestDot.active = twinkle * star.size;
                }
            });
        } else {
            dotsRef.current.forEach((dot) => {
                switch (patternType) {
                    case "ripple": {
                        const distanceFromCenter = Math.sqrt(Math.pow(dot.x - centerX, 2) + Math.pow(dot.y - centerY, 2))
                        const ripplePosition = (frame / 20) % Math.max(dimensions.width, dimensions.height)
                        const rippleWidth = 50

                        if (Math.abs(distanceFromCenter - ripplePosition) < rippleWidth) {
                            const activation = 1 - Math.abs(distanceFromCenter - ripplePosition) / rippleWidth
                            dot.active = Math.max(dot.active, activation)
                        }
                        break
                    }

                    case "wave": {
                        const waveHeight = Math.sin(dot.x / 50 + frame / 20) * Math.cos(dot.y / 50 - frame / 25)
                        dot.active = Math.max(dot.active, (waveHeight + 1) / 2)
                        break
                    }

                    case "random": {
                        if (Math.random() < 0.01) {
                            dot.active = Math.random()
                        }
                        break
                    }

                    case "checkerboard": {
                        const offset = Math.floor(frame / 30) % 2
                        if ((dot.col + dot.row + offset) % 2 === 0) {
                            dot.active = 1
                        }
                        break
                    }

                    case "spiral": {
                        const dx = dot.x - centerX
                        const dy = dot.y - centerY
                        const distance = Math.sqrt(dx * dx + dy * dy)
                        const angle = Math.atan2(dy, dx)

                        const spiralPosition = distance / 30 - angle * 3 + frame / 20
                        if (Math.abs(spiralPosition % 10) < 2) {
                            dot.active = 1
                        }
                        break
                    }

                    case "pulse": {
                        const distanceFromCenter = Math.sqrt(Math.pow(dot.x - centerX, 2) + Math.pow(dot.y - centerY, 2))
                        const maxDistance = Math.sqrt(Math.pow(dimensions.width / 2, 2) + Math.pow(dimensions.height / 2, 2))
                        const normalizedDistance = distanceFromCenter / maxDistance

                        const pulseValue = Math.sin(frame / 30 - normalizedDistance * 5) * 0.5 + 0.5
                        dot.active = Math.max(dot.active, pulseValue)
                        break
                    }

                    case "rain": {
                        const normalizedRow = dot.row / maxRows
                        const rainPosition = ((frame / 10) % (maxRows + 10)) / maxRows

                        if (Math.abs(normalizedRow - rainPosition) < 0.1) {
                            dot.active = 1 - Math.abs(normalizedRow - rainPosition) * 10
                        }
                        break
                    }

                    case "binary": {
                        const binaryPeriod = 60
                        const binaryPhase = Math.floor(frame / binaryPeriod) % 10

                        if ((dot.row * maxCols + dot.col + binaryPhase) % 7 === 0) {
                            dot.active = 1
                        }
                        break
                    }

                    case "concentric": {
                        const dx = Math.abs(dot.x - centerX)
                        const dy = Math.abs(dot.y - centerY)

                        const distance = dx + dy

                        const ringWidth = 40
                        const ringPosition = (distance + frame) % (ringWidth * 5)

                        if (ringPosition % ringWidth < ringWidth / 2) {
                            dot.active = 1
                        }
                        break
                    }

                    case "matrix": {
                        const speed = (dot.col % 3) + 1
                        const offset = dot.col * 10

                        const matrixPosition = ((frame * speed) / 10 + offset) % (maxRows * 2)
                        const dotPosition = dot.row

                        if (Math.abs(dotPosition - matrixPosition) < 3) {
                            dot.active = 1 - Math.abs(dotPosition - matrixPosition) / 3
                        }
                        break
                    }

                    case "fireworks": {
                        for (const firework of fireworksRef.current) {
                            const dx = dot.x - firework.x
                            const dy = dot.y - firework.y
                            const distance = Math.sqrt(dx * dx + dy * dy)
                            const maxDistance = firework.size

                            const ringWidth = 20
                            const ringPosition = (firework.time * 3) % maxDistance

                            if (Math.abs(distance - ringPosition) < ringWidth) {
                                const activation = 1 - Math.abs(distance - ringPosition) / ringWidth
                                dot.active = Math.max(dot.active, activation)
                            }
                        }
                        break
                    }

                    case "swirl": {
                        const dx = dot.x - centerX
                        const dy = dot.y - centerY
                        const distance = Math.sqrt(dx * dx + dy * dy)
                        const angle = Math.atan2(dy, dx) + frame / 100

                        const swirl = (Math.sin(distance / 20 - angle * 2 + frame / 20) + 1) / 2
                        dot.active = Math.max(dot.active, swirl)
                        break
                    }

                    case "heartbeat": {
                        const distanceFromCenter = Math.sqrt(Math.pow(dot.x - centerX, 2) + Math.pow(dot.y - centerY, 2))
                        const maxDistance = Math.sqrt(Math.pow(dimensions.width / 2, 2) + Math.pow(dimensions.height / 2, 2))
                        const normalizedDistance = distanceFromCenter / maxDistance

                        const t = frame / 60
                        const heartbeat = Math.pow(Math.sin(t * Math.PI), 20) + Math.pow(Math.sin((t + 0.15) * Math.PI), 20)
                        const value = heartbeat * (1 - normalizedDistance * 0.5)

                        dot.active = Math.max(dot.active, value)
                        break
                    }

                    case "zigzag": {
                        const zigzagX = (Math.sin(dot.row / 2 + frame / 20) * maxCols) / 4
                        const zigzagPosition = (dot.col + zigzagX + frame / 10) % maxCols

                        if (zigzagPosition < 2) {
                            dot.active = 1 - zigzagPosition / 2
                        }
                        break
                    }

                    case "noise": {
                        const noiseValue = (noise(dot.col * 10, dot.row * 10, frame) + 1) / 2
                        dot.active = Math.max(dot.active, noiseValue)
                        break
                    }

                    case "gradient": {
                        const gradientX = Math.sin(frame / 100) * maxCols
                        const gradientY = Math.cos(frame / 120) * maxRows

                        const dx = dot.col - gradientX
                        const dy = dot.row - gradientY
                        const distance = Math.sqrt(dx * dx + dy * dy)

                        const gradientValue = Math.max(0, 1 - distance / Math.max(maxCols, maxRows))
                        dot.active = Math.max(dot.active, gradientValue)
                        break
                    }

                    case "crosshatch": {
                        const lineWidth = 1
                        const spacing = 10

                        const horizontalLine = Math.abs((dot.row + frame / 20) % spacing) < lineWidth
                        const verticalLine = Math.abs((dot.col - frame / 30) % spacing) < lineWidth

                        if (horizontalLine || verticalLine) {
                            dot.active = 1
                        }
                        break
                    }

                    case "starfield": {
                        const dx = dot.x - centerX
                        const dy = dot.y - centerY
                        const distance = Math.sqrt(dx * dx + dy * dy)

                        const twinkle = Math.sin(distance / 10 + frame / 20 + dot.col * dot.row) * 0.5 + 0.5

                        const speed = (frame / 50) % 1
                        const starActive = (distance / Math.max(dimensions.width, dimensions.height) + speed) % 1 < 0.1

                        if (starActive) {
                            dot.active = Math.max(dot.active, twinkle)
                        }
                        break
                    }

                    case "bounce": {
                        const bounce = bounceRef.current
                        const dx = dot.x - bounce.x
                        const dy = dot.y - bounce.y
                        const distance = Math.sqrt(dx * dx + dy * dy)

                        if (distance < 50) {
                            dot.active = Math.max(dot.active, 1 - distance / 50)
                        }
                        break
                    }

                    case "cellular": {
                        if (cellularRef.current[dot.col]?.[dot.row]) {
                            dot.active = 1
                        }
                        break
                    }
                }
            });
        }
    }

    return (
        <div ref={containerRef} className="w-full h-full bg-slate-900">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    touchAction: "none",
                    opacity: isReady ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out"
                }}
            />
        </div>
    )
}