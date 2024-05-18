import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path: "/",
        element: <Home></Home>,
        },
        {
            path: "/menu",
        element: <Menu></Menu>,
        },
        {
            path: "/order",
        element: <Order></Order>,
        },
      ]
    },
  ]);