import { request } from "../Utils";


export const getSellerStores = (id) =>
  request({
    url: `sellers/${id}/stores`,
    method: "GET",
  });

export const getAllStores = () =>
  request({
    url: `stores`,
    method: "GET",
  });