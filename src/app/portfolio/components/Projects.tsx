import React, { useState, useEffect } from "react";
import Project from "./Project";
import Masonry from "react-masonry-css";
import { Portfolio } from "@prisma/client";
import clsx from "clsx";
import { XSquare } from "lucide-react";
import Image from "next/image";

interface projectsProp {
  isActive: boolean;
  portfolio: Portfolio[];
}

const Projects: React.FC<projectsProp> = ({ isActive, portfolio }) => {
  const [isClcked, setisClcked] = useState<boolean>(false);
  const [selected, setSelected] = useState<Portfolio>();
  const breakpointColumnsObj = {
    default: isActive ? 3 : 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  useEffect(() => {
    // console.log(selected);
  }, [selected]);

  return (
    <>
      <Masonry
        className="flex gap-4 overflow-hidden"
        breakpointCols={breakpointColumnsObj}
      >
        {portfolio?.map((project, index) => (
          <Project
            key={index}
            project={project}
            setIsActive={setisClcked}
            setSelected={setSelected}
          />
        ))}
      </Masonry>

      <div
        className={clsx(
          "opacity-0 pointer-events-none top-0 left-0 modal z-[1000] backdrop-blur-lg bg-black/5 w-full h-screen fixed duration-300 transition-all flex items-center justify-center",
          isClcked && "opacity-100 pointer-events-auto"
        )}
      >
        <div
          className="absolute top-4 right-4 text-white cursor-pointer"
          onClick={() => setisClcked((prev) => !prev)}
        >
          <XSquare />
        </div>
        <div className="w-4/5 md:w-1/2 border h-fit relative ">
          <Image
            height={400}
            width={1000}
            src={selected?.imageUrl!}
            alt={selected?.description!}
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
