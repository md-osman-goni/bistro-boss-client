import {createBrowserRouter,} from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Home/Register/Register";
import SignUp from "../Pages/SingUp/SignUp";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/menu",
            element: <Menu></Menu>,
        },
        {
            path: "/order/:category",
            element: <Order></Order>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/signUp",
            element: <SignUp></SignUp>
        },
        
      ]
    },
  ]);