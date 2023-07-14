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
      className={`sidebar z-10 fixed top-20 left-20 flex items-center  w-14 transition-all duration-300 ${
        isActive && "w-96"
      }`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="wrapper w-full h-[90%]  bg-slate-500 rounded-2xl overflow-hidden ">
        <ul
          className={`overflow-hidden w-full flex flex-col  pt-10 gap-4 h-full bg-black  text-white`}
        >
          {routes.map((route, index) => (
            <li
              key={index}
              className="flex items-center gap-4 cursor-pointer w-[95%] mx-auto justify-center relative bg-red-500 p-1"
            >
              <span className="h-10 w-10 rounded-md bg-white"></span>
              <span
                className={`transition-all  duration-300 absolute ${
                  isActive ? "left-14 opacity-100" : "-right-60 opacity-0"
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
