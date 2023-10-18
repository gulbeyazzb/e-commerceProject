import React from "react";
import demo from "../../Assets/about/demo.mp4";

export const AboutVideo = () => {
  return (
    <div className=" relative z-0 ">
      <video className="relative z-0 h-full w-full rounded-lg" controls>
        <source src={demo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <i class="absolute bx bx-play text-8xl text-white"></i>
    </div>
  );
};
