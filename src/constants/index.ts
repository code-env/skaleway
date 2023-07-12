import { useMemo } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import {
  css,
  elisha,
  figma,
  html,
  illustrator,
  indesign,
  javascript,
  josias,
  kingmark,
  nextjs,
  nodejs,
  philemon,
  photoshop,
  react,
  romaric,
  terminal,
  typescript,
  vscode,
  zenith,
} from "../../public/Images";

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
            icon: html,
            width: 80,
            height: 80,
          },
          {
            name: "css",
            icon: css,
            width: 80,
            height: 80,
          },
          {
            name: "javascript",
            icon: javascript,
            width: 80,
            height: 80,
          },
          {
            name: "typescript",
            icon: typescript,
            width: 80,
            height: 80,
          },
          {
            name: "react",
            icon: react,
            width: 80,
            height: 80,
          },
          {
            name: "nextjs",
            icon: nextjs,
            width: 254,
            height: 51,
          },
          {
            name: "terminal",
            icon: terminal,
            width: 80,
            height: 80,
          },
          {
            name: "vscode",
            icon: vscode,
            width: 80,
            height: 80,
          },
          {
            name: "nodejs",
            icon: nodejs,
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
            icon: figma,
            width: 59,
            height: 89,
          },
          {
            name: "photoshop",
            icon: photoshop,
            width: 80,
            height: 80,
          },
          {
            name: "indesign",
            icon: indesign,
            width: 80,
            height: 80,
          },
          {
            name: "illustrator",
            icon: illustrator,
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

export const useFooterRoutes = () => {
  const routes = useMemo(
    () => [
      {
        name: "Usesful Links",
        links: [
          {
            name: "Home",
            path: "home",
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
      },
      {
        name: "Services",
        links: [
          {
            name: "Web Design and Development",
          },
          {
            name: "UI/UX Designing",
          },
          {
            name: "Graphic Designing",
          },
          {
            name: "Visual Branding",
          },
          {
            name: "Print Designing",
          },
          {
            name: "Portfolio management",
          },
          {
            name: "Magazine Design",
          },
        ],
      },
    ],
    []
  );

  return routes;
};

export const useDevelpers = () => {
  const developers = useMemo(
    () => [
      {
        name: "Desginers",
        people: [
          {
            image: philemon,
            name: "Philemon Tebo",
            role: "UI/UX Designer & Graphic Designer",
          },
          {
            image: elisha,
            name: "Ghany Elisha",
            role: "Graphic Designer",
          },
          {
            image: kingmark,
            name: "King-Mark",
            role: "Graphic Designer",
          },
        ],
      },
      {
        name: "Developers",
        people: [
          {
            image: romaric,
            name: "Romaric Lonfonyuy",
            role: "Backend Developer",
          },
          {
            image: josias,
            name: "Josias Aurel",
            role: "Full Stack Web Developer & Project Manager",
          },
          {
            image: zenith,
            name: "Bossadi Zenith",
            role: "Full Stack Web Developer",
          },
        ],
      },
    ],
    []
  );

  return developers;
};
