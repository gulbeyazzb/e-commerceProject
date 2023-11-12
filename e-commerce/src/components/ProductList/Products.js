import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchProductActionCreator,
  setProductCount,
} from "../../store/actions/productAction";
import { FETCH_STATES } from "../../store/reducers/productReducer";
import { Spinner } from "@material-tailwind/react";
import useQueryParams from "../../hooks/useQueryParams";
import InfiniteScroll from "react-infinite-scroll-component";
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
  const { products } = useSelector((store) => store.product.productList);

  //productCARD URL
  const { pathname } = useLocation();
  const categoryPath = pathname.slice(10, pathname.length);

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

  //INFINITESCROLL
  const scrollParams = {
    limit: 24,
    offset: 24,
  };

  const [hasMore, setHasMore] = useState(true);

  const [scrollProducts, setScrollProducts] = useState(products);

  const [loadMore, setLoadMore] = useState(true);

  const totalProductCount = useSelector(
    (store) => store.product.totalProductCount
  );

  //SCROLL NEXT FUNCTION
  const fetchMoreData = () => {
    setLoadMore(true);
    dispatch(fetchProductActionCreator({ ...queryParams }));
    if (
      totalProductCount &&
      products?.products?.length + scrollParams.offset > totalProductCount
    ) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    if (loadMore) {
      setScrollProducts(scrollProducts.concat(products));
    } else {
      setScrollProducts(products);
    }
  }, [products]);

  //category
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

  //

  const productFetching = useSelector(
    (store) => store.product.fetchState === FETCH_STATES.Fetching
  );
  const productFetched = useSelector(
    (store) => store.product.fetchState === FETCH_STATES.Fetched
  );

  //MOBILE PRODUCTS
  const mobileProducts = scrollProducts?.slice(0, 4);

  const filter = queryParams.filter;
  const sort = queryParams.sort;

  console.log("filter:", filter, "sort:", sort);

  useEffect(() => {
    setLoadMore(false);
    dispatch(fetchProductActionCreator(filter, sort, categoryID));
    dispatch(setProductCount(products.length));
  }, [categoryID, filter, sort]);

  return (
    <div className=" w-full ">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-center items-center">
          {productFetching && <Spinner />}
        </div>
        <InfiniteScroll
          dataLength={products?.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={loadMore && "loading..."}
          endMessage={<p>You have seen it all</p>}
          className="infiniteScroll"
        >
          {productFetched && (
            <div className="hidden sm:flex flex-wrap gap-4 justify-center items-center">
              {products?.map((product) => (
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
