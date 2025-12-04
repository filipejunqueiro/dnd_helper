import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "@mantine/core/styles.css";
import routes from "@utils/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Main = () => {
  const router = createBrowserRouter(routes);

  if (import.meta.env.DEV) {
    return (
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );
  }

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")!).render(<Main />);
