import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom'; // Import HashRouter
import routes from './routes'; // Import your routes configuration

// Create the hash-based router
const router = createHashRouter(routes);

// Create the root and render the app with the router
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);