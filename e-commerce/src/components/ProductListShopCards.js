import banner1 from "../Assets/clothes/media bg-cover.png";
import banner2 from "../Assets/clothes/card-cover-5 (2).png";
import banner3 from "../Assets/clothes/media bg-cover (1).png";
import banner4 from "../Assets/clothes/media bg-cover (2).png";
import banner5 from "../Assets/clothes/media bg-cover (3).png";
const ProductListShopCards = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="container m-auto ">
        <div className="row flex p-6 gap-4 justify-center items-center text-white text-center">
          <div className="col-md-4 w-[332px] h-[232px]">
            <div className="relative">
              <img className="relative z-0 " src={banner1}></img>
              <div className=" absolute z-50  top-[40%] left-[30%] ">
                <h2 className="text-base font-bold">CLOTHS</h2>
                <h6 className="text-sm font-normal">5 Items</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 w-[332px] h-[232px]">
            <div className="relative">
              <img className="relative z-0" src={banner2}></img>
              <div className=" absolute z-50   top-[40%] left-[30%] ">
                <h2 className="text-base font-bold ">CLOTHS</h2>
                <h6 className="text-sm font-normal">5 Items</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 w-[332px] h-[232px]">
            <div className="relative">
              <img className="relative z-0" src={banner3}></img>
              <div className=" absolute z-50  top-[40%] left-[30%] ">
                <h2 className="text-base font-bold ">CLOTHS</h2>
                <h6 className="text-sm font-normal">5 Items</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 w-[332px] h-[232px]">
            <div className="relative">
              <img className="relative z-0" src={banner4}></img>
              <div className=" absolute z-50  top-[40%] left-[30%] ">
                <h2 className="text-base font-bold ">CLOTHS</h2>
                <h6 className="text-sm font-normal">5 Items</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 w-[332px] h-[232px]">
            <div className="relative">
              <img className="relative z-0" src={banner5}></img>
              <div className=" absolute z-50  top-[40%] left-[30%] ">
                <h2 className="text-base font-bold ">CLOTHS</h2>
                <h6 className="text-sm font-normal">5 Items</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListShopCards;
