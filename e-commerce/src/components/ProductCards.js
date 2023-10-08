import card1 from "../Assets/card-cover-5.png";
import Pcard1 from "../Assets/product-cover-5.png";
import Pcard2 from "../Assets/product-cover-5 (1).png";
import Pcard3 from "../Assets/product-cover-5 (2).png";

const ProductCards = () => {
  return (
    <div className=" container m-auto">
      <div className="flex">
        <div>
          <div className="relative w-[350px] ">
            <img className="absolute h-[650px]" src={card1}></img>
            <div className="absolute top-10 left-10">
              <h6 className=" text-xs font-bold">FURNITURE</h6>
              <h6 className=" text-xs font-normal">5 Items</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-6">
            <div>
              <h3 id="section-title" className="font-bold text-sm">
                BESTSELLER PRODUCTS
              </h3>
            </div>
            <div className="flex gap-16">
              <nav className="flex items-center  font-bold text-sm gap-5 list-none">
                <li>
                  <button className="btn-sm text-[#23A6F0]">Women</button>
                </li>
                <li>
                  <button className="btn-sm text-[#737373]">Men</button>
                </li>
                <li>
                  <button className="btn-sm text-[#737373]">Accessories</button>
                </li>
              </nav>
              <nav className="flex list-none">
                <li>
                  <button className=" border-[1px] me-3 border-black py-3.5 px-5 w-[48.57px] h-[48px]  rounded-[50%]">
                    <box-icon
                      className=" icn arrow-left .icn-xs w-[8.57px] h-[15px] top-[15px] left-[8.57px]"
                      name="chevron-left"
                    ></box-icon>
                  </button>
                </li>
                <li>
                  <button className=" btn-sm border-[1px] me-3 border-black py-3.5 px-5 w-[48.57px] h-[48px]  rounded-[50%]">
                    <box-icon
                      className=" icn arrow-right .icn-xs w-[8.57px] h-[15px] top-[15px] left-[8.57px]"
                      name="chevron-right"
                    ></box-icon>
                  </button>
                </li>
              </nav>
            </div>
          </div>
          <hr />
          <div className="p-6">
            <div className="flex pb-3">
              <div className="p-2 text-center">
                <img src={Pcard1} className="py-2"></img>
                <h5 className="pb-3 text-center font-bold text-base">
                  Graphic Design
                </h5>
                <a
                  href=""
                  className="pb-3 font-bold text-sm text-[#737373] text-center"
                >
                  English Department
                  <div className="pt-3">
                    <span className="text-[#BDBDBD] text-base ">$16.48</span>
                    <span className="text-[#23856D] text-base ">$16.48</span>
                  </div>{" "}
                </a>
              </div>
              <div className="p-2 text-center">
                <img src={Pcard2} className="py-2"></img>
                <h5 className="pb-3 text-center font-bold text-base">
                  Graphic Design
                </h5>
                <a
                  href=""
                  className="font-bold text-sm text-[#737373] text-center"
                >
                  English Department
                </a>
                <div className="pt-3">
                  <span className="text-[#BDBDBD] text-base">$16.48</span>
                  <span className="text-[#23856D] text-base">$16.48</span>
                </div>
              </div>
              <div className="p-2 text-center">
                <img src={Pcard3} className="py-2"></img>
                <h5 className="pb-3 text-center font-bold text-base">
                  Graphic Design
                </h5>
                <a
                  href=""
                  className="font-bold text-sm text-[#737373] text-center"
                >
                  English Department
                  <div className="pt-3">
                    <span className="text-[#BDBDBD] text-base">$16.48</span>
                    <span className="text-[#23856D] text-base">$16.48</span>
                  </div>{" "}
                </a>
              </div>
            </div>
            <div className=" flex pb-3">
              <div className="p-2 text-center">
                <img src={Pcard1} className="py-2"></img>
                <h5 className="pb-3 text-center font-bold text-base">
                  Graphic Design
                </h5>
                <a
                  href=""
                  className="font-bold text-sm text-[#737373] text-center"
                >
                  English Department
                  <div className="pt-3">
                    <span className="text-[#BDBDBD] text-base">$16.48</span>
                    <span className="text-[#23856D] text-base">$16.48</span>
                  </div>{" "}
                </a>
              </div>
              <div className="p-2 text-center">
                <img src={Pcard2} className="py-2"></img>
                <h5 className="pb-3 text-center font-bold text-base">
                  Graphic Design
                </h5>
                <a
                  href=""
                  className="font-bold text-sm text-[#737373] text-center"
                >
                  English Department
                  <div className="pt-3">
                    <span className="text-[#BDBDBD] text-base">$16.48</span>
                    <span className="text-[#23856D] text-base">$16.48</span>
                  </div>{" "}
                </a>
              </div>
              <div className="p-2 text-center">
                <img src={Pcard3} className="py-2"></img>
                <h5 className="pb-3 text-center font-bold text-base">
                  Graphic Design
                </h5>
                <a
                  href=""
                  className="font-bold text-sm text-[#737373] text-center"
                >
                  English Department
                </a>
                <div className="pt-3">
                  <span className="text-[#BDBDBD] text-base">$16.48</span>
                  <span className="text-[#23856D] text-base">$16.48</span>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCards;
