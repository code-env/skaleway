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
