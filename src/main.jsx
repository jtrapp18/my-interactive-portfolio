import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from "./routes";

// const router = createBrowserRouter(routes, {
//   basename: "/my-interactive-portfolio", // Add this line
// });

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
