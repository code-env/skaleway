"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useState, useEffect } from "react";
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
            className="rounded-md w-[200px] h-[200px] overflow-hidden"
          >
            <div className="absolute">
              <button onClick={() => onRemove(url)}>
                <BiTrash />
              </button>
            </div>
            <Image fill alt="text" src={url} className="object-cover" />
          </div>
        ))}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <button disabled={disabled} onClick={onClick}>
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
