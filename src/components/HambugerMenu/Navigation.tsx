import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export interface routes {
  label?: string | undefined;
  icon?: any | undefined;
  link?: string | undefined;
  path?: string | undefined;
}

interface NavigationProps {
  routes: routes[];
}

export const Navigation: React.FC<NavigationProps> = ({ routes }) => (
  <motion.ul
    variants={variants}
    className="absolute top-20  bg-transparent w-[400px]"
  >
    {routes.map((route, i) => {
      return <MenuItem key={i} label={route?.label!} />;
    })}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
