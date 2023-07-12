import Image from "next/image";
import React from "react";

interface workerProps {
  image?: string;
  name: string;
  role: string;
}

const Worker: React.FC<workerProps> = ({ image, name, role }) => {
  return (
    <div className="flex-1">
      {image ? (
        <Image
          alt={`${name} skaleway ${name}`}
          src={image}
          width={161}
          height={177}
          draggable={false}
        />
      ) : (
        <div
          className={`2xl:w-[200px] 2xl:h-[177px] w-[200px] h-[177px]  bg-neutral rounded-md`}
        ></div>
      )}

      <div className="user profession">
        <p className="flex flex-col">
          <span className="font-bold font-sans text-base">{name}</span>{" "}
          <span>{role}</span>
        </p>
      </div>
    </div>
  );
};

export default Worker;
