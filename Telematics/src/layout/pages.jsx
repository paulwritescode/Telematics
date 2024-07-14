import React from "react";
import { Outlet } from "react-router-dom";

function Pages() {
  return (
    <>
      <div className="flex items-center justify-center w-full p-9 bg-neutral-200">
        <Outlet />
      </div>
    </>
  );
}

export default Pages;
