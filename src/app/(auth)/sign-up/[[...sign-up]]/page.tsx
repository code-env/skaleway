import React from "react";
import { SignUp } from "@clerk/nextjs";

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp />
    </div>
  );
};

export default Auth;
