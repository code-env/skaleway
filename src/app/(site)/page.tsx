import Image from "next/image";
import React from "react";
import Hero from "./components/Hero";
import Trusties from "./components/Trusties";
import Services from "./components/services/Services";

const LandingPage = () => {
  return (
    <div className=" flex flex-col gap-20">
      <Hero />
      <Trusties />
      <Services />
      <div></div>
    </div>
  );
};

export default LandingPage;
