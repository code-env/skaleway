import { useFooterRoutes } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type links = {
  name: string;
  path?: string;
};

const Footer = () => {
  const footerRoutes = useFooterRoutes();

  return (
    <div className="bg-secondary h-96 responsive-px text-white py-10 flex gap-[100px]">
      <div className="logozenith">
        <Image
          src="/Images/logo.png"
          alt="Skale way official logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex-1 flex justify-between">
        {footerRoutes.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p className="font-bold text-2xl">{item.name}</p>
            <ul className="list-disc mx-7 leading-[160%]">
              {item.links.map((link: links, index) => (
                <li
                  key={index}
                  className="font-sans font-normal text-white/80 text-xl"
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
          <ul className=""></ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
