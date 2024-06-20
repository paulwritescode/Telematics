import React, { useEffect, useState } from "react"; // Import for useEffect
import { useParams } from "react-router-dom";

import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
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

  // Display vehicle details or handle not found
  return (
    <>
      {vehicleData ? (
        <div className="flex flex-col h-screen p-4 space-y-1 bg-white border">
          <span className="flex pb-2 space-x-3 text-xs border-b">
            <span className="font-bold capitalize">{vehicleData.driver}</span>

            <span className="flex ">
              <DevicePhoneMobileIcon className="w-4 h-4 mr-1 text-blue-500" />0
              {vehicleData.Phone}{" "}
            </span>
          </span>
          <h1> {vehicleData.plate}</h1>
          <p>Mileage: {vehicleData.milage}</p>
          {/* Display other vehicle details here */}
        </div>
      ) : (
        <div>No vehicle found with plate: {plate}</div>
      )}
    </>
  );
}
