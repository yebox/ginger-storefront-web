import axios from "axios";
import { store } from "../Redux/store";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const client = axios.create({
  baseURL: BASE_URL,
});

export const request = async (options) => {
  let token;
  const state = store.getState();
  const userState = state?.user;
  if (userState === null) {
    token = "";
  } else {
    const { accessToken } = userState;
    token = accessToken;
  }

  token !== "" &&
    (client.defaults.headers.common.Authorization = `Bearer ${token}`);

    const onSuccess = (response) => {
        console.log(response, "request response")
        return response?.data;
    };

  const onError = (error) => {
    return Promise.reject(error.response?.data);
  };

  return client(options).then(onSuccess).catch(onError);
};
