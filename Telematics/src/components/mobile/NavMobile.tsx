import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AlignJustify } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import UserDock from "../userdock/UserDock";

function NavMobile({ hiddenclass }: { hiddenclass: string }) {
  return (
    <>
      <div className={`${hiddenclass}`}>
        <Drawer>
          <DrawerTrigger>
            <AlignJustify />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <section className="">
                <ModeToggle />
              </section>
              <section>
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
              </section>
            </DrawerHeader>
            <DrawerFooter>
              <UserDock hiddenclass="" />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

export default NavMobile;
