import React from "react";
import { PorfolioProvider } from "@/providers/Porfolio";

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return <PorfolioProvider>{children}</PorfolioProvider>;
};

export default PortfolioLayout;
