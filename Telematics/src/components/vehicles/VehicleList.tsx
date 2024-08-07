import { DummyData } from "@/services/DummyData";
import { Link } from "react-router-dom";
function VehicleList() {
  const vehicle = DummyData();
  return (
    <>
      {vehicle.map((driver, index) => (
        <Link className="flex gap-2" to={`${driver.plate}`} key={driver.plate}>
          <span>{index + 1}</span>
          <span className="font-medium">{driver.plate}</span>
          <span className="text-left">{driver.status}</span>
        </Link>
      ))}
    </>
  );
}

export default VehicleList;
