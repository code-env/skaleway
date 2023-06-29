import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient h-screen relative respsonsive-px pt-40">
      <div className="w-full text-white flex flex-col gap-5">
        <h1 className="font-sans font-bold text-5xl leading-[140%]">
          We Design and Develop the <br /> Digital Solutions to Grow <br /> your{" "}
          <span className="text-primary">Business</span>
        </h1>
        <p className="text-xl ">
          Lorem ipsum dolor sit amet consectetur. Ultrices duis et id <br />
          tempus. Orci odio in sed id mauris a mattis amet. Mi dui habitant{" "}
          <br />
          maecenas condimentum mauris sit netus nunc.{" "}
        </p>
        <Button
          label="Go to Us"
          className="px-36 py-3 transition-all hover:bg-primary w-fit border-primary border rounded "
        />
      </div>
      <div className="image absolute bottom-0 right-0">
        <Image
          src="/Images/watermark.png"
          alt="the watermark"
          width={400}
          height={200}
        />{" "}
      </div>
    </div>
  );
};

export default Hero;
