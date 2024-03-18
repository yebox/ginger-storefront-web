import { request } from "../Utils";

export const getProducts = (payload) =>
  request({
    url: "products",
    params: {
      ...payload,
    },
  });
