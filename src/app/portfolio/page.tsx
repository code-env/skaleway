"use client";

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";

const Porfolio = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="min-h-screen flex">
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      <div className="responsive-px relative pt-28 flex flex-col gap-5 h-full w-full">
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
