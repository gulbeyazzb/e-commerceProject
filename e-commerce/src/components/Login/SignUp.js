import { useForm } from "react-hook-form";
import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { Spinner } from "@material-tailwind/react";
import FormInput from "../atoms/FormInput";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchRolesActionCreator } from "../../store/actions/globalAction";
import { useDispatch, useSelector } from "react-redux";

import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import { useAxios } from "../../hooks/useAxios";

const Signup = () => {
  const [sellerRole, setSellerRole] = useState(false);
  const [spinner, setSpinner] = useState(false);
  // const dispatch = useDispatch();
  const [getRoles, roleData, loading, err] = useAxios({
    reqType: "get",
    endpoint: "roles",
  });
  const [roles, setRoles] = useState();

  // const roles = useSelector((store) => store.global.roles);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: [],
      email: "",
      password: "",
      role_id: "3",
      store: { name: "", tax_no: "", bank_account: "" },
    },
    mode: "onChange",
  });

  const push = useHistory();

  const onFormSubmit = (formData) => {
    setSpinner(true);
    console.log(formData);
    axiosWithAuth()
      .post("signup", formData)
      .then((res) => {
        console.log(res);
        toast(res.data.message);
        setTimeout(() => {
          push.push("/");
        }, 2000);
      })
      .catch((err) => {
        setSpinner(false);
        console.error(err);
        toast.error("Login olurken bir hata ile karşılaşıldı!");
      });
  };

  const changeOptionHandle = (e) => {
    const selectedId = e.target.value;
    selectedId === "2" ? setSellerRole(true) : setSellerRole(false);
  };

  useEffect(() => {
    getRoles()
      .then((res) => {
        console.log(res);
        setRoles(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="sm:w-[1050px] w-full m-auto py-12 flex flex-col justify-center items-center gap-4">
      <ToastContainer />

      <i className="bx bx-lock px-4 py-3 bg-primary-color rounded-full text-3xl text-center"></i>
      <h1 className="font-bold text-2xl ">Sign Up</h1>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className=" container m-auto  flex flex-col justify-center items-center px-2 "
      >
        <div className="flex sm:flex-row flex-col gap-4 w-full container m-auto justify-center items-center">
          <FormGroup className="sm:w-[35rem] w-full flex flex-col ">
            <Label className="font-bold text-xl p-3">Name:</Label>
            <FormInput
              autoFocus
              placeholder="Name"
              className="p-4 rounded-md border border-[#DADADA] text-black"
              type="text"
              name={"name"}
              register={register}
              validations={{
                required: "Name is required!",
                minLength: {
                  value: 3,
                  message: "At least 3 char is must be",
                },
              }}
              invalid={!!errors.name?.message}
            />
            <FormFeedback className="text-red-600">
              {errors.name?.message}
            </FormFeedback>
          </FormGroup>
        </div>
        <FormGroup className=" flex flex-col sm:w-[35rem] w-full ">
          <Label className="font-bold text-xl p-3">E-mail:</Label>
          <FormInput
            placeholder="E-mail"
            className="p-4 rounded-md border border-[#DADADA] text-black"
            type="email"
            register={register}
            name={"email"}
            validations={{
              required: "Email is required!",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Email is not valid",
              },
            }}
            invalid={!!errors.email?.message}
          />
          <FormFeedback className="text-red-600">
            {errors.email?.message}
          </FormFeedback>
        </FormGroup>
        <FormGroup className=" flex flex-col sm:w-[35rem] w-full ">
          <Label className="font-bold text-xl p-3">Password:</Label>
          <FormInput
            placeholder="Password"
            className="p-4 rounded-md border border-[#DADADA] text-black"
            type="password"
            name={"password"}
            register={register}
            validations={{
              required: "Password is required.",
              minLength: {
                value: 8,
                message: "Must be at least 8 characters",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,
                message:
                  "Your password must contain uppercase letters, lowercase letters, numbers and special characters.",
              },
            }}
            invalid={!!errors.password?.message}
          />
          <FormFeedback className="text-red-600">
            {errors.password?.message}
          </FormFeedback>
        </FormGroup>

        <FormGroup className="flex flex-col sm:w-[35rem] w-full ">
          <Label className="font-bold text-xl p-3">Role:</Label>

          <select
            className="p-4 rounded-md border border-[#DADADA] text-black"
            {...register("role_id")}
            onClick={(e) => changeOptionHandle(e)}
          >
            {roles?.map((roleData) => (
              <option
                key={roleData.id}
                value={roleData.id}
                className=" text-lg font-bold"
              >
                {roleData.name}
              </option>
            ))}
          </select>
        </FormGroup>
        {sellerRole && (
          <div className="sm:w-[1050px] w-full flex flex-col justify-center items-center gap-4">
            <FormGroup className=" flex flex-col sm:w-[35rem] w-full ">
              <Label className="font-bold text-xl p-3">Store Name:</Label>
              <input
                placeholder="Store Name"
                className="p-4 rounded-md border border-[#DADADA] text-black"
                type="text"
                name={"name"}
                {...register("store.name", {
                  validations: {
                    required: "Store name is required!",
                    minLength: {
                      value: 3,
                      message: "At least 3 characters must be entered",
                    },
                  },
                })}
              />
              <FormFeedback className="text-red-600">
                {errors.storeName?.message}
              </FormFeedback>
            </FormGroup>
            <FormGroup className=" flex flex-col sm:w-[35rem] w-full ">
              <Label className="font-bold text-xl p-3">Store Tax ID:</Label>
              <input
                placeholder="TXXXXVXXXXXX"
                className="p-4 rounded-md border border-[#DADADA] text-black"
                type="text"
                name={"tax_no"}
                {...register("store.tax_no", {
                  validations: {
                    required: "Tax ID is required!",
                    pattern: {
                      value: "/^Td{4}Vd{6}$/",
                      message: "TAX ID is not valid",
                    },
                  },
                })}
                invalid={!!errors.tax_no?.message}
              />
              <FormFeedback className="text-red-600">
                {errors.tax_no?.message}
              </FormFeedback>
            </FormGroup>
            <FormGroup className=" flex flex-col sm:w-[35rem] w-full ">
              <Label className="font-bold text-xl p-3">Iban:</Label>
              <input
                placeholder="TRXXXXXXXXXXXXXXXXXXXXXXXX"
                className="p-4 rounded-md border border-[#DADADA] text-black"
                type="text"
                {...register("store.bank_account", {
                  validations: {
                    required: "Iban is required!",
                    pattern: {
                      value:
                        "/TR[a-zA-Z0-9]{2}s?([0-9]{4}s?){1}([0-9]{1})([a-zA-Z0-9]{3}s?)([a-zA-Z0-9]{4}s?){3}([a-zA-Z0-9]{2})s?/",
                      message: "Iban is not valid",
                    },
                  },
                })}
                invalid={!!errors.bank_account?.message}
              />
              <FormFeedback className="text-red-600">
                {errors.bank_account?.message}
              </FormFeedback>
            </FormGroup>
          </div>
        )}

        <button
          className="flex justify-center items-center bg-primary-color px-6 py-3 rounded-md text-xl sm:w-[35rem] w-full  mt-6 hover:bg-[rgba(35,165,240,0.79)] cursor-pointer text-center"
          type="submit"
          formNoValidate="formnovalidate"
          disabled={spinner}
        >
          {spinner ? <Spinner className="text-center" /> : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
