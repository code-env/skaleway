import { useFooterRoutes } from "@/constants";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

type links = {
  name: string;
  path?: string;
};

const Footer = () => {
  const footerRoutes = useFooterRoutes();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary h responsive-px text-white py-20 h-fit gap-10 flex flex-col z-50">
      <div className="w-full flex gap-[100px] max-[700px]:flex-col max-w-7xl mx-auto">
        <Logo />
        <div className="flex-1 flex justify-between max-[700px]:flex-col max-[700px]:gap-8">
          {footerRoutes.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <p className="font-bold text-2xl">{item.name}</p>
              <ul className="mx-7 leading-[160%]">
                {item.links.map((link: links, index) => (
                  <li
                    key={index}
                    className="font-sans font-normal text-white/80 "
                  >
                    {link.path ? (
                      <Link href={`#${link.path}`}>{link.name}</Link>
                    ) : (
                      <span>{link.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">Contact</p>
            <ul className="mx-7">
              <li className="font-sans font-normal text-white/80">
                Mail:{" "}
                <a href="mailto:contact@skaleway.com">contact@skaleway.com</a>
              </li>
              <li className="font-sans font-normal text-white/80 ">
                Phone: <a href="tel:54584624">6 54 58 46 24</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full">
        <p className="text-primary text-center">
          &copy; {`${currentYear}`} All Rights Reserved - Skaleway
        </p>
      </div>
    </footer>
  );
};

export default Footer;
