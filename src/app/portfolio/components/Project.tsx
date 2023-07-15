import React from "react";

interface projectProps {
  height: number;
}

const Project: React.FC<projectProps> = ({ height }) => {
  return (
    <div
      className="bg-neutral rounded-lg duration-300 cursor-pointer hover:shadow-lg"
      style={{
        height: height,
      }}
    ></div>
  );
};

export default Project;
