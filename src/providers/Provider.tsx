"use client";

import { Toaster as Miles } from "sonner";

export const Toaster = () => {
  return (
    <Miles
      position="bottom-right"
      toastOptions={{
        style: {
          background: "white",
          color: "black",
          border: "1px solid hsl(var(--border))",
        },
      }}
    />
  );
};
