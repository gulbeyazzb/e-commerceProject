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

const OrderPage = () => {
  const [spinner, setSpinner] = useState(false);
  const [city, setCity] = useState(true);
  //const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState(false);
  //const [selectedAddress, setSelectedAddress] = useState();
  const dispatch = useDispatch();
  const addresses = useSelector((store) => store.shoppingCart.address);
  const selectedAddress = useSelector(
    (store) => store.shoppingCart.selectedAddress[0]
  );

  console.log("selected", selectedAddress);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    },
    mode: "onChange",
  });

  const changeOptionHandle = (e) => {
    const selectedId = e.target.value;
    selectedId === "samsun" ? setCity(true) : setCity(false);
  };

  const onFormSubmit = (formData) => {
    setSpinner(true);
    dispatch(setAddressThunkAction(formData));
    setTimeout(() => {
      setNewAddress(false);
      setSpinner(false);
    }, 1000);
  };

  const selectAddressHandle = (e) => {
    dispatch(setSelectedAddress(e.target.id));
  };

  useEffect(() => {
    API.get("user/address").then((res) => setSelectedAddress(res.data[0]));
  }, []);

  useEffect(() => {
    dispatch(fetchAddressThunkAction());
  }, [newAddress]);

  return (
    <div className="w-full">
      <ToastContainer />
      <div className="mx-12 flex justify-center gap-4">
        <div className="border border-b-4 border-b-orange-700 border-gray-400 text-gray-600 pt-3 bg-gray-100 shadow-lg p-6 rounded-md text-xl w-[48%]  ">
          <h1 className="text-3xl font-extrabold text-orange-700">Address</h1>
          <div className="flex flex-col gap-4 ">
            <div className="flex justify-between items-center">
              <h5 className="py-3 font-bold text-base flex items-center text-black gap-1">
                <i className="bx bxs-user text-orange-700 h-full text-lg"></i>{" "}
                {selectedAddress?.name + " " + selectedAddress?.surname}
              </h5>
              <h5 className="py-3 font-bold text-base flex items-center text-black gap-1">
                <i className="bx bxs-phone h-full text-lg"></i>{" "}
                {selectedAddress?.phone}
              </h5>
            </div>
            <div className="flex flex-col">
              <p className="text-base ">{selectedAddress?.address}</p>
              <span className=" text-base  ">
                {selectedAddress?.district + "/" + selectedAddress?.city}
              </span>
            </div>
          </div>
        </div>

        <div className="border border-gray-400 text-gray-600 pt-3 bg-gray-300 shadow-lg p-6 rounded-md text-xl w-[48%]  ">
          <h1 className="text-3xl font-extrabold text-gray-600">Payment</h1>
          <div className="flex flex-col gap-4 ">
            <h5 className="py-3 font-bold text-base flex items-center text-gray-500 gap-1">
              aaa
            </h5>
          </div>
        </div>
      </div>
      <div className="mx-16 mb-16 shadow-xl shadow-blue-gray-300 border-light-green-50 ">
        <h1 className="text-lg font-extrabold p-10">Delivery Address</h1>
        <div className="flex flex-col pb-10 px-10 justify-between">
          <button
            className="border border-gray-400 text-gray-600 pt-3 bg-gray-100 shadow-lg p-20 rounded-md text-xl w-[48%] cursor-pointer text-center"
            formNoValidate="formnovalidate"
            disabled={spinner}
            onClick={() => setNewAddress(true)}
          >
            {spinner ? <Spinner className="text-center" /> : "Add New Address"}
          </button>
          <div className="flex flex-wrap justify-between">
            {addresses?.map((address) => (
              <label className="w-[48%]" htmlFor={address.id}>
                <input
                  //{...register("address")}
                  type="radio"
                  name="address"
                  value={address.title}
                  id={address.id}
                  onClick={selectAddressHandle}
                />
                {address.title}
                <div htmlFor={address.id}>
                  <div className="flex flex-col gap-4 text-gray-600 pt-3 bg-gray-100 shadow-lg p-6 rounded-md">
                    <div className="flex justify-between items-center">
                      <h5 className="py-3 font-bold text-base flex items-center text-black gap-1">
                        <i className="bx bxs-user text-orange-700 h-full text-lg"></i>{" "}
                        {address.name + " " + address.surname}
                      </h5>
                      <h5 className="py-3 font-bold text-base flex items-center text-black gap-1">
                        <i className="bx bxs-phone h-full text-lg"></i>{" "}
                        {address.phone.slice(0, 3) +
                          "**********" +
                          address.phone.slice(8, 10)}
                      </h5>
                    </div>
                    <div className="flex flex-col justify-start">
                      <p className="text-base ">{address.address}</p>
                      <span className=" text-base  ">
                        {address.district + "/" + address.city}
                      </span>
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
      <Dialog
        size="md"
        className="shadow-none bg-transparent"
        open={newAddress}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <Card className="w-full">
          <i
            className="bx bx-x text-red-800 text-3xl cursor-pointer text-center"
            onClick={() => setNewAddress(false)}
          ></i>
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="flex flex-col px-2 py-2 "
          >
            <div className="flex flex-col sm:w-4/4 w-full">
              <div className=" flex flex-col ">
                <label className="font-bold text-xl p-3">Address Title</label>
                <input
                  autoFocus
                  placeholder="Address Title"
                  className="p-4 rounded-md border border-[#DADADA] text-black"
                  {...register("title")}
                />
              </div>
            </div>

            <div className="flex justify-between gap-1">
              <div className=" flex flex-col sm:w-2/3 w-full">
                <label className="font-bold text-xl p-3">Name</label>
                <input
                  placeholder="Name"
                  className="p-4 rounded-md border border-[#DADADA] text-black"
                  type="text"
                  {...register("name", {
                    required: "Name is required!",
                    minLength: {
                      value: 3,
                      message: "At least 3 char is must be",
                    },
                  })}
                  invalid={!!errors.name?.message}
                />
                <span className="text-red-600">{errors.name?.message}</span>
              </div>
              <div className=" flex flex-col sm:w-2/3 w-full">
                <label className="font-bold text-xl p-3">Surname</label>
                <input
                  placeholder="Surname"
                  className="p-4 rounded-md border border-[#DADADA] text-black"
                  type="text"
                  {...register("surname", {
                    required: "surname is required!",
                    minLength: {
                      value: 3,
                      message: "At least 3 char is must be",
                    },
                  })}
                  invalid={!!errors.surname?.message}
                />
                <span className="text-red-600">{errors.surname?.message}</span>
              </div>
            </div>

            <div className="flex justify-between gap-1">
              <div className=" flex flex-col sm:w-2/3 w-full ">
                <label className="font-bold text-xl p-3">Phone</label>
                <input
                  placeholder="555 555 55 55"
                  className={`p-4 rounded-md border border-[#DADADA] text-black`}
                  type="text"
                  {...register("phone", {
                    required: "phone is required.",
                    maxLength: {
                      value: 10,
                      message: "Must be at most 10 characters",
                    },
                  })}
                />
                <div className="text-red-600 invalid-feedback">
                  {errors.phone?.message}
                </div>
              </div>
              <div className="sm:w-2/3 w-full flex flex-col">
                <label className="font-bold text-xl p-3">City</label>
                <select
                  className="p-4 rounded-md border border-[#DADADA] text-black"
                  {...register("city")}
                  onClick={(e) => changeOptionHandle(e)}
                >
                  <option key="1" value="samsun" className=" text-lg font-bold">
                    Samsun
                  </option>
                  <option
                    key="2"
                    value="antalya"
                    className=" text-lg font-bold"
                  >
                    Antalya
                  </option>
                </select>
                <div className="text-red-600">{errors.city?.message}</div>
              </div>
            </div>

            <div className="flex justify-between gap-1">
              <div className="sm:w-2/3 w-full flex flex-col ">
                <label className="font-bold text-xl p-3">District</label>
                <select
                  className="p-4 rounded-md border border-[#DADADA] text-black"
                  {...register("district")}
                >
                  <option key="1" value="samsun" className=" text-lg font-bold">
                    İlkadım
                  </option>
                  <option key="2" value="samsun" className=" text-lg font-bold">
                    Atakum
                  </option>
                </select>
                <div className="text-red-600">{errors.district?.message}</div>
              </div>
              <div className="sm:w-2/3 w-full flex flex-col ">
                <label className="font-bold text-xl p-3">Neighborhood</label>
                <input
                  placeholder="Neighborhood"
                  className="p-4 rounded-md border border-[#DADADA] text-black"
                  {...register("neighborhood", {
                    required: "Neighborhood is required!",
                  })}
                  invalid={!!errors.neighborhood?.message}
                />
                <div className="text-red-600">
                  {errors.neighborhood?.message}
                </div>
              </div>
            </div>

            <div className="sm:w-4/4 w-full flex flex-col ">
              <label className="font-bold text-xl p-3">Address</label>
              <input
                type="text"
                placeholder="address"
                className="p-4 rounded-md border border-[#DADADA] text-black"
                {...register("address", {
                  required: "Address is required!",
                })}
                invalid={!!errors.address?.message}
              />
              <div className="text-red-600">{errors.address?.message}</div>
            </div>

            <button
              className="flex justify-center hover:border-orange-700 hover:border hover:text-black bg-orange-700 text-white px-6 py-3 rounded-md text-xl  mt-6 hover:bg-white cursor-pointer text-center"
              type="submit"
              formNoValidate="formnovalidate"
              disabled={spinner}
            >
              {spinner ? <Spinner className="text-center" /> : "Submit"}
            </button>
          </form>
        </Card>
      </Dialog>
    </div>
  );
};

export default OrderPage;
