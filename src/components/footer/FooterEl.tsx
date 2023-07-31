import Link from "next/link";
import { FC, HTMLAttributes } from "react";

type links = {
  name: string;
  path?: string;
};

interface FooterElProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  email?: string;
  phone?: string;
  links?: links[];
}

const FooterEl: FC<FooterElProps> = ({ name, email, phone, links }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold text-2xl">{name}</p>
      <ul className="mx-7 leading-[160%]">
        {links &&
          links?.map((link: links, index) => (
            <li key={index} className="font-sans font-normal text-white/80 ">
              {link.path ? (
                <Link href={`#${link.path}`}>{link.name}</Link>
              ) : (
                <span>{link.name}</span>
              )}
            </li>
          ))}

        {name === "Contact" && (
          <>
            <li className="font-sans font-normal text-white/80">
              Mail: <a href="mailto:contact@skaleway.com">{email}</a>
            </li>
            <li className="font-sans font-normal text-white/80 ">
              Phone: <a href="tel:54584624">{phone}</a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default FooterEl;
