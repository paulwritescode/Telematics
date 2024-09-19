import { Bus, LayoutDashboard, PieChart, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();
  const navs = [
    { name: "Dashboard", icon: LayoutDashboard, linkto: "dashboard" },
    { name: "Vehicles", icon: Bus, linkto: "vehicles" },
    { name: "Drivers", icon: Users, linkto: "drivers" },
    { name: "Summaries", icon: PieChart, linkto: "summery" },
  ];

  return (
    <>
      <div className="sticky flex px-4 top-28 h-max">
        {/* <NavFloat /> */}
        <div className="flex-col hidden transition ease-in-out delay-300 duration-900 md:flex ">
          {navs.map((nav, index) => {
            // Check if the current link is active
            const isActive = location.pathname.includes(nav.linkto);

            return (
              <Link
                to={nav.linkto}
                key={index}
                className={`flex items-center gap-5 my-2 group  ${
                  isActive
                    ? "text-purple-400" // Active link styles
                    : "" // Hover effect on non-active links
                }`}
              >
                <nav.icon
                  className={`w-5 h-5 ${
                    isActive
                      ? "text-purple-400"
                      : "group-hover:text-emerald-300"
                  }`}
                />
                {nav.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SideBar;
