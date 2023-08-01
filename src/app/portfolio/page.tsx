"use client";

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";
import Header from "@/components/Header/Header";

const Porfolio = () => {
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState("");
  return (
    <div className="min-h-screen flex">
      <div className="pr-8 lg:pr-32 pl-8 lg:pl-20 relative pt-28 flex flex-col gap-5 h-full w-full antialiased">
        <p className="text-4xl font-bold font-sans max-w-7xl mx-auto w-full">
          See what could <br />
          <span className="text-primary">Be Yours</span>
        </p>
        <Wrapper isActive={isActive} category={category} />
        <div />
      </div>
    </div>
  );
};

export default Porfolio;
