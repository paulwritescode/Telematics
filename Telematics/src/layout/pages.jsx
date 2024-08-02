import React from "react";
import { Outlet } from "react-router-dom";

function Pages() {
  return (
    <>
      <div className="flex items-center justify-center w-full p-9 ">
        <Outlet />
      </div>
    </>
  );
}

export default Pages;
