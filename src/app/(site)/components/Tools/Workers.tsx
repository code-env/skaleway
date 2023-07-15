import { useDevelpers } from "@/constants";
import React from "react";
import Worker from "./Worker";

const Workers: React.FC = () => {
  const workers = useDevelpers();
  return (
    <div className="flex flex-col gap-2 flex-1 justify-between" id="team">
      {workers.map((worker, index) => (
        <div key={index} className="flex-1 flex flex-col gap-2">
          <p className="font-bold text-xl">{worker.name}</p>

          <div className="flex gap-5 flex-wrap">
            {worker.people.map((person, index) => (
              <Worker
                name={person.name}
                role={person.role}
                key={index}
                image={person.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workers;
