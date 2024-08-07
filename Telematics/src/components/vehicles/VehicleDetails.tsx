import { useParams } from "react-router-dom";

function VehicleDetails() {
  const { plate } = useParams();
  return (
    <>
      <div className="mt-3 md:mt-0">
        these are vehivle details
        {plate}
      </div>
    </>
  );
}

export default VehicleDetails;
