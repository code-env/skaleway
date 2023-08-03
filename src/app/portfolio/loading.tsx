import { FC } from "react";

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      loading...
    </div>
  );
};

export default loading;
