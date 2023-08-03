import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { routes } from "./Navigation";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuItemProps {
  route: routes;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  route: { label, link },
}) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="li"
    >
      {link ? <Link href={link}>{label}</Link> : <span>{label}</span>}
    </motion.li>
  );
};
