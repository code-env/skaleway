"use client";

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";
import Header from "@/components/Header/Header";

const Porfolio = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="min-h-screen flex">
      <Header />
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      <div className="pr-8 lg:pr-32 pl-8 lg:pl-20 relative pt-28 flex flex-col gap-5 h-full w-full">
        <p className="text-4xl font-bold font-sans">
          See what could <br />
          <span className="text-primary">Be Yours</span>
        </p>
        <Wrapper isActive={isActive} />
        <div />
      </div>
    </div>
  );
};

export default Porfolio;
