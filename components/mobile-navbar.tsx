"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, PaperclipIcon, X } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import { MailIcon } from "lucide-react"
import Image from "next/image"

interface MobileNavbarProps {
    links?: {
        label: string
        href: string
        icon?: React.ReactNode
    }[]
}

export function MobileNavbar({ links }: MobileNavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    const [navbarWidth, setNavbarWidth] = useState(0)
    const navRef = React.useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateWidth = () => {
            if (navRef.current) {
                setNavbarWidth(navRef.current.offsetWidth)
            }
        }

        updateWidth()

        const resizeObserver = new ResizeObserver(updateWidth)
        if (navRef.current) {
            resizeObserver.observe(navRef.current)
        }

        return () => {
            resizeObserver.disconnect()
        }
    }, [isScrolled])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const scrollThreshold = window.innerHeight * 0.15
            
            if (currentScrollY > scrollThreshold) {
                setIsScrolled(true)
                setIsVisible(true)
            } else {
                setIsScrolled(false)
                setIsVisible(false)
            }
            
            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    const defaultLinks = [
        {
            label: "GitHub",
            href: "https://github.com/benjaspet",
            icon: <GitHubIcon size={20} />
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/ben-petrillo",
            icon: <LinkedInIcon size={20} />
        },
        {
            label: "Email",
            href: "mailto:petrillo.b@northeastern.edu",
            icon: <MailIcon size={20} />
        },
        {
            label: "Resume",
            href: "https://drive.google.com/file/d/1pOz0Op1I-F_--BS36-9hvXIz9_FkD6xL/view?usp=sharing",
            icon: <PaperclipIcon size={20} />
        }
    ]

    const navLinks = links || defaultLinks

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <>
            <AnimatePresence>
                {isScrolled && isVisible && (
                    <motion.nav
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 200, 
                            damping: 25,
                            opacity: { duration: 0.2 }
                        }}
                        className="fixed top-6 left-0 right-0 z-50 flex justify-center"
                    >
                        <div ref={navRef} className="bg-black/90 backdrop-blur-[80px] border border-gray-700/50 rounded-full shadow-2xl px-6 py-3 flex items-center gap-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="flex items-center"
                            >
                                <Image 
                                    src="/signature.svg" 
                                    alt="Ben Petrillo" 
                                    width={100} 
                                    height={20}
                                    className="h-6 mt-1 w-auto"
                                />
                            </motion.div>
                            
                            <motion.button
                                onClick={toggleMenu}
                                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}
                                aria-label="Toggle menu"
                            >
                                <AnimatePresence mode="wait">
                                    {isMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X size={20} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu size={20} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isMenuOpen && isScrolled && isVisible && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-40"
                            onClick={toggleMenu}
                        />
                        
                        <div className="fixed top-28 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25,
                                    opacity: { duration: 0.2 }
                                }}
                                style={{ width: navbarWidth > 0 ? `${navbarWidth}px` : 'auto', minWidth: '280px' }}
                                className="bg-black/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
                            >
                                <div className="flex flex-col p-8">
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                                        className="pb-6 mb-6 border-b border-gray-700/50"
                                    >
                                        <h3 className="text-white font-bold text-xl mb-3">Ben Petrillo</h3>
                                        <p className="text-gray-300 text-md">
                                            Experienced in the e-commerce, venture capital, 
                                            and startup ecosystems. Interested in distributed systems and cloud technologies.
                                            Experience in Go, Java, and TypeScript.
                                        </p>
                                    </motion.div>
                                    
                                    <nav className="flex flex-col gap-1">
                                        {navLinks.map((link, index) => (
                                            <motion.a
                                                key={link.label}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={toggleMenu}
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ 
                                                    delay: 0.15 + index * 0.05,
                                                    duration: 0.3,
                                                    ease: "easeOut"
                                                }}
                                                className="flex items-center gap-4 text-gray-200 hover:text-white hover:bg-[#0b6db8]/30 transition-all duration-200 rounded-xl group"
                                                whileHover={{ scale: 1.02, x: 5 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {link.icon && (
                                                    <span className="text-[#0b6db8] group-hover:text-white transition-colors">
                                                        {link.icon}
                                                    </span>
                                                )}
                                                <span className="font-medium">{link.label}</span>
                                            </motion.a>
                                        ))}
                                    </nav>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
