import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";

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
      ]
    },
  ]);