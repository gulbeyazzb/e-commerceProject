import { Link } from "react-router-dom";
import { products } from "../../mocks/productList/products";
import { animateScroll as scroll } from "react-scroll";
import { useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const BestSeller = () => {
  const products = useSelector((store) => store.product.productList);
  console.log(products);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const { pathname } = useLocation();
  const location = useLocation();
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col items-center sm:items-start gap-6 sm:w-[1050px] mx-auto pt-12">
        <div>
          <h3
            id="section-title"
            className="font-bold sm:text-3xl text-2xl text-[#252B42]"
          >
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <hr className="text-[#ECECEC]" />
        <div className="hidden sm:flex flex-wrap gap-[30px]">
          {products?.map((product) => (
            <Link
              to={`shopping/gender/category/${product.id}/${product.name
                .toLowerCase()
                .replaceAll(" ", "-")} `}
              className="flex flex-col text-center gap-[2rem] mb-10 justify-center items-center "
              onClick=""
              key={product.id}
              id={product.id}
            >
              <Card className="flex flex-col w-80 h-[35rem]  " key={product.id}>
                <div className=" hover:brightness-50 rounded-md justify-center items-center w-80 h-[320px] line-clamp-1">
                  <img
                    src={product.images[0].url}
                    alt="card-image"
                    className=" rounded-xl h-full w-full object-contain items-center line-clamp-1"
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
        {/* <div className="sm:hidden flex flex-col gap-[70px] w-[330px]">
          {mobileProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              onClick={scrollToTop}
              className="sm:w-[238px] sm:h-[442px] flex flex-col"
            >
              <img src={product.src}></img>
              <div className="flex flex-col justify-start pt-[25px] pb-[35px] px-[25px] gap-[10px] bg-white">
                <h5 className="font-bold text-base text-[#252B42]">
                  {product.heading}
                </h5>
                <Link
                  to="/english-department"
                  className=" font-bold text-sm text-[#737373]"
                >
                  English Department
                </Link>
                <div>
                  <span className="text-[#BDBDBD] text-base ">$16.48</span>
                  <span className="text-[#23856D] text-base ">$16.48</span>
                </div>{" "}
              </div>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
};
export default BestSeller;
