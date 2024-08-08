import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DummyData } from "@/services/DummyData";
import MoreDetails from "./MoreDetails";
function DriverTable() {
  const CarDrivers = DummyData();
  return (
    <>
      <Table>
        <TableCaption>List of drivers.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead className="w-[100px]">Driver</TableHead>
            <TableHead>Telephone </TableHead>

            <TableHead className="text-right">Status</TableHead>
            <TableHead>More</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {CarDrivers.map((driver, index) => (
            <TableRow key={driver.plate}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium">{driver.driver}</TableCell>
              <TableCell>+254 {driver.Phone}</TableCell>

              <TableCell className="text-left">{driver.status}</TableCell>
              <TableCell className="text-emerald-500">
                <MoreDetails
                  plate={driver.plate}
                  model={driver.brand}
                  name={driver.driver}
                  milage={driver.milage}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default DriverTable;
