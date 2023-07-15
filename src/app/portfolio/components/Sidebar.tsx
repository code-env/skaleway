import React from "react";
import { Graphic, UiAndUx, WebDev } from "../../../../public/Images/icons/ui";

interface sidebarProps {
  isActive: boolean;
  setIsActive: (e: boolean) => void;
}

const Sidebar: React.FC<sidebarProps> = ({ isActive, setIsActive }) => {
  const routes = [
    {
      label: "UI/UX designs",
      icon: UiAndUx,
    },
    {
      label: "Graphic designs",
      icon: Graphic,
    },
    {
      label: "Web  Development",
      icon: WebDev,
    },
  ];

  return (
    <div
      className={`sidebar z-10 sticky top-20 left-10 flex items-center  w-14 transition-all duration-300 ${
        isActive && "w-72"
      }  max-[700px]:hidden`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="wrapper w-full h-[90%]  bg-slate-500 rounded-2xl overflow-hidden">
        <ul
          className={`overflow-hidden w-full flex flex-col  pt-10 gap-8 h-full bg-secondary  text-white`}
        >
          {routes.map((route, index) => (
            <li
              key={index}
              className={`flex items-center gap-4 cursor-pointer w-full mx-auto  relative group`}
            >
              <span className="h-10 w-10 rounded-md flex items-center justify-center ml-2">
                <route.icon
                  size={10}
                  className="group-hover:text-primary"
                  fillColor="green"
                />
              </span>
              <span
                className={`transition-all  duration-300 absolute  h-fit opacity-0 w-40  ${
                  isActive ? "left-14 opacity-100" : "-right-60"
                } text-base font-semibold group-hover:text-primary`}
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
