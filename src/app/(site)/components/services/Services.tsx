import Button from "@/components/Button";
import { useServices } from "@/constants";
import React from "react";
import Service from "./Service";

const Services = () => {
  const services = useServices();
  return (
    <div className="responsive-px w-full" id="services">
      <div className="flex flex-col gap-10 w-full mx-auto  max-w-7xl">
        <h1 className="font-sans text-[32px] text-secondary text-center font-semibold">
          Our Services
        </h1>

        <div className="services flex w-full gap-8 max-[700px]:flex-col justify-center">
          {services.map((item, index) => (
            <Service elmts={item.elmts} name={item.name} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
