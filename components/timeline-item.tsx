import {TimelineContent, TimelineDot, TimelineHeading, TimelineLine} from "@/components/ui/timeline";
import {motion, useInView} from "framer-motion";
import {MutableRefObject, useRef} from "react";
import {fadeDownVariants} from "@/app/animations/fade-down";
import {listItemStaggerVariants, listStaggerVariants} from "@/app/animations/list-stagger";
import {TimelineItem} from "@/components/ui/timeline";
import Boldify from "@/components/boldify";

type CustomTimelineItemProps = {
    status: "done" | "default" | "current" | "error" | "custom" | null | undefined;
    role: string;
    company: string;
    locationAndDate: string;
    bullets?: string[];
    additionalSubtitle?: string;
}

export default function CustomTimelineItem({ status, role, locationAndDate, bullets, additionalSubtitle }: CustomTimelineItemProps) {

    const ref: MutableRefObject<null> = useRef(null);
    const isInView: boolean = useInView(ref, {once: true, amount: 0.10});

    return (
        <TimelineItem status="done">
            <TimelineHeading className="font-semibold text-lg ml-1">{role}</TimelineHeading>
            <TimelineDot status={status} />
            <TimelineLine done />
            <TimelineContent className="leading-[1.2rem]">
                <motion.div
                    className="ml-1 pb-1.5"
                    initial="hidden"
                    animate="visible"
                    variants={fadeDownVariants}
                >
                    <motion.p className="text-gray-300 font-semibold" variants={fadeDownVariants}>
                        {locationAndDate}
                    </motion.p>
                    {additionalSubtitle && (
                        <motion.p className="text-gray-300 font-semibold" variants={fadeDownVariants}>
                            {additionalSubtitle}
                        </motion.p>
                    )}
                </motion.div>
                {bullets && bullets.length > 0 && (
                    <motion.ul
                        ref={ref}
                        className="list-disc ml-6"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={listStaggerVariants}
                    >
                        {bullets && bullets.map((bullet, index) => (
                            <motion.li key={index} variants={listItemStaggerVariants} className="font-medium">
                                <Boldify text={bullet}/>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </TimelineContent>
        </TimelineItem>
    )
}