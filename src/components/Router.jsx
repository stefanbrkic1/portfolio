import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ProjectsPage from "../pages/ProjectsPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/projects",
      element: <ProjectsPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
