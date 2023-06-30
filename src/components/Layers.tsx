import React from "react";

interface LayersProps {
  height: number;
  width: number;
}

const Layers: React.FC<LayersProps> = ({ height, width }) => {
  return (
    <div
      style={{
        height: height,
        width: width,
      }}
      className="bg-neutral rounded-md"
    ></div>
  );
};

export default Layers;
