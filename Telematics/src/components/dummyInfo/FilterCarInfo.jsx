import { getDummyVehicle } from "./DummyVehicles";

const filteredVhicleByPlate = (plate) => {
  const vehicles = getDummyVehicle();

  // we can find the car not only filter
  const filteredVehicle = vehicles.find((vehicle) => vehicle.plate === plate);

  //   handle not finding the vehicle
  if (filteredVehicle) {
    return filteredVehicle;
  } else {
    console.warn(`@manqiqode:#2:No vehicle found with plate: ${plate}`);
    return null; // retun undefined or empty
  }
};

export default filteredVhicleByPlate;
