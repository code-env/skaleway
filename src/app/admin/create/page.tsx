"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import Form from "@/app/(site)/components/contact/Form";
import ImageUpload from "@/components/image-uploader";

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

  const [isLoading, setIsLoading] = useState<boolean>(false);

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

    try {
      setIsLoading(true);
    } catch (error) {
      console.log("something went wrong while uploading");
    } finally {
      setIsLoading(false);
    }
  };

  const { username, title, image, description } = userData;

  return (
    <Form
      onSubmit={handleSubmit}
      className="w-1/2 mx-auto  p-4 rounded-lg flex flex-col gap-4"
    >
      <Input
        name="username"
        onChange={handleChange}
        value={username}
        placeholder="username"
        disabled={isLoading}
      />
      <Input
        name="title"
        onChange={handleChange}
        value={title}
        placeholder="Title"
        disabled={isLoading}
      />
      <Input
        name="description"
        onChange={handleChange}
        value={description}
        placeholder="Description"
        textarea
        disabled={isLoading}
      />

      <button className="px-12 py-2 rounded-md bg-secondary text-white">
        Upload Portfolio
      </button>
    </Form>
  );
};

export default Create;
