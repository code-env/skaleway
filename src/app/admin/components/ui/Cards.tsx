import React from "react";
import Card from "./Card";

const Cards: React.FC = () => {
  return (
    <div className="flex w-full gap-8 h-fit">
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default Cards;
