import * as React from "react";

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

export const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => (
  <button
    onClick={toggle}
    className="button text-white flex-col gap-1 relative"
  >
    <span
      className={`h-[2px] w-[50%]  transition-all duration-200 bg-black ${
        isOpen ? "-rotate-45" : ""
      }`}
    ></span>
    <span
      className={`h-[2px] w-[50%] transition-all duration-200 bg-black ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    ></span>
    <span
      className={`h-[2px] w-[50%]  transition-all duration-200 bg-black ${
        isOpen ? "rotate-45" : ""
      }`}
    ></span>
  </button>
);
