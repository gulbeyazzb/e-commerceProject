import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

export const FilterComponent = () => {
  const [filter, setFilter] = useState();
  const changeOptionHandle = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
  };

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
            <select
              className="p-4 rounded-md border border-[#DADADA] text-black"
              onClick={(e) => changeOptionHandle(e)}
            >
              <option
                key="worstRated"
                value="worstRated"
                className=" text-lg font-bold"
              >
                Worst Rated
              </option>
              <option
                key="bestRated"
                value="bestRated"
                className=" text-lg font-bold"
              >
                Best Rated
              </option>
              <option
                key="priceAsc"
                value="priceAsc"
                className=" text-lg font-bold"
              >
                Increasing by Price
              </option>
              <option
                key="priceDesc"
                value="priceDesc"
                className=" text-lg font-bold"
              >
                decreasing by price
              </option>
            </select>
          </div>
          <button className="bg-primary-color py-[10px] px-5 rounded text-[#FFFFFF]">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};
