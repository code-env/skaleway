"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import Form from "@/app/(site)/components/contact/Form";
import { toast } from "sonner";
import ImageUpload from "@/components/image-uploader";

interface post {
  image?: string | null;
  title: string;
  description: string;
}

const Create = () => {
  const [userData, setUserData] = useState<post>({
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

  const { title, image, description } = userData;

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
        toast.success("Successfully uploaded portfolio");

        setUserData({
          title: "",
          description: "",
          image: null,
        });
      } else {
        toast.error("Error uploading portfolio:");
      }
    } catch (error) {
      toast.error("Something went wrong while uploading");
      console.log(error);
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

      <button
        className="px-12 py-2 rounded-md bg-secondary text-white"
        disabled={isLoading}
      >
        Upload Portfolio
      </button>
    </Form>
  );
};

export default Create;
