import { request } from "../Utils";
const BASE_URL = "wallet";

export const getUserWallet = () =>
  request({
    url: BASE_URL,
    method: "GET",
  });
