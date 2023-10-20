import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative mobile-width sm:w-full">
      <div className=" relative ">
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
            src="https://s3-alpha-sig.figma.com/img/58e7/8626/57520fbcc340e0540da6a9164dc64c56?Expires=1697414400&Signature=mkKtiwzRXMp7~Pm7BkCBhvayaVdGLoGpRmGjb~AqV6anUNESA4YGZDhbtx9Vum3mrsXDnhrq3rPgbU9nra7WG9WAyoMnHMpM09tB-sVWktvlGYGJo7osX32yX1LlfWywcDlwTDFlt1dwBHdLzu02duJqNDhn8Ap3FyyGxGRzk~Z~f0GQO61uCPgN1C-yrnsJjb~-wPvEaQCWNnguDqSp6MmBXnSBI9mak5iO2SujD5XIQsxUO~rc39kPcOh9tYYVPLsTRk2HD~eEmnFFzjqqNTgOifg11qaqeo428ZbAF2SaOQrvKCsgOxTLTh-JhQ0PO0NFApYP8XlJW7UgmRXbsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="image 1"
            className="sm:h-96 h-[638px] mobile-width sm:w-full object-cover brightness-50 "
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/58e7/8626/57520fbcc340e0540da6a9164dc64c56?Expires=1697414400&Signature=mkKtiwzRXMp7~Pm7BkCBhvayaVdGLoGpRmGjb~AqV6anUNESA4YGZDhbtx9Vum3mrsXDnhrq3rPgbU9nra7WG9WAyoMnHMpM09tB-sVWktvlGYGJo7osX32yX1LlfWywcDlwTDFlt1dwBHdLzu02duJqNDhn8Ap3FyyGxGRzk~Z~f0GQO61uCPgN1C-yrnsJjb~-wPvEaQCWNnguDqSp6MmBXnSBI9mak5iO2SujD5XIQsxUO~rc39kPcOh9tYYVPLsTRk2HD~eEmnFFzjqqNTgOifg11qaqeo428ZbAF2SaOQrvKCsgOxTLTh-JhQ0PO0NFApYP8XlJW7UgmRXbsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="image 2"
            className="sm:h-96 h-[638px] mobile-width sm:w-full object-cover brightness-50"
          />
        </Carousel>
      </div>
      <div className="sm:fixed-width m-auto absolute top-[20%] left-[7%] sm:top-[30%] sm:left-[22%]">
        <div className="text-center">
          <div className="flex flex-col  sm:gap-[10px] gap-[80px]">
            <h1 className="font-bold sm:text-6xl text-[40px] text-white text-center">
              GROCERIES DELIVERY
            </h1>
            <h4 className="w-[290px] sm:w-1/2 m-auto font-normal text-center text-white text-xl">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <Link
              to="/product-list"
              className="w-40 m-auto rounded py-[1rem] px-10  bg-primary-color font-bold text-base text-center text-white"
            >
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
