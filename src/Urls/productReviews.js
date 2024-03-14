import { request } from "../Utils";

const BASE_URL = "product-reviews";

export const getProductReviews = (id) =>
  request({
    url: `${BASE_URL}?productId=${id}`,
    method: "GET",
  });
