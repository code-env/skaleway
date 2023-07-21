"use client";

import { useTruties } from "@/constants";
import Image from "next/image";
import React from "react";
import Marquee from "./marquee";

const Trusties = () => {
  const trusties = useTruties();
  const trustiesRepeated = [...trusties]; // repeat the items three times
  return (
    <div className="responsive-px">
      <div className="flex w-full flex-col gap-7">
        <h1 className="font-sans text-[32px] text-secondary text-center">
          They Trust Us
        </h1>

        <div className="trusties-container flex w-full justify-between overflow-hidden">
          <Marquee>
            {trustiesRepeated.map((item, index) => (
              <div
                key={index}
                className="grayscale  hover:grayscale-0 duration-300 transition-all cursor-pointer"
              >
                <Image
                  src={item.path}
                  alt={item.name}
                  height={item.height}
                  width={item.width}
                  draggable={false}
                />
              </div>
            ))}
          </Marquee>
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
