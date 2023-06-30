import Image from "next/image";
import React from "react";
import Hero from "./components/Hero";
import Trusties from "./components/Trusties";
import Services from "./components/services/Services";
import About from "./components/about/About";

const LandingPage = () => {
  return (
    <div className=" flex flex-col gap-20">
      <Hero />
      <Trusties />
      <Services />
      <About />
      <div></div>
    </div>
  );
};

export default LandingPage;
