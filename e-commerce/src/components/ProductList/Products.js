import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductActionCreator } from "../../store/actions/productAction";
import { FETCH_STATES } from "../../store/reducers/productReducer";
import { Spinner } from "@material-tailwind/react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Products = () => {
  const dispatch = useDispatch();
  const { location } = useLocation();
  console.log("location:", location);

  useEffect(() => {
    dispatch(fetchProductActionCreator());
  }, []);

  const products = useSelector((store) => store.product.productList);
  const filter = useSelector((store) => store.product.filter);
  const searchItem = useSelector((store) => store.product.searchItem);
  const productFetching = useSelector(
    (store) => store.product.fetchState === FETCH_STATES.Fetching
  );
  const productFetched = useSelector(
    (store) => store.product.fetchState === FETCH_STATES.Fetched
  );
  const mobileProducts = products.products?.slice(0, 4);

  let searchProducts = products.products.filter((product) => {
    if (searchItem) {
      return product.description
        .toLowerCase()
        .includes(searchItem.toLowerCase());
    }
  });

  let filterProducts = products.products.sort((a, b) => {
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

  let filterSearchProducts = searchProducts.sort((a, b) => {
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

  return (
    <div className="py-12 w-full ">
      <div className="flex flex-col gap-12 sm:px-28 w-full">
        {productFetching && <Spinner />}
        {productFetched && (
          <div className="hidden sm:flex flex-wrap gap-[4rem] justify-center ">
            {!filter &&
              !searchItem &&
              products.products?.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  className="flex flex-col text-center gap-[2rem] w-[15rem] h-[15rem] justify-center items-center"
                >
                  {/* <img src={product.src} className="h-[15rem]"></img> */}
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
                  to={`/product/${product.id}`}
                  className="flex flex-col text-center gap-[2rem] w-[15rem] h-[15rem] justify-center items-center"
                >
                  {/* <img src={product.src} className="h-[15rem]"></img> */}
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
                  to={`/product/${product.id}`}
                  className="flex flex-col text-center gap-[2rem] w-[15rem] h-[15rem] justify-center items-center"
                >
                  {/* <img src={product.src} className="h-[15rem]"></img> */}
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
                  to={`/product/${product.id}`}
                  className="flex flex-col text-center gap-[2rem] w-[15rem] h-[15rem] justify-center items-center"
                >
                  {/* <img src={product.src} className="h-[15rem]"></img> */}
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
        <div className="sm:hidden flex flex-col gap-[30px] w-full px-4">
          {mobileProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
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
        <Pagination />
      </div>
    </div>
  );
};
export default Products;
