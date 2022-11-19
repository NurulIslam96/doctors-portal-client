import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>
          },
          {
            path: "/dashboard/users",
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
          },
          {
            path: "/dashboard/adddoctor",
            element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
          },
          {
            path: "/dashboard/managedoctors",
            element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
          },
        ]
      }
    ],
  },
]);
