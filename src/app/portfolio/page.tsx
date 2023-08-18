import ClientPortfolio from "./Client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Here we show case all of our product and previous developments",
};

const PortfolioPage = () => {
  return <ClientPortfolio />;
};

export default PortfolioPage;
