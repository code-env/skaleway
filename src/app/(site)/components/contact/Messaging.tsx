import React from "react";
import Form from "./Form";
import Map from "./Map";

const Messaging = () => {
  return (
    <div className="flex w-full  gap-8 max-[700px]:flex-col">
      <Form />
      <Map />
    </div>
  );
};

export default Messaging;
