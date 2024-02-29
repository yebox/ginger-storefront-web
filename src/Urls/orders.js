import { request } from "../Utils";

const BASE_URL = "orders";
export const getOrders = () =>
  request({
    url: `${BASE_URL}`,
    method: "GET",
  });
