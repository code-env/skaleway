import Layers from "@/components/Layers";
import { useDevTools, useDevelpers } from "@/constants";
import Image from "next/image";
import React from "react";

const Tools = () => {
  const tools = useDevTools();
  const workers = useDevelpers();
  return (
    <div className="responsive-px w-full">
      <div className="flex flex-col gap-7 ">
        <div className="flex w-full  gap-8 max-[700px]:flex-col-reverse">
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="flex items-center gap-4 text-xl font-semibold">
              Special <span className="h-[2px] w-24 bg-primary"></span>
            </h1>

            <p className="text-[32px] font-bold text-secondary font-sans max-[700px]:text-xl">
              Forward Thinking Team of Designers & Developers
            </p>
            <div className="flex flex-col gap-2 flex-1 justify-between">
              {workers.map((worker, index) => (
                <div key={index} className="flex-1">
                  <p className="font-bold text-xl">{worker.name}</p>

                  <div className="flex flex-wrap bg-red-500 justify-between">
                    {worker.people.map((person, index) => (
                      <div key={index} className="bg-black">
                        <Image
                          alt={`${person.name} skaleway ${worker.name}`}
                          src={person.image}
                          width={161}
                          height={177}
                          draggable={false}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="flex items-center gap-4 text-xl font-semibold text-secondary">
              Our Tools and <br /> Resources
              <span className="h-[2px] w-24 bg-primary"></span>
            </h1>
            <div className="tools flex flex-col gap-10">
              {tools.map((item, index) => (
                <div key={index} className="flex flex-col gap-8">
                  <p className="font-sans font-normal text-base">{item.name}</p>
                  <div className="w-full flex flex-wrap gap-10 justify-between">
                    {item.elmts.map((i, index) => (
                      <div key={index} className="">
                        <Image
                          src={i.icon}
                          height={i.height}
                          width={i.width}
                          // placeholder="blur"
                          alt={i.name}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
