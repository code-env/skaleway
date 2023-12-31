import Image from "next/image";
import React from "react";
import skaleway from "../../public/Images/logo.svg";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <div className="logozenith">
      <Link href="/">
        <Image
          src={skaleway}
          alt="Skaleway logo"
          width={100}
          height={100}
          // placeholder="blur"
        />
      </Link>
    </div>
  );
};

export default Logo;
