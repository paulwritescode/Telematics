import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Badge from "@mui/material/Badge"; // Ensure Badge is imported
import { styled } from "@mui/material/styles"; // Import styled from @mui/material/styles
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getDummyVehicle } from "../../../dummyInfo/DummyVehicles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function Vehicles() {
  const vehicles = getDummyVehicle();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter vehicles based on search query
  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.plate.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to format mileage for better readability
  const formatMileage = (milage) => {
    return milage.toLocaleString("en-US", { maximumFractionDigits: 0 }); // Commas for larger numbers
  };

  return (
    <>
      <div className="flex w-full space-x-1 rounded-lg bg-white/60">
        <div className="h-screen p-4 w-[300px] rounded-md border flex flex-col space-y-1">
          <div className="flex items-center justify-between p-1 mb-2 rounded-3xl bg-neutral-200">
            <MagnifyingGlassIcon className="w-5 h-5 ml-1 text-blue-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search vehicle"
              className="flex-1 ml-2 rounded-md bg-neutral-200 focus:outline-none"
            />
          </div>
          {filteredVehicles.map((vehicle, index) => (
            <Link
              to={`precisevehicle/${vehicle.plate}`}
              key={vehicle.plate} // Unique key for each vehicle
              className="flex px-2 py-1 space-x-2 text-sm rounded-md hover:bg-slate-200 bg-neutral-200"
            >
              <span className="text-slate-500">{index + 1}</span>
              <div className="flex flex-col">
                <span className="flex space-x-2 text-xs text-slate-500">
                  <span className="font-bold">{vehicle.plate}</span>
                  <span className="lowercase">
                    {vehicle.status === "active" ? (
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                      ></StyledBadge>
                    ) : (
                      <p className="flex p-1 bg-red-500 rounded-full h-max w-max"></p>
                    )}
                  </span>
                </span>
                <span className="text-base font-bold text-slate-700">
                  {formatMileage(vehicle.milage)}KM
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Vehicles;
