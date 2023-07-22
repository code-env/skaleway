"use client";

import React from "react";
import Form from "./Form";
import Input from "@/components/Input";
import { useState } from "react";

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const Messaging = () => {
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const { firstName, lastName, email, message } = userData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(userData);
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex w-full  gap-8 max-[700px]:flex-col">
      <div className="bg-white shadow-lg p-8 rounded-lg w-[95%] lg:w-[70%] mx-auto flex flex-col gap-[17px]">
        <div className="flex flex-col gap-1">
          <p className="font-inter text-2xl font-bold">Enquiry Form</p>
          <p className="text-gray-500">
            Are you looking for details about a certain property? Ask us a
            question using the form below.
          </p>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="flex gap-[10px]">
            <Input
              name="firstName"
              placeholder="First name"
              onChange={handleOnChange}
              value={firstName}
            />
            <Input
              name="lastName"
              placeholder="Last name"
              onChange={handleOnChange}
              value={lastName}
            />
          </div>
          <Input
            name="email"
            placeholder="Email address"
            onChange={handleOnChange}
            value={email}
          />
          <Input
            name="message"
            placeholder="Comments of questions"
            onChange={handleOnChange}
            textarea
            value={message}
          />
          <div className="w-full flex justify-center">
            <button className="bg-secondary text-white px-20 transition-all py-3 cursor-pointer rounded hover:opacity-75">
              Send
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Messaging;
