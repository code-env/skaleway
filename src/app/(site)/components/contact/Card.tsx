import React from "react";

interface CardProps {
  icon: any;
  label: string;
  ln1: string;
  ln2?: string;
}

// test whether a string is an email address or a phone number
// returns "phone" if it's a phone number
// returns "email" if it's an email address
function isContactInfo(text: string) {
  const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const phoneRegex = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);

  if (emailRegex.test(text)) {
    return "email" as const;
  } else if (phoneRegex.test(text)) {
    return "phone" as const;
  } else {
    return null;
  }
}

function BuildContact({ text }: { text: string }) {
  const isThisContactInfo = isContactInfo(text);
  if (isThisContactInfo) {
  return (
    <a href={`${isThisContactInfo === "email" ? "mailto" : "tel"}:${text}`}>{text}</a> 
  )
  } else return <p>{text}</p>
}

const Card: React.FC<CardProps> = ({ icon: Icon, label, ln1, ln2 }) => {
  return (
    <div className="flex-1 card bg-black text-white rounded-xl p-4 flex flex-col gap-3 cursor-pointer">
      <div className="flex items-center gap-3 font-inter font-bold">
        <div className="icon w-[94px] h-[94px] rounded-full flex items-center justify-center bg-white text-black">
          <Icon size={25} responsive-px="text-black" />
        </div>
        <span>{label}</span>
      </div>
      <div>
        <BuildContact text={ln1} /> 
        <br />
        {ln2 && <BuildContact text={ln2} />}
      </div>
    </div>
  );
};

export default Card;
