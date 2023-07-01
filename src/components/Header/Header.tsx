"use client";

import { useHeaderRoutes } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

const Header = () => {
  const routes = useHeaderRoutes();

  const [bgColor, setBgColor] = useState(false);

  function changeNavBackgroundColor() {
    if (window.scrollY >= 70) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavBackgroundColor);
  }

  return (
    <header
      className={`
      ${
        bgColor ? "backdrop-blur-lg bg-black/30 z-50" : "bg-transparent"
      } responsive-px font-inter h-20 fixed top-0 left-0
    w-full  text-white z-50`}
    >
      <nav className=" w-full h-full items-center flex lg:gap-72 justify-between">
        <div className="logozenith">
          <Image
            src="/Images/logo.png"
            alt="Skale way official logo"
            width={100}
            height={100}
          />
        </div>

        <ul className="hidden lg:flex gap-14">
          {routes.map((route, index) => (
            <NavItem
              label={route.name}
              href={route.path}
              key={index}
              index={index}
            />
          ))}
        </ul>

        {/* <ul className="flex-1 bg-blue-200 block lg:hidden">
          {routes.map((route, index) => (
            <NavItem label={route.name} href={route.path} key={index} />
          ))}
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
