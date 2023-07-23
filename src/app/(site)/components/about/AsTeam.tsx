"use client";

import React from "react";

const AsTeam = () => {
  return (
    <div className="w-full  flex gap-8 max-[700px]:flex-col">
      <div className="flex-1 max-w-[50%] bg-neutral rounded-lg relative"></div>
      <div className="flex-1">
        <h1 className="text-2xl font-inter font-medium text-secondary text-center">
          Skaleway as a Team
        </h1>
        <p className="text-xl font-inter leading-[170%]  max-[700px]:text-xs">
        At Skaleway, we believe in collaboration and the power of a team. From the initial idea to the finished product, our design process is rooted in a spirit of teamwork. Every team member brings their unique perspective and skills to the table, and together, we work to create something special. From brainstorming sessions to ideation sessions and finally, to final design reviews, our teamwork helps to create solutions that are both innovative and functional.{" "}
        </p>
      </div>
    </div>
  );
};

export default AsTeam;
