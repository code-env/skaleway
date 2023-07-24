"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useState, useEffect, FormEvent } from "react";
import { BiTrash, BiImageAdd } from "react-icons/bi";

interface imageUploaderProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<imageUploaderProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMount, setIsMount] = useState<boolean>(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMount) {
    return null;
  }

  return (
    <div>
      <div className="flex mb-4 gap-4 items-center">
        {value.map((url) => (
          <div
            key={url}
            className="rounded-md w-[200px] h-[200px] overflow-hidden relative"
          >
            <div className="absolute top-2 right-2 z-10">
              <button
                onClick={() => onRemove(url)}
                className="bg-rose-500 cursor-pointer p-2 rounded-md text-white"
              >
                <BiTrash />
              </button>
            </div>
            <Image fill alt="text" src={url} className="object-cover" />
          </div>
        ))}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="skaleway">
        {({ open }) => {
          const onClick = (e: FormEvent) => {
            e.preventDefault();
            open();
          };

          return (
            <button
              disabled={disabled}
              onClick={onClick}
              className="flex bg-gray-300 items-center gap-2 p-2 rounded-md"
            >
              <BiImageAdd size={20} />
              <span>Upload an image</span>
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
