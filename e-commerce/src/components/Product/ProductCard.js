import React, { useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import useQueryParams from "../../hooks/useQueryParams";

export default function ProductCard() {
  const [queryParams] = useQueryParams();
  const products = useSelector((store) => store.product.productList.products);
  const { category, productName, productID } = useParams();
  const cat = category?.slice(6, category.length);
  const gender = category?.slice(0, 1);
  const categoryCode = gender + ":" + cat;

  const categories = useSelector((store) => store.global.categories);
  const categoryID = categories?.find((c) => c.code == categoryCode)?.id;

  const product = products?.filter(
    (p) =>
      p.category_id === categoryID &&
      p.name === productName &&
      p.id === Number(productID)
  );
  return (
    <div className="bg-[#FAFAFA] w-full">
      <div className="sm:pb-12 sm:w-[1050px] mx-auto">
        <div className="mobile-col-flex gap-[30px] p-3 sm:p-0">
          <div className="w-full sm:w-[510px] sm:h-[550px] ">
            <div className="flex flex-col gap-4 sm:w-[506px] sm:h-[546px] rounded">
              <Carousel
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer transition-all content-[''] z-50 ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                {product?.images?.map((img, i) => (
                  <img src={img} alt={i} className=" w-[506px] h-[450px]" />
                ))}
              </Carousel>
              <div className="flex gap-4 sm:w-[219px] sm:h-[75px]">
                {product?.images?.map((img, i) => (
                  <img src={img} className="opacity-50 w-24 h-[75px]"></img>
                ))}{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 w-full sm:w-[510px] h-[471px] ">
            <h4 className="font-normal text-xl text-[#252B42]">
              {product?.name}
            </h4>
            <div className="flex gap-2">
              <i className="bx bx-star"></i>
              <h6 className="font-bold text-xs text-[#737373]">
                {product.rating} time rated
              </h6>
            </div>
            <h5 className="text-2xl font-bold text-[#252B42]">
              {product.price}
            </h5>
            <div className="flex gap-1">
              <p className="text-[#737373] font-bold text-sm">Availability:</p>
              <p className="text-primary-color font-bold text-sm">
                {product.stock > 0 ? "In Stock" : "No Stock"}
              </p>
            </div>
            <p className="text-[#737373] font-normal text-sm w-[340px] sm:w-[464px]">
              {product.description}
            </p>
            <hr className="text-[#BDBDBD] border border-1" />
            <div className="flex gap-[10px]">
              <button>
                <i className="bx bxs-circle text-3xl text-primary-color"></i>
              </button>
              <button>
                <i className="bx bxs-circle text-3xl text-[#23856D]"></i>
              </button>
              <button>
                <i className="bx bxs-circle text-3xl text-[#E77C40]"></i>
              </button>
              <button>
                <i className="bx bxs-circle text-3xl text-[#252B42]"></i>
              </button>
            </div>
            <div className="flex gap-[10px]">
              <button className="bg-primary-color py-[10px] px-5 font-bold text-sm text-white">
                Select Options
              </button>
              <i className="bx bx-heart border border-1 rounded-full text-3xl w-10 text-center text-[#252B42]"></i>
              <i className="bx bx-cart border border-1 rounded-full text-3xl w-10 text-center text-[#252B42]"></i>
              <i className="bx bx-bullseye border border-1 rounded-full text-3xl w-10 text-center text-[#252B42]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
