import Layers from "@/components/Layers";
import React from "react";

const AsTeam = () => {
  return (
    <div className="w-full  flex gap-8">
      <div className="flex-1">
        <Layers height={330} width={552} />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-inter font-medium text-secondary text-center">
          Skaleway as a Team
        </h1>
        <p className="text-xl font-inter leading-[170%] text-center">
          Lorem ipsum dolor sit amet consectetur. Fames ac nec aenean lectus
          turpis. Mi condimentum varius est at quis non nisi. Elementum laoreet
          proin sit convallis tellus. Id ac diam at a arcu ac nec sagittis
          dolor. Elit risus in ultrices quis netus aenean habitant. Pharetra
          pretium sociis dolor leo dolor in purus. Suspendisse gravida id velit
          neque. Id viverra iaculis cursus at congue adipiscing dictum massa.
          Sed neque rhoncus massa nunc lacinia. Sed in vitae dolor diam et.{" "}
        </p>
      </div>
    </div>
  );
};

export default AsTeam;
