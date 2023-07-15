import React from "react";
import Project from "./Project";
import Masonry from "react-masonry-css";

interface projectsProp {
  isActive: boolean;
}

const Projects: React.FC<projectsProp> = ({ isActive }) => {
  const projects = [
    {
      height: 100,
    },
    {
      height: 200,
    },
    {
      height: 50,
    },
    {
      height: 300,
    },
    {
      height: 400,
    },
    {
      height: 410,
    },
    {
      height: 560,
    },
    {
      height: 310,
    },
    {
      height: 100,
    },
  ];

  const breakpointColumnsObj = {
    default: isActive ? 3 : 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    // <div
    //   className={`grid grid-cols-1 sm:grid-cols-2 gap-4 grid-flow-dense md:grid-cols-3 projects grid-rows-[masonry] transition-all duration-300 ${
    //     isActive ? "xl:grid-cols-3" : "xl:grid-cols-4"
    //   }`}
    // >

    <Masonry className="flex gap-4" breakpointCols={breakpointColumnsObj}>
      {projects.map((project, index) => (
        <Project height={project.height} key={index} index={index} />
      ))}
    </Masonry>
    // </div>
  );
};

export default Projects;
