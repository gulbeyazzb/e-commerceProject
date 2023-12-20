import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {
  deleteProductFromCartAction,
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

  const deleteProductFromCart = (id) => {
    dispatch(deleteProductFromCartAction(id));
  };

  return (
    <div>
      <div className=" flex justify-between sm:w-[1250px] m-auto gap-10">
        <div className="w-3/4 sm:my-20  m-auto rounded-md bg-white shadow-lg  text-gray-600">
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
                      <button onClick={() => deleteProductFromCart(p.id)}>
                        <i class="bx bx-trash h-full" id={p} />
                      </button>
                    </div>
                    <span className=" text-base ">
                      {(p.productQuantity * p.price).toFixed(2)} TL
                    </span>
                  </div>
                </div>{" "}
              </div>{" "}
              <hr className=" w-full text-white font-extrabold text-5xl" />
            </div>
          ))}
          {cartProducts.length > 0 && (
            <div className="flex flex-end flex-col">
              <span className="text-right font-bold text-black my-3 me-4">
                Total: {totalAmount.toFixed(2)} TL
              </span>
              <NavLink
                to="/order"
                className="w-80 sm:w-full m-auto bg-orange-800 text-white p-4 rounded-md"
              >
                CHECKOUT
              </NavLink>
            </div>
          )}
        </div>
        {cartProducts.length > 0 && (
          <div className="w-96 mx-auto sm:py-20 ">
            <div className="flex flex-col gap-4 text-gray-600 pt-3 bg-white shadow-lg p-6">
              <h5 className="py-3 font-bold text-base text-black">
                ORDER SUMMARY :
              </h5>
              <div className="flex justify-between">
                <span className="text-base text-center ">Cart Total :</span>
                <span className=" text-base text-black font-bold ">
                  {totalAmount.toFixed(2)} TL
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-base text-center ">Shipping Cost :</span>
                <span className=" text-base text-black font-bold ">30 TL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base text-start w-2/3">
                  Free shipping for orders of 150 TL and above
                </span>
                <span className=" text-base text-orange-700 font-bold ">
                  -30 TL
                </span>
              </div>
              <hr className=" w-full text-white font-extrabold text-5xl" />
              <div className="flex justify-between">
                <span className="text-base text-start w-2/3 text-black font-bold ">
                  TOTAL :
                </span>
                <span className=" text-lg text-orange-700 font-bold ">
                  {totalAmount.toFixed(2)} TL
                </span>
              </div>
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder="discount code"
                  className="text-center w-full p-2 border border-gray-400"
                ></input>
              </div>
              <NavLink
                to="/order"
                className="h-full w-full bg-orange-800 text-white p-4 rounded-md"
              >
                CHECKOUT
              </NavLink>
            </div>
          </div>
        )}
      </div>

      {cartProducts.length == 0 && (
        <NavLink
          to="/shopping"
          className="flex opacity-75 w-80 sm:w-full text-white p-4 text-3xl font-bold bg-orange-900 text-center rounded-2xl shadow-lg"
        >
          Basket is empty! Let's Shop{" "}
          <i className="bx bxs-chevron-right text-2xl"></i>
        </NavLink>
      )}
    </div>
  );
}
