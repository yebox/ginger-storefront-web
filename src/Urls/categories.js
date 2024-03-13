import { request } from "../Utils";

export const getCategories = (param) =>
    request({
        url: `product-categories`,
        method: 'GET'
})