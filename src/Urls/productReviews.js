import { request } from "../Utils";

const BASE_URL = "product-reviews";

export const getProductReviews = (id) =>
  request({
    url: `${BASE_URL}?productId=${id}`,
    method: "GET",
  });

export const getUserProductReview = (productId, userId) =>
  request({
    url: `${BASE_URL}?productId=${productId}&userId=${userId}`,
    method: "GET",
  });

export const createProductReview = (data) =>
  request({
    url: BASE_URL,
    method: "POST",
    data,
  });
