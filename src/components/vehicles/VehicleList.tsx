import { DummyData } from "@/services/DummyData";
import { Power, PowerOff } from "lucide-react";
import { Link } from "react-router-dom";
import MoreDetails from "./MoreDetails";

function VehicleList() {
  const vehicle = DummyData();
  return (
    <>
      {vehicle.map((driver, index) => (
        <Link
          className={`flex gap-2 py-1 mb-1 rounded-sm px-1 ${
            driver.status === "active" ? "bg-emerald-600/10" : "bg-slate-600/10"
          }`}
          to={`${driver.plate}`}
          key={driver.plate}
        >
          <div className="flex justify-between w-full pr-1">
            <span className="flex space-x-3">
              <span>{index + 1}</span>
              <span className="flex flex-col space-y-1">
                <span className="flex items-center font-medium test-base">
                  {driver.milage} KM
                  {driver.status === "active" ? (
                    <Power className="w-3 h-3 ml-1 text-blue-500" />
                  ) : (
                    <PowerOff className="w-3 h-3 ml-1 text-red-500" />
                  )}
                </span>
                <span className="text-xs ">{driver.plate}</span>
              </span>
            </span>
            <span className="flex flex-col pt-1 space-y-2">
              {/* <span className="flex items-center px-2 text-xs text-left justify-center bg-slate-400/20 rounded-xl py-[0.8px]">
                status:
                {driver.status === "active" ? (
                  <Power className="w-3 h-3 ml-1 text-blue-500" />
                ) : (
                  <PowerOff className="w-3 h-3 ml-1 text-red-500" />
                )}
              </span> */}
              <div className="flex md:hidden">
                <MoreDetails />
              </div>
            </span>
          </div>
        </Link>
      ))}
    </>
  );
}

export default VehicleList;
