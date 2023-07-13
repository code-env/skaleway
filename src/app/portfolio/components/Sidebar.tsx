"use client";

import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const routes = [
    {
      label: "UI/UX designs",
      icon: "",
    },
    {
      label: "Graphic designs",
      icon: "",
    },
    {
      label: "Web  designs",
      icon: "",
    },
  ];

  return (
    <div
      className={`sidebar fixed top-20 left-20 flex items-center  w-14 transition-all duration-300 ${
        isActive && "w-96"
      }`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="wrapper w-full h-[90%]  bg-slate-500 rounded-2xl">
        <ul>
          {routes.map((route, index) => (
            <li className="flex items-center gap-4 cursor-pointer">
              <span className="h-10 w-10 rounded-md bg-white"></span>
              <span
                className={` transition-all opacity-0 duration-300 ${
                  isActive && "opacity-100"
                }`}
              >
                {route.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
