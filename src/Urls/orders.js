import { request } from "../Utils";

export const getOrders = () =>
  request({
    url: `orders`,
    method: "GET",
  });

export const getSingleOrder = (id) =>
  request({
    url: `orders/${id}`,
    method: "GET",
  });

export const createOrder = (data) =>
  request({
    url: `orders`,
    method: "POST",
    data,
  });

export const cancelOrder = (id) =>
  request({
    url: `orders/cancel/${id}`,
    method: "PUT",
  });
