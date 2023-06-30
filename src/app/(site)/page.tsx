import Image from "next/image";
import React from "react";
import Hero from "./components/Hero";
import Trusties from "./components/Trusties";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Tools from "./components/Tools/Tools";

const LandingPage = () => {
  return (
    <div className=" flex flex-col gap-20">
      <Hero />
      <Trusties />
      <Services />
      <About />
      <Tools />
      <div></div>
    </div>
  );
};

export default LandingPage;
