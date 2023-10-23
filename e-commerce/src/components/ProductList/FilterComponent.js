import React from "react";
import { Select, Option } from "@material-tailwind/react";

export const FilterComponent = () => {
  return (
    <div className="py-6 ">
      <div className="mobile-col-flex justify-center items-center gap-6 sm:gap-[12rem] py-6 sm:py-0">
        <div className="font-bold text-second-text text-sm">
          <p>Showing all 12 results</p>
        </div>
        <div className="flex gap-[15px] justify-center items-center">
          <p className="font-bold text-second-text text-sm">Views:</p>
          <button className="border border-[#ECECEC] p-3">
            <i class="bx bxs-category  text-2xl "></i>
          </button>
          <button className="border border-[#ECECEC] p-3 ">
            <i class="bx bx-menu text-2xl "></i>
          </button>
        </div>
        <div className="flex items-center gap-10">
          <div>
            <Select label="Popularity" className="text-[#DDDDDD] bg-[#F9F9F9] ">
              <Option>Skirt</Option>
              <Option>Pants</Option>
              <Option>Jean</Option>
              <Option>Shoes</Option>
              <Option>Dress</Option>
            </Select>
          </div>
          <button className="bg-primary-color py-[10px] px-5 rounded text-[#FFFFFF]">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};
