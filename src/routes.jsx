// routes.js
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import RelevantWork from "./pages/RelevantWork";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "relevant-work",
        element: <RelevantWork />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:id",
        element: <ProjectPage />,
      },
    ],
  },
];

export default routes;
