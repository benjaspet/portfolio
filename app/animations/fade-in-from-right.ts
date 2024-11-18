export const fadeInFromRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.25, ease: "easeOut" },
    },
};