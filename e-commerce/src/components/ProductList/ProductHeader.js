import { NavLink } from "react-router-dom";

const ProductHeader = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="mobile-col-flex sm:justify-between gap-[30px] py-6 items-center w-[370px] sm:w-[1050px] mx-auto ">
        <div>
          <NavLink to="/product-list" exact className="font-bold text-2xl ">
            Shop
          </NavLink>
        </div>

        <div className="flex text-second-text font-bold text-sm items-center">
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
  );
};

export default ProductHeader;
