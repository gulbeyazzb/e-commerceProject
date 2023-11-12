import React, { useEffect, useState } from "react";
import useQueryParams from "../../hooks/useQueryParams";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductActionCreator } from "../../store/actions/productAction";
import Products from "./Products";
import { FETCH_STATES } from "../../store/reducers/productReducer";
import InfiniteScroll from "react-infinite-scroll-component";

export const FilterComponent = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.product.productList);

  const [filterParams, setFilterParams] = useState({
    filter: "",
    sort: "",
  });
  const [categoryID, setCategoryID] = useState();

  const [queryParams, setQueryParams] = useQueryParams();

  //category
  const { category, gender } = useParams();
  const categories = useSelector((store) => store.global.categories);

  const productFetching = useSelector(
    (store) => store.product.fetchState === FETCH_STATES.Fetching
  );
  const productFetched = useSelector(
    (store) => store.product.fetchState === FETCH_STATES.Fetched
  );

  //MOBILE PRODUCTS
  const mobileProducts = products?.slice(0, 4);

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
  console.log("queryParams:", queryParams);

  useEffect(() => {
    const categoryCode = gender?.slice(0, 1) + ":" + category;
    const categoryRec = categories?.find((c) => c.code == categoryCode);
    setCategoryID(categoryRec?.id);
  }, [gender, category, categories]);

  useEffect(() => {
    if ((category && categoryID) || !category) {
      dispatch(
        fetchProductActionCreator({ ...queryParams, category: categoryID })
      );
    }
  }, [queryParams, categoryID]);

  const productCount = products?.length;

  const fetchMoreData = () => {};

  const [hasMore, setHasMore] = useState(true);

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
              name="filter"
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
      <InfiniteScroll
        next={fetchMoreData}
        dataLength={products?.length}
        loader={<p className="text-center">loading...</p>}
        hasMore={hasMore}
      >
        <Products
          mobileProducts={mobileProducts}
          products={products}
          productFetched={productFetched}
          productFetching={productFetching}
        />
      </InfiniteScroll>
    </div>
  );
};
