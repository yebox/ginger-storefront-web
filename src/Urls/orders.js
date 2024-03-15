import { request } from "../Utils";


export const getOrders = () =>
  request({
    url: `orders`,
    method: "GET",
  });

export const createOrder = (data) =>
  request({
    url: `orders`,
    method: "POAST",
    data
  });