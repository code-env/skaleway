"use client";

import React, { HtmlHTMLAttributes } from "react";

interface formProps extends HtmlHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form: React.FC<formProps> = ({ children, ...props }) => {
  return (
    <form className="flex-1 flex flex-col gap-[10px]" {...props}>
      {children}
    </form>
  );
};

export default Form;
