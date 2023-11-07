import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchCurrentPageProducts,
  fetchProductActionCreator,
  setProductCount,
} from "../../store/actions/productAction";
import { FETCH_STATES } from "../../store/reducers/productReducer";
import { Spinner, useSelect } from "@material-tailwind/react";
import useQueryParams from "../../hooks/useQueryParams";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const Products = () => {
  const dispatch = useDispatch();
  const [queryParams, setQueryParams] = useQueryParams();

  const [productDetail, setProductDetail] = useState({
    productName: "",
    productId: "",
  });

  const clickProductHandle = (e) => {
    const childName = e.target.querySelector("h5");
    const childID = e.target.id;
    const name = childName.id;

    setProductDetail({
      ...productDetail,
      productId: childID,
      productName: name,
    });
    setQueryParams(productDetail);
  };

  const [hasMore, setHasMore] = useState(true);

  const [page, setPage] = useState(
    useSelector((store) => store.product.activePage)
  );

  useEffect(() => {
    dispatch(fetchProductActionCreator({ ...queryParams, page }));
    setQueryParams({ page: page });
  }, [page]);

  const pros = useSelector((store) => store.product.productList);

  const [products, setProducts] = useState(pros);

  const [pageCount, setPageCount] = useState(
    useSelector((store) => store.product.pageCount)
  );

  const fetchMoreData = () => {
    setProducts(pros);
    if (page < pageCount) {
      setPage(page + 1);
    } else {
      setHasMore(false);
    }
  };
  const totalProducts = useSelector((store) => store.product.totalProductCount);
  const filter = queryParams.filter;
  const searchItem = queryParams.search;

  const { category } = useParams();
  const cat = category?.slice(6, category.length);
  const gender = category?.slice(0, 1);
  const categoryCode = gender + ":" + cat;

  const categories = useSelector((store) => store.global.categories);
  const categoryID = categories?.find((c) => c.code == categoryCode)?.id;

  const categorilizedProducts = products?.products?.filter(
    (p) => p.category_id === categoryID
  );

  const productFetching = useSelector(
    (store) => store.product.fetchState === FETCH_STATES.Fetching
  );
  const productFetched = useSelector(
    (store) => store.product.fetchState === FETCH_STATES.Fetched
  );

  const mobileProducts = products?.products?.slice(0, 4);

  let searchProducts = products?.products?.filter((product) => {
    if (searchItem) {
      return product.description
        .toLowerCase()
        .includes(searchItem.toLowerCase());
    }
  });

  let filterProducts = products?.products?.sort((a, b) => {
    if (filter === "priceAsc") {
      return a.price - b.price;
    }
    if (filter === "priceDesc") {
      return b.price - a.price;
    }
    if (filter === "worstRated") {
      return a.rating - b.rating;
    }
    if (filter === "bestRated") {
      return b.rating - a.rating;
    }
  });

  let filterSearchProducts = searchProducts?.sort((a, b) => {
    if (filter === "priceAsc") {
      return a.price - b.price;
    }
    if (filter === "priceDesc") {
      return b.price - a.price;
    }
    if (filter === "worstRated") {
      return a.rating - b.rating;
    }
    if (filter === "bestRated") {
      return b.rating - a.rating;
    }
  });

  let searchCatProducts = categorilizedProducts?.filter((product) => {
    if (searchItem) {
      return product.description
        .toLowerCase()
        .includes(searchItem.toLowerCase());
    }
  });

  let filterCatProducts = categorilizedProducts?.sort((a, b) => {
    if (filter === "priceAsc") {
      return a.price - b.price;
    }
    if (filter === "priceDesc") {
      return b.price - a.price;
    }
    if (filter === "worstRated") {
      return a.rating - b.rating;
    }
    if (filter === "bestRated") {
      return b.rating - a.rating;
    }
  });

  let filterSearchCatProducts = searchCatProducts?.sort((a, b) => {
    if (filter === "priceAsc") {
      return a.price - b.price;
    }
    if (filter === "priceDesc") {
      return b.price - a.price;
    }
    if (filter === "worstRated") {
      return a.rating - b.rating;
    }
    if (filter === "bestRated") {
      return b.rating - a.rating;
    }
  });

  useEffect(() => {
    if (category && !filter && searchItem) {
      const searchCatProductsCount = searchCatProducts?.length;
      dispatch(setProductCount(searchCatProductsCount));
    }
    if (category && filter && searchItem) {
      const filterSearchCatProductsCount = filterSearchCatProducts?.length;
      dispatch(setProductCount(filterSearchCatProductsCount));
    }

    if (category && filter && !searchItem) {
      const filterCatProductsCount = filterCatProducts?.length;
      dispatch(setProductCount(filterCatProductsCount));
    }

    if (!category && filter && searchItem) {
      const filterSearchProductsCount = filterSearchProducts?.length;
      dispatch(setProductCount(filterSearchProductsCount));
    }
    if (!category && filter && !searchItem) {
      const filterProductsCount = filterProducts?.length;
      dispatch(setProductCount(filterProductsCount));
    }
    if (!category && !filter && !searchItem) {
      const productCount = products?.products?.length;
      dispatch(setProductCount(productCount));
    }
  }, [category, filter, searchItem]);

  const { pathname } = useLocation();
  const categoryPath = pathname.slice(10, pathname.length);

  return (
    <div className="py-12 w-full ">
      <div className="flex flex-col gap-12 sm:px-28 w-full">
        <div className="flex justify-center items-center">
          {productFetching && <Spinner />}
        </div>
        {/* <InfiniteScroll
          dataLength={totalProducts}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p>loading...</p>}
          endMessage={<p>There is not any product.</p>}
        > */}
        {productFetched && !category && (
          <div className="hidden sm:flex flex-wrap gap-[4rem] justify-center ">
            {!filter &&
              !searchItem &&
              products?.products?.map((product) => (
                <Link
                  to={`/product/${categoryPath}${product.name}${product.id}`}
                  className="flex flex-col text-center gap-[2rem] w-[15rem] h-[15rem] justify-center items-center"
                  onClick={clickProductHandle}
                  key={product.id}
                  id={product.id}
                >
                  {/* <img src={product.src} className="h-[15rem]"></img> */}
                  <h5
                    className="text-center font-bold text-base"
                    id={product.name}
                  >
                    {product.name}
                  </h5>
                  <a
                    href=""
                    className="font-bold text-sm text-second-text text-center"
                  >
                    {product.description}
                    <div className="pt-3">
                      <span className="text-[#BDBDBD] text-base ">
                        {product.price}₺
                      </span>
                    </div>{" "}
                  </a>
                  <div>
                    <button>
                      <i class="bx bxs-circle text-primary-color"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#23856D]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#E77C40]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#252B42]"></i>
                    </button>
                  </div>
                </Link>
              ))}
            {filter &&
              !searchItem &&
              filterProducts?.map((product) => (
                <Link
                  to={`/product/${product.name}/${product.id}`}
                  className="flex flex-col text-center gap-[2rem] w-[15rem] h-[15rem] justify-center items-center"
                  onClick={clickProductHandle}
                  key={product.id}
                  id={product.id}
                >
                  {/* <img src={product.src} className="h-[15rem]"></img> */}
                  <h5
                    className="text-center font-bold text-base"
                    id={product.name}
                  >
                    {product.name}
                  </h5>
                  <a
                    href=""
                    className="font-bold text-sm text-second-text text-center"
                  >
                    {product.description}
                    <div className="pt-3">
                      <span className="text-[#BDBDBD] text-base ">
                        {product.price}₺
                      </span>
                    </div>{" "}
                  </a>
                  <div>
                    <button>
                      <i class="bx bxs-circle text-primary-color"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#23856D]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#E77C40]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#252B42]"></i>
                    </button>
                  </div>
                </Link>
              ))}
            {searchItem &&
              !filter &&
              searchProducts?.map((product) => (
                <Link
                  onClick={clickProductHandle}
                  key={product.id}
                  id={product.id}
                  to={`/product/${product.name}/${product.id}`}
                  className="flex flex-col text-center gap-[2rem] w-[15rem] h-[15rem] justify-center items-center"
                >
                  {/* <img src={product.src} className="h-[15rem]"></img> */}
                  <h5
                    className="text-center font-bold text-base"
                    id={product.name}
                  >
                    {product.name}
                  </h5>
                  <a
                    href=""
                    className="font-bold text-sm text-second-text text-center"
                  >
                    {product.description}
                    <div className="pt-3">
                      <span className="text-[#BDBDBD] text-base ">
                        {product.price}₺
                      </span>
                    </div>{" "}
                  </a>
                  <div>
                    <button>
                      <i class="bx bxs-circle text-primary-color"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#23856D]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#E77C40]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#252B42]"></i>
                    </button>
                  </div>
                </Link>
              ))}
            {filter &&
              searchItem &&
              filterSearchProducts?.map((product) => (
                <Link
                  onClick={clickProductHandle}
                  key={product.id}
                  id={product.id}
                  to={`/product/${product.name}/${product.id}`}
                  className="flex flex-col text-center gap-[2rem] w-[15rem] h-[15rem] justify-center items-center"
                >
                  {/* <img src={product.src} className="h-[15rem]"></img> */}
                  <h5
                    id={product.name}
                    className="text-center font-bold text-base"
                  >
                    {product.name}
                  </h5>
                  <a
                    href=""
                    className="font-bold text-sm text-second-text text-center"
                  >
                    {product.description}
                    <div className="pt-3">
                      <span className="text-[#BDBDBD] text-base ">
                        {product.price}₺
                      </span>
                    </div>{" "}
                  </a>
                  <div>
                    <button>
                      <i class="bx bxs-circle text-primary-color"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#23856D]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#E77C40]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#252B42]"></i>
                    </button>
                  </div>
                </Link>
              ))}
          </div>
        )}
        {productFetched && category && (
          <div className="hidden sm:flex flex-wrap gap-[4rem] justify-center ">
            {!filter &&
              !searchItem &&
              categorilizedProducts.map((product) => (
                <Link
                  onClick={clickProductHandle}
                  key={product.id}
                  id={product.id}
                  to={`/product/${categoryPath}/${product.name}/${product.id}`}
                  className="flex flex-col text-center gap-[2rem] w-[15rem] h-[15rem] justify-center items-center"
                >
                  {/* <img src={product.src} className="h-[15rem]"></img> */}
                  <h5
                    id={product.name}
                    className="text-center font-bold text-base"
                  >
                    {product.name}
                  </h5>
                  <a
                    href=""
                    className="font-bold text-sm text-second-text text-center"
                  >
                    {product.description}
                    <div className="pt-3">
                      <span className="text-[#BDBDBD] text-base ">
                        {product.price}₺
                      </span>
                    </div>{" "}
                  </a>
                  <div>
                    <button>
                      <i class="bx bxs-circle text-primary-color"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#23856D]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#E77C40]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#252B42]"></i>
                    </button>
                  </div>
                </Link>
              ))}
            {filter &&
              !searchItem &&
              filterCatProducts?.map((product) => (
                <Link
                  onClick={clickProductHandle}
                  key={product.id}
                  id={product.id}
                  to={`/product/${categoryPath}/${product.name}/${product.id}`}
                  className="flex flex-col text-center gap-[2rem] w-[15rem] h-[15rem] justify-center items-center"
                >
                  {/* <img src={product.src} className="h-[15rem]"></img> */}
                  <h5
                    id={product.name}
                    className="text-center font-bold text-base"
                  >
                    {product.name}
                  </h5>
                  <a
                    href=""
                    className="font-bold text-sm text-second-text text-center"
                  >
                    {product.description}
                    <div className="pt-3">
                      <span className="text-[#BDBDBD] text-base ">
                        {product.price}₺
                      </span>
                    </div>{" "}
                  </a>
                  <div>
                    <button>
                      <i class="bx bxs-circle text-primary-color"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#23856D]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#E77C40]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#252B42]"></i>
                    </button>
                  </div>
                </Link>
              ))}
            {searchItem &&
              !filter &&
              searchCatProducts?.map((product) => (
                <Link
                  onClick={clickProductHandle}
                  key={product.id}
                  id={product.id}
                  to={`/product/${categoryPath}/${product.name}/${product.id}`}
                  className="flex flex-col text-center gap-[2rem] w-[15rem] h-[15rem] justify-center items-center"
                >
                  {/* <img src={product.src} className="h-[15rem]"></img> */}
                  <h5
                    id={product.name}
                    className="text-center font-bold text-base"
                  >
                    {product.name}
                  </h5>
                  <a
                    href=""
                    className="font-bold text-sm text-second-text text-center"
                  >
                    {product.description}
                    <div className="pt-3">
                      <span className="text-[#BDBDBD] text-base ">
                        {product.price}₺
                      </span>
                    </div>{" "}
                  </a>
                  <div>
                    <button>
                      <i class="bx bxs-circle text-primary-color"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#23856D]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#E77C40]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#252B42]"></i>
                    </button>
                  </div>
                </Link>
              ))}
            {filter &&
              searchItem &&
              filterSearchCatProducts?.map((product) => (
                <Link
                  onClick={clickProductHandle}
                  key={product.id}
                  id={product.id}
                  to={`/product/${categoryPath}/${product.name}/${product.id}`}
                  className="flex flex-col text-center gap-[2rem] w-[15rem] h-[15rem] justify-center items-center"
                >
                  {/* <img src={product.src} className="h-[15rem]"></img> */}
                  <h5
                    id={product.name}
                    className="text-center font-bold text-base"
                  >
                    {product.name}
                  </h5>
                  <a
                    href=""
                    className="font-bold text-sm text-second-text text-center"
                  >
                    {product.description}
                    <div className="pt-3">
                      <span className="text-[#BDBDBD] text-base ">
                        {product.price}₺
                      </span>
                    </div>{" "}
                  </a>
                  <div>
                    <button>
                      <i class="bx bxs-circle text-primary-color"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#23856D]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#E77C40]"></i>
                    </button>
                    <button>
                      <i class="bx bxs-circle text-[#252B42]"></i>
                    </button>
                  </div>
                </Link>
              ))}
          </div>
        )}
        {/* </InfiniteScroll> */}

        <div className="sm:hidden flex flex-col gap-[30px] w-full px-4">
          {mobileProducts?.map((product) => (
            <Link
              to={`/product${categoryPath}${product.name}/${product.id}`}
              className="flex flex-col text-center gap-[10px] "
            >
              <h5 className="text-center font-bold text-base">
                {product.name}
              </h5>
              <a
                href=""
                className="font-bold text-sm text-second-text text-center"
              >
                {product.description}
                <div className="pt-3">
                  <span className="text-[#BDBDBD] text-base ">
                    {product.price}
                  </span>
                </div>{" "}
              </a>
              <div>
                <button>
                  <i class="bx bxs-circle text-primary-color"></i>
                </button>
                <button>
                  <i class="bx bxs-circle text-[#23856D]"></i>
                </button>
                <button>
                  <i class="bx bxs-circle text-[#E77C40]"></i>
                </button>
                <button>
                  <i class="bx bxs-circle text-[#252B42]"></i>
                </button>
              </div>
            </Link>
          ))}
        </div>
        {/* <Pagination products={products} /> */}
      </div>
    </div>
  );
};
export default Products;
