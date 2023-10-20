import card1 from "../../Assets/card-cover-5.png";
import { bestSeller } from "../../mocks/homeData/bestSeller";
const ProductCards = () => {
  const bests = bestSeller.slice(0, 3);
  const bests2 = bestSeller.slice(3, 6);

  return (
    <div>
      <div className="h-[2300px] sm:h-auto mobile-col-flex py-2 sm:py-12 gap-[30px]">
        <div className="h-[600px] sm:h-auto">
          <div className="relative w-[350px] m-auto">
            <img className="absolute " src={card1}></img>
            <div className="absolute top-10 left-10">
              <h6 className=" text-xs font-bold">FURNITURE</h6>
              <h6 className=" text-xs font-normal">5 Items</h6>
            </div>
          </div>
        </div>
        <div className="h-[1400px] my-auto sm:h-auto">
          <div className="mobile-col-flex sm:items-center gap-[10px]">
            <div>
              <h3
                id="section-title"
                className="font-bold text-sm text-center sm:text-left"
              >
                BESTSELLER PRODUCTS
              </h3>
            </div>
            <div className="mobile-col-flex gap-10 sm:gap-16 items-center ">
              <nav className="flex items-center  font-bold text-sm gap-5 list-none">
                <li>
                  <button className="btn-sm text-primary-color">Women</button>
                </li>
                <li>
                  <button className="btn-sm text-second-text">Men</button>
                </li>
                <li>
                  <button className="btn-sm text-second-text">
                    Accessories
                  </button>
                </li>
              </nav>
              <nav className="flex list-none">
                <li>
                  <button className="  me-3  w-[48.57px] h-[48px] ">
                    <i class="bx bx-chevron-left-circle w-[8.57px] h-[15px] text-3xl  font-thin "></i>
                  </button>
                </li>
                <li>
                  <button className=" me-3 w-[48.57px] h-[48px] ">
                    <i class="bx bx-chevron-right-circle text-3xl  font-thin"></i>
                  </button>
                </li>
              </nav>
            </div>
          </div>
          <hr />
          <div className="pt-[25] pb-[35] px-[25]">
            <div className="mobile-col-flex sm:flex-wrap items-center ">
              {bests.map((best) => (
                <div className="p-2 text-center">
                  <img
                    src={best.src}
                    className="py-0 sm:py-2 sm:w-auto w-[330px]"
                  ></img>
                  <h5 className="pb-3 text-center font-bold text-base">
                    {best.heading}
                  </h5>
                  <a
                    href=""
                    className="pb-3 font-bold text-sm text-second-text text-center"
                  >
                    {best.subHeading}
                    <div className="pt-3">
                      <span className="text-[#BDBDBD] text-base ">
                        {best.price}
                      </span>
                      <span className="text-[#23856D] text-base ">
                        {best.pricebold}
                      </span>
                    </div>{" "}
                  </a>
                </div>
              ))}
              {bests2.map((best) => (
                <div className="hidden sm:inline-block p-2 text-center">
                  <img src={best.src} className="py-2"></img>
                  <h5 className="pb-3 text-center font-bold text-base">
                    {best.heading}
                  </h5>
                  <a
                    href=""
                    className="pb-3 font-bold text-sm text-second-text text-center"
                  >
                    {best.subHeading}
                    <div className="pt-3">
                      <span className="text-[#BDBDBD] text-base ">
                        {best.price}
                      </span>
                      <span className="text-[#23856D] text-base ">
                        {best.pricebold}
                      </span>
                    </div>{" "}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCards;
