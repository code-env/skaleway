import * as React from "react";

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

export const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => (
  <div
    onClick={toggle}
    className="bg-secondary  z-50
 button flex-col gap-1 rounded-lg"
  >
    <span
      className={`h-[2px] w-1/2 rounded transition-all duration-200 bg-black ${
        isOpen ? "-rotate-45 absolute w-1/3 bottom-1/2" : ""
      }`}
    ></span>
    <span
      className={`h-[2px] w-1/2 roundedtransition-all duration-200 bg-black ${
        isOpen ? "opacity-0 absolute bottom-1/2" : "opacity-100"
      }`}
    ></span>
    <span
      className={`h-[2px] w-1/2 rounded transition-all duration-200 bg-black ${
        isOpen ? "rotate-45  absolute bottom-1/2 w-1/3" : ""
      }`}
    ></span>
  </div>
);
