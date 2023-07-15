import React from "react";

interface projectProps {
  height: number;
  index?: number;
}

const Project: React.FC<projectProps> = ({ height, index }) => {
  return (
    <div
      className="bg-neutral rounded-lg duration-300 cursor-pointer hover:shadow-lg mb-4 flex items-center justify-center"
      style={{
        height: height,
      }}
    >
      <h1 className="font-extrabold text-4xl">{index && index}</h1>
    </div>
  );
};

export default Project;
