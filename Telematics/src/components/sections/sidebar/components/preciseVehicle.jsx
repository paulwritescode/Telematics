import { MapIcon, MapPinIcon, TruckIcon } from "@heroicons/react/24/outline";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { DatePicker, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDummyVehicle } from "../../../dummyInfo/DummyVehicles";
import filteredVhicleByPlate from "../../../dummyInfo/FilterCarInfo";
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

// Define StyledBadge
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

export default function PreciseVehicle() {
  const { plate } = useParams();
  const [vehicleData, setVehicleData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const allVehicles = getDummyVehicle();
      const filteredVehicle = filteredVhicleByPlate(plate, allVehicles);
      setVehicleData(filteredVehicle);
    };

    fetchData();
  }, [plate]);

  if (!vehicleData) {
    return <div>Loading vehicle data...</div>;
  }

  const formatMileage = (milage) => {
    return milage.toLocaleString("en-US", { maximumFractionDigits: 0 });
  };

  return (
    <>
      {vehicleData ? (
        <div className="flex flex-col h-screen p-4 space-y-3">
          <div className="flex space-x-3">
            <span className="flex flex-col justify-center px-5 py-4 space-y-3 text-xs rounded-lg shadow-md bg-white/5 w-max">
              <div className="flex items-center space-x-3">
                <div className="flex">
                  <Avatar
                    alt={vehicleData.driver}
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 32, height: 32 }}
                  />
                  {vehicleData.status === "active" ? (
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      variant="dot"
                    ></StyledBadge>
                  ) : (
                    <p className="flex p-1 rounded-full bg-amber-500 h-max w-max"></p>
                  )}
                </div>
                <span className="flex flex-col text-base capitalize">
                  <span className="font-bold">{vehicleData.driver}</span>
                  <span className="text-xs">0{vehicleData.Phone}</span>
                </span>
              </div>
            </span>
            <span className="flex flex-col justify-center px-5 py-4 space-y-3 text-xs rounded-lg shadow-md bg-white/5 w-max">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-neutral-200">
                  <TruckIcon className="self-start w-8 h-8 text-blue-600" />
                </div>
                <span className="flex flex-col text-base capitalize">
                  <span className="font-bold">{vehicleData.plate}</span>
                  <span className="text-xs">{vehicleData.brand}</span>
                </span>
              </div>
            </span>
            <span className="flex flex-col justify-center px-5 py-4 space-y-3 text-xs rounded-lg shadow-md bg-white/5 w-max">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-neutral-200">
                  <MapIcon className="self-start w-8 h-8 text-blue-600" />
                </div>
                <span className="flex flex-col text-base capitalize">
                  <span className="font-bold">
                    {formatMileage(vehicleData.milage)}KM
                  </span>
                  <span className="text-xs">Total Mileage</span>
                </span>
              </div>
            </span>
            <span className="flex flex-col justify-center px-5 py-4 space-y-3 text-xs rounded-lg shadow-md bg-white/5 w-max">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-neutral-200">
                  <MapPinIcon className="self-start w-8 h-8 text-blue-600" />
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

            <span className="flex flex-col justify-center px-5 py-4 space-y-3 text-xs rounded-lg shadow-md bg-white/5 w-max">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-neutral-200">
                  <MapIcon className="self-start w-8 h-8 text-blue-600" />
                </div>
                <span className="flex flex-col text-base capitalize">
                  <span className="font-bold">
                    {formatMileage(vehicleData.milage)}KM
                  </span>
                  <span className="text-xs">Mileage Covered Today</span>
                </span>
              </div>
            </span>
          </div>
          <div className="flex space-x-3 w-max">
            <span className="p-4 text-sm font-bold rounded-lg shadow-md bg-white/5">
              <div className="flex flex-col space-y-3">
                <span>Distance Traveled Between </span>

                <Space direction="horizontal">
                  <label htmlFor="" className="flex flex-col">
                    Start Date
                    <DatePicker onChange={onChange} picker="Start Date" />
                  </label>
                  <label htmlFor="" className="flex flex-col ">
                    End Date
                    <DatePicker onChange={onChange} picker="End Date" />
                  </label>
                </Space>
              </div>
            </span>
            <span className="p-4 text-sm font-bold rounded-lg shadow-md bg-white/5">
              <div className="flex flex-col space-y-3">
                <span>Graph</span>
                <span>import graph</span>
              </div>
            </span>
          </div>
          <div className="flex flex-col p-4 rounded-lg shadow-md bg-white/5 w-max">
            <span className="text-sm font-bold">
              Google map
              <div>
                <iframe
                  width="600"
                  height="450"
                  loading="lazy"
                  allowfullscreen
                  referrerpolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?key=
    &q=Space+Needle,Seattle+WA"
                ></iframe>
              </div>
            </span>
          </div>
        </div>
      ) : (
        <div>No vehicle found with plate: {plate}</div>
      )}
    </>
  );
}
