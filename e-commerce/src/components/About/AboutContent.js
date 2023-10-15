import React from "react";

const AboutContent = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[390px] flex flex-col gap-6 py-20">
        <p className="text-[#E74040] text-sm font-normal">Problems trying</p>
        <p className="text-[#252B42] text-3xl font-bold">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </p>
      </div>
      <div className="w-[520px]">
        <p className="text-[#737373] font-normal text-sm">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
    </div>
  );
};
export default AboutContent;
