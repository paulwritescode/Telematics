import { Bus, LayoutDashboard, PieChart, Users } from "lucide-react";
import { FloatingNav } from "../ui/floating-navbar";

function NavFloat() {
  const nav = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: (
        <LayoutDashboard className="w-4 h-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Vehicles",
      link: "/vehicles",
      icon: <Bus className="w-4 h-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Drivers",
      link: "/drivers",
      icon: <Users className="w-4 h-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Summery",
      link: "/summery",
      icon: <PieChart className="w-4 h-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <>
      <FloatingNav className="bg-red-400" navItems={nav} />
    </>
  );
}

export default NavFloat;
