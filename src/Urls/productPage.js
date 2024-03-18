import { request } from "../Utils";

const BASE_URL = "products";

export const getProductDetails = (id) =>
  request({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
