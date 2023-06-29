import Link from "next/link";
import React from "react";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
  return (
    <li>
      <Link
        href={`#${href}`}
        className="font-semibold hover:opacity-75 transition"
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
