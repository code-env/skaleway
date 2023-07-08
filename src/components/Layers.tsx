import React from "react";

interface LayersProps {
  className: string;
}

const Layers: React.FC<LayersProps> = ({ className }) => {
  return <div className={`bg-neutral rounded-md ${className}`}></div>;
};

export default Layers;
