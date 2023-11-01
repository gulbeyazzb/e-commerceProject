import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoryActionCreator } from "../../store/actions/globalAction";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const ProductListShopCards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryActionCreator());
  }, []);
  const categories = useSelector((store) => store.global.categories);

  const mostRating = categories.sort((a, b) => {
    return b.rating - a.rating;
  });
  console.log("most:", mostRating);

  return (
    <div className="bg-[#FAFAFA]">
      <div className=" flex justify-center">
        <div className="mobile-col-flex flex-wrap justify-center sm:gap-[10px] gap-[18px] sm:pb-12 items-center text-white text-center ">
          {mostRating.slice(0, 6).map((category) => (
            <NavLink to={`/shopping/${category.id}`}>
              <div className="relative hover:brightness-50">
                <img
                  className="relative z-0 sm:h-[15rem] w-full sm:w-auto px-2 sm:p-0"
                  src={category.img}
                ></img>
                <div className=" absolute z-50  top-[40%] left-[30%] ">
                  <h2 className="sm:text-base font-bold text-5xl">
                    {category.title}
                  </h2>
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
