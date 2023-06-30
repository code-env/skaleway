import Image from "next/image";
import React from "react";

const Stats = () => {
  return (
    <div className="w-full  flex gap-8">
      <div className="flex-1 ">
        <h1 className="text-[72px] font-inter font-bold text-secondary">
          Grow Your Business with Our Agency
        </h1>
      </div>
      <div className="flex-1 relative">
        <Image src="/Images/scalling.png" alt="skaleway analytics" fill />
      </div>
    </div>
  );
};

export default Stats;
