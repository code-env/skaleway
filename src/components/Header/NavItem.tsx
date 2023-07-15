import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface NavItemProps {
  label: string;
  href?: string;
  link?: string;
  index: number;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, link, index }) => {
  return (
    <motion.li
      variants={fadeIn(
        { direction: "down" },
        { type: "spring" },
        0.3,
        index * 1
      )}
      initial="hidden"
      animate="show"
    >
      {href ? (
        <Link
          href={`#${href}`}
          className="font-semibold hover:opacity-75 transition"
        >
          {label}
        </Link>
      ) : (
        <Link
          href={`${link}`}
          className="font-semibold hover:opacity-75 transition"
        >
          {label}
        </Link>
      )}
    </motion.li>
  );
};

export default NavItem;
