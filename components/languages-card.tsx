import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {motion} from "framer-motion";
import {foldUpVariants} from "@/app/animations/fold-up";
import {staggerContainerVariants, staggerItemVariants} from "@/app/animations/stagger";
import React, {useEffect} from "react";
import WaveText from "@/components/wave-text";
import {fadeInFromRightVariants} from "@/app/animations/fade-in-from-right";

import config from "@/app/config";

export default function LanguagesCard() {

    useEffect(() => {
        const letters: NodeListOf<Element> = document.querySelectorAll('.wave-letter')
        letters.forEach((letter: Element, index) => {
            (letter as HTMLElement).style.animationDelay = `${index * 0.1}s`
        })
    }, [])

    return (
        <motion.div initial="hidden" animate="visible" variants={fadeInFromRightVariants}>
            <Card className="border-2 duration-300 hover:border-[#0b6db8] h-full">
                <CardHeader>
                    <motion.div variants={foldUpVariants}
                                initial="hidden"
                                animate="visible">
                        <CardTitle>
                            <WaveText text={"Programming Languages"}/>
                        </CardTitle>
                    </motion.div>
                </CardHeader>
                <CardContent>
                    <motion.div
                        className="flex flex-wrap gap-1"
                        variants={staggerContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {config.languages.map((lang, index) => (
                            <motion.span
                                key={index}
                                className="px-2 py-1 bg-[#0b6db8] text-white rounded-full text-xs font-semibold"
                                variants={staggerItemVariants}
                            >
                                {lang}
                            </motion.span>
                        ))}
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    )
}