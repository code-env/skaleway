import React from "react";
import Stats from "./Stats";
import AsTeam from "./AsTeam";

const About = () => {
  return (
    <div className="responsive-px flex flex-col gap-10">
      <Stats />
      <AsTeam />
    </div>
  );
};

export default About;
