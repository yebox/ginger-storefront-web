import { request } from "../Utils";

export const getLogistics = () =>
  request({
    url: `logistics`,
    method: "GET",
  });
