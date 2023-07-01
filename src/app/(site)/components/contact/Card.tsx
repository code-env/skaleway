import React from "react";

interface CardProps {
  icon: any;
  label: string;
  ln1: string;
  ln2?: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, label, ln1, ln2 }) => {
  return (
    <div className="flex-1 card bg-black text-white rounded-xl p-4 flex flex-col gap-3 cursor-pointer">
      <div className="flex items-center gap-3 font-inter font-bold">
        <div className="icon w-[94px] h-[94px] rounded-full flex items-center justify-center bg-white text-black">
          <Icon size={25} responsive-px="text-black" />
        </div>
        <span>{label}</span>
      </div>
      <div>
        <p>{ln1}</p>
        {ln2 && <p>{ln2}</p>}
      </div>
    </div>
  );
};

export default Card;
