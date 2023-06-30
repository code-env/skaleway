import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondary h-96 responsive-px text-white py-10">
      <div className="logozenith">
        <Image
          src="/Images/logo.png"
          alt="Skale way official logo"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Footer;
