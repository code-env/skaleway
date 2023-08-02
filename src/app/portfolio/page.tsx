import ClientPortfolio from "./Client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Skaleway portfolio page",
};

const PortfolioPage = () => {
  return <ClientPortfolio />;
};

export default PortfolioPage;
