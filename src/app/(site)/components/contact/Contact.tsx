import React from "react";
import Cards from "./Cards";

const Contact = () => {
  return (
    <div className="responsive-px">
      <div className="w-full flex flex-col gap-4">
        <h1 className=" text-center gap-4 text-[32px] font-inter font-medium">
          Contact Us
        </h1>
        <Cards />
      </div>
    </div>
  );
};

export default Contact;
