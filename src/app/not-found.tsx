import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "This path is not found on https://skaleway.com",
};
const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient text-7xl font-bold text-white font-inter">
      Not Found
    </div>
  );
};

export default NotFound;
