import type { RouteObject } from "react-router-dom";
import Landing from "@pages/Landing";
import NotFound from "@pages/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "*",
    Component: NotFound,
  },
];

export default routes;
