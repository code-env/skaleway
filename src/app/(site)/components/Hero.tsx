import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="bg-gradient h-screen relative responsive-px pt-40">
      <div className="w-full text-white flex flex-col gap-5">
        <h1 className="font-sans font-bold lg:text-5xl text-xl lg:leading-[140%] min-[600px]:text-3xl">
          We Design and Develop the <br className="lg:block hidden" /> Digital
          Solutions to Grow <br className="lg:block hidden" /> your{" "}
          <span className="text-primary">Business</span>
        </h1>
        <p className="lg:text-xl max-[600px]:text-sm">
          Lorem ipsum dolor sit amet consectetur. Ultrices duis et id{" "}
          <br className="lg:block hidden" />
          tempus. Orci odio in sed id mauris a mattis amet. Mi dui habitant{" "}
          <br className="lg:block hidden" />
          maecenas condimentum mauris sit netus nunc.{" "}
        </p>
        <Button
          label="Get to Us"
          className="lg:px-36 py-3 transition-all hover:bg-primary lg:w-fit w-full border-primary border rounded "
        />
      </div>
      <div className="image absolute bottom-0 right-0 hidden lg:block">
        <Image
          src="/Images/lg-watermark.png"
          alt="the watermark"
          width={400}
          height={200}
        />{" "}
      </div>
      <div className="image absolute top-20 right-0 block lg:hidden">
        <Image
          src="/Images/sd-watermark.png"
          alt="the watermark"
          width={124}
          height={142}
        />{" "}
      </div>
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
