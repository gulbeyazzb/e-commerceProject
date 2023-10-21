import React from "react";
import pic1 from "../../Assets/products/unsplash_QANOF9iJlFs.png";

export default function ProductDescription() {
  return (
    <div>
      <div className="flex sm:gap-6 gap-2 py-6 sm:py-0 justify-center">
        <a className="sm:p-6 text-[#737373] text-sm font-semibold">
          Description
        </a>
        <a className="sm:p-6 text-[#737373] text-sm font-bold">
          Additional Information
        </a>
        <a className="flex gap-4 sm:p-6 text-[#737373] text-sm font-semibold">
          Reviews
          <p className="text-[#23856D]">(0)</p>
        </a>
      </div>
      <hr className="text-[#BDBDBD]  py-4" />
      <div>
        <div>
          <div className="mobile-col-flex items-center sm:items-start gap-[30px]">
            <img className="h-[392px] shadow-xl" src={pic1}></img>
            <div className="flex flex-col gap-[30px] w-[332px] sm:h-[427px]">
              <h5 className="text-2xl font-bold text-[#252B42]">
                the quick fox jumps over{" "}
              </h5>
              <div className="flex flex-col gap-4 text-sm font-normal text-[#737373]">
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>{" "}
                <p>
                  Met minim Mollie non desert Alamoest sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[25px] w-[332px] h-[367px]">
              <div className="flex flex-col gap-[30px]">
                <h5 className="font-bold text-2xl text-[#252B42]">
                  the quick fox jumps over{" "}
                </h5>
                <div className="flex flex-col gap-2">
                  <li className="font-bold text-sm text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="font-bold text-sm text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="font-bold text-sm text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="font-bold text-sm text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="font-bold text-sm text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </li>
                </div>
              </div>
              <div className="flex flex-col gap-[30px]">
                <h5 className="font-bold text-2xl text-[#252B42]">
                  the quick fox jumps over{" "}
                </h5>
                <div className="flex flex-col gap-2">
                  <li className="font-bold text-sm text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="font-bold text-sm text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </li>
                  <li className="font-bold text-sm text-[#737373]">
                    the quick fox jumps over the lazy dog
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
