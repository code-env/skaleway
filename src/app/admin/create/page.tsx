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

  const { username, title, image, description } = userData;

  const handleImageChange = (imageUrl: string) => {
    setUserData((prev) => ({
      ...prev,
      image: imageUrl,
    }));
  };

  const handleImageRemove = (imageUrl: string) => {
    setUserData((prev) => ({
      ...prev,
      image: null,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await fetch("/api/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      // Handle the response from the server
      if (response.ok) {
        const data = await response.json();
        console.log("Successfully uploaded portfolio:", data);
      } else {
        console.log("Error uploading portfolio:", response.statusText);
      }
    } catch (error) {
      console.log("Something went wrong while uploading:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="lg:w-1/2 mx-auto md:w-[80%] w-[90%] p-4 rounded-lg flex flex-col gap-4"
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
      <ImageUpload
        onChange={handleImageChange}
        onRemove={handleImageRemove}
        value={image ? [image] : []}
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
