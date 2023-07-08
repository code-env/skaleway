import Image from "next/image";
import React from "react";
import skaleway from "../../public/Images/logo.png";

const Logo: React.FC = () => {
  return (
    <div className="logozenith">
      <Image
        src={skaleway}
        alt="Skaleway logo"
        width={100}
        height={100}
        placeholder="blur"
      />
    </div>
  );
};

export default Logo;
