"use client";

import React, { useState } from "react";
import Input from "@/components/Input";

interface post {
  username: string;
  image?: string | null;
  title: string;
  description: string;
}

const Create = () => {
  const [userData, setUserData] = useState<post>({
    username: "",
    title: "",
    image: null,
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const { username, title, image, description } = userData;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 mx-auto border border-red-500 p-4 rounded-lg flex flex-col gap-4"
    >
      <Input
        name="username"
        onChange={handleChange}
        value={username}
        placeholder="username"
      />
      <Input
        name="title"
        onChange={handleChange}
        value={title}
        placeholder="Title"
      />
      <Input
        name="description"
        onChange={handleChange}
        value={description}
        placeholder="Description"
        textarea
      />
    </form>
  );
};

export default Create;
