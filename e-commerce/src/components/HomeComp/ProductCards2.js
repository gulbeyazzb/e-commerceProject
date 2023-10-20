import card1 from "../../Assets/card-cover-5.jpg";

import { bestSeller } from "../../mocks/homeData/bestSeller";

const ProductCards2 = () => {
  const bests = bestSeller.slice(0, 3);
  const bests2 = bestSeller.slice(3, 6);
  return (
    <div>
      <div className="h-[2300px] sm:h-auto mobile-col-flex w-auto py-12 gap-[60px]">
        <div className="h-[600px] sm:h-auto sm:hidden sm:w-auto sm:m-0">
          <div className="relative w-[350px] m-auto ">
            <img className="absolute" src={card1}></img>
            <div className="absolute top-10 left-10">
              <h6 className=" text-xs font-bold">FURNITURE</h6>
              <h6 className=" text-xs font-normal">5 Items</h6>
            </div>
          </div>
        </div>
        <div className="sm:h-auto h-[1400px] my-auto sm:my-0 gap-10 sm:gap-0">
          <div className="mobile-col-flex items-center gap-10">
            <h3 id="section-title" className="font-bold text-sm">
              BESTSELLER PRODUCTS
            </h3>
            <div className="mobile-col-flex gap-4 sm:gap-16">
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
              <nav className="justify-center sm:justify-end flex list-none">
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
          <div className="py-6 sm:pt-[25] sm:pb-[35] px-[25]">
            <div className="mobile-col-flex sm:flex-wrap items-center gap-12 sm:gap-0 ">
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
        <div className="hidden sm:inline-block">
          <div className="relative w-[350px] ">
            <img className="absolute h-[650px]" src={card1}></img>
            <div className="absolute top-10 left-10">
              <h6 className=" text-xs font-bold">FURNITURE</h6>
              <h6 className=" text-xs font-normal">5 Items</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCards2;
