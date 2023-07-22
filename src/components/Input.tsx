import React from "react";

interface InputProps {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  name: string;
  placeholder: string;
  textarea?: boolean;
  value: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  name,
  placeholder,
  textarea,
  value,
}) => {
  return (
    <div className="w-full">
      {textarea ? (
        <textarea
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          className="w-full border outline-none px-4 py-3 rounded focus:border-primary resize-none transition-all h-[150px] duration-300"
        />
      ) : (
        <input
          placeholder={placeholder}
          name={name}
          className="w-full border outline-none px-4 py-3 rounded focus:border-primary transition-all duration-300"
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
};

export default Input;
