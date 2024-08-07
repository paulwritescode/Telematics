import DriverTable from "./DriverTable";

function Drivers() {
  return (
    <>
      <div className="flex flex-col p-4 space-y-3">
        <h1 className="text-lg font-medium">Drivers</h1>
        <DriverTable />
      </div>
    </>
  );
}

export default Drivers;
