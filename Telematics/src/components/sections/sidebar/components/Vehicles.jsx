import { ListBulletIcon } from "@heroicons/react/24/outline";
import React from "react";

function Vehicles() {
  return (
    <>
      <div className="h-screen p-4 w-[200px] bg-slate-300 flex space-y-1 flex-col">
        <h1 className="flex items-center px-2 py-1 text-sm">
          <ListBulletIcon className="w-5 h-5 mr-1 text-gray-900" />
          Vehicle List
        </h1>
        <p>Here we are going to mp all the vehicles that we have</p>
      </div>
    </>
  );
}

export default Vehicles;
