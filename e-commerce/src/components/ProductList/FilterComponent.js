import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import {
  setFilterAction,
  setSearchAction,
} from "../../store/actions/productAction";

export const FilterComponent = () => {
  const dispatch = useDispatch();

  const changeOptionHandle = (e) => {
    const selectedFilter = e.target.value;
    dispatch(setFilterAction(selectedFilter));
  };
  const searchHandle = (e) => {
    dispatch(setSearchAction(e.target.value));
  };
  return (
    <div className="py-6 ">
      <div className="mobile-col-flex justify-center items-center gap-6 sm:gap-[12rem] py-6 sm:py-0">
        <div className="font-bold text-second-text text-sm">
          <p>Showing all 12 results</p>
        </div>
        <div className="flex gap-[15px] justify-center items-center">
          <p className="font-bold text-second-text text-sm">search:</p>
          <input
            type="text"
            name="searchingItem"
            className="border border-[#DADADA] rounded-md bg-[#F5F5F5] text-black p-2 sm:w-72"
            placeholder="Search"
            onChange={searchHandle}
          ></input>
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
          {/* <button className="bg-primary-color py-[10px] px-5 rounded text-[#FFFFFF]">
            Filter
          </button> */}
        </div>
      </div>
    </div>
  );
};
