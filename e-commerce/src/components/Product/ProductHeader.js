import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductHeader() {
  return (
    <div className="bg-[#FAFAFA] ">
      <div className="flex justify-center sm:justify-start gap-[15px] sm:w-[1050px] m-auto text-[#737373] font-bold text-sm items-center py-6 ">
        <NavLink to="/" className=" text-[#252B42]" exact>
          Home
        </NavLink>
        <i className="bx bxs-chevron-right text-[#BDBDBD] text-2xl"></i>
        <NavLink to="/shopping" className="mr-1">
          Shop
        </NavLink>
      </div>
    </div>
  );
}
