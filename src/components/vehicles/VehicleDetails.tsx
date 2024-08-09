import { DummyData } from "@/services/DummyData";
import { useParams } from "react-router-dom";
import VehicleCard from "./VehicleCard";

function VehicleDetails() {
  const { plate } = useParams();
  const vehicle = DummyData();
  const vehicleDetails = vehicle.find((driver) => driver.plate === plate);

  return (
    <>
      <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
        <VehicleCard
          cardTitle="Driver Details"
          title={vehicleDetails?.driver}
          description={vehicleDetails?.Phone}
          content={vehicleDetails?.milage}
          footer={vehicleDetails?.status}
        />

        <VehicleCard
          cardTitle="Vehicle Details"
          title={vehicleDetails?.plate}
          description={vehicleDetails?.plate}
          content={vehicleDetails?.milage}
          footer={vehicleDetails?.status}
        />
        <VehicleCard
          cardTitle="Destination Details"
          title={vehicleDetails?.destination_to}
          description={vehicleDetails?.plate}
          content={vehicleDetails?.destination_from}
          footer={vehicleDetails?.status}
        />
        <VehicleCard
          cardTitle="Driver Details"
          title={vehicleDetails?.driver}
          description={vehicleDetails?.plate}
          content={vehicleDetails?.milage}
          footer={vehicleDetails?.status}
        />
      </div>
    </>
  );
}

export default VehicleDetails;
