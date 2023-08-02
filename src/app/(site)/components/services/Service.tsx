import Button from "@/components/ui/Button";
import { FC } from "react";

type elmts = {
  name: string;
};
interface ServiceProps {
  name: string;
  elmts: elmts[];
}

const Service: FC<ServiceProps> = ({ name, elmts: elements }) => {
  return (
    <div className="service flex-1 flex flex-col justify-between rounded-[10px] px-10 py-6 gap-4">
      <div className="flex flex-col gap-4">
        <p className="text-center text-2xl font-semibold">{name}</p>

        <ul className="service-card-list flex flex-col gap-2">
          {elements.map((item, index) => (
            <li
              key={index}
              className="text-lg font-normal leading-[180%] max-[700px]:text-base flex flex-row"
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
  );
};

export default Service;
