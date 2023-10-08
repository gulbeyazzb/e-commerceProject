import { Carousel } from "@material-tailwind/react";

const header = () => {
  return (
    <div className="h-2/5">
      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
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
          className="h-full w-full object-cover"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/58e7/8626/57520fbcc340e0540da6a9164dc64c56?Expires=1697414400&Signature=mkKtiwzRXMp7~Pm7BkCBhvayaVdGLoGpRmGjb~AqV6anUNESA4YGZDhbtx9Vum3mrsXDnhrq3rPgbU9nra7WG9WAyoMnHMpM09tB-sVWktvlGYGJo7osX32yX1LlfWywcDlwTDFlt1dwBHdLzu02duJqNDhn8Ap3FyyGxGRzk~Z~f0GQO61uCPgN1C-yrnsJjb~-wPvEaQCWNnguDqSp6MmBXnSBI9mak5iO2SujD5XIQsxUO~rc39kPcOh9tYYVPLsTRk2HD~eEmnFFzjqqNTgOifg11qaqeo428ZbAF2SaOQrvKCsgOxTLTh-JhQ0PO0NFApYP8XlJW7UgmRXbsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="image 2"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default header;
