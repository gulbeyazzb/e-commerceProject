import { useForm } from "react-hook-form";
import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { Spinner } from "@material-tailwind/react";
import FormInput from "../atoms/FormInput";
import { ToastContainer, toast } from "react-toastify";
import { loginData } from "../../mocks/loginData/loginData";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

const Signup = () => {
  const [sellerRole, setSellerRole] = useState(false);
  const [roles, setRoles] = useState();
  const [spinner, setSpinner] = useState(false);
  const [getRoles, roleData, loading, err] = useAxios({
    reqType: "get",
    endPoint: "/roles",
  });

  const push = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role_id: "",
      storeName: "",
      taxId: "",
      iban: "",
    },
    mode: "onChange",
  });

  const onFormSubmit = (formData) => {
    setSpinner(true);
    toast("logging in...");
    setTimeout(() => {
      push.push("/");
    }, 2000);

    axiosWithAuth()
      .post("signup", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Login olurken bir hata ile karşılaşıldı!");
      });
  };

  // useEffect(() => {
  //   getRoles()
  //     .then((res) => {
  //       console.log(res.data);
  //       setRoles(res.data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  const changeOptionHandle = (e) => {
    const selectedId = e.target.value;
    selectedId === "role-seller" ? setSellerRole(true) : setSellerRole(false);
  };

  return (
    <div className="w-[1050px] m-auto py-12 flex flex-col justify-center items-center gap-4">
      <ToastContainer />
      {spinner && <Spinner />}

      {!spinner && (
        <>
          <i className="bx bx-lock px-4 py-3 bg-primary-color rounded-full text-3xl text-center"></i>
          <h1 className="font-bold text-2xl ">Sign Up</h1>
          <Form
            onSubmit={handleSubmit(onFormSubmit)}
            className=" container m-auto  flex flex-col justify-center items-center "
          >
            <div className="flex gap-4">
              <FormGroup className="w-[17rem] flex flex-col">
                <Label className="font-bold text-xl p-3">First Name:</Label>
                <FormInput
                  autoFocus
                  placeholder="First Name"
                  className="p-4 rounded-md border border-[#DADADA] text-black"
                  type="firstname"
                  register={register}
                  name={"firstname"}
                  validations={{
                    required: "firstname is required!",
                    minLength: {
                      value: 3,
                      message: "At least 3 char is must be",
                    },
                  }}
                  invalid={!!errors.firstname?.message}
                />
                <FormFeedback className="text-red-600">
                  {errors.firstname?.message}
                </FormFeedback>
              </FormGroup>
              <FormGroup className="w-[17rem] flex flex-col">
                <Label className="font-bold text-xl p-3">Last Name:</Label>
                <FormInput
                  placeholder="Last Name"
                  className="p-4 rounded-md border border-[#DADADA] text-black"
                  type="lastname"
                  register={register}
                  name={"lastname"}
                />
              </FormGroup>
            </div>
            <FormGroup className=" flex flex-col w-[35rem]">
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
            <FormGroup className=" flex flex-col w-[35rem]">
              <Label className="font-bold text-xl p-3">Password:</Label>
              <FormInput
                placeholder="Password"
                className="p-4 rounded-md border border-[#DADADA] text-black"
                type="password"
                register={register}
                name={"password"}
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
            <FormGroup className="flex flex-col w-[35rem]">
              <Label className="font-bold text-xl p-3">Role:</Label>
              <FormInput
                className="p-4 rounded-md border border-[#DADADA] text-black"
                type="select"
                name="role_id"
                register={register}
                onChange={(e) => changeOptionHandle(e)}
              >
                {loginData.map((roleData) => (
                  <option
                    key={roleData.role_id}
                    value={roleData.role_id}
                    className=" text-lg font-bold"
                  >
                    {roleData.role}
                  </option>
                ))}
              </FormInput>
            </FormGroup>
            {sellerRole && (
              <div>
                <FormGroup className=" flex flex-col w-[35rem]">
                  <Label className="font-bold text-xl p-3">Store Name:</Label>
                  <FormInput
                    placeholder="Store Name"
                    className="p-4 rounded-md border border-[#DADADA] text-black"
                    type="text"
                    register={register}
                    name={"storeName"}
                    validations={{
                      required: "Store name is required!",
                      minLength: {
                        value: 3,
                        message: "At least 3 characters must be entered",
                      },
                    }}
                  />
                </FormGroup>
                <FormGroup className=" flex flex-col w-[35rem]">
                  <Label className="font-bold text-xl p-3">Store Tax ID:</Label>
                  <FormInput
                    placeholder="Tax ID"
                    className="p-4 rounded-md border border-[#DADADA] text-black"
                    type="text"
                    register={register}
                    name={"taxId"}
                    validations={{
                      required: "Tax ID is required!",
                      pattern: {
                        value: "TXXXXVXXXXXX",
                        message: "TAX ID is not valid",
                      },
                    }}
                    invalid={!!errors.taxId?.message}
                  />
                  <FormFeedback className="text-red-600">
                    {errors.taxId?.message}
                  </FormFeedback>
                </FormGroup>
                <FormGroup className=" flex flex-col w-[35rem]">
                  <Label className="font-bold text-xl p-3">Iban:</Label>
                  <FormInput
                    placeholder="Iban"
                    className="p-4 rounded-md border border-[#DADADA] text-black"
                    type="text"
                    register={register}
                    name={"iban"}
                    validations={{
                      required: "Iban is required!",
                      pattern: {
                        value: "TRXXXXXXXXXXXXXXXXXXXXXXXX",
                        message: "Iban is not valid",
                      },
                    }}
                    invalid={!!errors.iban?.message}
                  />
                  <FormFeedback className="text-red-600">
                    {errors.iban?.message}
                  </FormFeedback>
                </FormGroup>
              </div>
            )}

            <Input
              className="bg-primary-color px-6 py-3 rounded-md text-xl w-[35rem] mt-6 hover:bg-[rgba(35,165,240,0.79)] cursor-pointer"
              type="submit"
              formNoValidate="formnovalidate"
              value="Log in"
              disabled={false}
            />
          </Form>
        </>
      )}
    </div>
  );
};
export default Signup;
