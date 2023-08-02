import React, { useEffect, useState } from "react";
import Projects from "./Projects";
import { Portfolio } from "@prisma/client";
import axios from "axios";
import { toast } from "sonner";
// import Loading from "@/components/ui/Loading";

interface wrapperProps {
  isActive: boolean;
  category: string;
}

const Wrapper: React.FC<wrapperProps> = ({ isActive, category }) => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://skaleway-admin.vercel.app/api/portfolio"
        );
        setPortfolios(data);
      } catch (error) {
        setIsError(true);
        toast.error("Something went wrong fetching post");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  useEffect(() => {
    if (category === "") return;

    console.log("Original portfolios:", portfolios);

    const filteredPortfolios = portfolios.filter(
      (p) => p.variant == category.toString()
    );

    console.log("Filtered portfolios:", filteredPortfolios);

    setPortfolios(filteredPortfolios);
  }, [category, portfolios]);

  if (isLoading || isError) {
    return (
      <div className="w-full flex-wrap h-fit gap-4 flex duration-500 transition-all max-w-7xl mx-auto">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex-1 relative overflow-hidden bg-neutral h-[300px] rounded-lg min-w-[300px] duration-500 transition-all after:absolute after:top-0 after:w-full after:animate-pulse after:transition-all after:h-full a after:bg-gray-100/75"
          ></div>
        ))}
      </div>
    );
  }

  // console.log(portfolios);

  return (
    <div className="flex-1">
      <Projects isActive={isActive} portfolio={portfolios} />
    </div>
  );
};

export default Wrapper;
