import { useHeaderRoutes } from "@/constants";
import Image from "next/image";
import React from "react";
import NavItem from "./NavItem";

const Header = () => {
  const routes = useHeaderRoutes();
  return (
    <header
      className="respsonsive-px font-inter h-20 fixed top-0 left-0
    w-full  text-white z-50"
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

        <ul className="flex-1  hidden lg:flex gap-14">
          {routes.map((route, index) => (
            <NavItem label={route.name} href={route.path} key={index} />
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
