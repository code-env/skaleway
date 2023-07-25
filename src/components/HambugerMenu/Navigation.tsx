import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { Graphic, UiAndUx, WebDev } from "../../../public/Images/icons/ui";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export interface routes {
  label: string;
  icon: any;
}

const routes = [
  {
    label: "UI/UX designs",
    icon: UiAndUx,
  },
  {
    label: "Graphic designs",
    icon: Graphic,
  },
  {
    label: "Web  Development",
    icon: WebDev,
  },
];

interface NavigationProps {
  routes: routes[];
}

export const Navigation = () => (
  <motion.ul variants={variants} className="ul">
    {routes.map((route, i) => (
      <MenuItem key={i} label={route.label} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
