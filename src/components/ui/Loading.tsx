import { FC, HTMLAttributes } from "react";
// import

interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  paragraph?: boolean;
  box?: boolean;
  profile?: boolean;
}

const Loading: FC<LoadingProps> = ({ paragraph, box, profile, ...props }) => {
  return (
    <div {...props}>
      {box && (
        <div className="loading-box rounded-lg bg-neutral relative cursor-no-drop hover:shadow-lg mb-4 overflow-hidden" />
      )}
    </div>
  );
};

export default Loading;
