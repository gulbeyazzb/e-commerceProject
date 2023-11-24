import React, { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import useQueryParams from "../../hooks/useQueryParams";
import { fetchProductActionCreator } from "../../store/actions/productAction";
import axios from "axios";
import { API } from "../../api/api";

export default function ProductCard() {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState();
  const [image, setImage] = useState("");

  useEffect(() => {
    API.get(`products/${productId}`).then((res) => {
      setProduct(res.data);
      setImage(res.data.images.map((img) => img.url));
    });
  }, [productId]);

  const clickImageHandle = (e) => {
    console.log(e.target.src);
    setImage(e.target.src);
  };

  return (
    <div className="bg-[#FAFAFA] w-full pt-6">
      <div className="mobile-col-flex p-3 sm:p-0 sm:justify-center gap-28">
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
              <img src={image} alt={i} className=" w-[506px] h-[450px]" />
            ))}
          </Carousel>
          <div className="flex gap-4 sm:w-[219px] sm:h-[75px]">
            {product?.images?.map((img, i) => (
              <img
                src={img.url}
                className="opacity-50 w-24 h-[75px]"
                onClick={clickImageHandle}
              ></img>
            ))}{" "}
          </div>
        </div>
        <div className="flex flex-col gap-7 ">
          <h4 className="font-normal text-xl text-[#252B42]">
            {product?.name}
          </h4>
          <div className="flex gap-2">
            <i className="bx bxs-star text-yellow-600"></i>
            <i className="bx bxs-star text-yellow-600"></i>
            <i className="bx bxs-star text-yellow-600"></i>
            <i className="bx bxs-star text-yellow-600"></i>
            <h6 className="font-bold text-xs text-[#737373]">
              {product?.rating} time rated
            </h6>
          </div>
          <h5 className="text-2xl font-bold text-[#252B42]">
            {product?.price}₺
          </h5>
          <div className="flex gap-1">
            <p className="text-[#737373] font-bold text-sm">Availability:</p>
            <p className="text-primary-color font-bold text-sm">
              {product?.stock > 0 ? "In Stock" : "No Stock"}
            </p>
          </div>
          <p className="text-[#737373] font-normal text-sm w-[340px] sm:w-[464px]">
            {product?.description}
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
              Add to Cart
            </button>
            <i className="bx bx-heart border border-1 rounded-full text-3xl w-10 text-center text-[#252B42]"></i>
            <i className="bx bx-cart border border-1 rounded-full text-3xl w-10 text-center text-[#252B42]"></i>
            <i className="bx bx-bullseye border border-1 rounded-full text-3xl w-10 text-center text-[#252B42]"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
