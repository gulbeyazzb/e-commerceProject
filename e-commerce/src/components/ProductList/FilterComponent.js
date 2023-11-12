import React, { useEffect, useState } from "react";
import useQueryParams from "../../hooks/useQueryParams";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductActionCreator } from "../../store/actions/productAction";

export const FilterComponent = () => {
  const [filterParams, setFilterParams] = useState({
    filter: "",
    sort: "",
  });

  const dispatch = useDispatch();
  const { category } = useParams();
  const { gender } = useParams();

  const genderFirstChar = gender.slice(0, 1);
  const categoryCode = genderFirstChar + ":" + category;
  // const cat = category?.slice(6, category.length);
  // const gender = category?.slice(0, 1);
  // console.log("cat:", cat, "gender", gender);
  // const categoryCode = gender + ":" + cat;

  const categories = useSelector((store) => store.global.categories);
  const categoryID = categories?.find((c) => c.code == categoryCode)?.id;
  const [queryParams, setQueryParams] = useQueryParams();

  const changeFilter = (e) => {
    setFilterParams({
      ...filterParams,
      filter: e.target.value,
    });
  };

  const changeSort = (e) => {
    setFilterParams({
      ...filterParams,
      sort: e.target.value,
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    setQueryParams(filterParams);
  };

  useEffect(() => {
    dispatch(
      fetchProductActionCreator({ ...queryParams, category: categoryID })
    );
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
              onChange={changeFilter}
            ></input>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <select
                className="p-4 rounded-md border border-[#DADADA] text-black"
                onClick={changeSort}
              >
                <option
                  key="recommended"
                  value="recommended"
                  className=" text-lg font-bold"
                >
                  Recommended
                </option>
                <option
                  key="rating:desc"
                  value="rating:desc"
                  className=" text-lg font-bold"
                >
                  Worst Rated
                </option>
                <option
                  key="rating:asc"
                  value="rating:asc"
                  className=" text-lg font-bold"
                >
                  Best Rated
                </option>
                <option
                  key="price:asc"
                  value="price:asc"
                  className=" text-lg font-bold"
                >
                  Increasing by Price
                </option>
                <option
                  key="price:desc"
                  value="price:desc"
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
