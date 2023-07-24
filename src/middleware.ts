import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  ignoredRoutes: [
    "/((?!api|trpc))(_next|.+..+)(.*)",
    "/portfolio",
    "/api/portfolio",
  ],
  publicRoutes: ["/portfolio", "/api/portfolio"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
