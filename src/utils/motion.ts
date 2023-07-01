type Direction = {
  direction: "up" | "right" | "down" | "left";
};

type AnimationType = {
  type: "tween" | "spring";
};

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: Direction,
  animationType: AnimationType,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x:
        direction.direction === "left"
          ? 100
          : direction.direction === "right"
          ? -100
          : 0,
      y:
        direction.direction === "up"
          ? 100
          : direction.direction === "down"
          ? -100
          : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: animationType.type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (
  delay: number,
  duration: number,
  animationType: AnimationType = { type: "tween" }
) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: animationType.type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: Direction,
  animationType: AnimationType,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x:
        direction.direction === "left"
          ? "-100%"
          : direction.direction === "right"
          ? "100%"
          : 0,
      y:
        direction.direction === "up"
          ? "-100%"
          : direction.direction === "down"
          ? "100%"
          : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: animationType.type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number,
  delayChildren?: number,
  animationType: AnimationType = { type: "tween" }
) => {
  return {
    hidden: {},
    show: {
      transition: {
        type: animationType.type,
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
