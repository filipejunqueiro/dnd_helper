import type { RouteObject } from "react-router-dom";
import Landing from "@pages/Landing";
import NotFound from "@pages/NotFound";
import Classes from "@pages/Classes";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "*",
    Component: NotFound,
  },
  {
    path: "classes",
    Component: Classes,
  }
];

export default routes;
