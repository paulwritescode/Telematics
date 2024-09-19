import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { DummyData } from "@/services/DummyData";
import MoreDetails from "./MoreDetails";

// Define types for the data (assuming you have specific fields in DummyData)
interface Driver {
  plate: string;
  driver: string;
  Phone: number;
  status: string;
  brand: string;
  milage: number;
}

function DriverTable() {
  const CarDrivers: Driver[] = DummyData(); // Type the DummyData return type
  const itemsPerPage = 10; // Number of records per page
  const [currentPage, setCurrentPage] = useState<number>(1); // State for current page
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query

  // Filter the drivers based on the search query
  const filteredDrivers = CarDrivers.filter((driver) =>
    driver.driver.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total number of pages based on filtered drivers
  const totalPages = Math.ceil(filteredDrivers.length / itemsPerPage);

  // Get the records to display on the current page
  const currentDrivers = filteredDrivers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle pagination
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {/* Search Functionality */}
      <div className="mb-12">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Enter Driver Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1 pl-4 pr-10 border-b rounded-full bg-slate-300/10 backdrop-blur-sm"
          />
        </div>
      </div>

      {/* Table Display */}
      <div className="mt-10">
        <Table>
          <TableCaption>List of drivers.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead className="w-[100px]">Driver</TableHead>
              <TableHead>Telephone</TableHead>
              <TableHead className="text-right">Status</TableHead>
              <TableHead>More</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentDrivers.map((driver, index) => (
              <TableRow key={driver.plate}>
                <TableCell>
                  {index + 1 + (currentPage - 1) * itemsPerPage}
                </TableCell>
                <TableCell className="font-medium">{driver.driver}</TableCell>
                <TableCell>+254 {driver.Phone}</TableCell>
                <TableCell
                  className={`text-left ${
                    driver.status === "active"
                      ? "text-blue-500"
                      : "text-red-500"
                  }`}
                >
                  {driver.status}
                </TableCell>

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
      </div>

      {/* Pagination Component */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>

          {/* Render pagination numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default DriverTable;
