import * as React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

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
  label: string;
  icon?: IconType;
}

export const MenuItem: React.FC<MenuItemProps> = ({ label, icon: Icon }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="li"
    >
      <span>{label}</span>
    </motion.li>
  );
};
