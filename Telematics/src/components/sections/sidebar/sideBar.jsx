import {
  ChartPieIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserProfile from "../userProfile/UserProfile";

function SideBar() {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    setActiveLink(pathname.split("/")[1]); // Assuming your routes start with a slash
  }, [location]);

  return (
    <>
      <div className="h-screen  w-[250px] flex justify-between flex-col p-4">
        <div className="flex flex-col space-y-1">
          <Link
            to="dashboard" // Assuming "vehicle" is the correct route
            className={`flex items-center px-3 py-2 text-sm rounded-md ${
              activeLink === "dashboard" ? "bg-neutral-300" : ""
            }`}
          >
            <TruckIcon className="w-5 h-5 mr-2 text-gray-900" />
            Dashboard
          </Link>
          <Link
            to="vehicle" // Assuming the route for Vehicles is "/vehicle/list"
            className={`flex items-center px-3 py-2 text-sm rounded-md ${
              activeLink === "vehicle" ? "bg-neutral-300" : ""
            }`}
          >
            <TruckIcon className="w-5 h-5 mr-2 text-gray-900" />
            Vehicle
          </Link>
          <Link
            to="drivers" // Assuming "drivers" is the correct route
            className={`flex items-center px-3 py-2 text-sm rounded-md ${
              activeLink === "drivers" ? "bg-neutral-300" : ""
            }`}
          >
            <UserGroupIcon className="w-5 h-5 mr-2 text-gray-900" />
            Drivers
          </Link>
          <Link
            to="summaries" // Assuming "summaries" is the correct route
            className={`flex items-center px-3 py-2 text-sm rounded-md ${
              activeLink === "summaries" ? "bg-neutral-300" : ""
            }`}
          >
            <ChartPieIcon className="w-5 h-5 mr-2 text-gray-900" />
            Summaries
          </Link>
        </div>
        <UserProfile />
      </div>
    </>
  );
}

export default SideBar;
