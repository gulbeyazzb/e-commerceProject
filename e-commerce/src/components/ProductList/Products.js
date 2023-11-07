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
import BarLoading from "../atoms/BarLoading";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

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

  const scrollParams = {
    limit: 24,
    offset: 24,
  };

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

  const products = useSelector((store) => store.product.productList);

  const [data, setData] = useState([]);
  const [scrollProducts, setScrollProducts] = useState(products.products);

  const [loadMore, setLoadMore] = useState(true);

  const totalProducts = useSelector((store) => store.product.totalProductCount);

  const fetchMoreData = () => {
    setLoadMore(true);
    dispatch(fetchProductActionCreator({ ...queryParams, ...scrollParams }));
    if (
      totalProducts &&
      products?.products?.length + scrollParams.offset > totalProducts
    ) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    if (loadMore) {
      setScrollProducts(scrollProducts.concat(products.products));
    } else {
      setScrollProducts(products.products);
    }
  }, [products.products]);

  const filter = queryParams.filter;
  const searchItem = queryParams.search;

  const { category } = useParams();
  const cat = category?.slice(6, category.length);
  const gender = category?.slice(0, 1);
  const categoryCode = gender + ":" + cat;

  const categories = useSelector((store) => store.global.categories);
  const categoryID = categories?.find((c) => c.code == categoryCode)?.id;

  const categorilizedProducts = scrollProducts?.filter(
    (p) => p.category_id === categoryID
  );

  const productFetching = useSelector(
    (store) => store.product.fetchState === FETCH_STATES.Fetching
  );
  const productFetched = useSelector(
    (store) => store.product.fetchState === FETCH_STATES.Fetched
  );

  const mobileProducts = scrollProducts?.slice(0, 4);

  let searchProducts = scrollProducts?.filter((product) => {
    if (searchItem) {
      return product.description
        .toLowerCase()
        .includes(searchItem.toLowerCase());
    }
  });

  let filterProducts = scrollProducts?.sort((a, b) => {
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
      setData(searchCatProducts);
      const searchCatProductsCount = searchCatProducts?.length;
      dispatch(setProductCount(searchCatProductsCount));
    }
    if (category && filter && searchItem) {
      setData(filterSearchCatProducts);

      const filterSearchCatProductsCount = filterSearchCatProducts?.length;
      dispatch(setProductCount(filterSearchCatProductsCount));
    }

    if (category && filter && !searchItem) {
      setData(filterCatProducts);

      const filterCatProductsCount = filterCatProducts?.length;
      dispatch(setProductCount(filterCatProductsCount));
    }

    if (!category && filter && searchItem) {
      setData(filterSearchProducts);

      const filterSearchProductsCount = filterSearchProducts?.length;
      dispatch(setProductCount(filterSearchProductsCount));
    }
    if (!category && filter && !searchItem) {
      setData(filterProducts);

      const filterProductsCount = filterProducts?.length;
      dispatch(setProductCount(filterProductsCount));
    }
    if (!category && !filter && !searchItem) {
      setData(scrollProducts);

      const productCount = scrollProducts?.length;
      dispatch(setProductCount(productCount));
    }
    if (!category && !filter && searchItem) {
      setData(searchProducts);

      const productCount = scrollProducts?.length;
      dispatch(setProductCount(productCount));
    }
  }, [category, filter, searchItem]);

  const { pathname } = useLocation();
  const categoryPath = pathname.slice(10, pathname.length);

  return (
    <div className=" w-full ">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-center items-center">
          {productFetching && <BarLoading />}
        </div>
        <InfiniteScroll
          dataLength={data?.length}
          next={fetchMoreData}
          hasMore={hasMore}
          // loader={<p className="text-center">loading...</p>}
          endMessage={<p>You have seen it all</p>}
          className="infiniteScroll"
        >
          {productFetched && (
            <div className="hidden sm:flex flex-wrap gap-4 justify-center items-center">
              {data?.map((product) => (
                <Link
                  to={`/product/${categoryPath}${product.name}${product.id}`}
                  className="flex flex-col text-center gap-[2rem] mb-10 justify-center items-center "
                  onClick={clickProductHandle}
                  key={product.id}
                  id={product.id}
                >
                  <Card
                    className="flex flex-col w-80 h-[35rem]  "
                    key={product.id}
                  >
                    <div className="rounded-md justify-center items-center w-80 h-[320px] line-clamp-1">
                      <img
                        src={product.images[0].url}
                        alt="card-image"
                        className="rounded-xl h-full w-full object-contain items-center line-clamp-1 hover:brightness-75"
                      />
                    </div>
                    <CardBody className="line-clamp-2">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2 line-clamp-4 font-normal text-base"
                        id={product.name}
                      >
                        {product.name}
                      </Typography>
                      {/* <Typography className="text-start line-clamp-1">
                        {product.description}
                      </Typography> */}
                      <Typography className="flex flex-col  font-bold text-orange-800 line-clamp-1">
                        {" "}
                        {product.price}₺
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
                      </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-between gap-2 line-clamp-1">
                      <div>
                        {" "}
                        <select className="w-32 p-4 rounded-md border border-[#DADADA] text-black">
                          <option
                            key="worstRated"
                            value="worstRated"
                            className=" text-lg font-bold"
                          >
                            M
                          </option>
                          <option
                            key="bestRated"
                            value="bestRated"
                            className=" text-lg font-bold"
                          >
                            S
                          </option>
                          <option
                            key="priceAsc"
                            value="priceAsc"
                            className=" text-lg font-bold"
                          >
                            L
                          </option>
                          <option
                            key="priceDesc"
                            value="priceDesc"
                            className=" text-lg font-bold"
                          >
                            XL
                          </option>
                        </select>
                      </div>
                      <Button className=" bg-gray-800">Sepete Ekle</Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </InfiniteScroll>

        <div className="sm:hidden flex flex-col gap-[30px] w-full px-4">
          {mobileProducts?.map((product) => (
            <Link
              to={`/product/${categoryPath}${product.name}${product.id}`}
              className="flex flex-col text-center gap-[2rem] mb-10 justify-center items-center"
              onClick={clickProductHandle}
              key={product.id}
              id={product.id}
            >
              <Card className="flex flex-col w-96 h-[50rem] gap-1 justify-center items-center">
                <CardHeader className=" justify-center items-center">
                  <img
                    src={product.images[0].url}
                    alt="card-image"
                    className="h-[25rem] w-[full] object-contain items-center"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2"
                    id={product.name}
                  >
                    {product.name}
                  </Typography>
                  <Typography className="text-start">
                    {product.description}
                  </Typography>
                  <Typography className="flex justify-between mt-10 text-end font-bold text-orange-800">
                    {" "}
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
                    {product.price}₺
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-between gap-2">
                  <div>
                    {" "}
                    <select className="p-4 w-32 rounded-md border border-[#DADADA] text-black">
                      <option
                        key="worstRated"
                        value="worstRated"
                        className=" text-lg font-bold"
                      >
                        M
                      </option>
                      <option
                        key="bestRated"
                        value="bestRated"
                        className=" text-lg font-bold"
                      >
                        S
                      </option>
                      <option
                        key="priceAsc"
                        value="priceAsc"
                        className=" text-lg font-bold"
                      >
                        L
                      </option>
                      <option
                        key="priceDesc"
                        value="priceDesc"
                        className=" text-lg font-bold"
                      >
                        XL
                      </option>
                    </select>
                  </div>
                  <Button className="w-52 bg-orange-500">Sepete Ekle</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        {/* <Pagination products={products} /> */}
      </div>
    </div>
  );
};
export default Products;
