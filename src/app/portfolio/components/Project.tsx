import { Portfolio } from "@prisma/client";
// import { CldImage } from "next-cloudinary";
import Image from "next/image";
import React from "react";

interface projectProps {
  height?: number;
  project: Portfolio;
}

const Project: React.FC<projectProps> = ({ project }) => {
  return (
    <div className="bg-neutral rounded-lg relative cursor-pointer hover:shadow-lg mb-4 h-fit overflow-hidden">
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
