import { Portfolio } from "@prisma/client";
// import clsx from "clsx";
// import { profile } from "console";
// import { CldImage } from "next-cloudinary";
import Image from "next/image";
import React, { HtmlHTMLAttributes, useState } from "react";

interface projectProps extends HtmlHTMLAttributes<HTMLDivElement> {
  height?: number;
  project: Portfolio;
  // selected: Portfolio,
  setSelected: (e: Portfolio) => void;
  setIsActive: (e: boolean) => void;
}

const Project: React.FC<projectProps> = ({
  project,
  setSelected,
  setIsActive,
}) => {
  // const [isActive, setIsActive] = useState<boolean>(false);
  // const [selected, setSelected] = useState<Portfolio>();

  function handleClick(project: Portfolio) {
    setIsActive(true);
    setSelected(project);
  }

  return (
    <div
      onClick={() => handleClick(project)}
      className="bg-neutral rounded-lg relative cursor-pointer hover:shadow-lg mb-4 h-fit overflow-hidden"
    >
      <Image
        src={project.imageUrl}
        alt={project.description}
        height={400}
        width={1000}
        className="object-cover"
      />
    </div>
  );
};

export default Project;
