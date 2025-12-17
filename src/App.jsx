import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Estudio from "./pages/Estudio";
import Contact from "./pages/Contact";

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
        {
          path: "estudio",
          element: <Estudio />,
        },
        {
          path: "contact",
          element: <Contact />,
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
