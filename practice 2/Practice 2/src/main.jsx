import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact.jsx";
import Home from "./Components/Home.jsx";
import Aboutus from "./Components/Aboutus.jsx";
import Owner from "./Components/Owner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Aboutus",
    element: <Aboutus />,
    children: [
      {
        path: "Owner",
        element: <Owner />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
