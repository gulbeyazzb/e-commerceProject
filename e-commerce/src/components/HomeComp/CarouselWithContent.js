import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function CarouselWithContent() {
  return (
    <Carousel className="rounded h-[30rem]">
      <div className="relative h-full w-full">
        <img
          src="https://s3-alpha-sig.figma.com/img/58e7/8626/57520fbcc340e0540da6a9164dc64c56?Expires=1697414400&Signature=mkKtiwzRXMp7~Pm7BkCBhvayaVdGLoGpRmGjb~AqV6anUNESA4YGZDhbtx9Vum3mrsXDnhrq3rPgbU9nra7WG9WAyoMnHMpM09tB-sVWktvlGYGJo7osX32yX1LlfWywcDlwTDFlt1dwBHdLzu02duJqNDhn8Ap3FyyGxGRzk~Z~f0GQO61uCPgN1C-yrnsJjb~-wPvEaQCWNnguDqSp6MmBXnSBI9mak5iO2SujD5XIQsxUO~rc39kPcOh9tYYVPLsTRk2HD~eEmnFFzjqqNTgOifg11qaqeo428ZbAF2SaOQrvKCsgOxTLTh-JhQ0PO0NFApYP8XlJW7UgmRXbsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid place-items-center bg-black/75 ">
          <div className="w-3/4 text-center md:w-2/4  flex flex-col gap-5">
            <Typography
              variant="h1"
              color="white"
              className="font-bold sm:text-6xl text-[40px] text-white text-center"
            >
              GROCERIES DELIVERY
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="w-[290px] sm:w-1/2 m-auto font-normal text-center text-white text-xl"
            >
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </Typography>
            <div className="flex justify-center gap-2">
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
      <div className="relative h-full w-full">
        <img
          src="https://s3-alpha-sig.figma.com/img/58e7/8626/57520fbcc340e0540da6a9164dc64c56?Expires=1697414400&Signature=mkKtiwzRXMp7~Pm7BkCBhvayaVdGLoGpRmGjb~AqV6anUNESA4YGZDhbtx9Vum3mrsXDnhrq3rPgbU9nra7WG9WAyoMnHMpM09tB-sVWktvlGYGJo7osX32yX1LlfWywcDlwTDFlt1dwBHdLzu02duJqNDhn8Ap3FyyGxGRzk~Z~f0GQO61uCPgN1C-yrnsJjb~-wPvEaQCWNnguDqSp6MmBXnSBI9mak5iO2SujD5XIQsxUO~rc39kPcOh9tYYVPLsTRk2HD~eEmnFFzjqqNTgOifg11qaqeo428ZbAF2SaOQrvKCsgOxTLTh-JhQ0PO0NFApYP8XlJW7UgmRXbsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid place-items-center bg-black/75 ">
          <div className="w-3/4 text-center md:w-2/4  flex flex-col gap-5">
            <Typography
              variant="h1"
              color="white"
              className="font-bold sm:text-6xl text-[40px] text-white text-center"
            >
              GROCERIES DELIVERY
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="w-[290px] sm:w-1/2 m-auto font-normal text-center text-white text-xl"
            >
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </Typography>
            <div className="flex justify-center gap-2">
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
    </Carousel>
  );
}
