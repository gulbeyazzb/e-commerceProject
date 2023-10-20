import { Link } from "react-router-dom";
import Pcard1 from "../../Assets/bestSeller/product-cover-5 (3).png";
import Pcard2 from "../../Assets/bestSeller/product-cover-5 (4).png";
import Pcard3 from "../../Assets/bestSeller/product-cover-5 (5).png";
import Pcard4 from "../../Assets/bestSeller/product-cover-5 (6).png";

const BestSeller = () => {
  return (
    <div className="bg-[#FAFAFA] py-12">
      <div className=" w-[1050px] mx-auto">
        <div>
          <h3
            id="section-title"
            className="font-bold text-sm mb-6 text-[#252B42]"
          >
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <hr />
        <div className="flex justify-between">
          <div className="p-2 text-center">
            <img src={Pcard1} className="py-2"></img>
            <h5 className="pb-3 text-center font-bold text-base text-[#252B42]">
              Graphic Design
            </h5>
            <Link
              to="/english-department"
              className="pb-3 font-bold text-sm text-second-text text-center"
            >
              English Department
            </Link>
            <div className="pt-3">
              <span className="text-[#BDBDBD] text-base ">$16.48</span>
              <span className="text-[#23856D] text-base ">$16.48</span>
            </div>{" "}
          </div>
          <div className="p-2 text-center">
            <img src={Pcard2} className="py-2"></img>
            <h5 className="pb-3 text-center font-bold text-base text-[#252B42]">
              Graphic Design
            </h5>
            <Link
              to="/english-department"
              className="pb-3 font-bold text-sm text-second-text text-center"
            >
              English Department
            </Link>
            <div className="pt-3">
              <span className="text-[#BDBDBD] text-base ">$16.48</span>
              <span className="text-[#23856D] text-base ">$16.48</span>
            </div>{" "}
          </div>
          <div className="p-2 text-center">
            <img src={Pcard3} className="py-2"></img>
            <h5 className="pb-3 text-center font-bold text-base text-[#252B42]">
              Graphic Design
            </h5>
            <Link
              to="/english-department"
              className="pb-3 font-bold text-sm text-second-text text-center"
            >
              English Department
            </Link>
            <div className="pt-3">
              <span className="text-[#BDBDBD] text-base ">$16.48</span>
              <span className="text-[#23856D] text-base ">$16.48</span>
            </div>{" "}
          </div>
          <div className="p-2 text-center">
            <img src={Pcard4} className="py-2"></img>
            <h5 className="pb-3 text-center font-bold text-base text-[#252B42]">
              Graphic Design
            </h5>
            <Link
              to="/english-department"
              className="pb-3 font-bold text-sm text-second-text text-center"
            >
              English Department
            </Link>
            <div className="pt-3">
              <span className="text-[#BDBDBD] text-base ">$16.48</span>
              <span className="text-[#23856D] text-base ">$16.48</span>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestSeller;
