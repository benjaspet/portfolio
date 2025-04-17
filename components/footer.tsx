import Link from 'next/link'
import {GitHubIcon, TwitterIcon, LinkedInIcon} from "@/components/icons";
import {motion, useInView} from "framer-motion";
import {MutableRefObject, useRef} from "react";
import {fadeDownVariants} from "@/app/animations/fade-down";
import Image from "next/image";

export default function Footer() {

    const ref: MutableRefObject<null> = useRef(null);
    const isInView: boolean = useInView(ref, {once: true, amount: 0.10});

    return (
        <motion.div ref={ref}
                    variants={fadeDownVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}>
            <footer className="text-gray-300 py-4">
                <div className="container mx-auto text-center">
                    {/* 3 column grid layout with all items centered */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4">
                        {/* Left column - signature */}
                        <div className="flex justify-center lg:justify-start">
                            <Image src="/signature.svg" alt="" width={144} height={100} />
                        </div>

                        {/* Middle column - Made in Boston */}
                        <div className="flex justify-center">
                            <Link href="/" className="hover:text-[#0b6db8] transition-colors font-medium">
                                Made with ❤︎ in Boston, MA
                            </Link>
                        </div>

                        {/* Right column - social icons */}
                        <div className="flex justify-center lg:justify-end space-x-3">
                            <a href="https://github.com/benjaspet" target="_blank" rel="noopener noreferrer"
                               className="group"
                               aria-label="GitHub">
                                <GitHubIcon
                                    size={24}
                                    className="transition-transform duration-500 group-hover:rotate-[25deg]"
                                />
                            </a>
                            <a href="https://twitter.com/benjaspet" target="_blank" rel="noopener noreferrer"
                               className="group"
                               aria-label="Twitter">
                                <TwitterIcon size={24}
                                             className="transition-transform duration-500 group-hover:rotate-[25deg]"/>
                            </a>
                            <a href="https://linkedin.com/in/ben-petrillo" target="_blank" rel="noopener noreferrer"
                               className="group"
                               aria-label="LinkedIn">
                                <LinkedInIcon size={24}
                                              className="transition-transform duration-500 group-hover:rotate-[25deg]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </motion.div>
    )
}