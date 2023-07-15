import React from "react";
import Project from "./Project";

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
      height: 400,
    },
    {
      height: 200,
    },
    {
      height: 100,
    },
    {
      height: 100,
    },
  ];
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 gap-4 grid-flow-dense md:grid-cols-3 projects grid-rows-[masonry] transition-all duration-300 ${
        isActive ? "xl:grid-cols-3" : "xl:grid-cols-4"
      }`}
    >
      {projects.map((project, index) => (
        <Project height={project.height} key={index} />
      ))}
    </div>
  );
};

export default Projects;
