import React, { useEffect, useState } from "react"; // Import for useEffect
import { useParams } from "react-router-dom";

import {
  MapIcon,
  MapPinIcon,
  TruckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { getDummyVehicle } from "../../../dummyInfo/DummyVehicles";
import filteredVhicleByPlate from "../../../dummyInfo/FilterCarInfo";

export default function PreciseVehicle() {
  const { plate } = useParams();
  const [vehicleData, setVehicleData] = useState(null); // State for fetched data

  useEffect(() => {
    const fetchData = async () => {
      // Fetch all vehicles initially (optional)
      const allVehicles = getDummyVehicle();

      // Filter by plate
      const filteredVehicle = filteredVhicleByPlate(plate, allVehicles);

      setVehicleData(filteredVehicle);
    };

    fetchData();
  }, [plate]); // Re-fetch on plate change

  // Handle loading state (optional)
  if (!vehicleData) {
    return <div>Loading vehicle data...</div>;
  }

  const formatMileage = (milage) => {
    return milage.toLocaleString("en-US", { maximumFractionDigits: 0 }); // Commas for larger numbers
  };
  return (
    <>
      {vehicleData ? (
        <div className="flex flex-col h-screen p-4 space-y-3 ">
          <div className="flex space-x-3">
            <span class="flex flex-col justify-center px-5 py-4 space-y-3 text-xs bg-white border-b shadow-md rounded-lg w-max">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-neutral-200">
                  <UserIcon className="self-start w-8 h-8 text-blue-600 " />
                </div>
                <span className="flex flex-col text-base capitalize">
                  <span className="font-bold">{vehicleData.driver}</span>
                  <span className="text-xs">0{vehicleData.Phone}</span>
                </span>
              </div>
            </span>
            <span class="flex flex-col justify-center px-5 py-4 space-y-3 text-xs bg-white border-b rounded-lg w-max shadow-md ">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-neutral-200">
                  <TruckIcon className="self-start w-8 h-8 text-blue-600 " />
                </div>
                <span className="flex flex-col text-base capitalize">
                  <span className="font-bold">{vehicleData.plate}</span>
                  <span className="text-xs">{vehicleData.brand}</span>
                </span>
              </div>
            </span>
            <span class="flex flex-col justify-center px-5 py-4 space-y-3 text-xs bg-white border-b rounded-lg w-max shadow-md ">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-neutral-200">
                  <MapIcon className="self-start w-8 h-8 text-blue-600 " />
                </div>
                <span className="flex flex-col text-base capitalize">
                  <span className="font-bold">
                    {formatMileage(vehicleData.milage)}KM
                  </span>
                  <span className="text-xs">Total Mileage</span>
                </span>
              </div>
            </span>
            <span class="flex flex-col justify-center px-5 py-4 space-y-3 text-xs bg-white border-b rounded-lg w-max shadow-md ">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-neutral-200">
                  <MapPinIcon className="self-start w-8 h-8 text-blue-600 " />
                </div>
                <span className="flex flex-col text-base capitalize">
                  <span className="font-bold">
                    {vehicleData.destination_to}
                  </span>
                  <span className="text-xs lowercase">
                    {vehicleData.destination_from} to
                  </span>
                </span>
              </div>
            </span>
          </div>
          <div className="flex p-4 space-x-3 w-max ">
            <span className="p-4 text-sm font-bold bg-white rounded-lg shadow-md">
              Total Milage
            </span>
            <span className="p-4 text-sm font-bold bg-white rounded-lg shadow-md">
              Custom Mileage
            </span>
          </div>
          <div className="flex flex-col p-4 bg-white rounded-lg shadow-md w-max ">
            <span className="text-sm font-bold">graph</span>
          </div>
        </div>
      ) : (
        <div>No vehicle found with plate: {plate}</div>
      )}
    </>
  );
}
