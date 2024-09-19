import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileSymlink } from "lucide-react";

function MoreDetails({ name, plate, model, milage }: any) {
  return (
    <>
      <Dialog>
        <DialogTrigger className="flex items-center gap-1">
          details
          <FileSymlink className="w-4 h-4" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="Uppercase "> {name}</DialogTitle>
            <DialogDescription className="flex flex-col items-start">
              <span>Plate: {plate}</span>
              <span>Model: {model}</span>
              <span>Milage: {milage}</span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default MoreDetails;
