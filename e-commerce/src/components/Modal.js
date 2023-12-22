import { Card } from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";

const Modal = ({
  errors,
  spinner,
  register,
  changeOptionHandle,
  editOpen,
  SetEditOpen,
  handleSubmit,
  onFormSubmit,
}) => {
  const editAddress = useSelector(
    (store) => store.shoppingCart.updateAddress[0]
  );

  const changeHandle = (e) => {
    console.log(e.target);
  };
  return (
    <div className="w-[2000px] ">
      {editOpen ? (
        <>
          <div className="bg-opacity-50 bg-black w-full flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => SetEditOpen(false)}
                  >
                    <span className="text-red-600 opacity-7 h-6 w-6 text-2xl block rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="w-full relative p-2 flex-auto">
                  <form
                    onSubmit={handleSubmit(onFormSubmit)}
                    className="flex flex-col "
                  >
                    <div className="flex flex-col sm:w-4/4 w-full">
                      <div className=" flex flex-col ">
                        <label className="font-bold text-xl" htmlFor="title">
                          Address Title
                        </label>
                        <input
                          htmlFor="title"
                          value={editAddress?.title}
                          onChange={changeHandle}
                          name="title"
                          className="p-4 rounded-md border border-[#DADADA] text-black"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between gap-1">
                      <div className=" flex flex-col sm:w-2/3 w-full">
                        <label className="font-bold text-xl p-3">Name</label>
                        <input
                          value={editAddress?.name}
                          className="p-4 rounded-md border border-[#DADADA] text-black"
                          type="text"
                        />
                      </div>
                      <div className=" flex flex-col sm:w-2/3 w-full">
                        <label className="font-bold text-xl p-3">Surname</label>
                        <input
                          value={editAddress?.surname}
                          className="p-4 rounded-md border border-[#DADADA] text-black"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between gap-1">
                      <div className=" flex flex-col sm:w-2/3 w-full ">
                        <label className="font-bold text-xl p-3">Phone</label>
                        <input
                          value={editAddress?.phone}
                          className={`p-4 rounded-md border border-[#DADADA] text-black`}
                          type="text"
                        />
                      </div>
                      <div className="sm:w-2/3 w-full flex flex-col">
                        <label className="font-bold text-xl p-3">City</label>
                        <select
                          className="p-4 rounded-md border border-[#DADADA] text-black"
                          onClick={(e) => changeOptionHandle(e)}
                        >
                          <option
                            key="1"
                            value="Samsun"
                            className=" text-lg font-bold"
                            selected
                          >
                            Samsun
                          </option>
                          <option
                            key="2"
                            value="Antalya"
                            className=" text-lg font-bold"
                          >
                            Antalya
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-between gap-1">
                      <div className="sm:w-2/3 w-full flex flex-col ">
                        <label className="font-bold text-xl p-3">
                          District
                        </label>
                        <select className="p-4 rounded-md border border-[#DADADA] text-black">
                          <option
                            key="1"
                            value="ilkadim"
                            className=" text-lg font-bold"
                          >
                            İlkadım
                          </option>
                          <option
                            key="2"
                            value="atakum"
                            className=" text-lg font-bold"
                            selected
                          >
                            Atakum
                          </option>
                        </select>
                      </div>
                      <div className="sm:w-2/3 w-full flex flex-col ">
                        <label className="font-bold text-xl p-3">
                          Neighborhood
                        </label>
                        <input
                          value={editAddress?.neighborhood}
                          className="p-4 rounded-md border border-[#DADADA] text-black"
                        />
                      </div>
                    </div>

                    <div className="sm:w-4/4 w-full flex flex-col ">
                      <label className="font-bold text-xl p-3">Address</label>
                      <input
                        value={editAddress?.address}
                        type="text"
                        className="p-4 rounded-md border border-[#DADADA] text-black"
                      />
                    </div>
                    <button
                      className="flex justify-center hover:border-orange-700 hover:border hover:text-black bg-orange-700 text-white px-6 py-3 rounded-md text-xl  mt-6 hover:bg-white cursor-pointer text-center"
                      type="submit"
                      disabled={spinner}
                    >
                      {spinner ? <Spinner className="text-center" /> : "Submit"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Modal;
