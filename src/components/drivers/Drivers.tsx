import { CarFrontIcon } from "lucide-react";
import DriverTable from "./DriverTable";

function Drivers() {
  return (
    <>
      <div className="flex flex-col p-4 space-y-3">
        <h1 className="flex text-lg font-medium item-center">
          <CarFrontIcon className="w-6 h-6 mr-2" />
          Drivers List
        </h1>
        <DriverTable />
      </div>
    </>
  );
}

export default Drivers;
