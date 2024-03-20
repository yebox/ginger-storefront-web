import { request } from "../Utils";


export const getWallet = () =>
  request({
    url: `wallet`,
    method: "GET",
  });