"use client";

import React from "react";
import { useSidebarRoutes } from "../constants/sidebar-routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const sidebarRoutes = useSidebarRoutes();

  const pathname = usePathname();

  return (
    <div className="h-screen w-64 flex flex-col gap-8 bg-primary p-5 sticky top-0">
      Skaleway
      <div className=" flex-1 w-full justify-between flex flex-col">
        {sidebarRoutes.map((r, index) => (
          <ul key={index} className="flex flex-col gap-1">
            {r.map((route, index) => (
              <li key={index}>
                <Link
                  href={route.path}
                  className={`flex items-center gap-2 w-full rounded-md p-2 duration-200 hover:bg-white ${
                    pathname === route.path && "bg-white"
                  }`}
                >
                  <route.icon size={20} />
                  <span>{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
