import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Website from "./Website";
import RootLayout from "./UI/RootLayout";
import Project from "./components/Project";
import ProjectLayout from "./UI/ProjectLayout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ path: "/", element: <Website /> }],
    },
    {
      path: ":projectTitle",
      element: <ProjectLayout />,
      children: [{ path: "", element: <Project /> }],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
