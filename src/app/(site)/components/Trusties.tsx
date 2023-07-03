"use client";

import { useTruties } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Trusties = () => {
  const trusties = useTruties();
  const trustiesRepeated = [...trusties, ...trusties]; // repeat the items three times
  return (
    <div className="responsive-px">
      <div className="flex w-full flex-col gap-7">
        <h1 className="font-sans text-[32px] text-secondary">They Trust Us</h1>

        <div className="trusties-container flex w-full justify-between overflow-hidden">
          <motion.div
            animate={{
              x: [0, 400, 0],
            }}
            transition={{
              duration: 0,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="trusties flex"
          >
            {trustiesRepeated.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.path}
                  alt={item.name}
                  height={item.height}
                  width={item.width}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .trusties-container {
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default Trusties;
