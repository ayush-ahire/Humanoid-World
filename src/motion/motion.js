import { easeIn } from "framer-motion";

export const NavVariant = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      velocity: 50,
      delay: 1,
    },
  },
};

export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 50,
      stiffness: 50,
      ease: "easeIn",
    },
  },
};
export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 50,
      stiffness: 50,
      ease: "easeIn",
    },
  },
};
export const rotateVariant = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120,
  },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: "tween",
      duration:1,
      ease:easeIn,
    },
  },
});

export const FadeIn=(delay) =>(  {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: [0, 0.2, 0.5, 1],
    scale: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: easeIn,
    },
  },
});

export const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 1, delayChildren: 1 },
  },
};
