import { Metadata } from "next";
import React from "react";
import Sidebar from "./components/sidebar";

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
      <div className="flex flex-col flex-1">{children}</div>
    </div>
  );
};

export default AdminLayout;
