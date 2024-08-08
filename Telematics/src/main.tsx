// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "../app/globals.css";
import App from "./App";
import Dashboard from "./components/dashboard/Dashboard";
import Drivers from "./components/drivers/Drivers";
import Summery from "./components/summery/Summery";
import Vehicle from "./components/vehicles/Vehicle";
import VehicleDetails from "./components/vehicles/VehicleDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="vehicles" element={<Vehicle />}>
        <Route path=":plate" element={<VehicleDetails />} />
      </Route>
      <Route path="drivers" element={<Drivers />} />
      <Route path="summery" element={<Summery />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
