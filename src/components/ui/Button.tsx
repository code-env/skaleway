import React from "react";

interface ButtonProps {
  label: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ label, className }) => {
  return <button className={className}>{label}</button>;
};

export default Button;
