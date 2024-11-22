import Link from 'next/link'
import {GitHubIcon, TwitterIcon, LinkedInIcon} from "@/components/icons";
import {motion, useInView} from "framer-motion";
import {MutableRefObject, useRef} from "react";
import {fadeDownVariants} from "@/app/animations/fade-down";
import Image from "next/image";
import WaveText from "@/components/wave-text";

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
                    <div className="flex flex-col lg:flex-row items-center text-center lg:text-left lg:justify-between">
                        <div className="mb-2 lg:mb-0 inline-flex space-x-2">
                            <Image src="/signature.svg" alt="" width={100} height={100} />
                            {/* <h2 className="text-2xl font-bold">Ben Petrillo</h2> */}
                            <p className={"self-center font-semibold"}>&copy; {new Date().getFullYear()}</p>

                        </div>
                        <nav className="mb-4 lg:mb-0">
                            <ul className="flex flex-wrap justify-center space-x-4">
                                <li><Link href="/" className="hover:text-[#0b6db8] transition-colors font-medium">
                                    <WaveText text={"Made with ❤ & Next.js, Tailwind, Shad"} />
                                </Link></li>
                            </ul>
                        </nav>
                        <div className="flex space-x-3">
                            <a href="https://github.com/benjaspet" target="_blank" rel="noopener noreferrer"
                               className="group animate-float"
                               aria-label="Facebook">
                                <GitHubIcon
                                    size={24}
                                    className="transition-transform duration-500 group-hover:rotate-[25deg]"
                                />
                            </a>
                            <a href="https://twitter.com/benjaspet" target="_blank" rel="noopener noreferrer"
                               className="group delay-3000 animate-float"
                               aria-label="Twitter">
                                <TwitterIcon size={24}
                                             className="transition-transform duration-500 group-hover:rotate-[25deg]"/>
                            </a>
                            <a href="https://linkedin.com/in/ben-petrillo" target="_blank" rel="noopener noreferrer"
                               className="group delay-1500 animate-float"
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