import Logo from "../logo/Logo";
import { ModeToggle } from "../mode-toggle";

function Navbar() {
  return (
    <>
      <div className="flex gap-3">
        <Logo />
        <ModeToggle />
      </div>
    </>
  );
}

export default Navbar;
