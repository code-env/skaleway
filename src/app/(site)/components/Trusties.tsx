import { useTruties } from "@/constants";
import Image from "next/image";
import React from "react";

const Trusties = () => {
  const trusties = useTruties();
  return (
    <div className="responsive-px">
      <div className="flex w-full flex-col gap-7">
        <h1 className="font-sans text-[32px] text-secondary">They Trust Us</h1>

        <div className="trusties flex w-full justify-between">
          {trusties.map((item, index) => (
            <div key={index}>
              <Image
                src={item.path}
                alt={item.name}
                height={item.height}
                width={item.width}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusties;
