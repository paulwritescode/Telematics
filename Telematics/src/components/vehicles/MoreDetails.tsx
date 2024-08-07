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
          <FileSymlink className="w-4 h-4" />
          details
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="Uppercase "> {plate}</DialogTitle>
            <DialogDescription className="flex flex-col items-start">
              <span>Driver: {name}</span>
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
