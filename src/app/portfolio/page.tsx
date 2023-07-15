import React from "react";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";

const Porfolio = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="responsive-px pt-28 flex flex-col gap-5 h-full w-full">
        <p className="text-4xl font-bold font-sans">
          See what could <br />
          <span className="text-primary">Be Yours</span>
        </p>
        <Wrapper />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Porfolio;
