import {Card, CardTitle} from "@/components/ui/card";
import React from "react";
import {fadeInFromRightVariants} from "@/app/animations/fade-in-from-right";
import {motion} from "framer-motion";
import {foldUpVariants} from "@/app/animations/fold-up";
import Link from "next/link";

type PostPreviewProps = {
    title: string;
    link: string;
}

export default function PostPreview({title, link}: PostPreviewProps) {
    return (
        <motion.div initial="hidden" animate="visible" variants={fadeInFromRightVariants}>
            <Card className="border-2 duration-300 hover:border-[#0b6db8] flex-1">
                <motion.div variants={foldUpVariants}
                            initial="hidden"
                            animate="visible">
                    <CardTitle className={"p-4"}>
                        <Link
                            className="group flex items-center text-blue-400 transition-colors duration-300 max-w-full overflow-hidden"
                            href={link}
                            title={title}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span
                                className="text-white group-hover:text-gray-200 mr-1 transition-colors duration-300 whitespace-nowrap">
                                Read:
                            </span>
                            <span className="truncate font-medium">{title}</span>
                        </Link>
                    </CardTitle>
                </motion.div>
            </Card>
        </motion.div>
    )
}