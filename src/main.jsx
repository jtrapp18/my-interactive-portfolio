import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from "./routes";

// const router = createBrowserRouter(routes);

const isProduction = process.env.NODE_ENV === 'production';
const baseName = isProduction ? '/my-interactive-portfolio' : '/';

const router = createBrowserRouter(routes, {
  basename: baseName,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
