import React, { useEffect } from "react";
import { Carousel } from "@material-tailwind/react";

export default function ProductCard({ myData }) {
  return (
    <div className="bg-[#FAFAFA] w-full">
      <div className="sm:pb-12 sm:w-[1050px] mx-auto">
        <div className="mobile-col-flex gap-[30px] p-3 sm:p-0">
          <div className=" sm:w-[510px] sm:h-[550px] ">
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
                <img
                  src={myData.src}
                  alt="image 1"
                  className=" w-[506px] h-[450px]"
                />
                <img
                  src={myData.src2}
                  alt="image 2"
                  className=" w-[506px] h-[450px] "
                />
              </Carousel>
              <div className="flex gap-4 sm:w-[219px] sm:h-[75px]">
                <img
                  src={myData.src}
                  className="opacity-50 w-24 h-[75px]"
                ></img>
                <img
                  src={myData.src2}
                  className="opacity-50 w-24 h-[75px]"
                ></img>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 w-[510px] h-[471px] ">
            <h4 className="font-normal text-xl text-[#252B42]">
              {myData?.heading}
            </h4>
            <div className="flex gap-2">
              <i className="bx bx-star"></i>
              <h6 className="font-bold text-xs text-[#737373]">10 Reviews</h6>
            </div>
            <h5 className="text-2xl font-bold text-[#252B42]">$1,139.33</h5>
            <div className="flex gap-1">
              <p className="text-[#737373] font-bold text-sm">Availability :</p>
              <p className="text-primary-color font-bold text-sm">In Stock </p>
            </div>
            <p className="text-[#737373] font-normal text-sm w-[340px] sm:w-[464px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <hr className="text-[#BDBDBD] border border-1" />
            <div className="flex gap-[10px]">
              <button>
                <i class="bx bxs-circle text-3xl text-primary-color"></i>
              </button>
              <button>
                <i class="bx bxs-circle text-3xl text-[#23856D]"></i>
              </button>
              <button>
                <i class="bx bxs-circle text-3xl text-[#E77C40]"></i>
              </button>
              <button>
                <i class="bx bxs-circle text-3xl text-[#252B42]"></i>
              </button>
            </div>
            <div className="flex gap-[10px]">
              <button className="bg-primary-color py-[10px] px-5 font-bold text-sm text-white">
                Select Options
              </button>
              <i class="bx bx-heart border border-1 rounded-full text-3xl w-10 text-center text-[#252B42]"></i>
              <i class="bx bx-cart border border-1 rounded-full text-3xl w-10 text-center text-[#252B42]"></i>
              <i class="bx bx-bullseye border border-1 rounded-full text-3xl w-10 text-center text-[#252B42]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
