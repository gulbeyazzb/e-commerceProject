import about from "../../Assets/about/technology 1 (1).png";
import { Link } from "react-router-dom";

const AboutHeader = () => {
  return (
    <div className="flex items-center justify-between py-28">
      <div className="flex flex-col gap-4 w-[356px]">
        <h5 className="text-[#252B42] text-base font-bold">ABOUT COMPANY</h5>
        <h1 className="text-[#252B42] text text-[58px] font-bold">ABOUT US</h1>
        <p>We know how large objects will act, but things on a small scale</p>
        <Link
          to="/team"
          className="w-[190px] text-sm font-bold text-white py-[15px] px-10 bg-[#23A6F0]"
        >
          Get Quote Now
        </Link>
      </div>
      <div className="relative z-0">
        <div className="relative z-0 bg-[#FFE9EA] rounded-[100%]  p-52"></div>
        <div className="absolute top-0 bg-[#FFE9EA] rounded-[100%] p-6"></div>
        <div className="absolute bg-[#977DF4] rounded-[100%] p-2"></div>
        <div className="absolute right-0 top-0 bg-[#977DF4] rounded-[100%] p-2"></div>
        <img src={about} className="absolute top-0 left-6"></img>
      </div>
    </div>
  );
};
export default AboutHeader;
