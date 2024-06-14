import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// import pages
import HomePage from "./components/contents/HomePage";
import Pages from "./layout/pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Pages />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);
