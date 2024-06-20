import { TruckIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

//import user
import UserProfile from "../userProfile/UserProfile";

function SideBar() {
  return (
    <>
      <div className="h-screen  w-[250px] flex justify-between flex-col">
        <div className="flex flex-col space-y-1">
          <Link
            className="flex items-center px-3 py-2 text-sm rounded-md bg-neutral-300"
            to="vehicle"
          >
            <TruckIcon className="w-5 h-5 mr-2 text-gray-900" />
            Vehicle
          </Link>
          <Link
            className="flex items-center px-3 py-2 text-sm rounded-md "
            to="vehicle"
          >
            <TruckIcon className="w-5 h-5 mr-2 text-gray-900" />
            Dummy Holder_1
          </Link>
          <Link
            className="flex items-center px-3 py-2 text-sm rounded-md "
            to="vehicle"
          >
            <TruckIcon className="w-5 h-5 mr-2 text-gray-900" />
            Dummy Holder_2
          </Link>
        </div>
        <UserProfile />
      </div>
    </>
  );
}

export default SideBar;
