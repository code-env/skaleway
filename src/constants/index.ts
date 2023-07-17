import { useMemo } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import { FaFigma } from "react-icons/fa";

import {
  css,
  figma,
  html,
  illustrator,
  indesign,
  javascript,
  nextjs,
  nodejs,
  photoshop,
  react,
  terminal,
  typescript,
  vscode,
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
        link: "/portfolio",
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
        path: "/Images/sponsors/dreamhouse.jpeg",
        height: 57,
        width: 178,
      },
      {
        name: "Tic Foundation",
        path: "/Images/sponsors/tic.jpeg",
        height: 60,
        width: 170,
      },
      {
        name: "Ket Academy",
        path: "/Images/sponsors/ket.jpeg",
        height: 61,
        width: 91,
      },
      {
        name: "Swims",
        path: "/Images/sponsors/swims.jpeg",
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
            image: "/Images/developers/philemon.jpeg",
            name: "Philemon Tebo",
            role: "UI/UX Designer & Graphic Designer",
            links: [
              {
                name: "Linkedin",
                link: " https://www.linkedin.com/in/philemon-tebo-tebo-a25b28247/",
                icon: BsLinkedin,
              },
              {
                name: "Twitter",
                link: "https://twitter.com/Philtebotebo",
                icon: BsTwitter,
              },
              {
                name: "facebook",
                link: "https://www.facebook.com/profile.php?id=100080292745855",
                icon: BsFacebook,
              },
              {
                name: "instagram",
                link: "https://www.instagram.com/philtebo/",
                icon: BsInstagram,
              },
              {
                name: "figma",
                link: "https://figma.com/@philballer",
                icon: FaFigma,
              },
            ],
          },
          {
            image: "/Images/developers/elisha.jpeg",
            name: "Ghany Elisha",
            role: "Graphic Designer & Network Engineer",
            links: [
              {
                name: "Linkedin",
                link: "https://www.linkedin.com/in/ghany-elisha",
                icon: BsLinkedin,
              },
              {
                name: "Twitter",
                link: "https://twitter.com/",
                icon: BsTwitter,
              },
              {
                name: "facebook",
                link: "https://www.facebook.com/ghany.elisha",
                icon: BsFacebook,
              },
              {
                name: "instagram",
                link: "https://www.instagram.com/ghanyelisha/ ",
                icon: BsInstagram,
              },
            ],
          },
          {
            image: "/Images/developers/king-mark.jpeg",
            name: "King-Mark",
            role: "Graphic Designer",
            links: [
              {
                name: "Linkedin",
                link: "https://linkedin.com/in/",
                icon: BsLinkedin,
              },
              {
                name: "Twitter",
                link: "https://twitter.com/",
                icon: BsTwitter,
              },
              {
                name: "facebook",
                link: "https://facebook.com/",
                icon: BsFacebook,
              },
            ],
          },
        ],
      },
      {
        name: "Developers",
        people: [
          {
            image: "/Images/developers/romaric.png",
            name: "Romaric Lonfonyuy",
            role: "Backend Developer",
            links: [
              {
                name: "Linkedin",
                link: "https://linkedin.com/in/",
                icon: BsLinkedin,
              },
              {
                name: "facebook",
                link: "https://facebook.com/",
                icon: BsFacebook,
              },
              {
                name: "github",
                link: "https://github.com/",
                icon: BsGithub,
              },
            ],
          },
          {
            image: "/Images/developers/josias.jpeg",
            name: "Josias Aurel",
            role: "Full Stack Web Developer & Project Manager",
            links: [
              {
                name: "Linkedin",
                link: "https://www.linkedin.com/in/josias-aurel/",
                icon: BsLinkedin,
              },
              {
                name: "Twitter",
                link: " https://twitter.com/JosiasWing",
                icon: BsTwitter,
              },
              {
                name: "facebook",
                link: "https://www.facebook.com/josiaswing",
                icon: BsFacebook,
              },
              {
                name: "instagram",
                link: "https://www.instagram.com/josias_wing/",
                icon: BsInstagram,
              },

              {
                name: "github",
                link: "https://github.com/JosiasAurel",
                icon: BsGithub,
              },
            ],
          },
          {
            image: "/Images/developers/zenith.jpeg",
            name: "Bossadi Zenith",
            role: "Full Stack Web Developer",
            links: [
              {
                name: "Linkedin",
                link: "https://www.linkedin.com/in/codeenv",
                icon: BsLinkedin,
              },
              {
                name: "Twitter",
                link: "https://twitter.com/zenith_noble01",
                icon: BsTwitter,
              },
              {
                name: "facebook",
                link: "https://www.facebook.com/zenithnoble01",
                icon: BsFacebook,
              },
              {
                name: "instagram",
                link: "https://www.instagram.com/code_env/",
                icon: BsInstagram,
              },
              {
                name: "github",
                link: "https://github.com/zenith-noble01",
                icon: BsGithub,
              },
              {
                name: "youtube",
                link: "https://youtube.com/@codeenv",
                icon: BsGithub,
              },
            ],
          },
        ],
      },
    ],
    []
  );

  return developers;
};
