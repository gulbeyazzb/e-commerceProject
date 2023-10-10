import most from "../Assets/mostPopular/unsplash_X5BWooeO4Cw.png";
import product from "../Assets/mostPopular/printed-summer-dress (4) 1.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function MostPopularProducts() {
  return (
    <div className="py-[48px] container m-auto">
      <div className="flex mb-8">
        <div>
          <img className="w-[674px] h-[649px]" src={most}></img>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 h-[649px] w-[400px] text-center bg-[#FAFAFA]">
          <h5 className="text-[#252B42] font-bold text-2xl">MOST POPULAR</h5>
          <p className="font-normal text-sm text-[#737373] w-[280px]">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>

          <img src={product}></img>
          <Link
            className="font-bold text-sm text-[#252B42]"
            exact
            to="/english-department"
          >
            English Department
          </Link>
          <div className="flex">
            <h5 className="font-bold text-base text-[#BDBDBD]">$16.48</h5>
            <h5 className="font-bold text-base text-[#23856D]">$16.48</h5>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center ">
        <div className="flex">
          <div className="text-[#E74040] font-bold text-[40px] me-2">1.</div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold text-sm text-[#252B42]">Easy to use</p>
            <p className="font-normal text-xs text-[#737373]">
              Things on a very small that you have any direct
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="text-[#E74040] font-bold text-[40px] me-2">2.</div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold text-sm text-[#252B42]">Easy to use</p>
            <p className="font-normal text-xs text-[#737373]">
              Things on a very small that you have any direct
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="text-[#E74040] font-bold text-[40px] me-2">3.</div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold text-sm text-[#252B42]">Easy to use</p>
            <p className="font-normal text-xs text-[#737373]">
              Things on a very small that you have any direct
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="text-[#E74040] font-bold text-[40px] me-2">4.</div>
          <div className="flex flex-col gap-[5px]">
            <p className="font-bold text-sm text-[#252B42]">Easy to use</p>
            <p className="font-normal text-xs text-[#737373]">
              Things on a very small that you have any direct
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
