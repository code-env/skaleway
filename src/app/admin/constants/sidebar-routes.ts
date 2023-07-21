import { useMemo } from "react";
import { HiCog, HiHome } from "react-icons/hi";
import { IoCreate } from "react-icons/io5";
import { RiChatSmile2Fill } from "react-icons/ri";

export const useSidebarRoutes = () => {
  const routes = useMemo(
    () => [
      [
        {
          name: "Dashboard",
          icon: HiHome,
          path: "/admin",
        },
        {
          name: "Create",
          icon: IoCreate,
          path: "/admin/create",
        },
        {
          name: "Messages",
          icon: RiChatSmile2Fill,
          path: "/admin/messages",
        },
      ],
      [
        {
          name: "Settings",
          icon: HiCog,
          path: "/admin/settings",
        },
      ],
    ],
    []
  );

  return routes;
};
