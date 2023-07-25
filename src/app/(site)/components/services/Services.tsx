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
                      className="text-lg font-normal leading-[180%] max-[700px]:text-base flex flex-row"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" fill-rule="evenodd" d="M26.207 9.293a1 1 0 0 1 0 1.414l-1.625 1.625a1 1 0 0 1-1.414-1.414l1.625-1.625a1 1 0 0 1 1.414 0Zm-4.875 4.875a1 1 0 0 1 0 1.414l-3.25 3.25a1 1 0 0 1-1.414-1.414l3.25-3.25a1 1 0 0 1 1.414 0Zm-15.54 2.125a1 1 0 0 1 1.415 0l1.5 1.5a1 1 0 1 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414Zm9.04 4.375a1 1 0 0 1 0 1.414l-1.625 1.625a1 1 0 0 1-1.414 0l-1.5-1.5a1 1 0 1 1 1.414-1.414l.793.793l.918-.918a1 1 0 0 1 1.414 0Z" clip-rule="evenodd"/></svg> {item.name}
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
