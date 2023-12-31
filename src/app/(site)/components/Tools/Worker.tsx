import Image from "next/image";
import Link from "next/link";
import React from "react";

// type links = {
//   facebook?: string;
//   instagram?: string;
//   linkedin: string;
//   twitter: string;
//   github?: string;
//   figma?: string;
// };

type link = {
  name: string;
  icon: any;
  link: string;
};

interface workerProps {
  name: string;
  role: string;
  image?: string;
  links: link[];
}

const Worker: React.FC<workerProps> = ({ image, name, role, links }) => {
  return (
    <div className="max-w-[161px] rounded-lg gap-4 group flex flex-col duration-300 max-[700px]:max-w-[200px] max-[400px]:max-w-[145px]">
      {image ? (
        <div className="rounded-lg overflow-hidden w-fit worker-overlay relative transition-all duration-300">
          <Image
            alt={`${name} skaleway ${name}`}
            src={`${image}`}
            width={161}
            height={177}
            draggable={false}
            className="h-[177px] rounded-lg object-cover cursor-pointer duration-300 group-hover:scale-110 self-center overflow-hidden"
          />

          <div className="show">
            {links.map((link, index) => {
              const Icon = link.icon;

              return (
                <Link href={link.link} target="_blank" key={index}>
                  <Icon className="text-white" size={20} />
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <div
          className={`2xl:w-[200px] 2xl:h-[177px] w-[150px] h-[177px] duration-500  bg-neutral rounded-md group-hover:blur-sm cursor-pointer`}
        ></div>
      )}

      <div className="user profession">
        <p className="flex flex-col">
          <span className="font-bold font-sans text-base">{name}</span>{" "}
          <span className="text-xs">{role}</span>
        </p>
      </div>
    </div>
  );
};

export default Worker;
