import Link from 'next/link'
import {GitHubIcon, TwitterIcon, LinkedInIcon} from "@/components/icons";
import {motion, useInView} from "framer-motion";
import {MutableRefObject, useRef} from "react";
import {fadeDownVariants} from "@/app/animations/fade-down";

export default function Footer() {

    const ref: MutableRefObject<null> = useRef(null);
    const isInView: boolean = useInView(ref, {once: true, amount: 0.10});

    return (
        <motion.div ref={ref}
            variants={fadeDownVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}>
            <footer className="text-gray-300 py-4">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex flex-col lg:flex-row items-center text-center lg:text-left lg:justify-between">
                        <div className="mb-2 lg:mb-0 inline-flex space-x-2">
                            <h2 className="text-2xl font-bold">Ben Petrillo</h2>
                            <p className={"self-center"}>&copy; {new Date().getFullYear()}</p>

                        </div>
                        <nav className="mb-4 lg:mb-0">
                            <ul className="flex flex-wrap justify-center space-x-4">
                                <li><Link href="/" className="hover:text-blue-600 transition-colors">Made with ❤ +
                                    Next.js, Tailwind, Shad</Link></li>
                            </ul>
                        </nav>
                        <div className="flex space-x-3">
                            <a href="https://github.com/benjaspet" target="_blank" rel="noopener noreferrer"
                               className="hover:text-gray-500 transition-colors group" aria-label="Facebook">
                                <GitHubIcon
                                    size={24}
                                    className="transition-transform duration-500 group-hover:rotate-[25deg]"
                                />
                            </a>
                            <a href="https://twitter.com/benjaspet" target="_blank" rel="noopener noreferrer"
                               className="hover:text-blue-400 transition-colors group" aria-label="Twitter">
                                <TwitterIcon size={24}
                                             className="transition-transform duration-500 group-hover:rotate-[25deg]"/>
                            </a>
                            <a href="https://linkedin.com/in/ben-petrillo" target="_blank" rel="noopener noreferrer"
                               className="hover:text-blue-800 transition-colors group" aria-label="LinkedIn">
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