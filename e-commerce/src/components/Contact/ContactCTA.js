import React from "react";
import arrow from "../../Assets/contact/Arrow.png";

export default function ContactCTA() {
  return (
    <div>
      <div className="flex flex-col items-center text-center pb-20 text-[#252B42]">
        <img src={arrow}></img>
        <div className="flex flex-col gap-9 font-bold mt-2">
          <h5 className=" text-base">WE Can't WAIT TO MEET YOU</h5>
          <h2 className=" text-6xl">Let’s Talk</h2>
          <button className="bg-[#23A6F0] text-white py-[15px] px-10 text-sm w-[186px] m-auto">
            Try it free now
          </button>
        </div>
      </div>
    </div>
  );
}
