import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            }
        ]
    }
]);
