import { Outlet } from "react-router-dom";
import VehicleList from "./VehicleList";

function Vehicle() {
  return (
    <>
      <div className="gap-2 p-4 md:flex">
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
