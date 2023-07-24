import React, { useEffect, useState } from "react";
import Projects from "./Projects";
import { Portfolio } from "@prisma/client";

interface wrapperProps {
  isActive: boolean;
}

const Wrapper: React.FC<wrapperProps> = ({ isActive }) => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await fetch("/api/portfolio");
        const data = await response.json();
        setPortfolios(data);
      } catch (error) {
        console.log("Error fetching portfolios:", error);
      }
    };

    fetchPortfolios();
  }, []);

  return (
    <div className="flex-1">
      <Projects isActive={isActive} portfolio={portfolios} />
    </div>
  );
};

export default Wrapper;
