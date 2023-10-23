import { shopCards } from "../../mocks/productList/shopCards";

const ProductListShopCards = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className=" flex justify-center">
        <div className="mobile-col-flex sm:gap-[10px] gap-[18px] sm:pb-12 items-center text-white text-center ">
          {shopCards.map((card) => (
            <div>
              <div className="relative">
                <img className="relative z-0 " src={card.src}></img>
                <div className=" absolute z-50  top-[40%] left-[30%] ">
                  <h2 className="text-base font-bold">{card.heading}</h2>
                  <h6 className="text-sm font-normal">{card.subHeading}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListShopCards;
