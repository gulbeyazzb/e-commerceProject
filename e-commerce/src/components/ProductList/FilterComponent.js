import React, { useEffect, useState } from "react";
import useQueryParams from "../../hooks/useQueryParams";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductActionCreator } from "../../store/actions/productAction";

export const FilterComponent = () => {
  const [filterParams, setFilterParams] = useState({
    filter: "",
    search: "",
  });

  const dispatch = useDispatch();
  const { category } = useParams();
  const [queryParams, setQueryParams] = useQueryParams();

  const changeSearch = (e) => {
    setFilterParams({
      ...filterParams,
      search: e.target.value,
    });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    setQueryParams(filterParams);
  };

  const changeFilter = (e) => {
    setFilterParams({
      ...filterParams,
      filter: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(fetchProductActionCreator({ ...queryParams, category }));
  }, [queryParams, category]);

  const productCount = useSelector((store) => store.product.productCount);
  return (
    <div className="py-6 ">
      <div className="mobile-col-flex justify-center items-center gap-6 sm:gap-[12rem] py-6 sm:py-0">
        <div className="font-bold text-second-text text-sm">
          <p>Showing all {productCount} results</p>
        </div>
        <form
          onSubmit={submitHandle}
          className="mobile-col-flex justify-center items-center gap-6 sm:gap-[12rem] py-6 sm:py-0"
        >
          <div className="flex gap-[15px] justify-center items-center">
            <p className="font-bold text-second-text text-sm">search:</p>
            <input
              type="text"
              name="searchingItem"
              className="border border-[#DADADA] rounded-md bg-[#F5F5F5] text-black p-2 sm:w-72"
              placeholder="Search"
              onChange={changeSearch}
            ></input>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <select
                className="p-4 rounded-md border border-[#DADADA] text-black"
                onClick={changeFilter}
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
            <button
              type="submit"
              className="bg-orange-500 py-[15px] px-5 rounded text-[#FFFFFF]"
            >
              Filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
