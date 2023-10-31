import { Link } from "react-router-dom";
import { products } from "../../mocks/productList/products";
import Pagination from "./Pagination";
import { useParams } from "react-router-dom";

const Products = ({ categories }) => {
  const mobileProducts = products.slice(0, 4);
  const { category } = useParams();
  console.log(categories);
  const categoryData = categories.filter((product) => {
    console.log(category);
    return product.code === category;
  });
  return (
    <div className="py-12 w-full ">
      <div className="flex flex-col gap-12 sm:px-28 w-full">
        <div className="hidden sm:flex flex-wrap gap-[30px] justify-center items-center ">
          {categoryData.map((product) => (
            <Link
              to={`/product/${product.id}`}
              className="flex flex-col text-center gap-[10px]"
            >
              <img src={product.img} className="h-[15rem]"></img>
              <h5 className="text-center font-bold text-base">
                {product.title}
              </h5>
              <a
                href=""
                className="font-bold text-sm text-second-text text-center"
              >
                {product.department}
                <div className="pt-3">
                  <span className="text-[#BDBDBD] text-base ">
                    {product.price1}
                  </span>
                  <span className="text-[#23856D] text-base ">
                    {product.price2}
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
        <div className="sm:hidden flex flex-col gap-[30px] w-full px-4">
          {mobileProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              className="flex flex-col text-center gap-[10px] "
            >
              <img src={product.src} className="w-full m-auto"></img>
              <h5 className="text-center font-bold text-base">
                {product.heading}
              </h5>
              <a
                href=""
                className="font-bold text-sm text-second-text text-center"
              >
                {product.department}
                <div className="pt-3">
                  <span className="text-[#BDBDBD] text-base ">
                    {product.price1}
                  </span>
                  <span className="text-[#23856D] text-base ">
                    {product.price2}
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
