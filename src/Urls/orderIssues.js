import { request } from "../Utils";

export const createOrderReport = (data) =>
  request({
    url: `order-issues`,
    method: "POST",
    data,
  });

export const getOrderReport = (id) =>
  request({
    url: `order-issues/${id}`,
    method: "GET",
  });
