"use client";
import Sidebar from "@/app/portfolio/components/Sidebar";
import Header from "@/components/Header/Header";
import { ReactNode, useState } from "react";

export const PorfolioProvider = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState("");
  return (
    <div className="min-h-screen flex bg-red-500">
      <Header />
      <Sidebar
        isActive={isActive}
        setIsActive={setIsActive}
        setCategory={setCategory}
      />
      {children}
    </div>
  );
};
