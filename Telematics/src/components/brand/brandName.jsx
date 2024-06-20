import React from "react";
import { Link } from "react-router-dom";

function BrandName() {
  return (
    <>
      <Link to="/">
        <h1 className="text-2xl font-bold text-gray-800">Fleet Telematics</h1>
      </Link>
    </>
  );
}

export default BrandName;
