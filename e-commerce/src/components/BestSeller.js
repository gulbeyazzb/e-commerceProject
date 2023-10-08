import card1 from "../Assets/card-cover-5.png";
import Pcard1 from "../Assets/product-cover-5.png";
import Pcard2 from "../Assets/product-cover-5 (1).png";
import Pcard3 from "../Assets/product-cover-5 (2).png";

const BestSeller = () => {
  return (
    <div className=" container m-auto">
      <div>
        <div>
          <h3 id="section-title" className="font-bold text-sm">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <hr />
        <div className="flex justify-between">
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
            <img src={Pcard3} className="py-2"></img>
            <h5 className="pb-3 text-center font-bold text-base">
              Graphic Design
            </h5>
            <a href="" className="font-bold text-sm text-[#737373] text-center">
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
            <a href="" className="font-bold text-sm text-[#737373] text-center">
              English Department
              <div className="pt-3">
                <span className="text-[#BDBDBD] text-base">$16.48</span>
                <span className="text-[#23856D] text-base">$16.48</span>
              </div>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestSeller;
