import React from "react";
import hero1 from "../../Assets/team/hero1.png";
import hero2 from "../../Assets/team/hero2.png";
import hero3 from "../../Assets/team/hero3.png";
import hero4 from "../../Assets/team/hero4.png";
import hero5 from "../../Assets/team/hero5.png";

export default function TeamHeroPictures() {
  return (
    <div>
      <div className="mobile-col-flex gap-2">
        <img src={hero1}></img>
        <div className="flex flex-row sm:flex-col flex-1 sm:gap-2 gap-1">
          <img src={hero2} className=""></img>
          <img src={hero3} className=""></img>
        </div>
        <div className="flex flex-row sm:flex-col flex-1 sm:gap-2 gap-1">
          <img src={hero4} className=""></img>
          <img src={hero5} className=""></img>
        </div>
      </div>
    </div>
  );
}
