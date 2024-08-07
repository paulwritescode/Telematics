import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "../app/globals.css";
import App from "./App.tsx";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import Drivers from "./components/drivers/Drivers.tsx";
import Summery from "./components/summery/Summery.tsx";
import Vehicle from "./components/vehicles/Vehicle.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="vehicles" element={<Vehicle />} />
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
