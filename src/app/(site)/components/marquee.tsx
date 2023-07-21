import { motion } from "framer-motion";
import React from "react";
import "./marquee.scss";

interface ReactNode {
  children: React.ReactNode;
}

const Marquee = ({ children }: ReactNode) => {
  return (
    <div className="marquee">
      <motion.div
        className="marquee__inner w-full"
        animate={{ x: "-100%" }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex gap-10 w-full ">{children}</div>
      </motion.div>
    </div>
  );
};

export default Marquee;
