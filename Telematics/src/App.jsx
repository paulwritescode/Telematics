import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// import pages
import HomePage from "./components/contents/HomePage";
import PreciseVehicle from "./components/sections/sidebar/components/preciseVehicle";
import Vehicles from "./components/sections/sidebar/components/Vehicles";
import Pages from "./layout/pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Pages />}>
      <Route path="/" element={<HomePage />}>
        <Route path="vehicle" element={<Vehicles />}>
          <Route path="precisevehicle/" element={<PreciseVehicle />} />
        </Route>
      </Route>
    </Route>
  )
);
