import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {motion} from "framer-motion";
import {staggerContainerVariants, staggerItemVariants} from "@/app/animations/stagger";
import {skills} from "@/app/config/skills";
import {fadeInFromRightVariants} from "@/app/animations/fade-in-from-right";
import WaveText from "@/components/wave-text";

export default function FrameworksCard() {
    return (
        <motion.div initial="hidden" animate="visible" variants={fadeInFromRightVariants}>
            <Card className="border-2 duration-300 hover:border-[#0b6db8] flex-1">
                <CardHeader>
                    <CardTitle>
                        <WaveText text={"Frameworks"} />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <motion.div
                        className="flex flex-wrap gap-1"
                        variants={staggerContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {skills.frameworks.map((lang, index) => (
                            <motion.span
                                key={index}
                                className="px-2 py-1 bg-secondary text-white rounded-full text-xs font-semibold"
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