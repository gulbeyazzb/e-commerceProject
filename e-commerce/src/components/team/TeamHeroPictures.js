import React from "react";
import hero1 from "../../Assets/team/hero1.png";
import hero2 from "../../Assets/team/hero2.png";
import hero3 from "../../Assets/team/hero3.png";
import hero4 from "../../Assets/team/hero4.png";
import hero5 from "../../Assets/team/hero5.png";

export default function TeamHeroPictures() {
  return (
    <div className="w-full">
      <div className="flex gap-2">
        <img src={hero1} className="w-[700px] h-[530px]"></img>
        <div className="flex flex-col gap-2">
          <img src={hero2} className="w-[400px] h-[260px]"></img>
          <img src={hero3} className="w-[400px] h-[260px]"></img>
        </div>
        <div className="flex flex-col gap-2">
          <img src={hero4} className="w-[400px] h-[260px]"></img>
          <img src={hero5} className="w-[400px] h-[260px]"></img>
        </div>
      </div>
    </div>
  );
}
