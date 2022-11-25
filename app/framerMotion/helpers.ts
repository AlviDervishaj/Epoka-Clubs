import { Variants } from "framer-motion";
/**
  Animate Fade in and Fade out, while coming and leaving from bottom
*/
export const linksVariants: Variants = {
  open: {
    y: 0,
    pointerEvents: "auto",
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    pointerEvents: "none",
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const variants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const sidebar: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px) `,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.6,
      stiffness: 200,
      damping: 40,
    },
  }),
  closed: {
    clipPath: "circle(1.3rem at 20px 20px)",
    transition: {
      delay: 0.35,
      stiffness: 100,
      damping: 40,
    },
  },
};
