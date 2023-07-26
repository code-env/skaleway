"use client";

import React from "react";
import { AiFillStar } from "react-icons/ai";
import WaterMark from "./watermark";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  //nothing yet
  return (
    <div
      className="bg-gradient h-screen max-[700px]:h-fit max-[700px]:pb-56 relative responsive-px pt-28  overflow-hidden"
      id="home"
    >
      <div className="w-full text-white flex flex-col gap-5 2xl:gap-10">
        <h1 className="font-sans font-bold lg:text-5xl text-xl lg:leading-[140%] 2xl:leading-[140%] min-[600px]:text-4xl 2xl:text-7xl">
          We Design and Develop the <br className="lg:block hidden" /> Digital
          Solutions to Grow <br className="lg:block hidden" /> your{" "}
          <span className="text-primary">
            <Typewriter
              words={[
                "Business",
                "Organisation",
                "Portfolio",
                "Startup",
                "Niche!",
              ]}
              loop={true}
              typeSpeed={70}
              deleteSpeed={70}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <p className="lg:text-xl max-[600px]:text-sm">
          Transforming Ideas into Digital Success Stories - <br /> Crafting
          Engaging Websites & Powerful Web Applications <br /> for Small
          Businesses
        </p>
        <a
          href="#contact"
          className="lg:px-36 py-3 transition-all bg-node rounded  lg:w-fit w-full border-primary border hover:bg-primary text-center"
        >
          Get to know us
        </a>
      </div>
      <WaterMark />
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
