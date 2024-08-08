import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Bus, LayoutDashboard, PieChart, Users } from "lucide-react";
import { Link } from "react-router-dom";

function SideBar() {
  const navs = [
    { name: "Dashboard", icon: LayoutDashboard, linkto: "dashboard" },
    { name: "Vehicles", icon: Bus, linkto: "vehicles" },
    { name: "Drivers", icon: Users, linkto: "drivers" },
    { name: "Summeries", icon: PieChart, linkto: "summery" },
  ];
  return (
    <>
      <div className="flex">
        <div className="flex justify-center w-full gap-10 mb-4 md:hidden">
          {navs.map((nav, index) => (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    key={index}
                    className="flex items-center gap-5 my-2"
                    to={nav.linkto}
                  >
                    <nav.icon className="w-7 h-7" />
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ))}
        </div>
        <div className="flex-col hidden transition ease-in-out delay-300 duration-900 md:flex">
          {navs.map((nav, index) => (
            <Link
              to={nav.linkto}
              key={index}
              className="flex items-center gap-5 my-2"
            >
              <nav.icon />
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;
