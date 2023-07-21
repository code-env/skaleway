import { Metadata } from "next";
import React from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

interface ReactNode {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Admin",
  description: "Skaleway admin panel",
};

const AdminLayout = ({ children }: ReactNode) => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
