import { useFooterRoutes } from "@/constants";
import Image from "next/image";
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
    <footer className="bg-secondary h responsive-px text-white py-20 h-fit gap-10 flex flex-col">
      <div className="w-full flex gap-[100px] max-[700px]:flex-col">
        <Logo />
        <div className="flex-1 flex justify-between max-[700px]:flex-col">
          {footerRoutes.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <p className="font-bold text-2xl">{item.name}</p>
              <ul className="list-disc mx-7 leading-[160%]">
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
            <ul className="">
              <li className="font-sans font-normal text-white/80">
                Mail: contact@skaleway.com
              </li>
              <li className="font-sans font-normal text-white/80 ">
                Phone: 6 54 58 46 24
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
