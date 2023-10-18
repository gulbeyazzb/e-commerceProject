import React from "react";
import header_img from "../../Assets/contact/header.png";

export default function ContactHeader() {
  return (
    <div className="flex justify-between py-28">
      <div className="flex flex-col gap-[35px] w-[400px] text-[#252B42]">
        <h5 className="font-bold text-base">CONTACT US</h5>
        <h1 className="font-bold text-[58px]">Get in touch today!</h1>{" "}
        <h4 className="text-[#737373] w-[376px]">
          We know how large objects will act, but things on a small scale{" "}
        </h4>{" "}
        <div className="flex flex-col gap-4 font-bold text-2xl">
          <p>Phone :+451 215 215</p>
          <p>Fax : +451 215 215</p>{" "}
        </div>{" "}
        <div className="flex gap-[34px] p-[10px] text-3xl text-[#252B42]">
          {" "}
          <a>
            <i class="bx bxl-twitter"></i>{" "}
          </a>{" "}
          <a>
            <i class="bx bxl-facebook-square"></i>{" "}
          </a>{" "}
          <a>
            <i class="bx bxl-instagram"></i>{" "}
          </a>{" "}
          <a>
            <i class="bx bxl-linkedin"></i>{" "}
          </a>{" "}
        </div>
      </div>
      <div className="relative z-0">
        <div className="relative z-0 bg-[#FFE9EA] rounded-[100%]  p-52"></div>
        <div className="absolute top-0 bg-[#FFE9EA] rounded-[100%] p-6"></div>
        <div className="absolute bg-[#977DF4] rounded-[100%] p-2"></div>
        <div className="absolute right-0 top-0 bg-[#977DF4] rounded-[100%] p-2"></div>
        <img src={header_img} className="absolute top-0 "></img>
      </div>
    </div>
  );
}
