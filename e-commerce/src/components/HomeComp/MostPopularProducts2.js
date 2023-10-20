import most from "../../Assets/mostPopular/unsplash_X5BWooeO4Cw (1).png";
import product from "../../Assets/mostPopular/printed-summer-dress (4) 1 (1).png";
import { Link } from "react-router-dom";

export default function MostPopularProducts2() {
  return (
    <div className="flex flex-col gap-[30px] py-12">
      <div className="mobile-col-flex ">
        <div className="inline-block sm:hidden">
          <img className="w-[600px] h-[630px]" src={most}></img>
        </div>
        <div className="flex flex-col items-center justify-center py-20 gap-[19px] h-[630px] w-[400px] text-center sm:bg-[#FAFAFA]">
          <h5 className="text-[#252B42] font-bold text-2xl">MOST POPULAR</h5>
          <p className="font-normal text-sm text-second-text w-[280px]">
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

          <div className="flex items-center text-second-text gap-1">
            <i class="bx bx-download h-4 w-4"></i>
            <p className="font-bold text-sm ">15 Sales</p>
          </div>
          <div className="flex">
            <h5 className="font-bold text-base text-[#BDBDBD]">$6.48</h5>
            <h5 className="font-bold text-base text-[#23856D]">$6.48</h5>
          </div>
          <div>
            <button>
              <i class="bx bxs-circle text-primary-color"></i>
            </button>
            <button>
              <i class="bx bxs-circle text-[#23856D]"></i>
            </button>
            <button>
              <i class="bx bxs-circle text-[#E77C40]"></i>
            </button>
            <button>
              <i class="bx bxs-circle text-[#252B42]"></i>
            </button>
          </div>
        </div>
        <div className="hidden sm:inline-block">
          <img className="w-[600px] h-[630px]" src={most}></img>
        </div>
      </div>
    </div>
  );
}
