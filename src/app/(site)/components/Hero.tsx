"use client";

import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import watermark from "../../../../public/Images/2xl-watermark.png";

const Hero = () => {
  return (
    <div
      className="bg-gradient h-screen relative responsive-px pt-28  2xl:pt-60 overflow-hidden"
      id="home"
    >
      <div className="w-full text-white flex flex-col gap-5 2xl:gap-10">
        <motion.h1
          variants={fadeIn({ direction: "up" }, { type: "tween" }, 0.3, 0.3)}
          initial="hidden"
          animate="show"
          className="font-sans font-bold lg:text-5xl text-xl lg:leading-[140%] min-[600px]:text-3xl 2xl:text-7xl"
        >
          We Design and Develop the <br className="lg:block hidden" /> Digital
          Solutions to Grow <br className="lg:block hidden" /> your{" "}
          <span className="text-primary">Business</span>
        </motion.h1>
        <motion.p
          variants={fadeIn({ direction: "up" }, { type: "tween" }, 0.5, 0.4)}
          initial="hidden"
          animate="show"
          className="lg:text-xl max-[600px]:text-sm"
        >
          Lorem ipsum dolor sit amet consectetur. Ultrices duis et id{" "}
          <br className="lg:block hidden" />
          tempus. Orci odio in sed id mauris a mattis amet. Mi dui habitant{" "}
          <br className="lg:block hidden" />
          maecenas condimentum mauris sit netus nunc.{" "}
        </motion.p>
        <Button
          label="Get to Us"
          className="lg:px-36 py-3 transition-all hover:bg-primary lg:w-fit w-full border-primary border rounded "
        />
      </div>
      <div className="image absolute 2xl:-right-[20%] 2xl:-bottom-1/4 hidden lg:block bg-transparent -bottom-1/2 -right-1/3">
        <Image
          src={watermark}
          alt="the watermark"
          sizes="100vw"
          draggable={false}
        />
      </div>
      {/* <div className="image absolute top-20 right-0 block lg:hidden">
        <Image
          src="/Images/sd-watermark.png"
          alt="the watermark"
          width={124}
          height={142}
        />{" "}
      </div> */}
      <div className="image absolute bottom-9">
        <p className="text-base text-white">
          5 Happy Clients{" "}
          <span className="text-white/50 flex items-center gap-2">
            <span className=" flex items-center text-xs">
              <AiFillStar className="text-[#F9B83F]" size={20} /> 4.9
            </span>
            <span className="text-white text-sm">(1k Reviews)</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
