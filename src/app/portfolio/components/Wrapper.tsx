import React from "react";
import Projects from "./Projects";

interface wrapperProps {
  isActive: boolean;
}

const Wrapper: React.FC<wrapperProps> = ({ isActive }) => {
  return (
    <div className="flex-1">
      <Projects isActive={isActive} />
    </div>
  );
};

export default Wrapper;
