import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";

export default function CartPage() {
  const [open, setOpen] = useState(false);
  const cartProducts = useSelector((store) => store.shoppingCart.cartList);

  return (
    <div>
      <div className=" w-auto my-28  sm:w-[1050px] m-auto rounded-md bg-white shadow-lg  text-gray-600">
        {cartProducts?.map((p) => (
          <div className="flex flex-col p-2 ">
            <div className="flex gap-2 w-full justify-between">
              <img src={p?.images[0].url} className="w-20 py-2"></img>
              <div className="flex flex-col pt-3 w-3/4">
                <h5 className="pb-3 font-bold text-base text-black">
                  {p.name}
                </h5>
                <div className="flex justify-between">
                  <span className="text-base text-center ">
                    count: {p.productQuantity}
                  </span>
                  <span className=" text-base ">
                    {p.productQuantity * p.price} TL
                  </span>
                </div>
              </div>{" "}
            </div>{" "}
            <hr className=" w-full text-white font-extrabold text-5xl" />
          </div>
        ))}
        <Button className="h-full w-full bg-orange-800 ">Go To Pay</Button>
      </div>
    </div>
  );
}
