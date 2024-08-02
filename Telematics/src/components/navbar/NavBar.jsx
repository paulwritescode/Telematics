import { UserCircleIcon } from "@heroicons/react/24/solid";
import BrandName from "../brand/brandName";
import BadgeAvatars from "../sections/userProfile/UserProfile";
import ThemeChanger from "../themechange/ThemeChanger";

function NavBar() {
  return (
    <>
      <div className="flex items-center justify-between">
        <BrandName />
        <div className="flex items-center justify-center space-x-2">
          <ThemeChanger />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
              <UserCircleIcon className="w-6 h-6" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white/5 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <BadgeAvatars />
              </li>
              <li>
                <BadgeAvatars />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
