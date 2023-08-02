import React, { useCallback, memo } from "react";
import classNames from "clsx";
import { Graphic, UiAndUx, WebDev } from "../../../../public/Images/icons/ui";

interface Route {
  label: string;
  icon: any;
}

interface SidebarProps {
  isActive: boolean;
  setIsActive: (e: boolean) => void;
  setCategory: (e: string) => void;
  category: string;
}

const Sidebar: React.FC<SidebarProps> = memo(
  ({ isActive, setIsActive, setCategory }) => {
    const routes: Route[] = [
      {
        label: "UI/UX Design",
        icon: UiAndUx,
      },
      {
        label: "Graphic Design",
        icon: Graphic,
      },
      {
        label: "Web  Development",
        icon: WebDev,
      },
    ];

    const handleMouseEnter = useCallback(() => {
      setIsActive(true);
    }, [setIsActive]);

    const handleMouseLeave = useCallback(() => {
      setIsActive(false);
    }, [setIsActive]);

    return (
      <div
        className={classNames(
          "sidebar z-10 sticky top-20 left-10 flex items-center w-14 transition-all duration-300",
          {
            "w-72": isActive,
            "max-[700px]:hidden": true,
          }
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="wrapper w-full h-[90%] bg-slate-500 rounded-2xl overflow-hidden">
          <ul className="overflow-hidden w-full flex flex-col pt-10 gap-8 h-full bg-secondary text-white">
            {routes.map(({ label, icon: Icon }, index) => (
              <li
                key={label + index}
                onClick={() => setCategory(label)}
                className={classNames(
                  "flex items-center gap-4 cursor-pointer w-full mx-auto relative group",
                  {
                    "left-14 opacity-100": isActive,
                    "-right-60": !isActive,
                  }
                )}
              >
                <span className="h-10 w-10 rounded-md flex items-center justify-center ml-2">
                  <Icon
                    size={10}
                    className="group-hover:text-primary"
                    fillColor="green"
                  />
                </span>
                <span className="transition-all duration-300 absolute h-fit opacity-0 w-40 text-base font-semibold group-hover:text-primary">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
);

export default Sidebar;
