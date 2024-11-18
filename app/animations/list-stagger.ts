export const listStaggerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

export const listItemStaggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    whileInView: { opacity: 1 }
};