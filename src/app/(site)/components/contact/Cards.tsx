import React from "react";
import Card from "./Card";
import { useContactCards } from "@/constants";

const Cards = () => {
  const cards = useContactCards();
  return (
    <div className="flex w-full gap-8">
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          label={card.name}
          ln1={card.ln1}
          ln2={card.ln2}
        />
      ))}
    </div>
  );
};

export default Cards;
