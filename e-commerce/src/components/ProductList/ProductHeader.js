import { NavLink } from "react-router-dom";

const ProductHeader = () => {
  return (
    <div className="bg-white ">
      <div className="flex justify-center py-6 ">
        <div className="mobile-col-flex gap-[2rem] sm:gap-[52rem] items-center">
          <div>
            <NavLink to="/product-list" exact className="font-bold text-2xl">
              Shop
            </NavLink>
          </div>

          <div className="flex text-second-text font-bold text-sm items-center ">
            <NavLink to="/" className=" text-[#252B42]" exact>
              Home
            </NavLink>
            <i class="bx bxs-chevron-right text-[#BDBDBD] text-2xl"></i>
            <NavLink to="/product-list" className="mr-1">
              Shop
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
