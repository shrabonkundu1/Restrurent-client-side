import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import { Children } from "react";
import Home from "../pages/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path:"/",
            element: <Home></Home>
        }
    ]
  },
]);