import Button from "@/components/Button";
import { useServices } from "@/constants";
import React from "react";

const Services = () => {
  const services = useServices();
  return (
    <div className="responsive-px w-full">
      <div className="flex flex-col gap-7">
        <h1 className="font-sans text-[32px] text-secondary text-center">
          Our Services
        </h1>

        <div className="services flex w-full gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="service flex-1 flex flex-col justify-between rounded-[30px] px-16 py-6 "
            >
              <div>
                <p className="text-center text-2xl font-semibold">
                  {item.name}
                </p>

                <ul className="list-disc flex flex-col gap-2">
                  {item.elmts.map((item, index) => (
                    <li
                      key={index}
                      className="text-xl font-normal leading-[180%]"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                label="Learn More"
                className="w-fit px-16  rounded font-semibold text-base py-3 hover:opacity-75 transition-all self-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
