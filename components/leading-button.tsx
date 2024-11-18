import {Button} from "@/components/ui/button";
import {ReactNode} from "react";
import {staggerItemVariants} from "@/app/animations/stagger";
import {motion} from "framer-motion";

type LeadingButtonProps = {
    icon: ReactNode;
    text: string;
    link: string;
}

export default function LeadingButton({icon, text, link}: LeadingButtonProps) {
    return (
        <motion.div variants={staggerItemVariants}>
            <Button variant="gooeyLeft" size="xs" className="hover:rotate-[4deg]" onClick={() => window.open(link, "_blank")}>
                {icon} {text}
            </Button>
        </motion.div>
    )
}