import Button from "@/components/Button";
import { useServices } from "@/constants";
import React from "react";

const Services = () => {
  const services = useServices();
  return (
    <div className="responsive-px w-full" id="services">
      <div className="flex flex-col gap-10">
        <h1 className="font-sans text-[32px] text-secondary text-center font-semibold">
          Our Services
        </h1>

        <div className="services flex w-full gap-8 max-[700px]:flex-col justify-center">
          {services.map((item, index) => (
            <div
              key={index}
              className="service flex-1 flex flex-col justify-between rounded-[10px] px-10 py-6 gap-4"
            >
              <div className="flex flex-col gap-4">
                <p className="text-center text-2xl font-semibold">
                  {item.name}
                </p>

                <ul className="service-card-list flex flex-col gap-2">
                  {item.elmts.map((item, index) => (
                    <li
                      key={index}
                      className="text-lg font-normal leading-[180%] max-[700px]:text-base"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                label="Learn More"
                className="w-fit px-16  rounded font-semibold text-base py-3 hover:opacity-75 transition-all self-center max-[700px]:px-5"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
