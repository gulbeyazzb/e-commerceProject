import { Link } from "react-router-dom";
import { data } from "../../mocks/data";
import { animateScroll as scroll } from "react-scroll";

const BestSeller = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col gap-6 w-[1050px] mx-auto pt-12">
        <div>
          <h3 id="section-title" className="font-bold text-3xl  text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <hr className="text-[#ECECEC]" />
        <div className="flex flex-wrap gap-[30px]">
          {data.map((product) => (
            <Link
              to={`/product/${product.id}`}
              onClick={scrollToTop}
              className="w-[238px] h-[442px] flex flex-col"
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
        </div>
      </div>
    </div>
  );
};
export default BestSeller;
