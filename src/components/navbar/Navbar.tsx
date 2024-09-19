import Logo from "../logo/Logo";
import NavMobile from "../mobile/NavMobile";
import NavFloat from "../sidebar/NavFloat";
import UserDock from "../userdock/UserDock";

function Navbar() {
  return (
    <>
      <div className="sticky flex items-baseline justify-between w-full bg-red-500 top-10 z-[4000] backdrop-blur-sm bg-slate-950/40 p-4">
        <Logo />
        <NavFloat />

        <div>
          <UserDock hiddenclass="hidden md:flex " />
          <NavMobile hiddenclass="md:hidden" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
