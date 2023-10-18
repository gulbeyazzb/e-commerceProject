import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductHeader() {
  return (
    <div className="bg-[#FAFAFA] ">
      <div className="flex w-[1050px] m-auto text-[#737373] font-bold text-sm items-center py-6 h-14">
        <NavLink to="/" className=" text-[#252B42]" exact>
          Home
        </NavLink>
        <i class="bx bxs-chevron-right text-[#BDBDBD] text-2xl"></i>
        <NavLink to="/product-list" className="mr-1">
          Shop
        </NavLink>
      </div>
    </div>
  );
}
