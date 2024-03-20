import { request } from "../Utils";
const BASE_URL = "products";

export const getProducts = (payload) =>
  request({
    url: BASE_URL,
    params: {
      ...payload,
    },
  });

export const getProductDetails = (id) =>
  request({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
