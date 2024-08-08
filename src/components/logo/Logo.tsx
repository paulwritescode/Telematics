import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link to={"/"} className="text-2xl font-bold">
        Fleet
      </Link>
    </>
  );
}

export default Logo;
