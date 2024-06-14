import React from "react";

// sections
import UserProfile from "../sections/userProfile/UserProfile";

function HomePage() {
  return (
    <>
      <div className="flex flex-col items-start justify-between h-screen">
        <h1>HomePage</h1>

        <div className="flex flex-col items-start bg-red-500">
          <UserProfile />
        </div>
      </div>
    </>
  );
}

export default HomePage;

// imort the logo here
// import the user profile here
// import the sidebar here
// import the navbar here

// create all these above items
