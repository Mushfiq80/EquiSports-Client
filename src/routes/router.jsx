import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AllEquipment from "../pages/AllEquipment";
import AddEquipment from "../pages/AddEquipment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-equipment",
        element: <AllEquipment />,
      },
      {
        path: "/add-equipment",
        element: <AddEquipment />,
      },
      {
        path: "/add-equipment",
        element: <AddEquipment />,
      },
      {
        path: "/add-equipment",
        element: <AddEquipment />,
      },
      {
        path: "/add-equipment",
        element: <AddEquipment />,
      },
    ],
  },
]);

export default router;
