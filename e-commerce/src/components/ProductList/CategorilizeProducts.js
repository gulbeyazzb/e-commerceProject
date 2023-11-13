import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProductActionCreator } from "../../store/actions/productAction";
import { FETCH_STATES } from "../../store/reducers/productReducer";
import { Spinner } from "@material-tailwind/react";

const CategorilizeProducts = () => {
  useEffect(() => {
    dispatch(fetchProductActionCreator());
  }, []);

  const dispatch = useDispatch();
  const categories = useSelector((store) => store.global.categories);
  const { category } = useParams();
  const categoryID = categories.find((c) => c.code == category)?.id;
  const products = useSelector((store) => store.product.productList);

  const categorilizeProducts = products.products?.filter((product) => {
    return product.category_id === Number(categoryID);
  });

  const mobileProducts = categorilizeProducts?.slice(0, 4);
  const filter = useSelector((store) => store.product.filter);
  const searchItem = useSelector((store) => store.product.searchItem);

  const productFetching = useSelector(
    (store) => store.product.fetchState === FETCH_STATES.Fetching
  );
  const productFetched = useSelector(
    (store) => store.product.fetchState === FETCH_STATES.Fetched
  );

  let searchCategorilizedProducts = categorilizeProducts.filter((product) => {
    if (searchItem) {
      return product.name.toLowerCase().includes(searchItem.toLowerCase());
    }
  });

  let filterCategorilizedProducts = categorilizeProducts.sort((a, b) => {
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

  let filterSearchProducts = searchCategorilizedProducts.sort((a, b) => {
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
            {category &&
              !filter &&
              !searchItem &&
              categorilizeProducts?.map((product) => (
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
                        {product.price}
                      </span>
                    </div>{" "}
                  </a>
                  <div>
                    <button>
                      <i className="bx bxs-circle text-primary-color"></i>
                    </button>
                    <button>
                      <i className="bx bxs-circle text-[#23856D]"></i>
                    </button>
                    <button>
                      <i className="bx bxs-circle text-[#E77C40]"></i>
                    </button>
                    <button>
                      <i className="bx bxs-circle text-[#252B42]"></i>
                    </button>
                  </div>
                </Link>
              ))}
            {category &&
              filter &&
              !searchItem &&
              filterCategorilizedProducts?.map((product) => (
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
                        {product.price}
                      </span>
                    </div>{" "}
                  </a>
                  <div>
                    <button>
                      <i className="bx bxs-circle text-primary-color"></i>
                    </button>
                    <button>
                      <i className="bx bxs-circle text-[#23856D]"></i>
                    </button>
                    <button>
                      <i className="bx bxs-circle text-[#E77C40]"></i>
                    </button>
                    <button>
                      <i className="bx bxs-circle text-[#252B42]"></i>
                    </button>
                  </div>
                </Link>
              ))}
            {category &&
              searchItem &&
              !filter &&
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
                        {product.price}
                      </span>
                    </div>{" "}
                  </a>
                  <div>
                    <button>
                      <i className="bx bxs-circle text-primary-color"></i>
                    </button>
                    <button>
                      <i className="bx bxs-circle text-[#23856D]"></i>
                    </button>
                    <button>
                      <i className="bx bxs-circle text-[#E77C40]"></i>
                    </button>
                    <button>
                      <i className="bx bxs-circle text-[#252B42]"></i>
                    </button>
                  </div>
                </Link>
              ))}
            {category &&
              searchItem &&
              filter &&
              searchCategorilizedProducts?.map((product) => (
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
                        {product.price}
                      </span>
                    </div>{" "}
                  </a>
                  <div>
                    <button>
                      <i className="bx bxs-circle text-primary-color"></i>
                    </button>
                    <button>
                      <i className="bx bxs-circle text-[#23856D]"></i>
                    </button>
                    <button>
                      <i className="bx bxs-circle text-[#E77C40]"></i>
                    </button>
                    <button>
                      <i className="bx bxs-circle text-[#252B42]"></i>
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
              {/* <img src={product.src} className="w-full m-auto"></img> */}
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
                  <i className="bx bxs-circle text-primary-color"></i>
                </button>
                <button>
                  <i className="bx bxs-circle text-[#23856D]"></i>
                </button>
                <button>
                  <i className="bx bxs-circle text-[#E77C40]"></i>
                </button>
                <button>
                  <i className="bx bxs-circle text-[#252B42]"></i>
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
export default CategorilizeProducts;
