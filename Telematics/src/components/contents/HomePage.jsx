import React from "react";

// sections
import BrandName from "../brand/brandName";
import SideBar from "../sections/sidebar/sideBar";
import UserProfile from "../sections/userProfile/UserProfile";

function HomePage() {
  return (
    <>
      <div className="flex flex-col items-start justify-between h-screen ">
        <BrandName />
        <SideBar />
        <UserProfile />
      </div>
    </>
  );
}

export default HomePage;

// imort the logo here (brandname) Done
// import the user profile here Done
// import the sidebar here
// import the navbar here
// create all these above items
