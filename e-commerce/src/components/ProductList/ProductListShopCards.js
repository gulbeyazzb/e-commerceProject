import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategoryActionCreator } from "../../store/actions/globalAction";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const ProductListShopCards = ({ categories }) => {
  console.log("categories:", categories);
  return (
    <div className="bg-[#FAFAFA]">
      <div className=" flex justify-center">
        <div className="mobile-col-flex flex-wrap justify-center sm:gap-[10px] gap-[18px] sm:pb-12 items-center text-white text-center ">
          {categories.slice(0, 5).map((category) => (
            <NavLink to={`/shopping/${category.code}`}>
              <div className="relative hover:brightness-50">
                <img
                  className="relative z-0 h-[15rem]"
                  src={category.img}
                ></img>
                <div className=" absolute z-50  top-[40%] left-[30%] ">
                  <h2 className="text-base font-bold">{category.title}</h2>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListShopCards;
