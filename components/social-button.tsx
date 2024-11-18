import {ReactNode} from "react";
import {staggerItemVariants} from "@/app/animations/stagger";
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";

type SocialButtonProps = {
    icon: ReactNode;
    link: string;
}

export default function SocialButton({icon, link}: SocialButtonProps) {
    return (
        <motion.div variants={staggerItemVariants}>
            <Button
                variant="gooeyRight"
                size="icon"
                className="transition-transform duration-500 hover:animate-pulse group"
                onClick={() => window.open(link, "_blank")}
            >
                {icon}
            </Button>
        </motion.div>
    );
}