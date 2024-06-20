import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getDummyVehicle } from "../../../dummyInfo/DummyVehicles";

function Vehicles() {
  const vehicles = getDummyVehicle();
  console.log("@manqiqode:#1:Vehicles_Data", vehicles);

  // Function to format mileage for better readability
  const formatMileage = (milage) => {
    return milage.toLocaleString("en-US", { maximumFractionDigits: 0 }); // Commas for larger numbers
  };

  return (
    <>
      <div className="flex w-full space-x-1 ">
        <div className="h-screen p-4 w-[300px] bg-white border flex flex-col space-y-1">
          {vehicles.map((vehicle, index) => (
            <Link
              to={`precisevehicle/${vehicle.plate}`}
              key={vehicle.plate} // Unique key for each vehicle
              className="flex px-2 py-1 space-x-2 text-sm rounded-md hover:bg-slate-200 bg-slate-100"
            >
              <span className="text-slate-500">{index + 1} </span>
              <div className="flex flex-col ">
                <span className="flex space-x-2 text-xs text-slate-500">
                  <span className="font-bold">{vehicle.plate}</span>{" "}
                  <span className="text-green-500">active</span>
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
