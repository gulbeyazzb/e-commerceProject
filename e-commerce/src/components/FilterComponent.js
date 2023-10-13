import React from "react";
import { Select, Option } from "@material-tailwind/react";

export const FilterComponent = () => {
  return (
    <div className="p-8 px-24">
      <div className="container m-auto">
        <div className="flex justify-between items-center">
          <div className="font-bold text-[#737373] text-sm">
            <p>Showing all 12 results</p>
          </div>
          <div className=" flex gap-6 items-center">
            <p className="font-bold text-[#737373] text-sm">Views:</p>
            <button className="border border-[#ECECEC] p-3">
              <i class="bx bxs-category  text-2xl "></i>
            </button>
            <button className="border border-[#ECECEC] p-3 ">
              <i class="bx bx-menu text-2xl "></i>
            </button>
          </div>
          <div className="flex justify-between gap-10">
            <div className="w-28">
              <div>
                <Select
                  label="Popularity"
                  className="text-[#DDDDDD] bg-[#F9F9F9] "
                >
                  <Option>Skirt</Option>
                  <Option>Pants</Option>
                  <Option>Jean</Option>
                  <Option>Shoes</Option>
                  <Option>Dress</Option>
                </Select>
              </div>
            </div>
            <div>
              <button className="bg-[#23A6F0] text-[#FFFFFF]">Filter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
