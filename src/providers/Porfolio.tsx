"use client";
import Header from "@/components/Header/Header";
import { ReactNode } from "react";

export const PorfolioProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-red-500">
      <Header />
      {children}
    </div>
  );
};
