import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com/",
    headers: token
      ? {
          authorization: token,
        }
      : {},
  });
};
export let API;

export const renewAPI = (token) => {
  console.log("token1:", token);
  token
    ? localStorage.setItem("token", token)
    : localStorage.removeItem("token");
  API = axiosWithAuth();
};

renewAPI();
