import React from "react";
import { Outlet } from "react-router-dom";

// sections
import BrandName from "../brand/brandName";
import SideBar from "../sections/sidebar/sideBar";

function HomePage() {
  return (
    <>
      <div className="flex flex-col w-full space-y-2 ">
        <div>
          <BrandName />
        </div>
        <div className="flex w-full space-x-1 ">
          <div className="flex flex-col items-start justify-between h-screen ">
            <SideBar />
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

// imort the logo here (brandname) // Done
// import the user profile here // Done
// import the sidebar here // Done
// import the navbar here  // to work on

// create all these above item
