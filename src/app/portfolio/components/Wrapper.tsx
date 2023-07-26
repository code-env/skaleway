import React, { useEffect, useState } from "react";
import Projects from "./Projects";
import { Portfolio } from "@prisma/client";
import axios from "axios";

interface wrapperProps {
  isActive: boolean;
}

const Wrapper: React.FC<wrapperProps> = ({ isActive }) => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const { data } = await axios.get(
          "https://skaleway-admin.vercel.app/api/portfolio"
        );
        setPortfolios(data);
      } catch (error) {
        console.log("Error fetching portfolios:", error);
      }
    };

    fetchPortfolios();
  }, []);

  // console.log(portfolios);

  return (
    <div className="flex-1">
      <Projects isActive={isActive} portfolio={portfolios} />
    </div>
  );
};

export default Wrapper;
