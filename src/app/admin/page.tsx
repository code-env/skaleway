import React from "react";
import Cards from "./components/ui/Cards";
import Chart from "./components/ui/chart";
import MostLiked from "./components/ui/mostlikedPost";

const Admin = () => {
  return (
    <div className="flex min-h-screen text-black w-full flex-col gap-8">
      <Cards />
      <div className="flex gap-8 flex-[.7]">
        <Chart />
        <MostLiked />
      </div>
      <div></div>
    </div>
  );
};

export default Admin;
