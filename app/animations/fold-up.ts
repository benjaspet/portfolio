export const foldUpVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0,
      transformOrigin: "top", 
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };