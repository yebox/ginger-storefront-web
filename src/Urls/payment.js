import { request } from "../Utils";


export const makePayment = (data) =>
  request({
    url: `payments`,
    method: "POST",
    data
  });
