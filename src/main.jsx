import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./Header";
import "./index.css";
import Sign from "./Sign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },

  {
    path: "/sign",
    element: <Sign />,
  },

  {
    path: "/sign",
    element: <Sign />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
