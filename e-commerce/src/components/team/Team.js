import React from "react";
import { TeamData } from "../../mocks/AboutData/TeamData";

const Team = () => {
  return (
    <div>
      <div className="flex flex-col gap-28 text-[#252B42] text-center items-center py-28">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[40px]">Meet Our Team</h1>
          <h6 className="font-normal text-sm w-[469px] m-auto">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </h6>
        </div>
        <div className="flex flex-wrap gap-[30px]  ">
          {TeamData.map((data) => (
            <div className="w-[316px] m-auto font-bold mb-10">
              <img className="w-[316px] h-[231px]" src={data.img}></img>
              <div className="flex flex-col gap-[10px] p-[30px]">
                <h5 className="text-base">{data.header}</h5>
                <h6 className="text-sm">{data.role}</h6>
                <div className="flex gap-5 justify-center text-[#23A6F0]">
                  <a href={data.facebook}>
                    {" "}
                    <i class="bx bxl-facebook-circle text-2xl"></i>
                  </a>
                  <a href={data.instagram}>
                    {" "}
                    <i class="bx bxl-instagram text-2xl"></i>
                  </a>
                  <a href={data.twitter}>
                    {" "}
                    <i class="bx bxl-twitter text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Team;
