import Image from "next/image";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiBell } from "react-icons/hi";

const Header = () => {
  return (
    <div className="h-20 w-full  items-center flex gap-8 shadow-sm text-gray-400 px-10 sticky top-0 bg-white">
      <div className="flex items-center flex-1 gap-4  ">
        <BiSearch size={20} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none bg-transparent border-none"
        />
      </div>
      <HiBell size={20} className="cursor-pointer hover:text-black" /> {"|"}
      <div className="userProfile flex items-center gap-2 text-black">
        <Image
          height={40}
          width={40}
          alt="skaleway user profile"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="object-cover rounded-full"
        />
        <span>John Doe</span>
      </div>
    </div>
  );
};

export default Header;
