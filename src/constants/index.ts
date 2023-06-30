import { useMemo } from "react";

export const useHeaderRoutes = () => {
  const routes = useMemo(
    () => [
      {
        name: "Home",
        path: "#",
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
