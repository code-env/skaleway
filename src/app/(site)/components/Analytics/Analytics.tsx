import React from "react";
import Counter from "./Counter";

const Analytics = () => {
  return (
    <div className="responsive-px bg-secondary py-10 text-white">
      <div className="w-full flex flex-col gap-4 max-w-7xl mx-auto ">
        <h1 className="flex items-center gap-4 text-xl font-semibold">
          Our Analytics <span className="h-[2px] w-24 bg-primary"></span>
        </h1>

        <div className="flex justify-between  flex-wrap max-[700px]">
          <div className="flex flex-col gap-4 items-center flex-1 max-[700px]:gap-1 max-[700px]:items-start max-[700px]:w-fit ">
            <p>
              <Counter duration={10} end={10} start={0} />{" "}
              <span className="text-2xl max-[700px]:text-sm">+</span>
            </p>
            <p className="font-semibold text-2xl font-sans max-[700px]:text-sm">
              Results
            </p>
          </div>
          <div className="h-14 w-[2px] bg-primary max-[700px]:hidden" />
          <div className="flex flex-col gap-4 items-center flex-1 max-[700px]:gap-1 max-[700px]:items-start max-[700px]:w-fit ">
            <Counter duration={10} end={20} start={0} />
            <p className="font-semibold text-2xl font-sans max-[700px]:text-sm">
              Website Ranking
            </p>
          </div>
          <div className="h-14 w-[2px] bg-primary max-[700px]:hidden" />
          <div className="flex flex-col gap-4 items-center flex-1 max-[700px]:gap-1 max-[700px]:items-start ">
            <Counter duration={10} end={50} start={0} />
            <p className="font-semibold text-2xl font-sans max-[700px]:text-sm">
              Business Growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
