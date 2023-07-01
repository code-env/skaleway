import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface NavItemProps {
  label: string;
  href: string;
  index: number;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, index }) => {
  return (
    <motion.li
      variants={fadeIn(
        { direction: "down" },
        { type: "spring" },
        0,
        index * 0.1
      )}
      initial="hidden"
      animate="show"
    >
      <Link
        href={`#${href}`}
        className="font-semibold hover:opacity-75 transition"
      >
        {label}
      </Link>
    </motion.li>
  );
};

export default NavItem;
