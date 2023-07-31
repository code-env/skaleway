"use client";

import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation, routes } from "./Navigation";
import "@/styles/mobileNav.scss";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 50%)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at calc(-100% + 30px))", // Updated value here
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    right: 0,
    top: 0,
  },
};

interface MenuProps {
  routes: routes[];
}

export const MobileNav: React.FC<MenuProps> = ({ routes }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="fixed  top-0 right-0 h-20 w-28 flex items-center justify-center"
    >
      <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
      <motion.div
        className="fixed top-0 right-0 h-screen w-[300px] bg-primary pointer-events-none"
        variants={sidebar}
      />
      <Navigation routes={routes} />
    </motion.nav>
  );
};
