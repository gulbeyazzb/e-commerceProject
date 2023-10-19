import { Carousel } from "@material-tailwind/react";

const Header = () => {
  return (
    <div className="relative">
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
            className="h-96 w-full object-cover brightness-50 "
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/58e7/8626/57520fbcc340e0540da6a9164dc64c56?Expires=1697414400&Signature=mkKtiwzRXMp7~Pm7BkCBhvayaVdGLoGpRmGjb~AqV6anUNESA4YGZDhbtx9Vum3mrsXDnhrq3rPgbU9nra7WG9WAyoMnHMpM09tB-sVWktvlGYGJo7osX32yX1LlfWywcDlwTDFlt1dwBHdLzu02duJqNDhn8Ap3FyyGxGRzk~Z~f0GQO61uCPgN1C-yrnsJjb~-wPvEaQCWNnguDqSp6MmBXnSBI9mak5iO2SujD5XIQsxUO~rc39kPcOh9tYYVPLsTRk2HD~eEmnFFzjqqNTgOifg11qaqeo428ZbAF2SaOQrvKCsgOxTLTh-JhQ0PO0NFApYP8XlJW7UgmRXbsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="image 2"
            className="h-96 w-full object-cover brightness-50"
          />
        </Carousel>
      </div>
      <div className="w-[1050px] mx-auto absolute top-[30%] left-[19%]">
        <div className="text-center">
          <div>
            <h1 className="font-bold text-6xl pb-3 text-white text-center">
              GROCERIES DELIVERY
            </h1>
            <h4 className="w-1/2 m-auto font-normal pb-3 text-center text-white text-xl">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <button className="rounded py-3.5 px-10  bg-[#23A6F0]">
              <h3 className="font-bold text-base text-center text-white">
                Start Now
              </h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
