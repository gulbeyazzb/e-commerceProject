import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  addToCartThunkAction,
  updateQuantityThunkAction,
} from "../../store/actions/shoppingCartAction";
import { useState } from "react";

const Products = ({
  products,
  mobileProducts,
  productFetching,
  productFetched,
}) => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(" Add to Cart ");

  const cartProducts = useSelector((store) => store.shoppingCart.cartList);
  const [count, setCount] = useState(0);

  const addToCartClickHandle = (product) => {
    const productIndex = cartProducts.findIndex((p) => p.id === product.id);
    if (productIndex >= 0) {
      dispatch(updateQuantityThunkAction(product.id));
    } else {
      const addQuantity = { ...product, productQuantity: 1 };
      dispatch(addToCartThunkAction(addQuantity));
    }
    toast.success("the product has been added to cart");
  };

  return (
    <div className=" w-full ">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-center items-center">
          {productFetching && <Spinner />}
        </div>
        {/* //WEB SAYFAM */}
        {productFetched && (
          <div className="hidden sm:flex flex-wrap gap-8 justify-center items-center">
            {products?.map((product) => (
              <Card className="flex flex-col w-80 h-[35rem]  " key={product.id}>
                {" "}
                <Link
                  to={`/product/${product.id}/${product.name
                    .toLowerCase()
                    .replaceAll(" ", "-")} `}
                  className="flex flex-col text-center gap-[2rem] mb-10 justify-center items-center "
                  key={product.id}
                  id={product.id}
                >
                  <div className=" hover:brightness-50 rounded-md justify-center items-center w-80 h-[320px] line-clamp-1">
                    <img
                      src={product.images[0].url}
                      alt="card-image"
                      className=" rounded-xl h-full w-full object-contain items-center line-clamp-1"
                    />
                  </div>
                </Link>
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
                  </Typography>
                </CardBody>
                <CardFooter className="flex h-28 justify-between gap-2 line-clamp-1">
                  <div>
                    {" "}
                    <select className="w-24 h-full pl-2 rounded-md border border-[#DADADA] text-black">
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
                  <Button
                    onClick={() => addToCartClickHandle(product)}
                    id={product.id}
                    className="h-full bg-orange-800 "
                  >
                    {clicked}
                  </Button>
                </CardFooter>
                <ToastContainer
                  position="top-center"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
              </Card>
            ))}
          </div>
        )}
        {/* //MOBILE SAYFAM */}
        <div className="sm:hidden flex flex-wrap justify-between">
          {products?.map((product) => (
            <Card
              className="flex flex-col w-[186px] items-between mb-3"
              key={product.id}
            >
              {" "}
              <Link
                to={`/product/${product.id}/${product.name
                  .toLowerCase()
                  .replaceAll(" ", "-")} `}
                key={product.id}
                id={product.id}
              >
                <div className=" hover:brightness-50 rounded-md line-clamp-1">
                  <img
                    src={product.images[0].url}
                    alt="card-image"
                    className="w-full object-center h-60 object-cover items-center line-clamp-1"
                  />
                </div>
              </Link>
              <CardBody className="flex flex-col line-clamp-2 gap-1">
                <Typography className="text-start line-clamp-1">
                  {product.description}
                </Typography>
                <Typography className="flex font-bold text-orange-800 line-clamp-1">
                  {" "}
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
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 line-clamp-4 font-normal text-base"
                  id={product.rating}
                >
                  <span className="text-orange-600 font-bold">
                    {" "}
                    {product.rating}{" "}
                  </span>
                  <span className="text-gray-600 text-opacity-75">
                    times was added to fav
                  </span>
                </Typography>
                <span className="font-bold text-orange-800 ">
                  {product.price}₺
                </span>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
