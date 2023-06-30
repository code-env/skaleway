import React from "react";
import Counter from "./Counter";

const Analytics = () => {
  return (
    <div className="responsive-px bg-secondary py-8 text-white">
      <div className="w-full flex flex-col gap-4">
        <h1 className="flex items-center gap-4 text-xl font-semibold">
          Our Analytics <span className="h-[2px] w-24 bg-primary"></span>
        </h1>

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4 items-center">
            <Counter duration={10} end={100} start={0} />
            <p className="font-semibold text-2xl font-sans">Results</p>
          </div>
          <div className="h-14 w-[2px] bg-primary"></div>
          <div className="flex flex-col gap-4 items-center">
            <Counter duration={10} end={1000} start={0} />
            <p className="font-semibold text-2xl font-sans">Website Ranking</p>
          </div>
          <div className="h-14 w-[2px] bg-primary"></div>
          <div className="flex flex-col gap-4 items-center">
            <Counter duration={10} end={500} start={0} />
            <p className="font-semibold text-2xl font-sans">Business Growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
