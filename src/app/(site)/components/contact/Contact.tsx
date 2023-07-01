import React from "react";
import Cards from "./Cards";
import Messaging from "./Messaging";

const Contact = () => {
  return (
    <div className="responsive-px" id="contact">
      <div className="w-full flex flex-col gap-4">
        <h1 className=" text-center gap-4 text-[32px] font-inter font-medium">
          Contact Us
        </h1>
        <div className="flex flex-col gap-8">
          <Cards />
          <Messaging />
        </div>
      </div>
    </div>
  );
};

export default Contact;
