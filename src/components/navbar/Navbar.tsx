import Logo from "../logo/Logo";
import NavMobile from "../mobile/NavMobile";
import UserDock from "../userdock/UserDock";

function Navbar() {
  return (
    <>
      <div className="flex items-baseline justify-between w-full ">
        <Logo />

        <div>
          <UserDock hiddenclass="hidden md:flex " />
          <NavMobile hiddenclass="md:hidden" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
