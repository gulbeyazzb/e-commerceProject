import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {
  setTotalPriceAction,
  updateQuantityThunkAction,
  updateTotalPriceAction,
} from "../store/actions/shoppingCartAction";
import { Checkbox } from "@material-tailwind/react";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((store) => store.shoppingCart.cartList);

  const updateQuantityHandle = (e, id) => {
    const updateType = e.target.id;
    dispatch(updateQuantityThunkAction({ updateType, id }));
  };

  useEffect(() => {
    dispatch(setTotalPriceAction());
  }, [cartProducts, dispatch]);

  const { totalAmount } = useSelector((store) => store.shoppingCart);

  const checkHandle = (e) => {
    const id = e.target.id;
    const checkedState = e.target.checked;
    console.log(id, checkedState);
    dispatch(updateTotalPriceAction({ checkedState, id }));
    dispatch(setTotalPriceAction());
  };

  return (
    <div className="h-full">
      <div className=" w-full  sm:my-28 sm:w-[1050px] m-auto rounded-md bg-white shadow-lg  text-gray-600">
        {cartProducts?.map((p) => (
          <div className="flex flex-col p-2 ">
            <div className="flex gap-2 w-full justify-between">
              <Checkbox defaultChecked id={p.id} onClick={checkHandle} />
              <img src={p?.images[0].url} className="w-20 py-2"></img>
              <div className="flex flex-col pt-3 w-3/4">
                <h5 className="pb-3 font-bold text-base text-black">
                  {p.name}
                </h5>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <button
                      id="increment"
                      onClick={(e) => updateQuantityHandle(e, p.id)}
                      className="text-2xl"
                    >
                      +
                    </button>
                    <span className="text-base text-center border border-solid p-2 px-3">
                      {p.productQuantity}
                    </span>
                    <button
                      id="decrement"
                      onClick={(e) => updateQuantityHandle(e, p.id)}
                      className="text-2xl"
                    >
                      -
                    </button>
                  </div>
                  <span className=" text-base ">
                    {p.productQuantity * p.price} TL
                  </span>
                </div>
              </div>{" "}
            </div>{" "}
            <hr className=" w-full text-white font-extrabold text-5xl" />
          </div>
        ))}
        {cartProducts.length > 0 && (
          <div className="flex flex-end flex-col">
            <span className="text-right font-bold text-black my-3">
              Total: {totalAmount}
            </span>
            <Button className="w-80 sm:w-full m-auto bg-orange-800 ">
              CHECKOUT
            </Button>
          </div>
        )}
      </div>
      {cartProducts.length == 0 && (
        <NavLink
          to="/shopping"
          className="flex mt-20 opacity-75 justify-center items-center w-80 sm:w-[1050px] m-auto text-white p-4 text-3xl font-bold bg-orange-900 text-center rounded-2xl shadow-lg"
        >
          Basket is empty! Let's Shop{" "}
          <i className="bx bxs-chevron-right w-40 text-2xl"></i>
        </NavLink>
      )}
    </div>
  );
}
