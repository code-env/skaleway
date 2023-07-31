"use client";

import { useHeaderRoutes } from "@/constants";
import React, { useState } from "react";
import NavItem from "./NavItem";
import Logo from "../Logo";
import { usePathname } from "next/navigation";
import { MobileNav } from "../HambugerMenu/MobileNav";

const Header = () => {
  const routes = useHeaderRoutes();
  const pathname = usePathname();

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
      ${pathname === "/portfolio" && "bg-gradient"}
      ${
        bgColor ? "backdrop-blur-lg bg-black/30 z-50" : "bg-transparent"
      } responsive-px font-inter h-20 fixed top-0 left-0
    w-full  text-white z-50`}
    >
      <nav className=" w-full h-full items-center flex lg:gap-72 justify-between max-w-7xl mx-auto">
        <Logo />

        <ul className="hidden lg:flex gap-14">
          {routes.map((route, index) => (
            <NavItem
              label={route?.label!}
              href={route.path}
              key={index}
              index={index}
              link={route.link}
            />
          ))}
        </ul>

        <div className="relative max-[700px]:block hidden">
          <MobileNav routes={routes} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
