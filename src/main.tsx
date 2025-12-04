import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import routes from "@utils/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

const Main = () => {
  const router = createBrowserRouter(routes);

  if (import.meta.env.DEV) {
    return (
      <StrictMode>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
        <Analytics />
      </StrictMode>
    );
  }

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <Analytics />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")!).render(<Main />);
