import { useMemo } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

export const useHeaderRoutes = () => {
  const routes = useMemo(
    () => [
      {
        name: "Home",
        path: "",
      },
      {
        name: "About Us",
        path: "about",
      },
      {
        name: "Porfolio",
        path: "portfolio",
      },
      {
        name: "Services",
        path: "services",
      },
      {
        name: "Team",
        path: "team",
      },
      {
        name: "Contact Us",
        path: "contact",
      },
    ],
    []
  );

  return routes;
};

export const useTruties = () => {
  const trusties = useMemo(
    () => [
      {
        name: "Dream House",
        path: "/Images/sponsors/dreamhouse.png",
        height: 57,
        width: 178,
      },
      {
        name: "Tic Foundation",
        path: "/Images/sponsors/tic.png",
        height: 60,
        width: 170,
      },
      {
        name: "Dk Group",
        path: "/Images/sponsors/dk.png",
        height: 50,
        width: 151,
      },
      {
        name: "Ket Academy",
        path: "/Images/sponsors/ket.png",
        height: 61,
        width: 91,
      },
      {
        name: "Swims",
        path: "/Images/sponsors/swims.png",
        height: 63,
        width: 161,
      },
    ],
    []
  );

  return trusties;
};

export const useServices = () => {
  const services = useMemo(
    () => [
      {
        name: "Graphic Design",
        elmts: [
          {
            name: "Logo Design",
          },
          {
            name: "Label Design",
          },
          {
            name: "BillBoard Design",
          },
          {
            name: "Magazine Design",
          },
          {
            name: "Report Design",
          },
          {
            name: "Business Cards",
          },
          {
            name: "Wedding Invitations",
          },
          {
            name: "Flyers",
          },
          {
            name: "Posters",
          },
        ],
      },

      {
        name: "UI/UX Design",
        elmts: [
          {
            name: "Website Design",
          },
          {
            name: "Mobile Application Design",
          },
          {
            name: "Wireframes",
          },
          {
            name: "Software Design",
          },
          {
            name: "Personalized Blog Design",
          },
        ],
      },

      {
        name: "Branding & Marketing",
        elmts: [
          {
            name: "Search Engine Optimization",
          },
          {
            name: "Social Media Marketing",
          },
          {
            name: "Email Outreach",
          },
          {
            name: "Website Strategy",
          },
        ],
      },
    ],
    []
  );

  return services;
};

export const useDevTools = () => {
  const tools = useMemo(
    () => [
      {
        name: "Development",
        elmts: [
          {
            name: "html",
            icon: "/Images/tools/html.svg",
            width: 80,
            height: 80,
          },
          {
            name: "css",
            icon: "/Images/tools/css.svg",
            width: 80,
            height: 80,
          },
          {
            name: "javascript",
            icon: "/Images/tools/javascript.svg",
            width: 80,
            height: 80,
          },
          {
            name: "typescript",
            icon: "/Images/tools/typescript.svg",
            width: 80,
            height: 80,
          },
          {
            name: "react",
            icon: "/Images/tools/react.svg",
            width: 80,
            height: 80,
          },
          {
            name: "nextjs",
            icon: "/Images/tools/nextjs.svg",
            width: 254,
            height: 51,
          },
          {
            name: "terminal",
            icon: "/Images/tools/terminal.svg",
            width: 80,
            height: 80,
          },
          {
            name: "vscode",
            icon: "/Images/tools/vscode.svg",
            width: 80,
            height: 80,
          },
          {
            name: "nodejs",
            icon: "/Images/tools/nodejs.svg",
            width: 80,
            height: 80,
          },
        ],
      },
      {
        name: "Design",
        elmts: [
          {
            name: "figma",
            icon: "/Images/tools/figma.svg",
            width: 59,
            height: 89,
          },
          {
            name: "photoshop",
            icon: "/Images/tools/photoshop.svg",
            width: 80,
            height: 80,
          },
          {
            name: "indesign",
            icon: "/Images/tools/indesign.svg",
            width: 80,
            height: 80,
          },
          {
            name: "illustrator",
            icon: "/Images/tools/illustrator.svg",
            width: 80,
            height: 80,
          },
        ],
      },
    ],
    []
  );

  return tools;
};

export const useContactCards = () => {
  const tools = useMemo(
    () => [
      {
        name: "Drop a Line",
        icon: CiMail,
        ln1: "contact@skaleway.com",
        ln2: "supporteam@skaleway.com",
      },
      {
        name: "24 / 7 Service",
        icon: BiPhoneCall,
        ln1: "+237 6 54 58 46 24",
      },
      {
        name: "Location",
        icon: FaLocationDot,
        ln1: "Yaounde - Cameroon",
        ln2: "Technipole - Polytechnic",
      },
    ],
    []
  );

  return tools;
};
