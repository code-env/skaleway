import React from "react";
import Project from "./Project";
import Masonry from "react-masonry-css";
import { Portfolio } from "@prisma/client";

interface projectsProp {
  isActive: boolean;
  portfolio: Portfolio[];
}

const Projects: React.FC<projectsProp> = ({ isActive, portfolio }) => {
  const breakpointColumnsObj = {
    default: isActive ? 3 : 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      className="flex gap-4 overflow-hidden"
      breakpointCols={breakpointColumnsObj}
    >
      {portfolio.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </Masonry>
  );
};

export default Projects;
