import React from "react";
import { Link, Outlet } from "react-router-dom";

function Vehicles() {
  const vehicles = [
    // Use lowercase 'vehicles' for consistency
    {
      plate: "KBD45D",
      milage: 34500,
    },
    {
      plate: "KAA65R",
      milage: 3453430,
    },
    {
      plate: "KZZ90D",
      milage: 12000,
    },
    {
      plate: "KQR123D",
      milage: 10,
    },
    {
      plate: "ABC234D",
      milage: 1700,
    },
  ];

  // Function to format mileage for better readability
  const formatMileage = (milage) => {
    return milage.toLocaleString("en-US", { maximumFractionDigits: 0 }); // Commas for larger numbers
  };

  return (
    <>
      <div className="flex space-x-1">
        <div className="h-screen p-4 w-[300px] bg-white border flex flex-col space-y-1">
          {vehicles.map((vehicle, index) => (
            <Link
              to={"precisevehicle"}
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
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Vehicles;
