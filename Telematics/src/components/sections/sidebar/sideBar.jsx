import {
  ChartPieIcon,
  TruckIcon,
  UserGroupIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    setActiveLink(pathname.split("/")[1]); // Assuming your routes start with a slash
  }, [location]);

  return (
    <>
      <div className=" w-[250px] flex justify-between flex-col p-4">
        <div className="flex flex-col space-y-1">
          <Link
            to="dashboard" // Assuming "vehicle" is the correct route
            className={`flex items-center px-3 py-2 text-sm rounded-md hover:bg-neutral-300/30 ${
              activeLink === "dashboard" ? "bg-neutral-300/30 " : ""
            }`}
          >
            <ViewColumnsIcon className="w-5 h-5 mr-4 text-sky-400" />
            Dashboard
          </Link>
          <Link
            to="vehicle" // Assuming the route for Vehicles is "/vehicle/list"
            className={`flex items-center px-3 py-2 text-sm rounded-md hover:bg-neutral-300/30 ${
              activeLink === "vehicle" ? "bg-neutral-300/30 " : ""
            }`}
          >
            <TruckIcon className="w-5 h-5 mr-4 text-emerald-400" />
            Vehicle
          </Link>
          <Link
            to="drivers" // Assuming "drivers" is the correct route
            className={`flex items-center px-3 py-2 text-sm rounded-md hover:bg-neutral-300/30 ${
              activeLink === "drivers" ? "bg-neutral-300/30 " : ""
            }`}
          >
            <UserGroupIcon className="w-5 h-5 mr-4 text-purple-400" />
            Drivers
          </Link>
          <Link
            to="summaries" // Assuming "summaries" is the correct route
            className={`flex items-center px-3 py-2 text-sm rounded-md hover:bg-neutral-300/30 ${
              activeLink === "summaries" ? "bg-neutral-300/30 " : ""
            }`}
          >
            <ChartPieIcon className="w-5 h-5 mr-4 text-cyan-400" />
            Summaries
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideBar;
