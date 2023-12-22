import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { API } from "../api/api";
import { Dialog, Card } from "@material-tailwind/react";
import {
  fetchAddressThunkAction,
  setAddressThunkAction,
  setSelectedAddress,
} from "../store/actions/shoppingCartAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Payment = ({ selectAddressHandle }) => {
  const [creditOpen, setCreditOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(true);

  const clickHandlePaymentMethod = (e) => {
    if (e.target.id == "credit") {
      setCreditOpen(true);
      setCardOpen(false);
    }
    if (e.target.id == "card") {
      setCreditOpen(false);
      setCardOpen(true);
    }
  };

  return (
    <div className="w-[1140px] m-auto">
      <div className=" mx-16 flex flex-col my-4">
        <label className="border border-b-2 p-4 text-black font-bold text-lg ">
          <input
            className="me-4"
            type="radio"
            name="address"
            id="card"
            onClick={clickHandlePaymentMethod}
            defaultChecked
          />
          Pay By Card
          <p className="text-xs">
            You chose to pay by card. You can make your payment safely using
            Debit or Credit Card.
          </p>
        </label>

        {cardOpen && (
          <div className="shadow-lg border-gray-400 text-gray-600 p-6">
            <div className="w-[48%] flex justify-between">
              <p className="">Card Information</p>
              <button className="underline text-xs">Pay by other card</button>
            </div>
          </div>
        )}

        <label className=" border border-b-2 p-4 text-black font-bold text-lg ">
          <input
            className="me-4"
            type="radio"
            name="address"
            id="credit"
            onClick={clickHandlePaymentMethod}
          />
          Pay By Shopping Credit
        </label>
      </div>
    </div>
  );
};

export default Payment;
