import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Pages/Shared/NotFound/NotFound.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin.jsx";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile.jsx";
import ParkingRequest from "./Pages/Dashboard/ParkingRequest/ParkingRequest.jsx";
import RenterRequest from "./Pages/Dashboard/RenterRequest/RenterRequest.jsx";
import Users from "./Pages/Dashboard/Users/Users.jsx";
import AllAdmin from "./Pages/MakeAdmin/AllAdmin.jsx";
import MyDashboard from "./Pages/Dashboard/MyDashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <MyDashboard></MyDashboard>,
      },
      {
        path: "my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
      {
        path: "parking-request",
        element: <ParkingRequest></ParkingRequest>,
      },
      {
        path: "renter-request",
        element: <RenterRequest></RenterRequest>,
      },
      {
        path: "make-admin",
        element: <MakeAdmin></MakeAdmin>,
      },
      {
        path: "all-admin",
        element: <AllAdmin></AllAdmin>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
