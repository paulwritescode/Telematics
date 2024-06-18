import React from "react";
import { Outlet } from "react-router-dom";

// sections
import BrandName from "../brand/brandName";
import SideBar from "../sections/sidebar/sideBar";
import UserProfile from "../sections/userProfile/UserProfile";

function HomePage() {
  return (
    <>
      <div className="flex flex-col space-y-2">
        <div>
          <BrandName />
        </div>
        <div className="flex space-x-1">
          <div className="flex flex-col items-start justify-between h-screen ">
            <SideBar />
          </div>
          <div>
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
