import React from "react";
import { SignIn } from "@clerk/nextjs";

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
};

export default Auth;
