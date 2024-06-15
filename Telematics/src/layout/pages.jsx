import React from "react";
import { Outlet } from "react-router-dom";

function Pages() {
  return (
    <>
      <div className="p-2">
        <Outlet />
      </div>
    </>
  );
}

export default Pages;
