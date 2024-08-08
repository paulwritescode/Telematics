import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileSymlink } from "lucide-react";
import VehicleCard from "./VehicleCard";

function MoreDetails({ name, plate, model, milage }: any) {
  return (
    <>
      <Dialog>
        <DialogTrigger className="flex items-center gap-1">
          <FileSymlink className="w-4 h-4" />
          details
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="Uppercase "> {plate}</DialogTitle>
            <DialogDescription className="flex flex-col items-start">
              <div className="flex flex-wrap justify-center gap-4">
                <VehicleCard
                  cardTitle="Driver Details"
                  title={name}
                  description={model}
                  content={milage}
                />
                <VehicleCard
                  cardTitle="Car Details"
                  title={name}
                  description={model}
                  content={milage}
                />
                <VehicleCard
                  cardTitle="Data Graph"
                  title={name}
                  description={model}
                  content={milage}
                />
                <VehicleCard
                  cardTitle="Input Query"
                  title={name}
                  description={model}
                  content={milage}
                />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default MoreDetails;
