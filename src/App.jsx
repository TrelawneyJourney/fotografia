import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
      ],
    },
  ],
  { basename: "/fotografia" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
