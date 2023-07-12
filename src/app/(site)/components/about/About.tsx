import React from "react";
import Stats from "./Stats";
import AsTeam from "./AsTeam";

const About = () => {
  return (
    <div className="responsive-px flex flex-col gap-10">
      <h1 className="font-sans text-[32px] text-secondary text-center font-semibold">
        About us
      </h1>
      <Stats />
      <AsTeam />
    </div>
  );
};

export default About;
