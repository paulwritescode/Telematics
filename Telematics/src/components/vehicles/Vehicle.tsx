import { Outlet } from "react-router-dom";
import VehicleList from "./VehicleList";

function Vehicle() {
  return (
    <>
      <div className="p-4 md:flex">
        <div>
          <VehicleList />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Vehicle;
