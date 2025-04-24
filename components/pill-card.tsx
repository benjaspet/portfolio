import {fadeInFromRightVariants} from "@/app/animations/fade-in-from-right";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {motion} from "framer-motion";
import {staggerContainerVariants, staggerItemVariants} from "@/app/animations/stagger";

type Props = {
    title: string;
    pillItems: string[];
    pillColor?: string;
}

export default function PillCard({title, pillItems, pillColor = "bg-secondary"}: Props) {
    return (
        <motion.div initial="hidden" animate="visible" variants={fadeInFromRightVariants}>
            <Card className="border-2 duration-300 hover:border-[#0b6db8] h-full">
                <CardHeader>
                    <CardTitle>
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <motion.div
                        className="flex flex-wrap gap-1"
                        variants={staggerContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {pillItems.map((item, index) => (
                            <motion.span
                                key={index}
                                className={`px-2 py-1 text-white rounded-full text-xs font-semibold ${pillColor}`}
                                variants={staggerItemVariants}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    )
}