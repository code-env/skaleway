"use client";

import { useTruties } from "@/constants";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Trusties = () => {
  const trusties = useTruties();
  const trustiesRepeated = [...trusties]; // repeat the items three times
  return (
    <div className="responsive-px">
      <div className="flex w-full flex-col gap-7 max-w-7xl mx-auto">
        <h1 className="font-sans text-[32px] text-secondary text-center">
          They Trust Us
        </h1>

        <Marquee gradient pauseOnHover>
          <div className="trusties-container flex w-full justify-between overflow-hidden gap-40 items-center pr-40">
            {trustiesRepeated.map((item, index) => (
              <div
                key={index}
                className="duration-300 transition-all cursor-pointer"
              >
                {item.url ? (
                  <a href={item.url} target="_black">
                    <Image
                      src={item.path}
                      alt={item.name}
                      height={item.height}
                      width={item.width}
                      draggable={false}
                    />
                  </a>
                ) : (
                  <Image
                    src={item.path}
                    alt={item.name}
                    height={item.height}
                    width={item.width}
                    draggable={false}
                  />
                )}
              </div>
            ))}
          </div>
        </Marquee>
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
