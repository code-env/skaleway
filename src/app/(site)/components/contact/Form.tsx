"use client";

import Input from "@/components/Input";
import React, { useState } from "react";

type UserData = {
  username: string;
  email: string;
  message: string;
};

const Form = () => {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    email: "",
    message: "",
  });

  const { username, email, message } = userData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
      <p className="font-inter text-2xl font-medium">Message Us</p>
      <Input
        name="username"
        placeholder="Username"
        onChange={handleOnChange}
        value={username}
      />
      <Input
        name="email"
        placeholder="Email address"
        onChange={handleOnChange}
        value={email}
      />
      <Input
        name="message"
        placeholder="Message"
        onChange={handleOnChange}
        textarea
        value={message}
      />

      <div className="w-full flex justify-end">
        <button className="bg-secondary text-white px-8 transition-all py-3 cursor-pointer rounded hover:opacity-75">
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
