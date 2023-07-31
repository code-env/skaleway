import { useFooterRoutes } from "@/constants";
import React from "react";
import Logo from "../Logo";
import FooterEl from "./FooterEl";

const Footer = () => {
  const footerRoutes = useFooterRoutes();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary h responsive-px text-white py-20 h-fit gap-10 flex flex-col z-50">
      <div className="w-full flex gap-[100px] max-[700px]:flex-col max-w-7xl mx-auto">
        <Logo />
        <div className="flex-1 flex justify-between max-[700px]:flex-col max-[700px]:gap-8">
          {footerRoutes.map((item, index) => (
            <FooterEl name={item.name} links={item.links} key={index} />
          ))}
          <FooterEl
            name="Contact"
            email="skalewayteam@gmail.com"
            phone="........."
          />
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
