import { DummyData } from "@/services/DummyData";
import { Link } from "react-router-dom";
import MoreDetails from "./MoreDetails";

function VehicleList() {
  const vehicle = DummyData();
  return (
    <>
      {vehicle.map((driver, index) => (
        <Link
          className={`flex gap-2 py-1 mb-1 rounded-md px-1 ${
            driver.status === "active" ? "bg-emerald-500" : "bg-destructive"
          }`}
          to={`${driver.plate}`}
          key={driver.plate}
        >
          <span>{index + 1}</span>
          <span className="flex flex-col space-y-1">
            <span className="font-medium test-base ">{driver.milage}</span>
            <span className="text-xs ">{driver.plate}</span>
          </span>
          <span className="text-xs text-left">{driver.status}</span>
          <div className="flex md:hidden">
            <MoreDetails />
          </div>
        </Link>
      ))}
    </>
  );
}

export default VehicleList;
